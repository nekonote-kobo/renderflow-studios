# Look Presets

Choose from **Add Layer → Add Preset**. A node group with several nodes in series is added as one layer, and each node's parameters can be tuned in Layer Properties. In each card the left image is before, the right is after (one preset added on its own to the sample scene with default parameters).

## Looks (color grading)

<div class="fx-grid" markdown>

<div class="fx-card" markdown>
<div class="fx-title"><b>Cinematic (Teal / Orange)</b> — the classic film look: teal shadows, orange highlights</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Cinematic (Teal / Orange)](../assets/compare/look_cinematic.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Color Balance (teal lift / orange gain) → Hue/Saturation (saturation 1.12)</div>
<div class="fx-params">Good for: general cinematic looks, live-action feel</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Warm Sunlight</b> — warm color balance</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Warm Sunlight](../assets/compare/look_warm.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Color Balance (gain shifted warm, 1.08 / 1.0 / 0.88)</div>
<div class="fx-params">Good for: sunsets, flashbacks, gentle moods</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Cool Moonlight</b> — cool color balance</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Cool Moonlight](../assets/compare/look_cool.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Color Balance (gain shifted cool, 0.88 / 0.97 / 1.1)</div>
<div class="fx-params">Good for: night, sci-fi, tense scenes</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Vintage Film</b> — adds a yellow cast and lowers saturation and contrast, like old film</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Vintage Film](../assets/compare/look_vintage.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Color Balance (yellowish lift / gain) → Hue/Saturation (saturation 0.8) → Bright/Contrast (contrast −5)</div>
<div class="fx-params">Good for: old footage, archival look, memories</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Black & White</b> — monochrome</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Black & White](../assets/compare/look_bw.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Hue/Saturation (saturation 0)</div>
<div class="fx-params">Good for: black-and-white work, memories, dramatic stills</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>High Contrast</b> — punchy, graphic contrast</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![High Contrast](../assets/compare/look_hicontrast.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Bright/Contrast (contrast +15)</div>
<div class="fx-params">Good for: graphic looks, poster-like frames</div>
</div>

</div>

## Filters (texture)

<div class="fx-grid" markdown>

<div class="fx-card" markdown>
<div class="fx-title"><b>Soft Glow</b> — soft bloom on highlights</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Soft Glow](../assets/compare/look_softglow.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Glare (Fog Glow, medium quality)</div>
<div class="fx-params">Good for: fantasy, dreamy scenes</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Dream Blur</b> — gentle overall blur</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Dream Blur](../assets/compare/look_dreamblur.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Blur (Gaussian, 8 px)</div>
<div class="fx-params">Good for: dreams, memories, flashback transitions</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Sharpen</b> — global sharpening</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/compare/before.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Sharpen](../assets/compare/look_sharpen.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Nodes: Filter (Sharpen)</div>
<div class="fx-params">Good for: final polish, before downscaling</div>
</div>

</div>

!!! note
    A Look preset copies the node setup at the time it is added, so you can edit it freely. To reset, delete the layer and add it again.
