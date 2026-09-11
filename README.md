# RenderFlow Studios Documentation

MkDocs (Material theme) site for RenderFlow Studios. Japanese is the default; English lives in `docs/en/`.

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000/

## Deploy to GitHub Pages

Push to `main`; `.github/workflows/deploy.yml` builds and publishes to the `gh-pages` branch.
Set Pages source to `gh-pages` in the repository settings.

## Replace the placeholders

- `docs/assets/images/*.png` — screenshots (hero, install_addon, license_panel, sidebar_overview, render_style_panel, camera_panel, camera_guides, compositor_panels, adjustment_layer, asset_library)
- `docs/*/index.md` — YouTube video ID (`XXXXXXXXXXX`)
- `mkdocs.yml` — `site_url`, social links
