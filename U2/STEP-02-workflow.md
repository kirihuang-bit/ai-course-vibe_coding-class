# U2 · STEP 02 ｜ planner → 人審 → implementer → reviewer

> 你要練的是「管理 AI 做小範圍程式修改」，不是讓 AI 自由發揮。

## 1. 今日任務

在「備料控制台」的 action queue 裡新增一條規則：

> 如果目前有 **LINE OA 通路且尚未取餐** 的訂單，action queue 要多顯示一條「LINE OA 訂單需要主動聯絡客人」。

建議顯示內容：

```text
title: LINE OA 訂單需要主動聯絡客人
detail: 目前有 N 筆 LINE OA 訂單尚未取餐，請先確認客人與 ETA
level: warning
```

## 2. 先進 Plan Mode

貼 `PROMPT-CARD.md` 的 planner 卡。AI 只能回 A-F 計畫，不能改檔。

你要檢查四件事：

1. 它是否只打算改允許檔案？
2. 它是否沒有新增套件？
3. 它是否沒有改 `package.json`？
4. 它是否沒有重構整個後台？

四題都安全，才放行 implementer。

## 3. 放行實作

貼 implementer 卡。完成後檢查：

```bash
git status
git diff -- web-lab/src/shopLogic.js
cd web-lab
npm run build
```

### 怎麼檢查 AI 寫出來的 code（你不用看懂整段）

打開 `web-lab/src/shopLogic.js`，看 `C2-HOLE` 附近新增的那幾行。

**你不需要看懂每一個符號，只要找關鍵字。** 逐項對：

| 要找什麼 | 為什麼要找它 | 找不到代表 |
|---|---|---|
| `orderItems` | 資料是從**訂單資料**來的 | 它可能自己編了資料 |
| `.filter(` | 有做「**篩選**」這個動作 | 它可能沒有真的挑，只是寫死 |
| `'LINE OA'` | 通路這個條件在 | 少一個條件，數字會偏大 |
| `'已取餐'` | 取餐狀態這個條件在 | 同上 |
| `.length` | 顯示的數字是「**數出來的個數**」 | 數字可能是它自己打的 |

**再反過來找一次**：新增的那幾行裡，有沒有**直接出現一個數字**（例如 `3`）？

> **有 → 不合格。** 那代表數字是它打上去的，不是算出來的。
> 資料一變，畫面就會說謊。

**對不上怎麼辦**：不要自己動手改。**把上面這張表貼回去給 AI**，
告訴它哪一項找不到、要它重做。這也是在練「怎麼把驗收標準講清楚」。

畫面驗收：

1. 回到「備料控制台」。
2. action queue 裡看到「LINE OA 訂單需要主動聯絡客人」。
3. 原本的低庫存與缺料訂單提醒仍在。

## 4. reviewer

貼 reviewer 卡，要求 AI 用 Pass/Block 回報。

人審重點：

- diff 是否只動 `shopLogic.js`
- 新規則是否讀 `orderItems`，不是手寫假資料
- build 是否通過
- C3 的「訂單看板」與「LINE 推播中心」沒有被改壞

## 5. 順手截一張圖（U4 會用到）

畫面還開著的時候，**把備料控制台的 action queue 截一張圖**，存到：

```text
blog-lab/public/images/
```

建議檔名 `shop-console.png`（**英文小寫**，理由見 U1 的 `PITFALL.md`）。

> **為什麼現在截？**
>
> U4 最後要寫一篇技術紀錄，需要七張截圖，其中就有這一張。
> 現在你正好開著這個畫面，**順手兩秒**；
> 到了 U4 才回頭補，你得重新啟動專案、重跑一次 C2 的修改才截得到。
>
> 這也是一個工作習慣：**證據要在現場收，不要事後補。**

## 6. commit

```bash
git add web-lab/src/shopLogic.js
git commit -m "新增 LINE OA 訂單主動聯絡客人規則"
```

收束：AI 做出來不算完成，畫面、diff、build、reviewer 都過才算。

→ 下一步：[`STEP-03-review-drills.md`](./STEP-03-review-drills.md)。
剛剛 AI 大概做對了——接下來要練的是**它做錯的時候你抓不抓得到**。

---

## 保底參考答案（卡超過 15 分鐘再看）

> **先別急著看。** 這一堂要練的是「**判斷 AI 交出來的東西對不對**」，
> 不是「把正確答案抄進去」。你直接抄了，這堂課就沒發生。
>
> **真的卡住了**（AI 一直寫錯、或你看不出哪裡不對），再往下看，
> 用它來**對照**你手上那一版差在哪。

下面是其中一種寫得對的版本——**不是唯一解**。AI 寫出不一樣但同樣通過上面五項檢查的版本，一樣算過。

```js
const pendingLineOrders = orderItems.filter(
  (order) => order.channel === 'LINE OA' && order.status !== '已取餐',
);

if (pendingLineOrders.length > 0) {
  actions.push({
    level: 'warning',
    title: 'LINE OA 訂單需要主動聯絡客人',
    detail: `目前有 ${pendingLineOrders.length} 筆 LINE OA 訂單尚未取餐，請先確認客人與 ETA`,
  });
}
```

對照一下五項檢查，它們都在：
`orderItems` ✅　`.filter(` ✅　`'LINE OA'` ✅　`'已取餐'` ✅　`.length` ✅
而且從頭到尾**沒有出現任何一個寫死的數字**。

