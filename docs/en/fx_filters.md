# FX Filter Library

Choose from **Add Layer → Add Filter**. In each card the left image is before, the right is after. All examples use the same source image with default parameters.

!!! info "Setup required"
    Filters other than Blur become available once the bundled `FX_filters.blend` is registered as an asset library. → [Install › 4. Register the FX filter asset library](install.md#4-register-the-fx-filter-asset-library)
    A filter is appended into your `.blend` on first use; after that the node group inside the file is used.


## FX1 Basic

<div class="fx-card" markdown>
<div class="fx-title"><b>Blur</b> — Gaussian blur</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Blur](../assets/fx/fx1_blur.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Size (X = Y)</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Sharpen</b> — Edge enhancement</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Sharpen](../assets/fx/fx1_sharpen.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Strength</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Glow</b> — Bloom on highlights</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Glow](../assets/fx/fx1_glow.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Threshold, size, strength</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Edge Detect</b> — Edge extraction</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Edge Detect](../assets/fx/fx1_edgedetect.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Strength, mix</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Noise</b> — Grain</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Noise](../assets/fx/fx1_noise.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Texture type, mix, strength</div>
</div>


## FX2 Optical

<div class="fx-card" markdown>
<div class="fx-title"><b>Chromatic Aberration</b> — Color fringing</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Chromatic Aberration](../assets/fx/fx2_chromatic.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Amount</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Lens Blur Z</b> — Depth of field from the Z pass</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Lens Blur Z](../assets/fx/fx2_lensblurz.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: F-stop, max blur, normalize Z</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Motion Blur</b> — Directional blur</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Motion Blur](../assets/fx/fx2_motionblur.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Angle, distance</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Vignette</b> — Edge darkening</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Vignette](../assets/fx/fx2_vignette.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Width, height, blur, rotation</div>
</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Fisheye</b> — Lens distortion</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Fisheye](../assets/fx/fx2_fisheye.jpg)
<figcaption>After</figcaption>
</figure>
</div>
<div class="fx-params">Parameters: Amount</div>
</div>


## FX3 Color

<div class="fx-card" markdown>
<div class="fx-title"><b>Sepia</b> — Faded brown tone</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Sepia](../assets/fx/fx3_sepia.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Neon</b> — High-saturation glow</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Neon](../assets/fx/fx3_neon.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>


## FX4 NPR

<div class="fx-card" markdown>
<div class="fx-title"><b>Comic</b> — Posterized tones + outlines</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Comic](../assets/fx/fx4_comic.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Silhouette</b> — Flat shadow-play look</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Silhouette](../assets/fx/fx4_silhouette.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Watercolor</b> — Bleeding and paper texture</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Watercolor](../assets/fx/fx4_watercolor.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Watercolor 2</b> — Stronger paper grain</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Watercolor 2](../assets/fx/fx4_watercolor2.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Oil Painting</b> — Thick brush strokes</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Oil Painting](../assets/fx/fx4_oil.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Stipple</b> — Dot-based rendering</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Stipple](../assets/fx/fx4_stipple.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Line Art</b> — Outlines only</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Line Art](../assets/fx/fx4_lineart.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>Line Art 2</b> — Thicker lines</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![Line Art 2](../assets/fx/fx4_lineart2.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>


## FX5 Retro

<div class="fx-card" markdown>
<div class="fx-title"><b>8bit</b> — Reduced palette + pixelation</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![8bit](../assets/fx/fx5_8bit.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>8bit LCD</b> — Handheld LCD look (4 green tones)</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![8bit LCD](../assets/fx/fx5_8bitlcd.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>

<div class="fx-card" markdown>
<div class="fx-title"><b>16bit</b> — 16-bit console palette</div>
<div class="fx-pair" markdown>
<figure markdown="span">
![Before](../assets/fx/original.jpg)
<figcaption>Before</figcaption>
</figure>
<figure markdown="span">
![16bit](../assets/fx/fx5_16bit.jpg)
<figcaption>After</figcaption>
</figure>
</div>

</div>


!!! tip "Combine with render styles"
    Render with "1990s-A" and add the FX5 16bit filter to match both resolution and palette.
