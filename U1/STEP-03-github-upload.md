# U1 · STEP 03 ｜上傳到 GitHub repo

> **這一步完成物**：把本機 repo 上傳到 GitHub。C1 只做 repo 上傳，不做 GitHub Pages 部署；Pages 和 Actions 留到 U4。

## 1. 先確認本機狀態

```bash
git status
git branch --show-current
git log --oneline -5
```

你應該已經有兩種 commit：

1. `初始化 M11 專案包`
2. `練習修改 GYOZA WOOD 首頁標題`

如果 `git status` 不乾淨，先不要上傳，請先看清楚 diff。

## 2. 到 GitHub 建一個空 repo

在 GitHub 建立新 repo，名字叫做：

```text
ai-project-foundation-kit
```

注意：

- 不要勾 `Add a README file`
- 不要加 `.gitignore`
- 不要加 license

因為你本機已經有完整專案和 initial commit。GitHub repo 要保持空的，才不會第一次 push 就衝突。

## 3. 加上遠端 origin

> **📖 名詞：origin、push——以及「上傳」跟「部署」不是同一件事**
>
> 到目前為止，你的 commit **全部只存在自己這台電腦裡**。別人看不到，電腦壞了也就沒了。
> 接下來這兩個動作就是要把它送上 GitHub。
>
> | 名詞 | 意思 |
> |---|---|
> | **remote（遠端）** | 「另一台電腦上的同一個 repo」。這裡指 GitHub 上那一份 |
> | **`origin`** | 你幫那個遠端**取的代號**。之後打 `origin` 就是指「GitHub 上那份」。名字是慣例，不是規定 |
> | **`push`** | 把本機的 commit **送上去**。沒 push 之前，改動只在你電腦裡 |
>
> **⚠️ 「上傳 repo」不等於「部署網站」——這是兩件事：**
>
> | | 在做什麼 | 結果 | 哪一堂 |
> |---|---|---|---|
> | **上傳 repo** | 把**程式碼**送到 GitHub 保存 | 別人能看到你的**原始碼** | **U1（今天）** |
> | **部署** | 把網站放到一台大家都連得到的電腦上跑起來 | 別人能用**網址打開你的網站** | U4 |
>
> 還記得 STEP-01 說過 `localhost` 網址傳給別人打不開嗎？
> **「部署」就是在解決那件事。** 今天先做上傳，U4 再做部署。

把下面網址換成你自己的 GitHub repo URL：

```bash
git remote add origin https://github.com/<你的帳號>/ai-project-foundation-kit.git
git remote -v
```

你應該看到 `origin` 指向你的 GitHub repo。

## 4. 先推 main

```bash
git switch main
git push -u origin main
```

這會把「初始化 M11 專案包」推上 GitHub。

## 5. 再推 C1 練習分支

```bash
git switch feature/u1-first-edit
git push -u origin feature/u1-first-edit
```

這會把你第一次修改首頁標題的練習分支也推上 GitHub。

## 6. 到 GitHub 網頁確認

打開你的 GitHub repo，確認：

- Code 頁面看得到專案檔案。
- Branch 下拉選單看得到 `main`。
- Branch 下拉選單看得到 `feature/u1-first-edit`。
- `main` 是乾淨的起始專案。
- `feature/u1-first-edit` 有你修改首頁標題的 commit。

## 7. 為什麼不會跟 U4 打架

C1 做的是：

```text
本機 repo → GitHub 遠端 repo
```

U4 做的是：

```text
GitHub repo → GitHub Actions → GitHub Pages 公開網站
```

所以 C1 先上傳 repo 不會跟 U4 打架，反而是 U4 部署的前置條件。C1 不開 Pages、不設定 Actions，只確認 repo 能 push。

## 8. 這一步的完成定義

- GitHub 上有你的 repo。
- `origin` 設定正確。
- `main` 已 push。
- `feature/u1-first-edit` 已 push。
- GitHub 網頁能看到兩個 branch。

→ 下一步：打開 [`STEP-04-gitflow.md`](./STEP-04-gitflow.md)，把本機 branch、遠端 origin、push 的關係整理成 Git flow。
