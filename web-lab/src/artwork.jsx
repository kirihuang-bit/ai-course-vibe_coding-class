// 餃木 GYOZA WOOD 的手繪 SVG 插畫。這個檔只放圖,沒有任何邏輯與資料。
// 今天不用改這裡 —— 想換首頁主圖的話,改 data.js 的 heroImage 就好(見 U1/STEP-02)。
//
// 為什麼是 SVG 而不是照片:純程式碼、沒有外部檔案、離線可用、放大不失真,
// 而且顏色直接吃 styles.css 的色票,換品牌色時圖也跟著變。

// 共用色:跟 styles.css 的 --accent / --sand 同一組暖色系
const WRAPPER = '#f5e0b8'; // 麵皮
const WRAPPER_DARK = '#e6cb96'; // 麵皮陰影
const SEAR = '#d98324'; // 煎面
const SEAR_DEEP = '#b8641a'; // 焦香處
const PLEAT = '#c9a86a'; // 摺痕

// 一顆鍋貼。x/y 是左上角,s 是縮放倍率(1 = 約 64×40)。
function Gyoza({ x = 0, y = 0, s = 1, rotate = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) rotate(${rotate})`}>
      {/* 深色描邊:在深色鍋面上把餃子的輪廓拉開,不然會糊在一起 */}
      <path d="M0 26C0 12 12 2 30 2s30 10 30 24c0 4.6-13.4 7.6-30 7.6S0 30.6 0 26z" fill="none" stroke="#141b26" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M0 26C0 12 12 2 30 2s30 10 30 24z" fill={WRAPPER} />
      <path d="M0 26C0 12 12 2 30 2c6 0 11 1 15 3-12 1-21 10-22 21z" fill={WRAPPER_DARK} opacity="0.55" />
      {/* 煎面:加厚一點,金黃焦香是鍋貼最好認的特徵 */}
      <path d="M0 26h60c0 5.4-13.4 9-30 9S0 31.4 0 26z" fill={SEAR} />
      <path d="M6 31c5.5 2.4 14 3.7 24 3.7s18.5-1.3 24-3.7c-4.5 2.7-13.6 4.4-24 4.4S10.5 33.7 6 31z" fill={SEAR_DEEP} opacity="0.75" />
      <g stroke={PLEAT} strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M13 11.5v13" />
        <path d="M23 7.5v17" />
        <path d="M37 7.5v17" />
        <path d="M47 11.5v13" />
      </g>
    </g>
  );
}

// Hero 主視覺:煎台上的五顆鍋貼 + 蒸氣。
// 放在 .site-hero 的右側,畫在深色遮罩之上、文字之下(見 styles.css 的 .hero-art)。
export function GyozaPan() {
  return (
    <svg className="hero-art" viewBox="0 0 520 420" role="presentation" aria-hidden="true">
      {/* 蒸氣:三道,由 CSS 做上升動畫;prefers-reduced-motion 會關掉 */}
      <g className="hero-steam" stroke="#fff6e6" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.72">
        <path className="s1" d="M190 132c-16-20 16-30 0-52" />
        <path className="s2" d="M262 112c-18-24 18-34 0-58" />
        <path className="s3" d="M334 132c-16-20 16-30 0-52" />
      </g>

      {/* 鍋子把手 */}
      <rect x="440" y="266" width="74" height="20" rx="10" fill="#141b26" />

      {/* 鍋身:外緣 + 內鍋面 */}
      <ellipse cx="262" cy="276" rx="222" ry="104" fill="#141b26" />
      <ellipse cx="262" cy="268" rx="222" ry="104" fill="#232c3a" />
      <ellipse cx="262" cy="266" rx="196" ry="88" fill="#2f3948" />

      {/* 鍋面反光 */}
      <ellipse cx="196" cy="232" rx="86" ry="30" fill="#ffffff" opacity="0.06" />

      {/* 五顆鍋貼:後排三顆、前排兩顆。前排放大一點做出景深。 */}
      <Gyoza x={104} y={196} s={1.42} />
      <Gyoza x={212} y={186} s={1.42} />
      <Gyoza x={320} y={196} s={1.42} />
      <Gyoza x={150} y={258} s={1.56} />
      <Gyoza x={268} y={258} s={1.56} />
    </svg>
  );
}

// 課程卡圖示:製作四階段 麵皮 → 包餡 → 煎製 → 出餐。
// 對應 U1→U4,也呼應訂單看板的四個站點(接單/包餡/煎製/取餐)。
const STAGES = {
  // 麵皮:擀麵棍(含兩端握把)壓在一張攤平的圓皮上
  wrapper: (
    <>
      <ellipse cx="24" cy="33" rx="16.5" ry="7.5" fill={WRAPPER} stroke={PLEAT} strokeWidth="2" />
      <ellipse cx="24" cy="33" rx="8" ry="3.4" fill="none" stroke={PLEAT} strokeWidth="1.5" opacity="0.55" />
      <rect x="10" y="13" width="28" height="8" rx="4" fill={SEAR} />
      <rect x="3.5" y="15.5" width="7" height="3" rx="1.5" fill={SEAR_DEEP} />
      <rect x="37.5" y="15.5" width="7" height="3" rx="1.5" fill={SEAR_DEEP} />
    </>
  ),
  // 包餡:一球內餡坐在半開的碗狀麵皮裡
  fill: (
    <>
      <circle cx="24" cy="21" r="9.5" fill={SEAR} />
      <circle cx="20.5" cy="17.5" r="2.8" fill={SEAR_DEEP} opacity="0.45" />
      <path d="M6 22a18 18 0 0 0 36 0z" fill={WRAPPER} stroke={PLEAT} strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 22h36" stroke={PLEAT} strokeWidth="2.6" strokeLinecap="round" />
    </>
  ),
  // 煎製:鍋子 + 蒸氣
  sear: (
    <>
      <path d="M8 28h30v3c0 6-6.7 10-15 10S8 37 8 31z" fill="#2f3948" />
      <rect x="37" y="27" width="11" height="4" rx="2" fill="#2f3948" />
      <path d="M11 28h24" stroke={SEAR} strokeWidth="3.5" strokeLinecap="round" />
      <g stroke={PLEAT} strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M17 20c-4-4 4-6 0-11" />
        <path d="M28 20c-4-4 4-6 0-11" />
      </g>
    </>
  ),
  // 出餐:外帶盒 + 一顆完成的鍋貼
  serve: (
    <>
      <path d="M9 22h30l-3 18a2 2 0 0 1-2 1.7H14a2 2 0 0 1-2-1.7z" fill={WRAPPER} stroke={PLEAT} strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 30h24" stroke={PLEAT} strokeWidth="1.6" opacity="0.6" />
      <path d="M15 22c0-6 4-9.5 9-9.5s9 3.5 9 9.5z" fill={SEAR} />
      <rect x="6" y="19" width="36" height="4" rx="2" fill={SEAR_DEEP} opacity="0.35" />
    </>
  ),
};

export function StageIcon({ stage }) {
  const art = STAGES[stage];
  if (!art) return null;
  return (
    <svg className="module-icon" viewBox="0 0 48 48" role="presentation" aria-hidden="true">
      {art}
    </svg>
  );
}
