# Customizing Presets (JSON)

!!! info "You do not need this"
    To make presets for yourself, use [My Presets](my_presets.md), which saves and deletes presets from the panel. This page is for advanced use: replacing the built-in presets themselves or distributing presets with icons.

Render style presets are defined in a JSON file inside the add-on folder. Edit it with any text editor; changes are picked up without restarting Blender (the file's modification time is watched).

```
RenderFlow_Studio/
└── DB/
    ├── render style.json      ← preset definitions
    ├── translation.json       ← UI translations
    └── icons/
        ├── pixel style.png    ← preset icons
        └── ...
```

## Structure of render style.json

Each array element is one preset. All values are strings.

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

## Keys

| Key | Value | Written to |
|---|---|---|
| `jp_label` / `eng_label` | Display name (Japanese / English) | UI |
| `icons_path` | Path relative to `DB/`. Transparent PNG recommended | UI |
| `render engine` | `eevee` / `cycles` | Render > Engine |
| `scene size` | `width:height` (px) | Output > Resolution X / Y |
| `resolution` | Resolution % (1–500) | Output > Resolution % |
| `safe area px` | Safe-area margin (render px) | Active camera's guide settings |
| `soft shadow` | `on` / `off` | EEVEE > Soft Shadows |
| `render sample` / `viewport sample` | Integer | Samples |
| `FreeStyle` | `on` / `off` | Render > FreeStyle |
| `filter size px` | Float | Render > Film > Filter Size |
| `view transform` | `standard` / `filmic` / `agx` … | Color Management > View Transform |
| `look` | `None` / `Medium High Contrast` / `High Contrast` … | Color Management > Look (the `AgX - ` prefix is added automatically for AgX) |
| `depth of field` | `on` / `off` | Camera > DoF |
| `camera type` | `perspective` / `orthographic` | Camera > Type |
| `clip start` / `clip end` | Float | Camera > Clip |
| `fps` | Integer | Output > Frame Rate |
| `volume tile size` | `2` / `4` / `8` / `16` | EEVEE > Volumetrics |
| `volume samples` | Integer | EEVEE > Volumetrics |
| `volume distribution` | 0–1 | EEVEE > Volumetrics |
| `volume shadow` | `on` / `off` | EEVEE > Volumetrics |
| `volume shadow samples` | Integer | EEVEE > Volumetrics |
| `volume step rate` / `volume preview step rate` | Float | Cycles > Volumes |
| `volume max steps` | Integer | Cycles > Volumes |
| `volume bounces` | Integer | Cycles > Light Paths |
| `shadow rays` | 1–16 | EEVEE > Shadows > Rays |
| `shadow steps` | 1–16 | EEVEE > Shadows > Steps |
| `shadow resolution` | 0.25–2 | EEVEE > Shadows > Resolution Scale |
| `light bounces` | Integer | Cycles > Light Paths > Max Bounces |
| `diffuse bounces` / `glossy bounces` | Integer | Cycles > Light Paths |
| `caustics` | `on` / `off` | Cycles > Light Paths > Caustics (reflective & refractive) |

Keys set to an empty string `""` are skipped and the current value is kept.

## Adding a preset

1. Copy an existing element to the end of the array in `render style.json`.
2. Put an icon (square transparent PNG, ~256 px) in `DB/icons/` and set `icons_path`.
3. Save the file as **UTF-8**.
4. Hover the panel in Blender; the file is reloaded and the preset appears in the grid.

!!! warning "JSON syntax errors"
    A trailing comma or missing quote hides every preset. Check the system console for `[Render Presets] Failed to decode JSON`.

## Managing in Excel

The "Rendet presets" sheet in the bundled `レンダリング設定集.xlsx` has the same columns as the JSON.
Editing there and exporting to JSON makes it easier to compare and bulk-edit presets.
