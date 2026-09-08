# U1 · STEP 02 ｜ 第一次可見修改、第一次 Git 快照

> 目標：做兩個小練習。**練習一**改一個安全資料檔、看到熱更新；**練習二**加一張自己的照片。
> 兩個練習在 Git 眼中是不同的事（改既有檔 vs 加新檔），這正是這一步要你看懂的重點。

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

> **📖 名詞：熱更新（hot reload）**
>
> 一般改網頁要自己按 F5 重新整理才看得到新的。
> **熱更新**是：你一存檔，**畫面自己就變了**，不用重新整理。
>
> 因為 `npm run dev` 開的那個伺服器一直在背景**盯著你的檔案**，
> 一發現有存檔，就馬上把新內容推到瀏覽器。
>
> **存了檔但畫面沒變？** 依序確認：
> ① 真的存檔了嗎（VS Code 分頁上還有小圓點就是還沒存）
> ② Terminal 裡的 dev server 還在跑嗎
> ③ 都對的話再按一次 F5

## 3. 看 diff，不要盲目 commit

```bash
git status
git diff -- web-lab/src/data.js
```

**你應該看到**：只有 `web-lab/src/data.js` 一小段文字改動。沒有動到 `uiEffects.jsx`、`package.json`、`Dashboard.jsx`。

### diff 怎麼看

`diff` 就是「**差異**」：把改之前和改之後擺在一起，只顯示不一樣的地方。
你剛剛那筆改動，實際跑出來會長這樣：

```diff
diff --git a/web-lab/src/data.js b/web-lab/src/data.js
index d6815dc..62f960e 100644
--- a/web-lab/src/data.js
+++ b/web-lab/src/data.js
@@ -2,7 +2,7 @@
 // C1 初學者只改這裡，就能看到畫面熱更新，不需要碰 React 元件與動畫背景。

 export const brand = {
-  name: 'GYOZA WOOD',
+  name: 'GYOZA WOOD｜小明',
   badge: 'CAMPUS GYOZA OPS',
   tagline: '把訂單、備料、LINE 通知與交付驗收收進同一個鍋貼店控制台。',
   description:
```

一行一行拆：

| 你看到的 | 意思 |
|---|---|
| `diff --git a/... b/...` | 接下來是這個檔案的差異。`a/` 是改之前，`b/` 是改之後 |
| `index d6815dc..62f960e` | Git 內部的版本編號。**看不懂沒關係，這行可以直接跳過** |
| `--- a/web-lab/src/data.js` | 「改之前」的那一份 |
| `+++ b/web-lab/src/data.js` | 「改之後」的那一份 |
| `@@ -2,7 +2,7 @@` | 位置資訊：改動發生在**第 2 行附近**。看不懂也不影響 |
| **開頭是 `-`（紅色）** | **改之前**長這樣，這行被拿掉了 |
| **開頭是 `+`（綠色）** | **改之後**長這樣，這行是新的 |
| 開頭沒有符號（灰色） | 這行**沒有改**，只是印出來讓你知道位置 |

> **⚠️ 最容易誤會的一點：Git 沒有「修改」這個動作。**
>
> 你只是改了一行字，但 diff 顯示的是**一行紅色 ＋ 一行綠色**。
> 因為在 Git 眼裡，「改一行」＝「**刪掉舊的那行，再加上新的那行**」。
>
> 看到一紅一綠成對出現，**不代表你改壞了或多改了東西**，那就是改一行的正常樣子。

### 這一步真正要你做的判斷

看 diff 不是為了看懂每個符號，是為了在 commit 之前回答**兩個問題**：

1. **動到的檔案，是不是只有我該動的？**（這次應該只有 `data.js`）
2. **改的內容，是不是我要的？**（只有 `name` 那一行，其他都沒動）

兩題都「是」，才可以進下一步 commit。這兩題你以後每次交付都要問，
到 U2 讓 AI 幫你改 code 之後，會更重要。

> **💡 覺得終端機的 diff 很難讀？**
>
> VS Code 左邊有一個 **Source Control（原始檔控制）** 圖示，點進去會列出你改過的檔案。
> **點檔名**就會開一個左右並排的比對畫面，紅綠標得比終端機清楚很多。
>
> 兩種看法效果一樣，用你看得順的那個就好。

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
