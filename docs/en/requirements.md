# Requirements

| Item | Requirement |
|---|---|
| Blender | **4.5 LTS** (recommended). Works on 4.0 and later |
| OS | Windows 10 / 11, macOS 12+, Linux (as supported by Blender) |
| GPU | Any GPU that runs EEVEE Next and Cycles. Retro presets are light; the Cinema preset uses Cycles at 512 samples, so GPU rendering is recommended |
| Internet | Required **only for license request and first activation**. Works offline afterwards (see [License Activation](activation.md)) |

!!! warning "Blender 3.x is not supported"
    The compositor layer system uses node APIs introduced in Blender 4.0 and does not run on 3.6 or earlier.

!!! note "EEVEE Legacy vs EEVEE Next"
    The `eevee` engine key in render style presets maps to EEVEE Next on Blender 4.2+ and to EEVEE Legacy on 4.1 and earlier.
