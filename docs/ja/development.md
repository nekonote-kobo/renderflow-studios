# 開発

## フォルダ構成

```
RenderFlow_Studio/
├── __init__.py            # 登録 / 翻訳辞書の読み込み / ライセンス連携
├── license_client.py      # ライセンス申請・認証・キャッシュ
├── license_guard.py       # 各機能へのライセンスチェック注入
├── render_presets.py      # レンダースタイル パネル
├── camera_control.py      # カメラ / ガイド パネル、ガイド描画
├── composit_layer.py      # コンポジットレイヤー システム
└── DB/
    ├── render style.json
    ├── translation.json
    ├── translation composit.json
    └── icons/
```

## モジュールの役割

| モジュール | 役割 |
|---|---|
| `__init__.py` | `bl_info`、翻訳辞書の登録、`license_client.setup()` に機能モジュールの登録・解除コールバックを渡す |
| `license_client.py` | Preferences 内の UI、サーバー API との通信、端末ごとの認証キャッシュ、定期チェック |
| `render_presets.py` | `DB/render style.json` の読み込みとキャッシュ、アイコンのプレビュー生成、適用処理 |
| `camera_control.py` | `bpy.types.Camera.rfs_guides` にガイド設定を保持、`SpaceView3D.draw_handler` でガイドを描画、`set_safe_area_px()` を外部に公開 |
| `composit_layer.py` | レイヤー ⇄ ノードの対応表、レイヤー操作オペレーター、Look ノードグループの生成、FX グループのアセットライブラリからのアペンド、レイヤー HUD |

## 機能モジュールの追加

1. 新しい `.py` を作成し、`register()` / `unregister()` を実装します。
2. `__init__.py` の `modules` リストに追加します。
3. 機能をライセンスで保護する場合は、`register()` 内で `bpy.utils.register_class` の前にライセンスガードを適用します。

## 不具合の報告

再現手順、Blender のバージョン、OS、システムコンソールのログを添えて GitHub Issues へお願いします。

- [https://github.com/Adacchi-MultiCreator/RenderFlow-Studio-Issues](https://github.com/Adacchi-MultiCreator/RenderFlow-Studio-Issues)
