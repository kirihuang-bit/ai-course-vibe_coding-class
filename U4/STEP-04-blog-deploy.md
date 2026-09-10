# U4 · STEP 04 ｜ Astro Blog 與 GitHub Pages 部署

> **這一步完成物**：一篇可以公開展示的 GYOZA WOOD 技術紀錄，以及一個 GitHub Pages 公開網址。

## 1. 打開 blog-lab

```bash
cd blog-lab
npm install
npm run dev
```

打開終端機顯示的本機網址。你應該看到：

- `GYOZA WOOD 技術紀錄` 首頁
- 一篇 `我如何用 AI coding agent 接手並交付 GYOZA WOOD 備料控制台` 文章

這是老師預留的範例草稿，不是你的最終稿——內容是通用示範寫法，這一步要把文章改寫成你自己實際做的事，不是照抄範例文字。

## 2. 改文章，不改成空泛心得

打開：

```text
blog-lab/src/content/blog/gyoza-wood-case.md
```

（重點是內文要換成你自己的實作細節與截圖證據，不是照抄範例。）

文章至少要補上：

1. 企業題目如何拆成資料、規則、畫面、驗收。
2. C2 備料控制台改了什麼規則。
3. C3 API flow：Browser → `/api/send-line-flex` → 本機後端 → mock result。
4. token / env var 為什麼不進前端。
5. DevTools Network、mock result、build、git diff 的驗收證據。
6. 如果接真實企業資料，下一步要確認什麼。

不要寫「我使用 AI 做了一個很棒的系統」這種句子。每段都要有具體證據。

## 3. 放截圖

截圖都放在：

```text
blog-lab/public/images/
```

文章裡這樣引用：

```md
![備料控制台 action queue](/images/shop-console.png)
```

**先去那個資料夾看一下——你在 U2、U3 應該已經收了五張。**

| 截圖 | 什麼時候收的 | 建議檔名 |
|---|---|---|
| 備料控制台 action queue | U2 STEP-02 | `shop-console.png` |
| 訂單看板 | U3 STEP-01 | `order-board.png` |
| 韭菜「需要補貨」那一列 | U3 STEP-01 | `low-stock.png` |
| LINE Flex 預覽 | U3 STEP-02 | `line-flex-preview.png` |
| DevTools 的 `POST /api/send-line-flex` | U3 STEP-02 | `api-network.png` |

**今天只需要再補三張**（都是你等一下就會做到的事，不用回頭重跑）：

- GYOZA WOOD 首頁
- `npm run build` 成功的終端機畫面（第 4 節就會跑）
- GitHub Actions 部署成功（第 5 節就會做）

> **少了哪一張？** 那代表 U2 或 U3 當時沒截。
> 補的方法是重新啟動 `npm run dev` 回到那個畫面——
> 會花掉你十幾分鐘，所以**下次記得在現場收證據**。

## 4. 本機 build

```bash
cd blog-lab
npm run build
```

build 通過後才可以部署。

## 5. GitHub Pages 設定

把整個 repo push 到 GitHub 後：

1. 打開 GitHub repo。
2. 到 Settings → Pages。
3. Source 選 `GitHub Actions`。
4. 到 Actions 分頁。
5. 執行 `Deploy Astro Blog to GitHub Pages`。

這個 workflow 會從 `blog-lab/` build Astro，並把 `blog-lab/dist` 部署到 GitHub Pages。

## 6. base path 為什麼不用手改

`blog-lab/astro.config.mjs` 會在 GitHub Actions 裡讀取 repo 名稱：

```js
const base = process.env.BASE_PATH ?? (repositoryName && !isUserPage ? `/${repositoryName}/` : '/');
```

所以：

- 本機預覽：`base` 是 `/`
- GitHub project Pages：`base` 會變成 `/<repo-name>/`
- `<帳號>.github.io` repo：`base` 維持 `/`

如果部署後連結或樣式壞掉，第一個檢查 `astro.config.mjs` 與 GitHub Pages URL。

## 7. 部署驗收

完成後請截圖：

1. Blog 首頁。
2. 技術案例文章。
3. GitHub Pages Settings，Source 是 GitHub Actions。
4. Actions workflow 成功。
5. 公開網址打得開。

收束：公開網址不是最終目的。真正要交付的是一篇能說清楚「我如何拆題、實作、驗證、控風險」的技術案例。

## 8. 結業：四堂課，串成一句話

```text
U1 進得了專案
U2 管得住 AI 寫的 code
U3 控制得了 AI 對真實世界的行動(LINE OA 真推播)
U4 擴充了 AI 能碰的範圍(Skills / MCP)
```

> **你不是只會問 AI，你是會管理 AI 做事的人。**
> AI 做出來不算完成，通過驗收才算完成。
