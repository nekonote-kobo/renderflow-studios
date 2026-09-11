# Layer Types

Layers available from the **Add Layer** menu.

| Type | Internal node | Purpose |
|---|---|---|
| **Input** | Render Layers / Image / Movie Clip | Source material: scene (render layer), image, image sequence, movie clip |
| **Adjustment** | Color correction nodes | Brightness, exposure, color balance, curves, hue/saturation, gamma |
| **Filter** | Node group (appended from the asset library) | Blur, glow, chromatic aberration, NPR, retro effects |
| **Look / Preset** | Node group | Multi-node templates for a finished look |
| **Mask** | Ellipse / Box / Double Edge Mask / Image | Limit where effects apply |
| **Group** | — | Control opacity and visibility of several layers at once |

## Input layers

| Source | Description |
|---|---|
| Scene (Render Layer) | The current scene's render. Choose the view layer |
| Image | A single image file |
| Image Sequence | Numbered frames like `name_0001.png`. Set frame count and start |
| Movie Clip | A video file |

Stack several inputs and combine them with blend modes (e.g. screen a 3D render over a live-action plate).

## Groups

Grouping applies opacity and masks to all layers inside at once.
Keeping an "adjustment + filter + mask" set in a group lets you toggle the whole effect.
