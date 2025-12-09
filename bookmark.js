(function () {
  /************************************
   * CONFIG – ZAPIET PDR UI HOOKS
   *************************************/
  const PANEL_ID = "zapietPdrAuditPanel";

  // Remove old panel if it exists
  (function removeOldPanel() {
    const old = document.getElementById(PANEL_ID);
    if (old) old.remove();
  })();

  const ZAPIET_CONFIG = {
    // Main selector for each PDR row in Zapiet’s UI
    rowSelector: ".zapiet-pdr-row", // <-- CHANGE THIS IF NEEDED

    // How to read data from each row – tweak as needed
    getVariantId(el) {
      return (
        el.getAttribute("data-variant-id") ||
        (el.querySelector(".zapiet-pdr-variant-id") || {}).textContent ||
        ""
      ).trim();
    },
    getVariantName(el) {
      return (
        (el.querySelector(".zapiet-pdr-variant-name") || {}).textContent || ""
      ).trim();
    },
    getRestaurantName(el) {
      return (
        (el.querySelector(".zapiet-pdr-location-name") || {}).textContent || ""
      ).trim();
    },
    // Product restriction date text
    getProductDates(el) {
      return (
        (el.querySelector(".zapiet-pdr-product-dates") || {}).textContent || ""
      ).trim();
    },
    // Delivery restriction date text
    getDeliveryDates(el) {
      return (
        (el.querySelector(".zapiet-pdr-delivery-dates") || {}).textContent || ""
      ).trim();
    },
    // Allow / Deny text (if visible anywhere on the row)
    getRestrictionType(el) {
      const explicit =
        (el.querySelector(".zapiet-pdr-restriction-type") || {})
          .textContent || "";
      const source = (explicit || el.textContent || "").toLowerCase();

      const hasAllow = source.includes("allow");
      const hasDeny = source.includes("deny");

      if (hasAllow && !hasDeny) return "Allow";
      if (hasDeny && !hasAllow) return "Deny";
      if (hasAllow && hasDeny) return "Mixed";
      return "";
    },
  };

  /************************************
   * MEMO VARIANTS – YOUR MASTER LIST
   *************************************/
  const MEMO_VARIANTS = [
    { id: "45317870780693", variantName: "Box of 12", productName: "Asado Roll (Pork)" },
    { id: "46420646658325", variantName: "Box of 6", productName: "Asado Roll (Pork)" },
    { id: "45317870747925", variantName: "Per Piece", productName: "Asado Roll (Pork)" },
    { id: "45746820841749", variantName: "Banana Dream", productName: "Banana Dream" },
    { id: "45317876711701", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Beef Caldereta (Large Food Order)" },
    { id: "45317876744469", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Beef Caldereta (Large Food Order)" },
    { id: "49300964999445", variantName: "Ube", productName: "Burnt Basque Cheesecake" },
    { id: "49300965032213", variantName: "Biscoff", productName: "Burnt Basque Cheesecake" },
    { id: "49300965064981", variantName: "Strawberry", productName: "Burnt Basque Cheesecake" },
    { id: "45317872484629", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Buttered Corn Rice" },
    { id: "45317872517397", variantName: "Partly Size (approxiamtely good for 12 to 15 pax)", productName: "Buttered Corn Rice" },
    { id: "45317875368213", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Buttered Vegetables" },
    { id: "45317875400981", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Buttered Vegetables" },
    { id: "45317874516245", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Cheesey Baked Macaroni (Large Food Order)" },
    { id: "45317874549013", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Cheesey Baked Macaroni (Large Food Order)" },
    { id: "45317879726357", variantName: "Chocolate Blush", productName: "Chocolate Blush" },
    { id: "45317874942229", variantName: "Family Size", productName: "Conti's Signature Salad" },
    { id: "45317870911765", variantName: "10 pax", productName: "Delivery  Bundle 1" },
    { id: "49273186943253", variantName: "30 pax", productName: "Delivery  Bundle 1" },
    { id: "45317870977301", variantName: "50 pax", productName: "Delivery  Bundle 1" },
    { id: "48331350376725", variantName: "10 pax", productName: "Delivery  Bundle 2" },
    { id: "49273185206549", variantName: "30 pax", productName: "Delivery  Bundle 2" },
    { id: "48331350442261", variantName: "50 pax", productName: "Delivery  Bundle 2" },
    { id: "45317870813461", variantName: "10 pax", productName: "Delivery  Bundle 3" },
    { id: "49273185763605", variantName: "30 pax", productName: "Delivery  Bundle 3" },
    { id: "45317870878997", variantName: "50 pax", productName: "Delivery  Bundle 3" },
    { id: "45317871763733", variantName: "10 pax", productName: "Delivery  Bundle A" },
    { id: "49273186353429", variantName: "30 pax", productName: "Delivery  Bundle A" },
    { id: "45317871862037", variantName: "50 pax", productName: "Delivery  Bundle A" },
    { id: "45317871108373", variantName: "10 pax", productName: "Delivery  Bundle B" },
    { id: "49273186451733", variantName: "30 pax", productName: "Delivery  Bundle B" },
    { id: "45317871173909", variantName: "50 pax", productName: "Delivery  Bundle B" },
    { id: "45317871010069", variantName: "10 pax", productName: "Delivery  Bundle C" },
    { id: "49273186877717", variantName: "30 pax", productName: "Delivery  Bundle C" },
    { id: "45317871075605", variantName: "50 pax", productName: "Delivery  Bundle C" },
    { id: "45317872419093", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Garlic Rice" },
    { id: "45317872451861", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Garlic Rice" },
    { id: "45317874876693", variantName: "Family Size", productName: "Homemade Caesar Salad" },
    { id: "45317872353557", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Japanese Rice" },
    { id: "45317872386325", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Japanese Rice" },
    { id: "49526281437461", variantName: "10 pax", productName: "Jr Spaghetti & Shanghai (for 10 pax)" },
    { id: "49526281961749", variantName: "10 pax", productName: "Jr. Mac n Cheese & Chicken" },
    { id: "49526281830677", variantName: "10 pax", productName: "Jr. Mac n Cheese & Shanghai" },
    { id: "45317874057493", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Lasagna (Large Food Order)" },
    { id: "45317874090261", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Lasagna (Large Food Order)" },
    { id: "49526281240853", variantName: "10 pax", productName: "Lasagna & Chicken (for 10 pax)" },
    { id: "49526280651029", variantName: "10 pax", productName: "Lasagna & Shanghai (for 10 pax)" },
    { id: "45317870223637", variantName: "Box of 25", productName: "Mamonitos" },
    { id: "45317874843925", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Mango Royale Salad (Large Food Order)" },
    { id: "45317872746773", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Pancit Bam-I" },
    { id: "45317872779541", variantName: "Partly Size (approxiamtely good for 12 to 15 pax)", productName: "Pancit Bam-I" },
    { id: "49526279930133", variantName: "10 pax", productName: "Pancit Bam-I & Chicken (for 10 pax)" },
    { id: "49526279012629", variantName: "10 pax", productName: "Pancit Bam-I & Shanghai (for 10 pax)" },
    { id: "45317872582933", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Pancit Palabok (Large Food Order)" },
    { id: "45317872615701", variantName: "Partly Size (approxiamtely good for 12 to 15 pax)", productName: "Pancit Palabok (Large Food Order)" },
    { id: "45317873697045", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Pasta Carbonara (Large Food Order)" },
    { id: "45317873729813", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Pasta Carbonara (Large Food Order)" },
    { id: "49526280126741", variantName: "10 pax", productName: "Pesto Pasta & Shanghai (for 10 pax)" },
    { id: "45317879300373", variantName: "Petite Choco Overload", productName: "Petite Choco Overload" },
    { id: "48739436265749", variantName: "Petite Strawberry Shortcake", productName: "Petite Strawberry Shortcake" },
    { id: "48739453174037", variantName: "Petite Ube Custard", productName: "Petite Ube Custard" },
    { id: "46460520988949", variantName: "Family Size (50 pcs)", productName: "Shanghai Bites" },
    { id: "46460521021717", variantName: "Party Size (100pcs)", productName: "Shanghai Bites" },
    { id: "45317877661973", variantName: "Family Size (25 pcs approxiamtely good for 6 to 8 pax)", productName: "Shanghai Rolls" },
    { id: "45317877694741", variantName: "Party Size (50 pcs approxiamtely good for 12 to 15 pax)", productName: "Shanghai Rolls" },
    { id: "49526275277077", variantName: "10 pax", productName: "Sotanghon & Shanghai (for 10 pax)" },
    { id: "45317879038229", variantName: "Regular (For Pick-up Only)", productName: "Strawberry Shortcake" },
    { id: "45317879070997", variantName: "Mini (Maximum of 4km distance for delivery)", productName: "Strawberry Shortcake" },
    { id: "45317874647317", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Symphony Salad (Lagre Food Order)" },
    { id: "45317875040533", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Tofu Steak" },
    { id: "45317875073301", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Tofu Steak" },
    { id: "45317875040533", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Tofu Steak" },
    { id: "45317875073301", variantName: "Partly Size (approxiamtely good for 12 to 15 pax)", productName: "Tofu Steak" },
    { id: "46231334781205", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Truffle Mushroom Linguine (Large Food Order)" },
    { id: "46231334813973", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Truffle Mushroom Linguine (Large Food Order)" },
    { id: "45317878939925", variantName: "Regular (Maximum of 8km distance for delivery)", productName: "Ube Custard" },
    { id: "45317878972693", variantName: "Mini (Maximum of 8km distance for delivery)", productName: "Ube Custard" },
  ];

  /************************************
   * HELPERS – DATE FORMATTING
   *************************************/
  function formatDateList(raw) {
    if (!raw) return "";

    // Look for ISO-style dates (YYYY-MM-DD)
    const matches = raw.match(/\d{4}-\d{2}-\d{2}/g);
    if (!matches) {
      // If no recognizable dates, return raw text
      return raw.trim();
    }

    // Unique + sort
    const unique = Array.from(new Set(matches)).map((d) => ({
      iso: d,
      date: new Date(d + "T00:00:00"),
    }));
    unique.sort((a, b) => a.date - b.date);

    const MONTHS = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    function fmt(d) {
      const month = MONTHS[d.date.getMonth()];
      const day = d.date.getDate();
      return month + String(day);
    }

    // Group consecutive dates
    const groups = [];
    let start = unique[0];
    let prev = unique[0];

    for (let i = 1; i < unique.length; i++) {
      const cur = unique[i];
      const diffDays = (cur.date - prev.date) / (1000 * 60 * 60 * 24);
      if (diffDays === 1) {
        prev = cur;
      } else {
        groups.push([start, prev]);
        start = cur;
        prev = cur;
      }
    }
    groups.push([start, prev]);

    const tokens = groups.map(([a, b]) => {
      if (a.iso === b.iso) {
        return fmt(a) + ";";
      }
      const sameMonth = a.date.getMonth() === b.date.getMonth();
      const first = fmt(a);
      const second = sameMonth
        ? MONTHS[b.date.getMonth()] + String(b.date.getDate())
        : fmt(b);
      return first + "-" + second + ";";
    });

    return tokens.join(" ");
  }

  function combineDatesAndType(rawDates, type) {
    const formatted = formatDateList(rawDates || "");
    if (!type) return formatted;
    if (!formatted) return "[" + type + "]";
    return formatted + " [" + type + "]";
  }

  /************************************
   * SCRAPE ZAPIET PDR UI
   *************************************/
  function collectZapietData() {
    const rows = Array.from(
      document.querySelectorAll(ZAPIET_CONFIG.rowSelector)
    );
    const data = [];

    rows.forEach((rowEl) => {
      const variantId = ZAPIET_CONFIG.getVariantId(rowEl);
      if (!variantId) return;

      const variantName = ZAPIET_CONFIG.getVariantName(rowEl);
      const restaurantName = ZAPIET_CONFIG.getRestaurantName(rowEl);
      const productDatesRaw = ZAPIET_CONFIG.getProductDates(rowEl);
      const deliveryDatesRaw = ZAPIET_CONFIG.getDeliveryDates(rowEl);
      const restrictionType = ZAPIET_CONFIG.getRestrictionType(rowEl);

      data.push({
        variantId: String(variantId),
        variantName,
        restaurantName,
        productDatesRaw,
        deliveryDatesRaw,
        restrictionType,
      });
    });

    return data;
  }

  const zapietData = collectZapietData();
  const zapietById = {};
  zapietData.forEach((z) => {
    const key = String(z.variantId);
    if (!zapietById[key]) zapietById[key] = [];
    zapietById[key].push(z);
  });

  const rowsData = MEMO_VARIANTS.map((memo) => {
    const id = String(memo.id);
    const zapietRecords = zapietById[id] || [];
    const z = zapietRecords[0] || null;

    const restaurantName = z ? z.restaurantName : "";
    const productDates = z
      ? combineDatesAndType(z.productDatesRaw, z.restrictionType)
      : "";
    const deliveryDates = z
      ? combineDatesAndType(z.deliveryDatesRaw, z.restrictionType)
      : "";
    const missing = !z;
    const hasRestrictions = !!(productDates || deliveryDates);

    return {
      variantId: id,
      variantName: memo.variantName,
      productName: memo.productName,
      restaurantName,
      productDates,
      deliveryDates,
      missing,
      hasRestrictions,
    };
  });

  /************************************
   * BUILD FULLSCREEN DARK DASHBOARD UI
   *************************************/
  const panel = document.createElement("div");
  panel.id = PANEL_ID;
  panel.style = [
    "position:fixed",
    "top:0",
    "left:0",
    "width:100vw",
    "height:100vh",
    "background:#0B0E11",
    "color:#E6E6E6",
    "z-index:999999",
    "font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    "box-sizing:border-box",
    "padding:14px"
  ].join(";");

  panel.innerHTML = `
    <div style="
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-bottom:12px;
      background:#0E1115;
      padding:10px 16px;
      border-radius:8px;
      border:1px solid #1F2933;
    ">
      <div style="font-size:16px;font-weight:600;letter-spacing:.5px;display:flex;align-items:center;gap:8px;">
        <span>🥮</span>
        <span>Zapiet Product Date Restrictions – Memo Audit</span>
      </div>
      <button id="zapietPdrClose"
        style="background:#7B1E1E;color:#fff;border:none;padding:6px 14px;
        border-radius:999px;cursor:pointer;font-weight:600;font-size:12px;">
        CLOSE ✖
      </button>
    </div>

    <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      <div style="display:flex;align-items:center;gap:8px;">
        <label for="zapietPdrFilter" style="font-size:12px;color:#C9C9C9;">Filter:</label>
        <select id="zapietPdrFilter"
          style="font-size:12px;padding:6px 8px;border-radius:6px;
          border:1px solid #374151;background:#111418;color:#E5E7EB;">
          <option value="all">All variants</option>
          <option value="missing">Missing in Zapiet PDR</option>
          <option value="withRestrictions">With restrictions</option>
          <option value="noRestrictions">No restrictions</option>
        </select>
      </div>

      <input id="zapietPdrSearch"
        placeholder="Search Variant ID / Name / Product / Restaurant / Dates…"
        style="
          flex:1;
          min-width:240px;
          padding:6px 10px;
          border-radius:6px;
          border:1px solid #374151;
          background:#0F1215;
          color:#E6E6E6;
          font-size:12px;
        ">

      <button id="zapietPdrCsv"
        style="
          background:#2A4A69;
          color:#fff;
          border:none;
          padding:6px 12px;
          border-radius:6px;
          cursor:pointer;
          font-size:12px;
          font-weight:600;
        ">
        ⬇ Download CSV
      </button>
    </div>

    <div id="zapietPdrSummary"
      style="font-size:11px;margin-bottom:8px;color:#BDBDBD;">
    </div>

    <div style="
      width:100%;
      height:calc(100vh - 140px);
      overflow:auto;
      border:1px solid #1F2933;
      border-radius:8px;
      background:#0F1215;
    ">
      <table id="zapietPdrTable"
        style="width:100%;border-collapse:collapse;font-size:11px;color:#E6E6E6;">
        <thead style="position:sticky;top:0;z-index:1;">
          <tr style="background:#111418;color:#F9FAFB;">
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Variant ID</th>
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Variant Name</th>
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Product Name</th>
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Restaurant</th>
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Pickup Restriction</th>
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Delivery Restriction</th>
            <th style="padding:6px;border-bottom:1px solid #1F2933;text-align:left;white-space:nowrap;">Missing?</th>
          </tr>
        </thead>
        <tbody id="zapietPdrTbody"></tbody>
      </table>
    </div>
  `;

  document.body.appendChild(panel);

  /************************************
   * TABLE RENDER + FILTER/SEARCH/CSV
   *************************************/
  const tbody = document.getElementById("zapietPdrTbody");
  const summaryEl = document.getElementById("zapietPdrSummary");
  const searchInput = document.getElementById("zapietPdrSearch");
  const filterSelect = document.getElementById("zapietPdrFilter");
  const csvBtn = document.getElementById("zapietPdrCsv");
  const closeBtn = document.getElementById("zapietPdrClose");

  let currentSearch = "";
  let currentFilter =
