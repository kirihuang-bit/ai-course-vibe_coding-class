# U1 · 卡住了？先看這裡

| 狀況 | 解法 |
|---|---|
| `git status` 顯示 `fatal: not a git repository` | 正常，因為你拿到的是 zip。先做 `STEP-00-zip-to-git.md` 的 `git init` |
| VS Code 只看到 `src/` 和 `package.json` | 你開到 `web-lab/` 了。請重新 Open Folder 到 `ai-project-foundation-kit/` 根目錄 |
| 雙擊 `start-m11.bat` 視窗一閃就關 | 先裝 Node.js LTS，裝完重開機再試 |
| 瀏覽器沒自動開 | 自己打開終端機顯示的網址，通常是 http://localhost:5180 |
| 5180 被占用 | Vite 會自動換 port；以終端機顯示的網址為準 |
| 檔案樹是空的 | VS Code 要開 `ai-project-foundation-kit` 這一層 |
| 改了 `data.js` 畫面沒變 | 確認有存檔、dev server 還在跑；不行就重新整理 |
| 照片沒出現，還是原本的插畫 | `heroImage` 忘了填，或檔名跟實際檔案對不起來 |
| 照片沒出現，F12 → Network 顯示 404 | 路徑開頭的 `/` 不能少：要寫 `/images/x.jpg`，不是 `images/x.jpg` |
| 照片放進 `src/` 卻讀不到 | 要放 `web-lab/public/images/`。`public/` 裡的檔案網址就是 `/檔名`；`src/` 裡的要用 import 才會被打包 |
| 檔名有中文或空格 | 改成英文小寫，例如 `my-gyoza.jpg`。中文與空格在網址裡會被編碼，很容易出錯 |
| **本機看得到，之後部署到 GitHub Pages 卻壞掉** | **副檔名大小寫**：`.JPG` 和 `.jpg` 是兩個不同的檔名。Windows 不分大小寫所以本機正常，但 GitHub Pages 跑在 Linux 上會分。**一律用小寫** |
| 照片超過 5MB，首頁變很慢 | 壓到 500KB 以下再放進去 |
| push 之後別人打不開你的照片 | 你可能忘了 `git add` 那張圖。跑 `git status`，`Untracked files` 底下的檔案 Git 完全不認識 |
| `git switch -c` 失敗 | 可能已經有同名分支；換老師指定分支名 |
| `git commit` 說要設定 email | 照終端機提示設定 `user.name` / `user.email` |
| `git push` 要求登入 | 先用瀏覽器登入 GitHub，或依 VS Code / Git 提示完成驗證 |
| `remote origin already exists` | 先跑 `git remote -v` 看是不是已經設定過；如果網址錯了再請老師協助改 |
| 第一次 push 被 reject | GitHub repo 可能不是空的。新建 repo 時不要加 README、gitignore、license |
| GitHub 上只看到 main，看不到 feature branch | 回本機跑 `git switch feature/u1-first-edit`，再跑 `git push -u origin feature/u1-first-edit` |
| 問要不要設定 GitHub Pages | C1 不設定 Pages。U4 才教 GitHub Actions / GitHub Pages 部署 |
| AI 一開始就改檔 | 停下來，先看 `git status`；不確定就舉手 |
| 做完 STEP 02 不知道要幹嘛 | 回 `U1/README.md`，接著做 STEP 03 GitHub 上傳 |
| AI review 只說「看起來很好」 | 不合格。要求它列 Changed Files、Scope Check、Risk |
| 不知道 Claude Code / Codex 差在哪 | C1 先不用分很細；兩者都先做「讀專案」與「review diff」，不要直接叫它們大改 |

原則：任何一步卡超過 5 分鐘，先舉手，用保底方案跟上進度。
