# プリセットのカスタマイズ（JSON）

!!! info "この操作は必須ではありません"
    自分用のプリセットを作るだけなら、パネルから保存・削除できる [マイプリセット](my_presets.md) を使ってください。このページは、標準プリセットそのものを差し替えたい場合や、アイコン付きのプリセットを配布したい場合など、上級者向けの内容です。

レンダースタイルのプリセットは、アドオンフォルダ内の JSON ファイルで定義されています。テキストエディタで編集するだけで、Blender の再起動なしに反映されます（ファイルの更新日時を監視しています）。

```
RenderFlow_Studio/
└── DB/
    ├── render style.json      ← プリセット定義
    ├── translation.json       ← UI 翻訳
    └── icons/
        ├── pixel style.png    ← プリセットのアイコン
        └── ...
```

## render style.json の構造

配列の各要素が 1 つのプリセットです。値はすべて文字列で記述します。

```json
[
  {
    "jp_label": "映画風",
    "eng_label": "Cinema style",
    "icons_path": "icons\\Chinema style.png",
    "render engine": "cycles",
    "scene size": "2880:1557",
    "resolution": "100",
    "safe area px": "75",
    "soft shadow": "on",
    "render sample": "512",
    "viewport sample": "512",
    "FreeStyle": "off",
    "filter size px": "1.5",
    "view transform": "filmic",
    "look": "Medium High Contrast",
    "depth of field": "on",
    "camera type": "perspective",
    "clip start": "0.1",
    "clip end": "1000",
    "fps": "24",
    "volume tile size": "2",
    "volume samples": "128",
    "volume distribution": "0.8",
    "volume shadow": "on",
    "volume shadow samples": "32",
    "volume step rate": "0.5",
    "volume preview step rate": "1",
    "volume max steps": "2048",
    "volume bounces": "1",
    "shadow rays": "4",
    "shadow steps": "8",
    "shadow resolution": "1.0",
    "light bounces": "12",
    "diffuse bounces": "6",
    "glossy bounces": "6",
    "caustics": "on"
  }
]
```

## キー一覧

| キー | 値 | 書き込み先 |
|---|---|---|
| `jp_label` / `eng_label` | 表示名（日本語 / 英語） | UI |
| `icons_path` | `DB/` からの相対パス。透過 PNG 推奨 | UI |
| `render engine` | `eevee` / `cycles` | Render > Engine |
| `scene size` | `幅:高さ`（px） | Output > Resolution X / Y |
| `resolution` | 解像度 %（1〜500） | Output > Resolution % |
| `safe area px` | セーフエリア余白（レンダー px） | アクティブカメラのガイド設定 |
| `soft shadow` | `on` / `off` | EEVEE > Soft Shadows |
| `render sample` / `viewport sample` | 整数 | サンプル数 |
| `FreeStyle` | `on` / `off` | Render > FreeStyle |
| `filter size px` | 小数 | Render > Film > Filter Size |
| `view transform` | `standard` / `filmic` / `agx` など | Color Management > View Transform |
| `look` | `None` / `Medium High Contrast` / `High Contrast` など | Color Management > Look（AgX の場合は `AgX - ` 接頭辞を自動補完） |
| `depth of field` | `on` / `off` | カメラ > DoF |
| `camera type` | `perspective` / `orthographic` | カメラ > Type |
| `clip start` / `clip end` | 小数 | カメラ > Clip |
| `fps` | 整数 | Output > Frame Rate |
| `volume tile size` | `2` / `4` / `8` / `16` | EEVEE > Volumetrics |
| `volume samples` | 整数 | EEVEE > Volumetrics |
| `volume distribution` | 0〜1 | EEVEE > Volumetrics |
| `volume shadow` | `on` / `off` | EEVEE > Volumetrics |
| `volume shadow samples` | 整数 | EEVEE > Volumetrics |
| `volume step rate` / `volume preview step rate` | 小数 | Cycles > Volumes |
| `volume max steps` | 整数 | Cycles > Volumes |
| `volume bounces` | 整数 | Cycles > Light Paths |
| `shadow rays` | 1〜16 | EEVEE > Shadows > Rays |
| `shadow steps` | 1〜16 | EEVEE > Shadows > Steps |
| `shadow resolution` | 0.25〜2 | EEVEE > Shadows > Resolution Scale |
| `light bounces` | 整数 | Cycles > Light Paths > Max Bounces |
| `diffuse bounces` / `glossy bounces` | 整数 | Cycles > Light Paths |
| `caustics` | `on` / `off` | Cycles > Light Paths > Caustics（反射・屈折） |

空文字 `""` にしたキーはスキップされ、現在の値が保持されます。

## プリセットを追加する

1. `render style.json` の配列末尾に、既存要素をコピーして新しい要素を追加します。
2. `DB/icons/` にアイコン画像（正方形の透過 PNG、256px 程度）を置き、`icons_path` に指定します。
3. ファイルを **UTF-8** で保存します。
4. Blender のパネルにマウスを乗せると再読み込みされ、グリッドに追加されます。

!!! warning "JSON の文法エラー"
    末尾のカンマや引用符の抜けがあると、プリセットがすべて表示されなくなります。システムコンソールに `[Render Presets] Failed to decode JSON` と出ていないか確認してください。

## Excel から管理する

配布物に含まれる `レンダリング設定集.xlsx` の「Rendet presets」シートは、JSON と同じ列構成です。
シートで編集してから JSON に書き出す運用にすると、複数プリセットの比較や一括修正がしやすくなります。
