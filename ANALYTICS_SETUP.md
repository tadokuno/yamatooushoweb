# Google Analytics設定手順

## 1. Google Analytics アカウント作成
1. [Google Analytics](https://analytics.google.com/)にアクセス
2. Googleアカウントでログイン
3. 「測定を開始」をクリック

## 2. プロパティ設定
1. プロパティ名：「山陽将棋道場」など
2. レポートのタイムゾーン：「日本」を選択
3. 通貨：「日本円（JPY）」を選択

## 3. ビジネス情報入力
1. 業種：「その他」または「レクリエーション・レジャー」
2. ビジネス規模：「小規模（従業員数1～10名）」
3. 利用目的：「サイトまたはアプリでの顧客行動の把握」

## 4. データストリーム作成
1. 「ウェブ」を選択
2. ウェブサイトのURL：`https://yamatoosho.netlify.app`（実際のURL）
3. ストリーム名：「ウェブサイト」

## 5. Measurement ID取得
- GA4プロパティ設定から「G-XXXXXXXXXX」形式のIDを確認
- このIDを`.env`ファイルの`PUBLIC_GA_MEASUREMENT_ID`に設定

## 6. 環境変数設定
```bash
# .envファイルを編集
PUBLIC_GA_MEASUREMENT_ID=G-VHNZFS82GY
```

## 7. デプロイメント設定
Netlifyの場合：
1. Netlifyダッシュボード → Site settings → Environment variables
2. `PUBLIC_GA_MEASUREMENT_ID`を追加
3. 値にGoogle AnalyticsのMeasurement IDを設定

## 8. 動作確認
1. サイトをビルド・デプロイ
2. Google Analytics リアルタイムレポートで訪問を確認
3. 開発者ツールでgtag関数の実行を確認
