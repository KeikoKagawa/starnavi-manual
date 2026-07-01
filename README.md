# StarNavigator 使い方マニュアル（サイト）

MkDocs + Material で作る、StarNavigator（スタナビ）の使い方マニュアルサイト。

- **扱う内容**: スタナビの操作方法のみ（使い方）。
- **載せない**: 占星術の解釈・知識（α＝有料セミナー専用）、有料動画。
- **言語**: 日本語（主）／英語（`*.en.md`）。
- **正の情報源**: このリポジトリの Markdown（Notion は初期素材の吸い出しのみ）。

## ローカルで動かす

```bash
python -m venv .venv
./.venv/Scripts/python.exe -m pip install -r requirements.txt   # Windows
# source .venv/bin/activate && pip install -r requirements.txt  # macOS/Linux

python -m mkdocs serve      # http://127.0.0.1:8000 でプレビュー
python -m mkdocs build      # site/ に静的サイトを出力
```

## 構成

- `mkdocs.yml` … サイト設定（テーマ・i18n・ナビ・検索）
- `docs/` … 原稿（Markdown）
  - `xxx.md` … 日本語
  - `xxx.en.md` … 英語（同名 + `.en`）
  - `assets/` … 画像（スクショは最適化して配置）

## 執筆ルール

- 1ページ = 1機能/1画面を目安に。
- 見出し・手順は「操作方法」に徹する。占星術の意味・解釈は書かない。
- 画像は `docs/assets/` に置き、`![説明](assets/xxx.png)` で参照。
