---
title: Home
hide:
  - navigation
  - toc
---

<div class="ms-sheet" markdown>
<div class="ms-hero" markdown>
<div markdown>
<img class="ms-logo ms-noz" src="../assets/items/positive%20logo.svg#only-light" alt="RenderFlow Studios"><img class="ms-logo ms-noz" src="../assets/items/negative%20logo.svg#only-dark" alt="RenderFlow Studios">

<h1>From render settings<br><span class="nw">to the <em>final look</em>,</span> <span class="nw">in one tab.</span></h1>

RenderFlow Studios is a Blender add-on built for video production. It gathers the whole flow — pick render settings → set up the camera → render → finish — into one sidebar tab and a layer-based compositor.

<div class="ms-specs"><span class="solid">Blender 4.5 LTS recommended</span><span>Works on 4.0+</span><span>EEVEE / Cycles</span><span>English / 日本語 UI</span></div>

[Installation](install.md){ .md-button .md-button--primary } [Read the guide](guide.md){ .md-button }
</div>
<figure markdown style="margin:0">
<div class="ms-ba" style="--pos:50%">
<img class="ms-noz" src="../assets/compare/before.jpg" alt="Sample scene render (before)">
<img class="after ms-noz" src="../assets/compare/look_cinematic.jpg" alt="With the Cinematic Look preset (after)">
<div class="bar"></div>
<span class="tag l">Before</span><span class="tag r">After</span>
<input type="range" min="0" max="100" value="50" aria-label="Slider comparing before and after">
</div>
<figcaption>Drag the slider to compare. Left: the plain render. Right: the same render with one compositor layer — the Look preset "Cinematic (Teal / Orange)" (sample scene).</figcaption>
</figure>
</div>
</div>

<div class="ms-stats" markdown>
<div><b>5</b><span>Render styles</span></div>
<div><b>22</b><span>FX filters</span></div>
<div><b>9</b><span>Look presets</span></div>
<div class="hi"><b>4<small> steps</small></b><span>Settings to final look</span></div>
</div>

## <i class="bi bi-info-circle-fill"></i> Overview

RenderFlow Studios turns "settings → shooting → finishing" in Blender into one continuous flow. Switch a complete set of render settings in one click — from 80s / 90s retro to cinematic — frame your shot with the camera and safe areas in the sidebar, then finish the render by stacking layers. No hand-built node trees required.

## <i class="bi bi-stars"></i> Features

<div class="ms-grid3" markdown>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-film ms-feat-ic" aria-hidden="true"></i><b>Render Style</b></span>
**All the settings in one click**

Engine, resolution, samples, fps and color management switch together, from retro to cinematic. → [Render Style](render_style.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-bookmark-star-fill ms-feat-ic" aria-hidden="true"></i><b>My Presets</b></span>
**Keep your own settings**

Save tuned settings under a name and pick them from the same grid as the built-in styles. → [My Presets](my_presets.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-camera-reels-fill ms-feat-ic" aria-hidden="true"></i><b>Camera</b></span>
**Camera control for video**

Pick the camera, set the lens and depth of field, and switch the projection — all from the sidebar. → [Camera](camera.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-bounding-box ms-feat-ic" aria-hidden="true"></i><b>Guides</b></span>
**Safe areas per camera**

Safe areas and layout guides are stored per camera, so a cinemascope camera and a vertical-shorts camera keep their own. → [Guides (Safe Area)](camera_guides.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-layers-fill ms-feat-ic" aria-hidden="true"></i><b>Compositor Layers</b></span>
**Finish by stacking layers**

Drag to reorder, opacity, blend modes, groups and before / after comparison — built on Blender's own nodes. → [Compositor Layers](compositor.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-magic ms-feat-ic" aria-hidden="true"></i><b>FX &amp; Looks</b></span>
**22 FX filters and 9 Looks**

Optical effects like blur, glow and chromatic aberration; watercolor, oil and line art; 8-bit / 16-bit; cinematic grades. → [FX Filters](fx_filters.md) / [Looks](look_presets.md)
</div>
</div>

## <i class="bi bi-collection-play-fill"></i> One shot in 4 steps

<div class="ms-steps" markdown>
<figure class="ms-shot" markdown>
![The RenderFlow Studios tab in the sidebar](../assets/images/sidebar_overview.png)
<figcaption>3D Viewport sidebar › RenderFlow Studios tab</figcaption>
</figure>
<div class="ms-flow">
<a href="render_style.html"><span class="n">1</span><b>Style</b><span>Pick a render style and apply it. Engine to color, set at once.</span></a>
<a href="camera.html"><span class="n">2</span><b>Camera</b><span>Set the lens and depth of field; frame the shot with safe areas.</span></a>
<a href="guide.html"><span class="n">3</span><b>Render</b><span>As usual: F12 for a still, Ctrl+F12 for an animation.</span></a>
<a href="compositor.html"><span class="n">4</span><b>Finish</b><span>Grade with compositor layers and add texture with FX and Looks.</span></a>
</div>
</div>

<!-- Intro video: when the YouTube ID is ready, remove this comment and replace XXXXXXXXXXX
## <i class="bi bi-play-btn-fill"></i> Watch the video

<div class="video-wrapper" markdown>
<iframe src="https://www.youtube.com/embed/XXXXXXXXXXX" title="RenderFlow Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
-->

## <i class="bi bi-pc-display"></i> Requirements

| Item | Details |
|---|---|
| Blender | 4.5 LTS (recommended). Works on 4.0 and later |
| OS | Windows 10 / 11, macOS 12 or later, Linux (as supported by Blender) |
| Render engine | EEVEE / Cycles (the cinematic preset uses 512 Cycles samples — GPU rendering recommended) |
| License activation | Internet is needed only to request the key and activate once (works offline afterwards) |

See [Requirements](requirements.md) for details.

## <i class="bi bi-clock-history"></i> Release

| Version | Date | Notes |
|---|---|---|
| v1.0.0-alpha | 2026-09 | Closed alpha for invited testers (first release) |

See [Release Notes](release.md) for the changes.

## <i class="bi bi-file-earmark-text-fill"></i> License

RenderFlow Studios is commercial software. After purchase, follow [License Activation](activation.md) to request and register your key; the activation persists across Blender restarts. The terms of use are in [License](license.md).

## <i class="bi bi-book-fill"></i> How to use these docs

| I want to… | Page |
|---|---|
| Install it / check requirements | [Install](install.md) / [Requirements](requirements.md) |
| Request and activate a license key | [License Activation](activation.md) |
| See the overall workflow | [Guide](guide.md) |
| Switch or save render settings | [Render Style](render_style.md) / [My Presets](my_presets.md) |
| Set up the camera and safe areas | [Camera](camera.md) / [Guides (Safe Area)](camera_guides.md) |
| Finish with layers | [Compositor Layers](compositor.md) / [Layer Types](layer_types.md) |
| Browse filter and grade samples | [FX Filter Library](fx_filters.md) / [Look Presets](look_presets.md) |
| Fix a problem | [Help](help.md) |
