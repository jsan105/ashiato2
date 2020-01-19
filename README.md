## アプリ名：足あと

<img width="1440" alt="toppageスクショ" src="https://user-images.githubusercontent.com/57351081/72677306-3be16780-3ade-11ea-9534-75e6f0cd755d.png">

<!-- ![toppageスクショ]("https://user-images.githubusercontent.com/57351081/72677306-3be16780-3ade-11ea-9534-75e6f0cd755d.png") -->

# アプリの制作理由
自分は旅行が趣味のため、旅行先での記録をまとめるアプリを作成しました。
このアプリは完全個人専用のアプリで、他人からの評価を気にせず、
自分の満足のいく体験・失敗体験や体験もまとめられるように個人専用のものとしました

## DEMO

記事の投稿
![投稿gif](https://user-images.githubusercontent.com/57351081/72677497-6af8d880-3ae0-11ea-9572-728353977195.gif)

記事の編集
![編集機能](https://user-images.githubusercontent.com/57351081/72677747-320e3300-3ae3-11ea-95e7-9b25e8f5919d.gif)

# アプリの機能
 
 記事の投稿・一覧表示・詳細確認・編集・削除


# アプリの使い方
 
1. トップページ左側の投稿にて記事を投稿する
2. 記事投稿後、自分が確認したい記事を選択して記事の詳細を確認する
3. 記事の詳細画面を確認中に変更を加えたい場合は編集ボタンにてクリックして、記事の内容を編集することができる。
4. 記事を削除したい場合は、記事の詳細画面にて削除ボタンを選択すること記事を削除することができる。


# アプリのインストール
 
```
$ git clone https://github.com/jsan105/ashiato2.git
```
# デプロイ
 
1. herokuにてデプロイしました。


# 作者
[@TanakanoAnchan](https://twitter.com/TanakanoAnchan)

 
# ライセンス
 
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
