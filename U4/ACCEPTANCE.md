# U4 · 驗收單

## Skills

- [ ] `.claude/commands/ops-check.md` 建立完成，`/ops-check` 或等價 prompt 可用
- [ ] `.claude/commands/ship-check.md` 建立完成，`/ship-check` 或等價 prompt 可用
- [ ] 說得出 Skill 是「寫成固定指令的 SOP」，不是每次重講一遍

## MCP

- [ ] Chrome DevTools MCP：驗收過 console error、首頁插畫與 favicon、canvas 動畫、三個推播範本，截圖只是附帶證據；失敗則用人工 F12 保底
- [ ] Context7 MCP：查過一次最新文件，答案有來源
- [ ] Codebase Memory MCP：回答過專案檔案關係問題，也問過一次「改這裡會影響哪裡」
- [ ] 說得出 MCP 權限三問：能讀什麼、能不能寫、會不會碰正式資料

## Astro 技術 blog

- [ ] 骨架八節都填完了：搜尋 `寫在這裡` **搜不到**
- [ ] 提示區塊都刪乾淨了：搜尋 `要回答` **搜不到**
- [ ] `title` 與 `summary` 已改成自己的（`summary` 不是「待填」）
- [ ] **每一段至少有一個別人查得到的東西**：檔名、數字、指令輸出、或截圖
- [ ] ⭐ 第 5 節寫了**你自己在 U3 發現的那個限制**，不是抄流程
- [ ] 第 6 節每一項證據都配了一句「它證明了什麼」，不是只貼圖
- [ ] 第 7 節寫了**你真的擋下 AI 的那一次**，不是只列 AGENTS.md 這些名詞
- [ ] 公開前檢查：沒有 token、沒有個資、沒有未授權的圖片
- [ ] `cd blog-lab && npm run build` 通過
- [ ] GitHub Pages Source 選 GitHub Actions
- [ ] `Deploy Astro Blog to GitHub Pages` workflow 成功
- [ ] 公開網址打得開，文章連結與樣式正常

## 最終繳交（整門課）

1. GYOZA WOOD repo：首頁、備料控制台、訂單看板、LINE 推播中心可運作。
2. 一份 LINE Flex mock payload 或截圖。
3. 自建 `/ops-check`、`/ship-check` 與三個 MCP 的使用證據或保底驗收證據。
4. 一篇已部署的 Astro 技術 blog，能說明自己如何拆題、開發、驗證、交付。

## DoD 對照

| 驗收面向 | 這堂的標準 |
|---|---|
| 畫面 | GYOZA WOOD 系統回歸正常，blog 可預覽且可公開打開 |
| 輸出 | Skill 指令回報、MCP 回報(console/影響範圍/文件出處) |
| build | web-lab build + blog build + GitHub Pages workflow |
| human review | 推播內容與 blog 內容都由人審核 |
