# U3 · 驗收單

## 訂單看板（會動）

- [ ] 按「開始營業」後，訂單持續進來、KPI 跳動、庫存自動往下掉
- [ ] 「暫停」能凍結畫面、「重置」能回到乾淨起點
- [ ] DevTools Network 看得到每 3 秒一次的 `GET /api/orders`，看得懂裡面的 JSON 大致長怎樣
- [ ] 在「備料水位」對**韭菜**按兩次「盤點 −5」，那一列變成「需要補貨」；繼續按到負數變「數字有誤」
- [ ] 說得出為什麼教材指定韭菜：不同原料的安全量差很多（韭菜 5、醬料包 200），不是程式有問題
- [ ] 說得出 `OrderBoard.jsx` 是 component，`styles.css` 管狀態樣式
- [ ] 沒開 dev 後端（build/preview）時，看板會退回靜態範例，不會白屏

## LINE Flex 主線（三種訊息）

- [ ] 說得出 `API-FLOW.md` 裡 mock send 的資料流：Browser → `/api/send-line-flex` → 本機後端 → LINE sender script → mock result
- [ ] 說得出 webhook 是 LINE Platform 主動 POST 回 bot server，方向和 push API（以及看板的輪詢）相反
- [ ] 說得出 token / env var 為什麼不能進前端或 commit
- [ ] 「訂單資訊」「庫存警示」「營運異常」三個範本都能切換，且顏色不同（藍/琥珀/紅）
- [ ] 按「載入資料」後，畫面欄位與資料來源一致
- [ ] 按「檢查資料合約」看到綠色通過
- [ ] 按「生成 Flex 預覽」看到對應顏色的 LINE 卡片，也能切 JSON
- [ ] 未勾人工審核時，推播按鈕不可按
- [ ] 勾選人工審核後，推播按鈕可按
- [ ] 按推播後看到 `[mock] LINE_REAL_SEND is not 1, no request sent.`
- [ ] DevTools Network 只看到 `/api/send-line-flex`，沒有前端直接呼叫 `api.line.me`
- [ ] **三種類型都各走完一次五道閘門**
- [ ] 說得出三種的資料來源，以及**為什麼沒開店時「庫存警示」載不到**
- [ ] 在 Network 搜尋 `line.me` **搜不到**，並說得出「搜不到就是證據」

## ReAct 修錯

- [ ] 把 `risk_level` 改成「嚴重」後，紅色擋牌出現（「營運異常」範本）
- [ ] CLI `node line-lab/sendLineAlert.js --flex` 也被同一個合約擋下
- [ ] ReAct 卡先分析不改檔
- [ ] 放行後只做最小修正
- [ ] 修好後 build 通過

## 防線的極限（STEP 03 第 6、7 節）

- [ ] 自己挑一種壞法弄壞過，**不看教材**讀出擋牌說了什麼
- [ ] ⭐ 說得出**哪一種錯合約擋不住**（型別不對，例如 `anomaly_count` 改成文字）
- [ ] 看過 `total_revenue` 改成文字後卡片變成 `NT$非數值`，且**沒有任何紅字提醒**
- [ ] 說得出那時候**只有第 4 道閘門的人工審核擋得住**
- [ ] 貼過「幫我讓『嚴重』也能通過」那張卡，**自己寫過一次拒絕**
- [ ] 說得出拆掉檢查規則的三個後果：警報器沒了、雙胞胎破了、原本的問題還在
- [ ] 全部弄壞的地方都改回來了，`git diff` 乾淨

## DoD 對照

| 驗收面向 | 這堂的標準 |
|---|---|
| 畫面 | 看板會動、三種顏色的 Flex 預覽都正常、擋牌能出現也能消失 |
| 輸出 | `[mock]`、contract error、ReAct 格式、Network request |
| diff | 只動允許檔案 |
| build | `npm run build` 通過 |
| human review | checkbox 是你自己勾的、Minimal Patch 是你放行的 |
