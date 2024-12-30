---
force: true
---

# {{ project_name | kebab_case }}

## リポジトリルートから docker compose を使えるようにする設定

リポジトリルートの `compose.yml`の `include` ブロックにこのプロジェクトの`compose.yml`へのパスを追加

```sh
include:
  ...
  - ./{{ project_name | kebab_case }}/compose.yml
```

## docker comoose による docker image の作成

### 環境変数に `compose.yml` のデフォルト値を利用する場合

```sh
docker compose --profile dev-{{ project_name | kebab_case }} build
```

### `direnv` の環境変数を利用する場合

```sh
direnv allow .
docker compose --profile dev-{{ project_name | kebab_case }} build
```

## docker comoose によるコンテナサービスの起動・終了

### サービス全体を起動

```sh
docker compose --profile dev-{{ project_name | kebab_case }}-frontend --profile dev-{{ project_name | kebab_case }}-backend up -d
```

### サービス全体を終了

```sh
docker compose --profile dev-{{ project_name | kebab_case }}-frontend --profile dev-{{ project_name | kebab_case }}-end down -v
```

### frontend サービスを起動

```sh
docker compose --profile dev-{{ project_name | kebab_case }}-frontend up -d
```

### frontend サービスを終了

```sh
docker compose --profile dev-{{ project_name | kebab_case }}-frontend down -v
```

### backend サービスを起動

```sh
docker compose --profile dev-{{ project_name | kebab_case }}-backend up -d
```

### backend サービスを終了

```sh
docker compose --profile dev-{{ project_name | kebab_case }}-backend down -v
```
