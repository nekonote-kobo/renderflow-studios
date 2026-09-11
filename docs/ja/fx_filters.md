# FX フィルター一覧

**レイヤーを追加 → フィルターを追加** から選びます。各カードの左が適用前、右が適用後です。すべて同じ元画像に、既定のパラメータで適用しています。

!!! info "事前準備"
    Blur 以外のフィルターは同梱の `FX_filters.blend` をアセットライブラリとして登録すると使えるようになります。→ [インストール › 4. FX フィルターのアセットライブラリを登録](install.md#4-fx)
    フィルターは初回使用時に `.blend` へアペンドされ、以降はファイル内のノードグループが使われます。


## FX1 基本

<div class="fx-card" markdown>
<div class="fx-title"><b>Blur</b> — ガウスぼかし</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Blur](../assets/fx/fx1_blur.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: サイズ（XY 共通）</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Sharpen</b> — 輪郭強調</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Sharpen](../assets/fx/fx1_sharpen.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: 強さ</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Glow</b> — 明部のにじみ</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Glow](../assets/fx/fx1_glow.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: しきい値、サイズ、強さ</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Edge Detect</b> — エッジ抽出</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Edge Detect](../assets/fx/fx1_edgedetect.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: 強さ、ミックス</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Noise</b> — 粒子ノイズ</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Noise](../assets/fx/fx1_noise.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: テクスチャ種類、ミックス、強さ</div>
</div>


## FX2 光学

<div class="fx-card" markdown>
<div class="fx-title"><b>Chromatic Aberration</b> — 色収差</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Chromatic Aberration](../assets/fx/fx2_chromatic.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: ずれ量</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Lens Blur Z</b> — Z 深度を使った被写界深度</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Lens Blur Z](../assets/fx/fx2_lensblurz.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: F 値、最大ぼかし、Z 正規化</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Motion Blur</b> — 方向ぼかし</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Motion Blur](../assets/fx/fx2_motionblur.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: 角度、距離</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Vignette</b> — 周辺減光</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![Vignette](../assets/fx/fx2_vignette.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: 幅、高さ、ぼかし、回転</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>魚眼</b> — レンズ歪み</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![魚眼](../assets/fx/fx2_fisheye.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">主なパラメータ: 歪み量</div>
</div>


## FX3 色

<div class="fx-card" markdown>
<div class="fx-title"><b>セピア</b> — 褪せた褐色調</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![セピア](../assets/fx/fx3_sepia.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>ネオン</b> — 高彩度の発光調</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![ネオン](../assets/fx/fx3_neon.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>


## FX4 NPR（非写実）

<div class="fx-card" markdown>
<div class="fx-title"><b>コミック</b> — 階調の減色＋輪郭線</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![コミック](../assets/fx/fx4_comic.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>シルエット</b> — 影絵風の単色化</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![シルエット](../assets/fx/fx4_silhouette.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>水彩</b> — にじみとテクスチャ</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![水彩](../assets/fx/fx4_watercolor.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>水彩画風 2</b> — より紙質感の強い水彩</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![水彩画風 2](../assets/fx/fx4_watercolor2.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>油絵</b> — 筆致のある厚塗り</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![油絵](../assets/fx/fx4_oil.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>点描</b> — ドットの集合で表現</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![点描](../assets/fx/fx4_stipple.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>線画</b> — 輪郭のみ</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![線画](../assets/fx/fx4_lineart.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>線画 2</b> — 太めの線</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![線画 2](../assets/fx/fx4_lineart2.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>


## FX5 レトロ

<div class="fx-card" markdown>
<div class="fx-title"><b>8bit</b> — 減色＋ドット化</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![8bit](../assets/fx/fx5_8bit.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>8bit LCD</b> — 携帯機の液晶風（緑系 4 階調）</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![8bit LCD](../assets/fx/fx5_8bitlcd.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>16bit</b> — 16bit 機風の減色</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![16bit](../assets/fx/fx5_16bit.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>

</div>


!!! tip "レンダースタイルとの組み合わせ"
    「1990年代-A」でレンダリングし、FX5 の 16bit を重ねると、解像度とパレットの両方でレトロ感が揃います。
