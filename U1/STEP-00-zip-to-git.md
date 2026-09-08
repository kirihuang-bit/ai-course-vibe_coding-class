# U1 · STEP 00 ｜從 zip 建立自己的 Git repo

> **這一步完成物**：把老師給的 zip 變成你自己的本機 Git repo，並建立第一筆乾淨快照。

> **做過 [U0](../U0/README.md) 的話**，第 1、2 節（解壓縮、用 VS Code 開資料夾）你已經做完了，
> 可以直接跳到第 3 節。留在這裡是因為「開錯資料夾」是這門課的頭號地雷，多確認一次不吃虧。

## 1. 解壓縮 zip

你拿到的會是類似：

```text
ai-project-foundation-kit.zip
```

請先解壓縮，得到：

```text
ai-project-foundation-kit/
```

接下來 VS Code 要開這一層資料夾，不要開 Downloads，也不要只開 `web-lab/`。

> **📖 名詞：repo**
>
> `repo` 是 `repository` 的簡稱，中文常說「**專案倉庫**」。
> 你可以先理解成：**一個「有 Git 在幫你記錄變化」的專案資料夾**。
>
> 現在你手上這個資料夾還只是普通資料夾，Git 還沒進來。
> 這一步做完，它就會變成一個 repo——這也是為什麼這一步叫「從 zip 建立自己的 Git repo」。
>
> 這個字整門課會一直出現，先記住它就是「被 Git 管起來的專案資料夾」就夠了。

## 2. 用 VS Code 開專案根目錄

在 VS Code 選：

```text
File → Open Folder → ai-project-foundation-kit
```

左邊檔案樹應該看得到：

```text
START-HERE.md
AGENTS.md
CLAUDE.md
U1/
web-lab/
data-lab/
line-lab/
```

如果只看到 `src/`、`package.json`，代表你開到 `web-lab/` 裡面了，請重新 Open Folder。

## 3. 確認目前還不是 Git repo

打開 VS Code Terminal：

```bash
git status
```

如果你看到：

```text
fatal: not a git repository
```

這是正常的。因為你是從 zip 來的，不是 `git clone`。

## 4. 初始化 Git

> **📖 名詞：根目錄、「在根目錄執行」**
>
> **根目錄** ＝ 解壓縮後**最外層**那個資料夾，也就是 VS Code 左邊檔案樹最上面那一層。
>
> **「在根目錄執行」** ＝ 你的 Terminal 現在「站」在那個資料夾裡。
> 指令是有位置概念的：站錯地方，同樣一行指令會做出完全不同的事。
> 用 VS Code 從資料夾開啟時，Terminal 預設就站在根目錄，通常不用自己切。
>
> **怎麼確認你站對了**：在 Terminal 打 `ls`（列出目前位置有哪些東西）。
>
> - 看得到 `START-HERE.md`、`AGENTS.md`、`U1`、`web-lab` → **站對了**
> - 只看到 `index.html`、`package.json`、`src` → 你站在 `web-lab/` 裡面，**位置錯了**

在專案根目錄執行：

```bash
git init
git status
```

你應該看到很多檔案變成 untracked。這代表 Git 開始追蹤這個資料夾，但還沒有建立快照。

> **📖 名詞：untracked、快照**
>
> **untracked（未追蹤）** ＝ Git 看得到這個檔案，但**還沒開始管它**。
> Git 剛裝進來時，對所有檔案都是這個態度：我知道你在，但你還沒被我記錄。
>
> **快照** ＝ 下一步要做的 commit。就像**遊戲存檔**：
> 把「現在所有檔案長什麼樣」整包記下來，之後隨時能讀回這個時間點。
>
> 所以現在的狀態是：Git 進來了，但**還沒有任何存檔點**。

## 5. 建立 initial commit

> **📖 名詞：commit，以及「為什麼是現在」**
>
> **commit** ＝ 一個**存檔點**。把「現在所有檔案長什麼樣」整包記下來，之後隨時能回到這個時間點。
> `initial commit` 就是「第一個存檔點」。
>
> **`add` 和 `commit` 是兩個不同的動作**，分開是刻意的：
>
> | 指令 | 在做什麼 | 比喻 |
> |---|---|---|
> | `git add .` | **挑**：把要存的檔案先放進待存清單 | 把要帶走的東西先放進袋子 |
> | `git commit -m "訊息"` | **存**：真的建立存檔點，並寫一句說明 | 把袋子封起來，貼上標籤 |
>
> 分兩步是因為你不一定每次都想把所有改動一起存。這次因為是第一次，所以用 `.` 全部收進來。
>
> **為什麼是「此時此刻」要 commit？**
>
> 因為現在是**老師給你的原始狀態，還沒被你改過任何一個字**。
> 先存下這個乾淨的點，之後你改壞了、試爆了，都有一個確定回得去的地方。
>
> **這整門課敢讓你放心亂試，靠的就是這一個 commit。**
> 沒有它，你就不敢動手；有了它，改壞只是「回到剛剛」而已。

```bash
git add .
git commit -m "初始化 M11 專案包"
git branch -M main
git status
```

最後 `git status` 應該顯示乾淨，例如：

```text
nothing to commit, working tree clean
```

## 6. 如果 Git 要求設定姓名與 email

照終端機提示設定一次：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的信箱"
```

再重跑：

```bash
git commit -m "初始化 M11 專案包"
git branch -M main
```

## 7. 這一步的完成定義

- VS Code 開的是 `ai-project-foundation-kit/` 根目錄。
- `git init` 已完成。
- 有一筆 initial commit。
- 目前主要分支叫做 `main`。
- `git status` 乾淨。

→ 下一步：打開 [`STEP-01.md`](./STEP-01.md)，把 web-lab 跑起來。
