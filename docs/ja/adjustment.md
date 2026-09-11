# 調整レイヤー

**レイヤーを追加 → 調整レイヤーを追加** で追加します。色や明るさを整えるレイヤーで、追加後に Layer Properties で種類を切り替えられます。各カードの左が適用前、右が適用後（サンプルシーンに 1 枚だけ追加してレンダリング）です。

![レイヤーメニューから調整レイヤーを追加](../assets/images/layer_hud.png){ .ui }

レイヤーメニュー（HUD）下部のボタン列の左端 **調整レイヤーを追加** から種類を選びます。各ボタンの詳細は [レイヤーメニュー（HUD）の各部](compositor.md#hud) を参照してください。追加したレイヤーのパラメータは Layer Properties の **Node Parameters** に表示されます。

![調整レイヤーのプロパティ](../assets/images/adjustment_layer.png){ .ui }

## 調整レイヤーの種類

<div class="fx-card" markdown>
<div class="fx-title"><b>明るさ / コントラスト</b> — 全体の明るさと明暗差を調整</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![適用前](../assets/compare/before.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![明るさ / コントラスト](../assets/compare/adj_bright_contrast.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">Blender ノード: Bright/Contrast</div>
<div class="fx-params">パラメータ: Bright（明るさ）、Contrast（コントラスト）</div>
<div class="fx-params">比較の設定: Bright 20 / Contrast 45</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>露出</b> — カメラの露出のように EV 単位で全体を明るく／暗く</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![適用前](../assets/compare/before.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![露出](../assets/compare/adj_exposure.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">Blender ノード: Exposure</div>
<div class="fx-params">パラメータ: Exposure（EV。+1 で 2 倍の明るさ）</div>
<div class="fx-params">比較の設定: Exposure +1.0</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>カラーバランス</b> — シャドウ / 中間調 / ハイライトを別々の色に振る</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![適用前](../assets/compare/before.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![カラーバランス](../assets/compare/adj_color_balance.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">Blender ノード: Color Balance（Lift / Gamma / Gain）</div>
<div class="fx-params">パラメータ: Lift（シャドウの色）、Gamma（中間調の色）、Gain（ハイライトの色）</div>
<div class="fx-params">比較の設定: Lift (0.95, 0.97, 1.08) で影を青く / Gain (1.15, 1.02, 0.85) で明部を橙に</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>RGB カーブ</b> — カーブで階調を自由に整える。S 字にするとコントラストが付く</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![適用前](../assets/compare/before.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![RGB カーブ](../assets/compare/adj_rgb_curves.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">Blender ノード: RGB Curves</div>
<div class="fx-params">パラメータ: カーブエディタ（C = 全体、R / G / B = 各チャンネル）</div>
<div class="fx-params">比較の設定: C カーブに (0.25, 0.18) と (0.75, 0.85) の点を追加した S 字</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>色相 / 彩度</b> — 色相を回し、彩度と明度を調整</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![適用前](../assets/compare/before.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![色相 / 彩度](../assets/compare/adj_hue_sat.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">Blender ノード: Hue/Saturation/Value</div>
<div class="fx-params">パラメータ: Hue（0.5 が変化なし）、Saturation（0 でモノクロ）、Value</div>
<div class="fx-params">比較の設定: Hue 0.62 / Saturation 1.4</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>ガンマ</b> — 中間調の明るさだけを持ち上げる／沈める</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![適用前](../assets/compare/before.jpg)
<figcaption>適用前</figcaption>
</figure>
<figure markdown="span">
![ガンマ](../assets/compare/adj_gamma.jpg)
<figcaption>適用後</figcaption>
</figure>
</div>
<div class="fx-params">Blender ノード: Gamma</div>
<div class="fx-params">パラメータ: Gamma（1 より小さいと明るく、大きいと暗く）</div>
<div class="fx-params">比較の設定: Gamma 1.8</div>
</div>

## 使い方のコツ

- 調整レイヤーは**下にあるすべてのレイヤー**に効きます。特定の範囲だけに効かせたい場合は [マスクとクリッピング](masks.md) を参照してください。
- 露出とカラーバランスで大きく整えてから、RGB カーブで詰めるのが定石です。
- 不透明度を下げると効果を弱められるので、パラメータを戻すより素早く調整できます。
