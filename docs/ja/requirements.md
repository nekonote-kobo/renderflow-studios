# 動作環境

| 項目 | 要件 |
|---|---|
| Blender | **4.5 LTS**（推奨）。4.0 以上で動作します |
| OS | Windows 10 / 11、macOS 12 以降、Linux（Blender 公式対応環境に準じます） |
| GPU | EEVEE Next および Cycles が動作する GPU。レトロ系プリセットは低負荷、映画風プリセットは Cycles 512 サンプルのため GPU レンダリングを推奨 |
| インターネット接続 | **ライセンス申請・初回認証時のみ**必要です。認証後はオフラインでも動作します（[ライセンス認証](activation.md) 参照） |

!!! warning "Blender 3.x 以前は非対応"
    コンポジットレイヤー機能は Blender 4.0 で追加されたノード API を使用しているため、3.6 以前では動作しません。

!!! note "EEVEE Legacy と EEVEE Next"
    レンダースタイルプリセットのエンジン指定 `eevee` は、Blender 4.2 以降では EEVEE Next、4.1 以前では EEVEE Legacy に自動で割り当てられます。
