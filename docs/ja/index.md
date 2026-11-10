---
title: トップ
hide:
  - navigation
  - toc
---

<div class="ms-sheet" markdown>
<div class="ms-hero" markdown>
<div markdown>
<img class="ms-logo ms-noz" src="assets/items/positive%20logo.svg#only-light" alt="RenderFlow Studios"><img class="ms-logo ms-noz" src="assets/items/negative%20logo.svg#only-dark" alt="RenderFlow Studios">

<h1>レンダー設定から<br><span class="nw"><em>仕上げ</em>まで、</span><span class="nw">ひとつのタブで。</span></h1>

RenderFlow Studios は、映像作品づくりのための Blender アドオンです。「レンダー設定を決める → カメラを組む → レンダリングする → 仕上げる」という流れを、ひとつのサイドバータブとレイヤー式のコンポジターにまとめました。

<div class="ms-specs"><span class="solid">Blender 4.5 LTS 推奨</span><span>4.0 以上で動作</span><span>EEVEE / Cycles</span><span>日本語 / English UI</span></div>

[インストール手順](install.md){ .md-button .md-button--primary } [使い方ガイド](guide.md){ .md-button }
</div>
<figure markdown style="margin:0">
<div class="ms-ba" style="--pos:50%">
<img class="ms-noz" src="assets/compare/before.jpg" alt="サンプルシーンのレンダリング（適用前）">
<img class="after ms-noz" src="assets/compare/look_cinematic.jpg" alt="Look プリセット Cinematic を重ねたもの（適用後）">
<div class="bar"></div>
<span class="tag l">適用前</span><span class="tag r">適用後</span>
<input type="range" min="0" max="100" value="50" aria-label="適用前と適用後を比べるスライダー">
</div>
<figcaption>スライダーを左右に動かして比べられます。左はそのままのレンダリング、右はコンポジットレイヤーの Look プリセット「Cinematic (Teal / Orange)」を1枚重ねたものです（サンプルシーン）。</figcaption>
</figure>
</div>
</div>

<div class="ms-stats" markdown>
<div><b>5<small>種</small></b><span>レンダースタイル</span></div>
<div><b>22<small>種</small></b><span>FX フィルター</span></div>
<div><b>9<small>種</small></b><span>Look プリセット</span></div>
<div class="hi"><b>4<small>ステップ</small></b><span>設定から仕上げまで</span></div>
</div>

## <i class="bi bi-info-circle-fill"></i> 概要 <span class="en">Overview</span>

RenderFlow Studios は、Blender で映像を作るときの「設定 → 撮影 → 仕上げ」を一本の流れにするアドオンです。80〜90年代のレトロ表現から映画風まで、レンダーの設定一式をワンクリックで切り替え、カメラとセーフエリアをサイドバーで整え、レンダリングした絵をレイヤーを重ねる感覚で仕上げられます。ノードを手で組む必要はありません。

## <i class="bi bi-stars"></i> 特徴 <span class="en">Features</span>

<div class="ms-grid3" markdown>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-film ms-feat-ic" aria-hidden="true"></i><b>レンダースタイル</b></span>
**設定一式をワンクリックで**

エンジン・解像度・サンプル数・fps・カラーマネジメントを、レトロから映画風までまとめて切り替えます。→ [レンダースタイル](render_style.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-bookmark-star-fill ms-feat-ic" aria-hidden="true"></i><b>マイプリセット</b></span>
**自分の設定を残す**

調整した設定を名前を付けて保存し、標準のスタイルと同じ一覧から呼び出せます。→ [マイプリセット](my_presets.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-camera-reels-fill ms-feat-ic" aria-hidden="true"></i><b>カメラ</b></span>
**映像向けのカメラ操作**

カメラの選択、レンズ、被写界深度をサイドバーから。投影方式の切り替えもここで行います。→ [カメラ](camera.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-bounding-box ms-feat-ic" aria-hidden="true"></i><b>ガイド</b></span>
**カメラごとのセーフエリア**

セーフエリアとレイアウトガイドはカメラごとに保持。シネスコ用と縦型ショート用で別々に持てます。→ [ガイド（セーフエリア）](camera_guides.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-layers-fill ms-feat-ic" aria-hidden="true"></i><b>コンポジットレイヤー</b></span>
**レイヤーを重ねて仕上げる**

ドラッグで並べ替え、不透明度、ブレンドモード、グループ化、適用前後の比較。中身は Blender のノードです。→ [コンポジットレイヤー](compositor.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-magic ms-feat-ic" aria-hidden="true"></i><b>FX・Look</b></span>
**22 種の FX と 9 種の Look**

ぼかし・グロー・色収差などの光学系、水彩・油彩・線画、8bit / 16bit、映画風の色調。→ [FX フィルター](fx_filters.md) ／ [Look](look_presets.md)
</div>
</div>

## <i class="bi bi-collection-play-fill"></i> 4ステップで1カット

<div class="ms-steps" markdown>
<figure class="ms-shot" markdown>
![サイドバーの RenderFlow Studios タブ](../assets/images/sidebar_overview.png)
<figcaption>3D ビューポートのサイドバー › RenderFlow Studios タブ</figcaption>
</figure>
<div class="ms-flow">
<a href="render_style.html"><span class="n">1</span><b>スタイル</b><span>レンダースタイルを選んで適用。エンジンから色まで一度に決まる。</span></a>
<a href="camera.html"><span class="n">2</span><b>カメラ</b><span>レンズと被写界深度を決め、セーフエリアを見ながら構図を組む。</span></a>
<a href="guide.html#3"><span class="n">3</span><b>レンダー</b><span>いつもどおり F12（静止画）か Ctrl+F12（アニメーション）。</span></a>
<a href="compositor.html"><span class="n">4</span><b>仕上げ</b><span>コンポジットレイヤーで色を整え、FX や Look で質感を足す。</span></a>
</div>
</div>

<!-- 紹介動画：YouTube の動画 ID が決まったら、下のコメントを外して XXXXXXXXXXX を差し替える
## <i class="bi bi-play-btn-fill"></i> 使い方を動画で確認する

<div class="video-wrapper" markdown>
<iframe src="https://www.youtube.com/embed/XXXXXXXXXXX" title="RenderFlow Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
-->

## <i class="bi bi-pc-display"></i> 動作環境 <span class="en">Requirements</span>

| 項目 | 内容 |
|---|---|
| Blender | 4.5 LTS（推奨）。4.0 以上で動作 |
| OS | Windows 10 / 11、macOS 12 以降、Linux（Blender 公式の対応環境に準じる） |
| レンダーエンジン | EEVEE / Cycles（映画風プリセットは Cycles 512 サンプルのため GPU レンダリング推奨） |
| ライセンス認証 | 申請と初回認証のときだけインターネット接続が必要（認証後はオフラインで動作） |

くわしくは [動作環境](requirements.md) を参照してください。

## <i class="bi bi-clock-history"></i> 更新履歴 <span class="en">Release</span>

| バージョン | 日付 | 内容 |
|---|---|---|
| v1.0.0-alpha | 2026-09 | 限定モニター向け α 版（初回配布） |

変更点は [リリースノート](release.md) にあります。

## <i class="bi bi-file-earmark-text-fill"></i> ライセンス <span class="en">License</span>

RenderFlow Studios は有償のソフトウェアです。購入後は [ライセンス認証](activation.md) の手順でキーを取得・登録してください。認証は Blender を再起動しても保たれます。利用条件は [ライセンス](license.md) にあります。

## <i class="bi bi-book-fill"></i> このドキュメントの読み方

| 知りたいこと | ページ |
|---|---|
| 入れ方・動作環境 | [インストール](install.md) ／ [動作環境](requirements.md) |
| ライセンスキーの申請と認証 | [ライセンス認証](activation.md) |
| 全体の流れ | [ガイド](guide.md) |
| レンダーの設定を切り替える・保存する | [レンダースタイル](render_style.md) ／ [マイプリセット](my_presets.md) |
| カメラとセーフエリア | [カメラ](camera.md) ／ [ガイド（セーフエリア）](camera_guides.md) |
| レイヤーで仕上げる | [コンポジットレイヤー](compositor.md) ／ [レイヤーの種類](layer_types.md) |
| フィルターと色調の見本 | [FX フィルター一覧](fx_filters.md) ／ [Look プリセット一覧](look_presets.md) |
| うまく動かないとき | [ヘルプ](help.md) |
