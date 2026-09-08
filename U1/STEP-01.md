# U1 · STEP 01 ｜ 接手老師給的 repo，先把專案跑起來

> **這堂完成物**：專案能跑、你看得懂四個頁面、認得 VS Code / Git / Codex / Claude Code 的工作位置，並完成第一次小範圍修改。

如果你不知道從哪裡開始，先回 [`README.md`](./README.md) 看今日順序。C1 不要求你自己發明功能，只要求你照流程接手 repo。

開始這一步前，你應該已經完成 [`STEP-00-zip-to-git.md`](./STEP-00-zip-to-git.md)：`git init`、initial commit、`git status` 乾淨。

## 1. 一鍵啟動

- Windows：雙擊 `start-m11.bat`
- macOS：雙擊 `start-m11.command`

**你應該看到**：瀏覽器打開 <http://localhost:5180>，首頁是 **GYOZA WOOD**，
背景有會動的漸層光暈，右側有一鍋正在煎的鍋貼（上面還冒著蒸氣），
瀏覽器分頁的小圖示也是一顆鍋貼。

如果 5180 被占用，Vite 會在終端機顯示另一個網址。以終端機顯示的網址為準。

如果你在 VS Code 裡操作，等價方式是打開 Terminal：

```bash
cd web-lab
npm install
npm run dev
```

看到 `Local: http://localhost:5180/` 後，用瀏覽器打開該網址。

> **📖 名詞：npm**
>
> 這個專案用到很多別人寫好的現成程式（React、three.js 之類）。
> `npm install` 就是**把這些現成的程式包一次下載下來**，放進 `node_modules/` 資料夾。
> 所以第一次啟動會等比較久，之後就不用再等了。
>
> `npm run dev` 則是**把網站在你自己的電腦上跑起來**。

> **📖 名詞：localhost、port — 以及為什麼這個網址傳給別人沒用**
>
> **`localhost`** ＝「**這台電腦自己**」。
> `http://localhost:5180` 的意思是：「請我自己這台電腦，把網頁給我看」。
>
> **`:5180`** 是 **port（連接埠）**，可以想成**門牌號碼**。
> 一台電腦可以同時跑好幾個網站，靠號碼分辨誰是誰。
> 這也是為什麼 5180 被別的程式占用時，Vite 會自動換一個號碼給你。
>
> **⚠️ 所以這個網址傳給別人是打不開的。**
> 對方點下去時，`localhost` 指的是**他自己的電腦**——而他的電腦上並沒有在跑你的網站。
> 這不是網路壞掉，是 `localhost` 本來就只認得「自己」。
>
> 要讓別人能打開，網站得放到一台**大家都連得到的電腦**上。
> 那件事叫「**部署**」，U4 會用 GitHub Pages 做一次。

## 2. 先看四個頁面

上方導覽有四個頁面：

| 頁面 | 今天先看什麼 |
|---|---|
| 品牌入口 | starter repo 本身已經是高質感企業案例，不是空白練習頁 |
| 備料控制台 | C2 會用 AGENTS.md / CLAUDE.md / Plan Mode 做小範圍修改 |
| 訂單看板 | C3 會看資料如何驅動畫面與 three.js 訂單狀態動畫 |
| LINE 推播中心 | C3 會走完 Flex 預覽、人工審核、mock 推播 |

今天不用改後三個頁面，只要知道它們是後面三堂會一路接上的主線。

> **📖 上面表格出現的三個新名詞**
>
> 「LINE 推播中心」那一列出現了三個你還沒學過的字。**現在不用會做，只要知道大概是什麼**：
>
> | 名詞 | 現在只要知道 | 什麼時候真的做 |
> |---|---|---|
> | **Flex 預覽** | LINE 上那種有顏色、分區塊的**卡片訊息**（不是純文字）。送出前先看它長什麼樣 | U3 |
> | **人工審核** | 系統算好了也**不會自己送**，要人看過、點頭，按鈕才會亮起來 | U3 |
> | **mock 推播** | 「**假送**」。整個流程完整跑一遍，但最後**不真的送出去**，用來安全練習 | U3 |
>
> `mock` 這個字特別值得記——它不只出現在這門課，
> 之後你在任何開發環境都會遇到：**先用假的跑通流程，確定沒問題了才接真的。**

## 3. 認識 VS Code 三個區

用 VS Code 開 `ai-project-foundation-kit` 資料夾，認出三個區：

- **Explorer**：左邊檔案樹
- **Editor**：中間編輯區
- **Terminal**：下面跑指令的地方

今天主要會碰：

| 檔案 | 它管什麼 |
|---|---|
| `web-lab/src/data.js` | 首頁文案、四堂課卡片、首頁主圖（`heroImage`）；C1 安全修改範圍 |
| `web-lab/public/images/` | 放你自己的照片；C1 安全修改範圍（STEP-02 練習二會用到） |
| `web-lab/src/uiEffects.jsx` | 首頁動態光暈背景效果；今天不改 |
| `web-lab/src/artwork.jsx` | 首頁的鍋貼插畫與課程卡圖示；今天不改 |
| `AGENTS.md` | AI coding agent 的工作守則 |
| `CLAUDE.md` | Claude Code 補充守則 |
| `START-HERE.md` | 整門課地圖 |

## 4. 確認 Git 狀態乾淨

啟動專案前先確認：

```bash
git status
```

如果你看到 `fatal: not a git repository`，代表你還沒做 STEP 00，請回去先做 [`STEP-00-zip-to-git.md`](./STEP-00-zip-to-git.md)。

## 5. 先請 AI 讀，不要改

貼 `PROMPT-CARD.md` 的「讀專案」卡給 Codex 或 Claude Code。驗收標準只有一個：

```bash
git status
```

AI 讀完專案後，`git status` 仍然乾淨，才代表它有遵守「先讀，不要改」。

→ 下一步：打開 [`STEP-02.md`](./STEP-02.md)，做第一次可見修改與 Git 快照。
