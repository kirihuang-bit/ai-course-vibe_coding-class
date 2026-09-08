# U0 · STEP 03 ｜ 用規則走一遍這份專案

> **這一步完成物**：你指得出檔案樹上任何一個項目是幹嘛的，而且說得出**你是怎麼判斷的**。

## 1. 先自己判斷，再看答案

下面三題，**先自己想**，答案在下面。想不出來也沒關係，重點是你有沒有用到前兩步的規則。

### 第 1 題

`prompts/` 這個資料夾，是**全世界通用的名字**，還是**這個專案自己取的**？
你要怎麼查它是幹嘛的？

### 第 2 題

`ops-agent-lab/inventory_sample.csv` 裡面是真的庫存資料嗎？
你從**哪個字**看出來的？

### 第 3 題

`web-lab/` 和 `blog-lab/` 底下**都有** `package.json`。
為什麼要分成兩個資料夾，不能全部放在一起？

---

## 2. 答案

### 第 1 題答案

**這個專案自己取的。**

判斷法（STEP-02 第 1 節）：`prompts` 沒有對應到任何工具或公認的東西——
不像 `package.json` 是 npm 規定的、`.github/` 是 GitHub 規定的。
它只是有人覺得「這裡放 prompt」就這樣取的名字。

**所以你查網路查不到答案，只能讀這個專案的說明。**
翻根目錄的 `README.md`，會看到一行：

```text
prompts/     # 固定 prompt 卡完整版
```

> **這一題要你記住的是流程**：看到查不到的名字 → 去找 README，不要硬猜。

### 第 2 題答案

**不是真的資料，是一份範本。從 `sample` 這個字看出來的。**

`sample` / `example` / `template` 這三個字都代表「**照著它做一份自己的**」。

打開來看，它確實是一份「長什麼樣給你看」的假資料：

```text
sku,product,stock,reorder_point,unit_price,owner,channel
M001,麵皮,200,500,1,王先生,LINE OA
```

重點是那第一行——它告訴你「一份庫存表要有這七個欄位」。
`data-lab/report_template.json` 更明顯，值直接寫著「一句話:最近生意的關鍵發現」。

> **這一題要你記住的是**：檔名會告訴你「它是不是玩真的」。
> 之後你自己接手別人的專案，**不要拿 `sample` 檔當真實資料用**。

### 第 3 題答案

這一題是整包專案結構的**真正答案**。

> **一個資料夾裡有 `package.json`，代表它是一個「可以自己跑起來」的獨立小專案。**

這份專案裡有**兩個** `package.json`：

```text
web-lab/package.json     ← 一個網站：GYOZA WOOD 控制台
blog-lab/package.json    ← 另一個網站：技術部落格
```

它們**各自安裝自己的套件、各自跑起來、各自有一個 `node_modules/`**。
兩個網站用到的東西不一樣，硬湊在一起只會互相打架。

**所以——**

> 不是老師故意放很多資料夾來為難你。
> **這個 zip 裡面本來就裝了「兩個網站 ＋ 三組工具」**，
> 一個資料夾裝一件事，是最省事的做法。

`data-lab/`、`line-lab/`、`ops-agent-lab/` 沒有 `package.json`，
因為它們不是「網站」，是**放資料和小腳本的地方**。

---

## 3. 這份專案的地圖

現在你可以看懂整張圖了：

```text
ai-project-foundation-kit/          ← 根目錄（VS Code 要開這一層）
│
├── START-HERE.md  README.md        ← 大寫 .md ＝ 先讀我
│   AGENTS.md      CLAUDE.md           （AGENTS / CLAUDE 是 AI 的工作守則）
│
├── U0/ U1/ U2/ U3/ U4/             ← 教材：你每堂課要打開的講義
│
├── web-lab/        有 package.json，自己跑得起來 ── 作品本體（U1–U3）
├── blog-lab/       有 package.json，自己跑得起來 ── 技術部落格（U4）
│
├── data-lab/       資料：report.json / orders.json（U2–U3）
├── line-lab/       LINE 推播腳本（密碼放這裡的 .env）（U3）
├── ops-agent-lab/  Python 自動巡檢（U4）
├── prompts/        固定 prompt 卡（U1–U4 都會用）
│
├── start-m11.bat       ← 雙擊就跑（Windows）
├── start-m11.command   ← 雙擊就跑（macOS）
│
├── .github/  .claude/  .agents/    ← 點開頭：工具的，不用讀
└── .gitignore  .mcp.json           ← 點開頭：設定檔
```

另外你會看到一個 `skill/`（單數）資料夾。
那是同一份 AI 助教設定的另一種寫法，U4 才會用到，**現在不用管它**。

跑起來之後還會多出 `web-lab/node_modules/`（一萬多個檔案）——
那是 STEP-01 規則 2 的「自動長出來的」，不用看。

---

## 4. 這一步的完成定義

不是「背下這張地圖」，是**下面這三件事你做得到**：

- 隨便指檔案樹上一個項目，你說得出它屬於哪一類：
  **先讀我 / 教材 / 作品 / 工具的 / 自動長出來的 / 資料**
- 而且說得出**你是怎麼判斷的**（點開頭？在 `.gitignore` 裡？名字裡有什麼字？）
- 看到一個沒見過的資料夾，你知道**下一步該去找它的 `README.md`**

> **U0 給你的不是這份專案的答案，是一套帶得走的看法。**
> 以後你接手任何一個別人寫的專案，都是這三步：
> **先刪掉不用看的 → 再從名字猜用途 → 猜不到就找 README。**

→ 下一步：打開 [`../U1/README.md`](../U1/README.md)，正式開始 U1。
從現在起，你手上這包不再是「一堆看不懂的資料夾」了。
