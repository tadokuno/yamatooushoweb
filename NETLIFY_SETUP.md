# Netlifyでの環境変数設定手順

## 1. Netlifyダッシュボードにアクセス
1. https://app.netlify.com/ にログイン
2. 「yamatooushoweb」サイトを選択

## 2. 環境変数の設定
1. サイトダッシュボードで「Site settings」をクリック
2. 左サイドバーから「Environment variables」を選択
3. 「Add a variable」をクリック
4. 以下を入力：
   - Key: `PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-VHNZFS82GY`（実際のGoogle Analytics Measurement ID）
   - Scopes: 「All scopes」を選択
5. 「Create variable」をクリック

## 3. 手動デプロイのトリガー
1. サイトダッシュボードで「Deploys」タブをクリック
2. 「Trigger deploy」→「Deploy site」をクリック

## 4. ビルドログの確認
1. デプロイが開始されたら、ビルドログを確認
2. エラーがある場合は詳細を確認

## 5. よくあるNetlifyビルドエラー
- **Node.jsバージョン**: netlify.tomlでNode 18を指定済み
- **環境変数未設定**: デフォルト値で対応済み
- **依存関係エラー**: package.jsonの依存関係を確認

## 6. デプロイ確認
1. デプロイ完了後、サイトURLにアクセス
2. ページソースでGoogle Analyticsスクリプトが含まれているか確認
3. ブラウザの開発者ツールでgtagの実行を確認

## トラブルシューティング
- ビルドログで具体的なエラーメッセージを確認
- Google AnalyticsのMeasurement IDが正しく設定されているか確認
- Netlifyの環境変数が正しく設定されているか確認
