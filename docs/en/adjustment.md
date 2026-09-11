# Adjustment Layers

Add with **Add Layer → Add Adjustment Layer**. These layers correct color and brightness; the type can be switched in Layer Properties afterwards. In each card the left image is before, the right is after (one layer added on its own to the sample scene).

![Adding an adjustment layer from the layer menu](../assets/images/en/layer_hud.png){ .ui }

Pick the type from **Add Adjustment**, the left-most button in the bottom row of the layer menu (HUD). See [Parts of the layer menu](compositor.md#hud) for every button. The layer's parameters appear under **Node Parameters** in Layer Properties.

![Adjustment layer properties](../assets/images/en/adjustment_layer.png){ .ui }

## Adjustment types

<div class="fx-card" markdown>
<div class="fx-title"><b>Bright / Contrast</b> — Overall brightness and contrast</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Bright / Contrast](../assets/compare/adj_bright_contrast.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Blender node: Bright/Contrast</div>
<div class="fx-params">Parameters: Bright, Contrast</div>
<div class="fx-params">Example settings: Bright 20 / Contrast 45</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Exposure</b> — Brightens or darkens the whole image in EV stops, like camera exposure</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Exposure](../assets/compare/adj_exposure.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Blender node: Exposure</div>
<div class="fx-params">Parameters: Exposure (EV; +1 doubles the brightness)</div>
<div class="fx-params">Example settings: Exposure +1.0</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Color Balance</b> — Tints shadows, midtones and highlights separately</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Color Balance](../assets/compare/adj_color_balance.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Blender node: Color Balance (Lift / Gamma / Gain)</div>
<div class="fx-params">Parameters: Lift (shadows), Gamma (midtones), Gain (highlights)</div>
<div class="fx-params">Example settings: Lift (0.95, 0.97, 1.08) for blue shadows / Gain (1.15, 1.02, 0.85) for orange highlights</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>RGB Curves</b> — Shape the tonal curve freely; an S-curve adds contrast</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![RGB Curves](../assets/compare/adj_rgb_curves.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Blender node: RGB Curves</div>
<div class="fx-params">Parameters: curve editor (C = all, R / G / B = per channel)</div>
<div class="fx-params">Example settings: S-curve with points (0.25, 0.18) and (0.75, 0.85) on the C curve</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Hue / Saturation</b> — Rotates hue and adjusts saturation and value</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Hue / Saturation](../assets/compare/adj_hue_sat.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Blender node: Hue/Saturation/Value</div>
<div class="fx-params">Parameters: Hue (0.5 = unchanged), Saturation (0 = monochrome), Value</div>
<div class="fx-params">Example settings: Hue 0.62 / Saturation 1.4</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Gamma</b> — Lifts or sinks the midtones only</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Gamma](../assets/compare/adj_gamma.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Blender node: Gamma</div>
<div class="fx-params">Parameters: Gamma (below 1 brightens, above 1 darkens)</div>
<div class="fx-params">Example settings: Gamma 1.8</div>
</div>

## Tips

- An adjustment affects **every layer below it**. To limit it to an area, see [Masks & Clipping](masks.md).
- Rough in with exposure and color balance, then refine with RGB curves.
- Lowering opacity weakens the effect faster than dialing back parameters.
