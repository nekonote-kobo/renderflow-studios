# ヘルプ

## よくある質問

??? question "サイドバーに RenderFlow Studios タブが表示されない"
    ライセンス未認証の状態ではパネルが登録されません。Preferences > Add-ons > RenderFlow Studios で認証状態を確認してください。認証済みで表示されない場合は、3D ビューで ++n++ を押してサイドバーを開き、タブが隠れていないか確認してください。

??? question "プリセットのグリッドが空、または「(no presets found)」と表示される"
    `DB/render style.json` が読み込めていません。JSON の文法エラー、または文字コード（UTF-8 以外）が原因であることがほとんどです。システムコンソール（Window > Toggle System Console）のログを確認してください。

??? question "プリセットのアイコンが表示されない"
    `icons_path` のパスが間違っているか、画像が PNG ではありません。パスは `DB/` からの相対パスで、`icons\\name.png` のように記述します。

??? question "セーフエリアが表示されない"
    ガイドはカメラビュー（++numpad0++）でのみ描画されます。また、アクティブカメラが設定されていない場合も表示されません。

??? question "レンダースタイルを適用したらカメラが平行投影になった"
    1980年代プリセットは平行投影を指定しています。カメラパネルで **透視投影** に戻すか、プリセットの `camera type` を変更してください。

??? question "フィルターを追加 メニューに Blur しか表示されない"
    FX フィルターのアセットライブラリが登録されていないか、ライブラリ名に「FX」「Filter」が含まれていません。[インストール](install.md#4-fx) の手順 4 を確認してください。

??? question "フィルターを追加しても効果が出ない"
    一部のフィルターはフィルム透過（Render > Film > Transparent）が必要です。Layer Properties に警告が表示されている場合は **フィルム透過を有効化** を押してください。また、不透明度が 0 になっていないか、上にソロ状態のレイヤーがないかも確認してください。

??? question "ノードエディタで直接ノードを編集したらレイヤー一覧がおかしくなった"
    **Sync UI to Nodes** を実行するとノードの状態からレイヤー一覧を再構築します。

??? question "別の PC でも使えますか？"
    同一ユーザーであれば複数端末で認証できます。上限に達した場合はサポートまでご連絡ください。

## お問い合わせ

- 不具合報告・要望：[GitHub Issues](https://github.com/Adacchi-MultiCreator/RenderFlow-Studio-Issues)
- ライセンスに関する問い合わせ：購入元の連絡先、または [X (@3d_manga19094)](https://x.com/3d_manga19094) の DM

お問い合わせの際は、Blender のバージョン、OS、RenderFlow Studios のバージョン、再現手順を添えてください。
