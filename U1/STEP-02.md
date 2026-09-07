# U1 · STEP 02 ｜ 第一次可見修改、第一次 Git 快照

> 目標：只改一個安全資料檔，看到熱更新，然後用 Git 留下一次乾淨快照。

## 1. 開一個練習分支

```bash
git status
git switch -c feature/u1-first-edit
```

如果 `git status` 顯示 `fatal: not a git repository`，請先回 [`STEP-00-zip-to-git.md`](./STEP-00-zip-to-git.md) 做 `git init` 和 initial commit。

如果 `git switch -c` 失敗，通常代表你已經在同名分支；舉手或改用老師指定的新分支名。

## 2. 改一個看得見的字

打開 `web-lab/src/data.js`，找到：

```js
name: 'GYOZA WOOD',
```

把 標題 加上你自己的名字，例如：

```js
name: 'GYOZA WOOD｜小明',
```

存檔後，瀏覽器不用重新整理，首頁 H1 應該會熱更新。

## 3. 看 diff，不要盲目 commit

```bash
git status
git diff -- web-lab/src/data.js
```

**你應該看到**：只有 `web-lab/src/data.js` 一小段文字改動。沒有動到 `uiEffects.jsx`、`package.json`、`Dashboard.jsx`。

## 4. commit

```bash
git add web-lab/src/data.js
git commit -m "練習修改 GYOZA WOOD 首頁標題"
git status
```

最後 `git status` 應該乾淨。

## 5. 練習二：把首頁的插畫換成你自己的照片

剛剛你**改了一個已經存在的檔案**。這次換一件事：**加一個全新的檔案**。
Git 對這兩件事的反應不一樣，等一下你會親眼看到差別。

### 5-1. 準備一張照片

隨便一張鍋貼（或任何食物）的照片都可以。來源可以是：

- 你自己拍的
- 免費圖庫，例如 [Unsplash](https://unsplash.com/)、[Pexels](https://www.pexels.com/)

> 不要隨便用 Google 搜出來的圖。這門課最後會把成品公開到網路上（U4 會部署到 GitHub Pages），
> 沒授權的圖片放上去就是侵權。**現在養成確認授權的習慣，U4 就不用重來。**

**檔名請用英文小寫**，例如 `my-gyoza.jpg`。理由在 [`PITFALL.md`](./PITFALL.md)，先照做就好。

### 5-2. 把照片放進正確的資料夾

放到這裡：

```text
web-lab/public/images/
```

`public/` 是一個特別的資料夾：**放進去的檔案，網址就是「斜線 + 檔名」**。
所以 `web-lab/public/images/my-gyoza.jpg` 的網址是 `/images/my-gyoza.jpg`。

### 5-3. 告訴網站要用這張照片

打開你剛剛改過的 `web-lab/src/data.js`，找到：

```js
heroImage: '',
```

把照片路徑填進去（**開頭那個 `/` 不能少**）：

```js
heroImage: '/images/my-gyoza.jpg',
```

存檔。首頁右邊原本的鍋貼插畫，應該換成你的照片了。

> 沒有照片也沒關係：`heroImage` 留空字串就會顯示預設插畫，這一步跳過不影響過關。

### 5-4. ⭐ 這一步真正要你看懂的事

```bash
git status
```

**你應該看到兩種不同的狀態：**

```text
Changes not staged for commit:
        modified:   web-lab/src/data.js          ← 改了既有檔案

Untracked files:
        web-lab/public/images/my-gyoza.jpg       ← 全新的檔案
```

| 狀態 | 意思 | 為什麼重要 |
|---|---|---|
| `modified` | 這個檔案 Git 本來就認識，你改了它 | Git 會自動追蹤後續變化 |
| `untracked` | **Git 還完全不認識這個檔案** | 你不 `git add`，它永遠不會進版本庫 |

**這是初學者最常見的災難**：明明加了檔案、本機看起來好好的，push 上去之後別人打開卻是壞的——
因為那個檔案從來沒有被 Git 追蹤過。

### 5-5. commit

```bash
git add web-lab/src/data.js web-lab/public/images/
git commit -m "首頁主圖改用自己的鍋貼照片"
git status
```

`git status` 應該乾淨。

## 6. 這一步的完成定義

- 畫面：首頁 H1 有變；（有做練習二的話）主圖換成你的照片
- diff：只動 `web-lab/src/data.js` 與 `web-lab/public/images/`
- Git：**說得出 `modified` 和 `untracked` 的差別**
- commit：`git status` 乾淨
- human review：你親眼看過畫面與 diff，不是只相信 AI 說完成

→ 下一步：打開 [`STEP-03-github-upload.md`](./STEP-03-github-upload.md)，把 main 和 feature branch 推上 GitHub。
