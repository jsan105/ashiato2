###NAME
足あと


作った理由
自分が旅行が好きなため、その記録をまとめるアプリを作成しました。
このアプリは完全個人専用のアプリで、他人からの評価を気にして、カッコつけた投稿だけでなく
失敗体験や恥ずかしい体験もまとめられるように個人専用のものとしました




## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :contents

## contents テーブル

| Column  | Type    | Options                        |
| ------- | ------- | ------------------------------ |
| text    | string  | null: false                    |
| image   | string  | null: false                    |
| went    | string  | null: false                    |
| user_id | integer | null: false, foreign_key: true |

### Association

- belongs_to :user
