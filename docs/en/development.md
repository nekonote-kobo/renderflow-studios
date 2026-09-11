# Development

## Folder layout

```
RenderFlow_Studio/
├── __init__.py            # registration / translation loading / license hook
├── license_client.py      # license request, verification, cache
├── license_guard.py       # injects license checks into feature modules
├── render_presets.py      # Render Style panel
├── camera_control.py      # Camera / Guides panels, guide drawing
├── composit_layer.py      # compositor layer system
└── DB/
    ├── render style.json
    ├── translation.json
    ├── translation composit.json
    └── icons/
```

## Module roles

| Module | Role |
|---|---|
| `__init__.py` | `bl_info`, registers the translation dictionary, passes register/unregister callbacks to `license_client.setup()` |
| `license_client.py` | Preferences UI, server API calls, per-machine activation cache, periodic check |
| `render_presets.py` | Loads and caches `DB/render style.json`, builds icon previews, applies presets |
| `camera_control.py` | Stores guide settings on `bpy.types.Camera.rfs_guides`, draws guides via `SpaceView3D.draw_handler`, exposes `set_safe_area_px()` |
| `composit_layer.py` | Layer ⇄ node mapping, layer operators, Look node group generation, appending FX groups from the asset library, layer HUD |

## Adding a feature module

1. Create a new `.py` with `register()` / `unregister()`.
2. Add it to the `modules` list in `__init__.py`.
3. To protect it with the license, apply the license guard inside `register()` before `bpy.utils.register_class`.

## Reporting bugs

Please include steps to reproduce, Blender version, OS and the system console log on GitHub Issues.

- [https://github.com/Adacchi-MultiCreator/RenderFlow-Studio-Issues](https://github.com/Adacchi-MultiCreator/RenderFlow-Studio-Issues)
