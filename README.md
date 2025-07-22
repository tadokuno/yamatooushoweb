# やまと王将のホームページ

Astro Starter Kitを使って作成
```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/     静的ファイル (html/jpg/png など)
│   ├── images/ 画像ファイル
│   └── favicon.png
├── src/        astroファイル
│   ├── layouts/ レイアウトの定義
│   │   └── Layout.astro ファビコンなど共通部分
│   ├── components/ importして使用するコンポーネント
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BusinessCalendar.astro 営業日カレンダー
│   │   ├── ContactForm.astro お問い合わせフォーム
│   │   ├── ReservationForm.astro 予約フォーム
│   │   └── ...
│   ├── pages/ 各ページの定義
│   |   ├── index.astro　トップページ
│   │   ├── about.astro
│   │   ├── access.astro アクセス情報
│   │   ├── events.astro イベント情報
│   │   ├── kids-class.astro 子供教室
│   │   └── ...
│   ├── data/ データファイル（JSON）
│   │   ├── businessProperties.json 営業情報・連絡先
│   │   └── events.json イベント情報
│   ├── types/ TypeScript型定義
│   │   └── businessData.ts 営業データの型定義
│   └── styles/ スタイルファイル
│       └── global.css グローバルスタイル
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 📊 データ管理

### 営業情報の一元管理

営業時間、連絡先、住所などの店舗情報は `src/data/businessProperties.json` で一元管理されています。

```json
{
  "businessDays": {
    "2025-7": [3, 5, 6, 8, 12, 13, 17, 19, 20, 21, 24, 26, 27, 31],
    "2025-8": [2, 3, 7, 9, 10, 11, 14, 16, 17, 21, 23, 24, 28, 30, 31]
  },
  "businessInfo": {
    "hours": "12:00～19:00",
    "regularDays": "木・土・日・祝日",
    "note": "※臨時休業がある場合はカレンダーをご確認ください"
  },
  "contactInfo": {
    "phone": "090-8431-1107",
    "email": "yamatoousho@gmail.com",
    "address": "〒242-0018 神奈川県大和市深見西２丁目-１-２ ホソノビル 2F"
  }
}
```

### 営業日カレンダー

- 月別の営業日を配列で管理
- 現在月と翌月を自動表示
- 営業日には○マークを表示

### 更新方法

1. **営業日の追加/変更**: `businessProperties.json` の `businessDays` セクションを編集
2. **連絡先情報の変更**: `businessProperties.json` の `contactInfo` セクションを編集
3. **営業時間の変更**: `businessProperties.json` の `businessInfo` セクションを編集

変更は以下のファイルに自動反映されます：
- すべてのページ（index, access, events, etc.）
- すべてのコンポーネント（Header, Footer, ContactForm, etc.）

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📝 アップデート履歴

### 2025年7月 - データ外部化アップデート

#### 主な変更点

1. **営業情報の外部ファイル化**
   - 営業時間、電話番号、住所、メールアドレスを `businessProperties.json` に統合
   - ハードコードされた情報を削除し、一元管理を実現

2. **営業日カレンダーの動的化**
   - 現在月と翌月を自動計算して表示
   - 営業日データを外部JSONファイルから読み込み

3. **型安全性の向上**
   - TypeScript型定義ファイル（`businessData.ts`）を追加
   - データ構造の整合性を保証

4. **保守性の向上**
   - 営業情報変更時は1ファイルの編集で全サイトに反映
   - 未使用ファイル（`calendar.json`）の削除

#### 影響を受けたファイル

**Pages:**
- `index.astro` - 住所、営業時間、電話番号
- `access.astro` - 全営業情報
- `kids-class.astro` - 電話番号、営業時間
- `contact-success.astro` - 電話番号、営業時間
- `events.astro` - 電話番号

**Components:**
- `Footer.astro` - 営業時間、電話番号、住所
- `BusinessCalendar.astro` - 営業日データ、営業情報
- `ContactForm.astro` - 電話番号
- `ReservationForm.astro` - 電話番号

#### メリット

- **一元管理**: 営業情報の変更が1箇所で完結
- **データ整合性**: 全ページで同じ情報が表示される保証
- **型安全性**: TypeScriptによるコンパイル時チェック
- **自動化**: カレンダーが自動で現在月を表示
