## 足あと

# 制作理由
自分が旅行が好きなため、その記録をまとめるアプリを作成しました。
このアプリは完全個人専用のアプリで、他人からの評価を気にして、カッコつけた投稿だけでなく
失敗体験や恥ずかしい体験もまとめられるように個人専用のものとしました

## DEMO

![デモ](https://image-url.gif) 

## アプリの機能
 
 記事の投稿・詳細確認・編集・削除


## アプリの使い方
 
1. トップページ左側の投稿にて記事を投稿する
2. 記事投稿後、自分が確認したい記事を選択して記事の詳細を確認する
3. 記事の詳細画面を確認中に変更を加えたい場合は編集ボタンにてクリックして、記事の内容を編集することができる。
4. 記事を削除したい場合は、記事の詳細画面にて削除ボタンを選択すること記事を削除することができる。


## アプリのインストール
 
```
$ git clone https://github.com/TomoakiTANAKA/awesome-tool
$ cd awesome-tool
$ sh setup.sh
$ ~do anything~
```
## デプロイ
 
1. herokuにてデプロイしました。

## 作者
 
[@TanakanoAnchan](https://twitter.com/TanakanoAnchan)
mail to: xxxx@mail.com
 
## ライセンス
 
[MIT](http://TomoakiTANAKA.mit-license.org)</blockquote>









## テーブル一覧

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
