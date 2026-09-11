# Help

## FAQ

??? question "The RenderFlow Studios tab does not appear in the sidebar"
    Panels are not registered until the license is activated. Check Preferences > Add-ons > RenderFlow Studios. If it is activated and still missing, press ++n++ in the 3D Viewport and make sure the tab is not hidden.

??? question "The preset grid is empty or shows \"(no presets found)\""
    `DB/render style.json` could not be loaded — almost always a JSON syntax error or a non-UTF-8 encoding. Check the log in Window > Toggle System Console.

??? question "Preset icons are missing"
    `icons_path` is wrong or the file is not a PNG. Paths are relative to `DB/`, e.g. `icons\\name.png`.

??? question "Safe areas are not shown"
    Guides are drawn only in camera view (++numpad0++), and only when the scene has an active camera.

??? question "The camera became orthographic after applying a render style"
    The 1980s presets set orthographic projection. Switch back to **Perspective** in the Camera panel or change `camera type` in the preset.

??? question "The Add Filter menu only shows Blur"
    The FX asset library is not registered, or its name does not contain "FX" or "Filter". See step 4 in [Install](install.md#4-register-the-fx-filter-asset-library).

??? question "A filter has no effect"
    Some filters need Film Transparent (Render > Film > Transparent). If Layer Properties shows a warning, press **Enable Film Transparent**. Also check that opacity is not 0 and no layer above is soloed.

??? question "The layer list broke after editing nodes directly"
    Run **Sync UI to Nodes** to rebuild the layer list from the node state.

??? question "Can I use it on another PC?"
    Yes, the same user can activate several machines. Contact support if you hit the limit.

## Contact

- Bugs and requests: [GitHub Issues](https://github.com/Adacchi-MultiCreator/RenderFlow-Studio-Issues)
- License questions: the store you purchased from, or DM [X (@3d_manga19094)](https://x.com/3d_manga19094)

Please include your Blender version, OS, RenderFlow Studios version and steps to reproduce.
