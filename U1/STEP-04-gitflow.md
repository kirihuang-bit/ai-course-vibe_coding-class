# U1 · STEP 04 ｜ Git flow：不要只是會 commit，要知道自己在哪條線上

> **這一步完成物**：你能說清楚 main、feature branch、diff、commit、origin、push 的關係。

## 0. 先弄懂「分支」是什麼

> **📖 名詞：分支（branch）**
>
> **分支 ＝ 一條「改動的時間線」。**
>
> 想像你在寫講義：
>
> - **`main`** 是**已經印好、發給大家的那一份**。它必須隨時是可用的。
> - **你開的 feature 分支**，是你自己的**草稿本**。
>
> 你在草稿本上怎麼塗改、寫壞、整頁劃掉，都**不會影響到已經發出去的那份講義**。
> 等草稿改好了、也有人看過了，才把內容抄回正式版。
>
> 這就是為什麼「不要直接在 main 上改」——不是規矩龜毛，
> 是因為 **main 壞掉會影響到所有人，而草稿壞掉只影響你自己**。

### 我現在到底該在哪個分支？

這是初學者最常迷路的地方。**不用背指令，記住這張判斷表就好**：

| 我正要做什麼 | 我應該在 | 為什麼 |
|---|---|---|
| 只是把專案跑起來看看、讀程式碼 | 哪裡都可以 | 你沒有要改東西 |
| **要動手改檔案** | **自己的 feature 分支** | 改壞了不會弄髒 main |
| 要把改好的東西交出去 | 從 feature 分支發 PR（見第 5 節） | 讓人先看過，再併回 main |
| 要拿到別人最新的進度 | 先切回 `main` 再更新 | main 才是大家共同的基準 |

> **一句話心法：**
> **`main` 是給別人看的，feature 是給自己試的。要動手，就先開一條自己的線。**

**怎麼確認自己現在在哪條線上**：

```bash
git branch --show-current
```

跑完會印出你目前所在的分支名。**動手改任何檔案之前，養成先跑這一行的習慣。**

## 1. 先看自己在哪個分支

```bash
git branch --show-current
git status
git remote -v
```

你應該在：

```text
feature/u1-first-edit
```

如果你在 `main`，先停下來問老師。C1 要練的是：不要直接在 main 上亂改。

## 2. 這就是今天的 Git flow

```text
local main
  |
  | git switch -c feature/u1-first-edit
  v
local feature/u1-first-edit
  |
  | 修改 web-lab/src/data.js
  | git diff
  | git add
  | git commit
  v
一筆可回溯的小修改
  |
  | git push -u origin main
  | git push -u origin feature/u1-first-edit
  v
GitHub origin
  ├─ main
  └─ feature/u1-first-edit
```

今天不急著 merge。先學會「小範圍修改 → 看 diff → commit → push」。

> **📖 名詞：merge、PR / MR——這條線最後會通到哪裡**
>
> 你的草稿本（feature 分支）總有一天要回到正式版（main）。那個動作叫 **merge（合併）**。
>
> **merge** ＝ 把你 feature 分支上的改動**併**回 main。
>
> 但在真正的團隊裡，**幾乎沒有人會自己直接 merge**。標準做法是先發一個：
>
> **PR / MR** ＝「我想把這些改動併進去，**麻煩你先看一下**」。
>
> - GitHub 叫 **Pull Request（PR）**
> - GitLab 叫 **Merge Request（MR）**
> - **是同一件事的兩種叫法**，看到哪個都別緊張
>
> 發出 PR 之後，別人可以看你的 diff、留言、要求你改，**通過了才會被併進 main**。
>
> **為什麼要多這一道手續？**
>
> 因為 PR 就是把「**人要先看過**」變成一種制度——
> 正好就是這門課從第一天講到最後一天的那句話：
>
> > **「AI 做出來不算完成，人驗收過才算完成。」**
>
> 你在 U2 會請 AI 幫你改 code，然後自己扮演 reviewer 檢查它。
> **那件事在業界的正式版本，就叫 PR。**
>
> U1 不做 merge（你現在只有一個人，也還沒要併回去），但你要知道這條線最後通到哪裡。

> **📖 名詞：Gitflow**
>
> 標題那個 `Git flow` 不是某個指令，而是「**大家講好要怎麼用分支**」的一套規矩：
> 哪條線是正式版、新功能要開在哪、什麼時候可以併回去。
>
> 不同團隊規矩不太一樣。這門課用的是最簡單的一種：**main ＋ feature 分支**。

## 3. local 和 remote 差在哪

| 名詞 | 代表什麼 |
|---|---|
| local branch | 你電腦裡的 branch |
| remote branch | GitHub 上的 branch |
| origin | 你幫 GitHub repo 取的遠端名字 |
| push | 把本機 commit 送到 GitHub |
| `-u` | 記住本機 branch 對應哪個遠端 branch，下次可以直接 `git push` |

## 4. 用 Git 看剛剛那筆 commit

```bash
git log --oneline -5
git show --stat --oneline HEAD
```

你應該看到最新 commit 訊息類似：

```text
練習修改 GYOZA WOOD 首頁標題
```

而且 `show --stat` 只出現：

```text
web-lab/src/data.js
```

## 5. Git flow 的人審問題

每次 commit 前問四題：

1. 我現在在哪個 branch？
2. 我改了哪些檔案？
3. diff 裡有沒有意外改動？
4. commit message 是否講得出「為什麼改」？
5. 這個 branch 有沒有 push 到 GitHub？

→ 下一步：打開 [`STEP-05-ai-agents.md`](./STEP-05-ai-agents.md)，讓 Claude Code / Codex 幫你讀專案、review diff，但不讓它亂改。
