# U1 ｜ 開發環境、VS Code、Git flow、Claude Code / Codex

> **這堂不是做功能。這堂是學會接手一個 repo，知道從哪裡啟動、怎麼改、怎麼驗收、怎麼讓 AI 幫忙但不失控。**

> **還沒做過 U0 的，先回 [`../U0/README.md`](../U0/README.md)**（約 30 分鐘）。
> U0 會教你怎麼看懂這包裡的資料夾和副檔名。沒有那張地圖，接下來每一步都會像在黑暗中摸索。

## 今天照這個順序做

| 順序 | 檔案 | 你會完成什麼 |
|---|---|---|
| 0 | [`STEP-00-zip-to-git.md`](./STEP-00-zip-to-git.md) | 解壓 zip，用 `git init` 建立自己的本機 repo |
| 1 | [`STEP-01.md`](./STEP-01.md) | 用 VS Code 打開專案，啟動 web-lab，看懂四個頁面 |
| 2 | [`STEP-02.md`](./STEP-02.md) | 建 feature branch，改首頁一個字並換上自己的照片，完成兩次 commit |
| 3 | [`STEP-03-github-upload.md`](./STEP-03-github-upload.md) | 建 GitHub repo，把 main 和 feature branch 推上去 |
| 4 | [`STEP-04-gitflow.md`](./STEP-04-gitflow.md) | 看懂 main / feature branch / diff / commit / origin / push 的 Git flow |
| 5 | [`STEP-05-ai-agents.md`](./STEP-05-ai-agents.md) | 用 Claude Code / Codex 讀專案、review diff、產 commit message |
| 6 | [`ACCEPTANCE.md`](./ACCEPTANCE.md) | 對照驗收，確認 C1 真的完成 |

## C1 要學會的技術力

- VS Code：Explorer、Editor、Terminal、檔案路徑。
- Git：`init`、`status`、`diff`、`add`、`commit`。
- Git：分得出 `modified`（改了既有檔案）與 `untracked`（全新檔案，Git 還不認識）。
- Git：看得懂 diff 的紅綠與 `+` / `-` 符號，知道「改一行」為什麼會顯示成兩行。
- 靜態資源路徑：`public/` 裡的檔案，網址就是「斜線 + 檔名」。
- Git flow：不要直接亂改 main；用 feature branch 做小範圍修改，再推到 GitHub。
- Claude Code / Codex：先讀、先計畫、做 review，不是一開始就叫 AI 改。
- 驗收：畫面有變、diff 乾淨、commit 有記錄、AI 沒亂改。

## 今天會改的檔案（只有這兩個）

```text
web-lab/src/data.js        ← 練習一:改品牌名;練習二:填 heroImage
web-lab/public/images/     ← 練習二:放你自己的照片
```

如果 AI 想改這兩個以外的檔案，先停下來。C1 的目標不是功能多，而是流程穩。

注意：這門課預設你是拿到 zip，不是 `git clone`。所以第一步一定是先做 `git init` 和 initial commit。

C1 會把 repo 先推上 GitHub，但不做 GitHub Pages 部署。部署留到 U4。

---

## 名詞速查表

> **不用背。** 每個名詞在第一次用到的那一步都有完整說明，
> 這張表是給你**中途卡住、想不起來某個字是什麼意思時回來查的**。

| 名詞 | 在這門課的意思 | 你要能說出什麼 | 哪一步講 |
|---|---|---|---|
| **repo** | 被 Git 管起來的專案資料夾 | 我手上這包就是一個 repo | STEP-00 |
| **根目錄** | 專案最外層那一層資料夾 | 打 `ls` 看得到 `START-HERE.md` 就是站對了 | STEP-00 |
| **untracked** | Git 看得到，但還沒開始管的檔案 | 沒 `add` 過的新檔案就是這個狀態 | STEP-00 |
| **commit** | 一個存檔點，之後隨時能回來 | 先存乾淨的原點，之後才敢放心亂試 | STEP-00 |
| **`add` vs `commit`** | 挑要存哪些 vs 真的按下存檔 | 兩步分開，是為了讓你能只存一部分 | STEP-00 |
| **npm** | 下載別人寫好的現成程式包的工具 | `npm install` 裝套件，`npm run dev` 跑起來 | STEP-01 |
| **localhost** | 「這台電腦自己」 | 這個網址傳給別人打不開，因為那是指他自己的電腦 | STEP-01 |
| **port（`:5180`）** | 門牌號碼，分辨同一台電腦上的不同網站 | 被占用時 Vite 會自動換號碼 | STEP-01 |
| **mock** | 假送：流程跑完但不真的送出去 | 先用假的跑通，確定沒問題才接真的 | STEP-01 |
| **熱更新** | 存檔後畫面自己變，不用重新整理 | 沒變的話先確認有沒有存檔、server 還在不在 | STEP-02 |
| **diff** | 改之前與改之後的差異 | 紅 `-` 是改前，綠 `+` 是改後，沒符號的是沒改 | STEP-02 |
| **分支 branch** | 一條「改動的時間線」 | main 是給別人看的，feature 是給自己試的 | STEP-04 |
| **main** | 大家公認的正式版 | 不要直接在上面改 | STEP-04 |
| **feature 分支** | 你自己的實驗場 | 要動手改東西，就先開一條 | STEP-04 |
| **remote / origin** | GitHub 上那份 repo／你給它取的代號 | `origin` 只是名字，不是規定 | STEP-03 |
| **push** | 把本機 commit 送上 GitHub | 沒 push 之前，改動只在自己電腦裡 | STEP-03 |
| **部署** | 把網站放到大家都連得到的電腦上 | 上傳 repo ≠ 部署，U4 才做部署 | STEP-03 |
| **merge** | 把 feature 分支的改動併回 main | U1 還不做，但要知道線最後通到哪 | STEP-04 |
| **PR / MR** | 「請你先看過再併進去」 | GitHub 叫 PR、GitLab 叫 MR，同一件事 | STEP-04 |
