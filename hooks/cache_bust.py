"""CSS / JS のキャッシュ番号（?v=）を自動で付けるフック。

mkdocs.yml の extra_css / extra_javascript に書いた自分のファイルに、
中身から計算した番号（?v=xxxxxxxx）をビルドのたびに付け直す。
ファイルを保存すれば番号が変わるので、mkdocs.yml を書き換えたり
mkdocs serve を起動し直したりする必要はない。

mkdocs serve --dirty で CSS / JS だけを変えたときも、番号が変わったら
出力済みの全ページを作り直させる（古い番号のページが残らないように）。
"""
import hashlib
import os
import re
import tempfile
from pathlib import Path

_V = re.compile(r"\?v=[^&#]*")


def _bust(docs_dir, url):
    base = _V.sub("", url)
    if base.startswith(("http:", "https:", "//")):
        return base
    try:
        v = hashlib.md5(Path(docs_dir, base).read_bytes()).hexdigest()[:8]
    except OSError:
        return base
    return f"{base}?v={v}"


def on_config(config):
    docs = config["docs_dir"]
    config["extra_css"] = [_bust(docs, str(s)) for s in config["extra_css"]]
    js = config["extra_javascript"]
    for i, item in enumerate(js):
        if hasattr(item, "path"):          # MkDocs 1.5 以降
            item.path = _bust(docs, item.path)
        else:
            js[i] = _bust(docs, str(item))
    return config


def on_files(files, config):
    sig = "|".join(config["extra_css"]) + "|" + "|".join(str(getattr(j, "path", j)) for j in config["extra_javascript"])
    site = os.path.abspath(config["site_dir"])
    memo = Path(tempfile.gettempdir(), "ms_cache_bust_" + hashlib.md5(site.encode()).hexdigest()[:10])
    try:
        prev = memo.read_text(encoding="utf-8")
    except OSError:
        prev = None
    if prev is not None and prev != sig and os.path.isdir(site):
        # 番号が変わった：出力済みの HTML を古い日付にして、--dirty でも全ページを作り直させる
        for root, _dirs, names in os.walk(site):
            for n in names:
                if n.endswith(".html"):
                    try:
                        os.utime(os.path.join(root, n), (0, 0))
                    except OSError:
                        pass
    try:
        memo.write_text(sig, encoding="utf-8")
    except OSError:
        pass
    return files
