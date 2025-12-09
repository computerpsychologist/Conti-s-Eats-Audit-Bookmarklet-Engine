(function () {
  /************************************
   * CONFIG – PDR AUDIT
   * VERSION 2.0.6
   *************************************/

  const PANEL_ID = "zapietPdrAuditPanel";

  // Remove old panel if it exists
  (function removeOldPanel() {
    const old = document.getElementById(PANEL_ID);
    if (old) old.remove();
  })();

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
    { id: "45317873041685", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Molo Soup" },
    { id: "45317880086805", variantName: "Molo Soup", productName: "Molo Soup" },
    { id: "45746492932373", variantName: "Single Order", productName: "Hearty Chowder" },
    { id: "48520445985045", variantName: "Creamy Tomato Soup", productName: "Creamy Tomato Soup" },
    { id: "45317876580629", variantName: "Family Size (approximately good for 6 to 8 pax)", productName: "Callos" },
    { id: "45317876613397", variantName: "Party Size (approximately good for 12 to 15 pax)", productName: "Callos" },
    { id: "49520067772693", variantName: "Family Size", productName: "Bacon Mac & Cheese" },
    { id: "49520067805461", variantName: "Party Size", productName: "Bacon Mac & Cheese" },
    { id: "49520102572309", variantName: "Family Size", productName: "Cheesy Spaghettimelt" },
    { id: "49520102605077", variantName: "Party Size", productName: "Cheesy Spaghettimelt" }
  ];

  /************************************
   * HELPERS – RESTAURANT + DATES
   *************************************/
  function getRestaurant() {
    try {
      if (window.ZapietEats && typeof ZapietEats.getSelectedRestaurant === "function") {
        const r = ZapietEats.getSelectedRestaurant();
        if (r) return r;
      }
    } catch (e) {
      console.warn("ZapietEats.getSelectedRestaurant error", e);
    }
    if (window.restaurant) return window.restaurant;
    return null;
  }

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function compressDates(dateList) {
    if (!dateList || !dateList.length) return "";
    const parsed = dateList
      .map((d) => new Date(d))
      .filter((d) => !isNaN(d))
      .sort((a, b) => a - b);

    if (!parsed.length) return "";

    const groups = [];
    let start = parsed[0];
    let prev = parsed[0];

    for (let i = 1; i < parsed.length; i++) {
      const curr = parsed[i];
      const diffDays = (curr - prev) / 86400000;
      if (diffDays === 1) {
        prev = curr;
      } else {
        groups.push([start, prev]);
        start = curr;
        prev = curr;
      }
    }
    groups.push([start, prev]);

    function fmt(d) {
      return MONTHS[d.getMonth()] + String(d.getDate()).padStart(2, "0");
    }

    return groups
      .map(([s, e]) => {
        if (s.getMonth() === e.getMonth()) {
          if (s.getDate() === e.getDate()) return fmt(s);
          return MONTHS[s.getMonth()] + String(s.getDate()).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
        } else {
          return fmt(s) + "-" + fmt(e);
        }
      })
      .join("; ");
  }

  function classifyStatus(pkInfo, dlInfo) {
    const types = new Set();
    if (pkInfo && pkInfo.types) pkInfo.types.forEach((t) => types.add(t));
    if (dlInfo && dlInfo.types) dlInfo.types.forEach((t) => types.add(t));

    if (types.size === 0) return "NONE";
    if (types.size === 1) {
      const t = [...types][0];
      if (t === "deny") return "DENY";
      if (t === "allow") return "ALLOW";
      return t.toUpperCase();
    }
    return "MIXED";
  }

  function getStatusColor(status) {
    switch (status) {
      case "DENY":
        return "#B91C1C";
      case "ALLOW":
        return "#15803D";
      case "MIXED":
        return "#B45309";
      case "NONE":
      default:
        return "#4B5563";
    }
  }

  /************************************
   * COLLECT RESTRICTIONS FROM ZAPIET
   *************************************/
  function collectRestrictions(restaurant) {
    const pickupInfo = {};
    const deliveryInfo = {};

    (restaurant.menus || []).forEach((menu) => {
      const pkArr =
        (((menu || {}).config || {}).store_pickup || {}).product_date_restrictions || [];
      const dlArr =
        (((menu || {}).config || {}).local_delivery || {}).product_date_restrictions || [];

      pkArr.forEach((v) => {
        const vid = String(v.variant_id);
        if (!pickupInfo[vid]) pickupInfo[vid] = { dates: new Set(), types: new Set() };
        (v.restricted_dates || []).forEach((d) => pickupInfo[vid].dates.add(d));
        const t = String(v.restriction_type || "deny").toLowerCase();
        pickupInfo[vid].types.add(t);
      });

      dlArr.forEach((v) => {
        const vid = String(v.variant_id);
        if (!deliveryInfo[vid]) deliveryInfo[vid] = { dates: new Set(), types: new Set() };
        (v.restricted_dates || []).forEach((d) => deliveryInfo[vid].dates.add(d));
        const t = String(v.restriction_type || "deny").toLowerCase();
        deliveryInfo[vid].types.add(t);
      });
    });

    return { pickupInfo, deliveryInfo };
  }

  /************************************
   * BUILD DATASET (MEMO vs ZAPIET JSON)
   *************************************/
  const restaurant = getRestaurant();
  if (!restaurant) {
    alert("Please select a restaurant in the Zapiet Eats widget first, then run the audit bookmarklet again.");
    return;
  }

  const { pickupInfo, deliveryInfo } = collectRestrictions(restaurant);

  const rowsData = MEMO_VARIANTS.map((memo) => {
    const id = String(memo.id);
    const pk = pickupInfo[id] || null;
    const dl = deliveryInfo[id] || null;

    const pickupDates = pk && pk.dates.size ? compressDates(Array.from(pk.dates)) : "MISSING";
    const deliveryDates = dl && dl.dates.size ? compressDates(Array.from(dl.dates)) : "MISSING";
    const status = classifyStatus(pk, dl);

    let missingFlag = "";
    if (!pk && !dl) missingFlag = "PK & DL";
    else if (!pk && dl) missingFlag = "PK";
    else if (pk && !dl) missingFlag = "DL";

    const hasRestrictions = !!(
      (pk && pk.dates && pk.dates.size) ||
      (dl && dl.dates && dl.dates.size)
    );

    return {
      variantId: id,
      productVariant: memo.productName + " – " + memo.variantName,
      restaurantName: restaurant.name || "",
      pickup: pickupDates,
      delivery: deliveryDates,
      status,
      missing: missingFlag,
      hasRestrictions
    };
  });

  /************************************
   * BUILD UI PANEL
   *************************************/
  const overlay = document.createElement("div");
  overlay.id = PANEL_ID;
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "999999";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "flex-start";
  overlay.style.justifyContent = "center";
  overlay.style.padding = "20px";
  overlay.style.boxSizing = "border-box";
  overlay.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  const panel = document.createElement("div");
  panel.style.background = "#FFFFFF";
  panel.style.borderRadius = "10px";
  panel.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
  panel.style.width = "100%";
  panel.style.maxWidth = "1400px";
  panel.style.maxHeight = "100%";
  panel.style.display = "flex";
  panel.style.flexDirection = "column";
  panel.style.overflow = "hidden";

  /**** Header ****/
  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.padding = "12px 16px";
  header.style.borderBottom = "1px solid #E5E7EB";
  header.style.background = "#F9FAFB";

  const title = document.createElement("div");
  title.style.fontWeight = "600";
  title.style.fontSize = "14px";
  title.textContent = `Zapiet Product Date Restrictions – Memo Audit (${restaurant.name || "Restaurant"})`;

  const controls = document.createElement("div");
  controls.style.display = "flex";
  controls.style.alignItems = "center";
  controls.style.gap = "8px";

  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.placeholder = "Search VariantID / Product / Variant / Status / MISSING…";
  searchInput.style.fontSize = "12px";
  searchInput.style.padding = "6px 8px";
  searchInput.style.borderRadius = "6px";
  searchInput.style.border = "1px solid #D1D5DB";
  searchInput.style.minWidth = "260px";

  const filterSelect = document.createElement("select");
  filterSelect.style.fontSize = "12px";
  filterSelect.style.padding = "6px 8px";
  filterSelect.style.borderRadius = "6px";
  filterSelect.style.border = "1px solid #D1D5DB";

  [
    { value: "all", label: "All variants" },
    { value: "missing", label: "Missing (PK / DL / Both)" },
    { value: "withRestrictions", label: "With restrictions" },
    { value: "noRestrictions", label: "No restrictions" }
  ].forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    filterSelect.appendChild(o);
  });

  const csvBtn = document.createElement("button");
  csvBtn.textContent = "Download CSV";
  csvBtn.style.fontSize = "12px";
  csvBtn.style.padding = "6px 10px";
  csvBtn.style.borderRadius = "6px";
  csvBtn.style.border = "1px solid #D1D5DB";
  csvBtn.style.background = "#111827";
  csvBtn.style.color = "#FFFFFF";
  csvBtn.style.cursor = "pointer";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  closeBtn.title = "Close";
  closeBtn.style.fontSize = "16px";
  closeBtn.style.lineHeight = "1";
  closeBtn.style.padding = "4px 8px";
  closeBtn.style.borderRadius = "999px";
  closeBtn.style.border = "1px solid #D1D5DB";
  closeBtn.style.background = "#FFFFFF";
  closeBtn.style.cursor = "pointer";

  controls.appendChild(searchInput);
  controls.appendChild(filterSelect);
  controls.appendChild(csvBtn);
  controls.appendChild(closeBtn);

  header.appendChild(title);
  header.appendChild(controls);

  /**** Summary strip ****/
  const summaryStrip = document.createElement("div");
  summaryStrip.style.fontSize = "11px";
  summaryStrip.style.padding = "8px 16px";
  summaryStrip.style.borderBottom = "1px solid #E5E7EB";
  summaryStrip.style.background = "#EFF6FF";
  summaryStrip.style.color = "#111827";

  function updateSummary() {
    const total = rowsData.length;
    const deny = rowsData.filter((r) => r.status === "DENY").length;
    const allow = rowsData.filter((r) => r.status === "ALLOW").length;
    const mixed = rowsData.filter((r) => r.status === "MIXED").length;
    const none = rowsData.filter((r) => r.status === "NONE").length;
    const missingBoth = rowsData.filter((r) => r.missing === "PK & DL").length;
    const missingPkOnly = rowsData.filter((r) => r.missing === "PK").length;
    const missingDlOnly = rowsData.filter((r) => r.missing === "DL").length;

    summaryStrip.textContent =
      `Total variants: ${total} | DENY: ${deny} | ALLOW: ${allow} | ` +
      `MIXED: ${mixed} | NONE: ${none} | ` +
      `Missing PK: ${missingPkOnly} | Missing DL: ${missingDlOnly} | Missing PK & DL: ${missingBoth}`;
  }

  updateSummary();

  /**** Body + Table ****/
  const body = document.createElement("div");
  body.style.flex = "1 1 auto";
  body.style.overflow = "auto";

  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.style.fontSize = "12px";

  const thead = document.createElement("thead");
  thead.style.position = "sticky";
  thead.style.top = "0";
  thead.style.zIndex = "1";

  const headRow = document.createElement("tr");
  headRow.style.background = "#F3F4F6";
  headRow.style.borderBottom = "1px solid #E5E7EB";

  [
    "VariantID",
    "Product – Variant",
    "Restaurant",
    "Pickup Restriction",
    "Delivery Restriction",
    "Status",
    "MISSING"
  ].forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    th.style.padding = "8px 10px";
    th.style.textAlign = "left";
    th.style.fontWeight = "600";
    th.style.whiteSpace = "nowrap";
    th.style.borderBottom = "1px solid #E5E7EB";
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  const tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);
  body.appendChild(table);

  /************************************
   * FILTER / SEARCH / RENDER
   *************************************/
  let currentSearch = "";
  let currentFilter = "all";

  function getFilteredRows() {
    const q = currentSearch.toLowerCase();
    return rowsData.filter((r) => {
      let visible = true;

      if (currentFilter === "missing" && !r.missing) visible = false;
      if (currentFilter === "withRestrictions" && !r.hasRestrictions) visible = false;
      if (currentFilter === "noRestrictions" && r.hasRestrictions) visible = false;

      if (visible && q) {
        const haystack = (
          r.variantId +
          " " +
          r.productVariant +
          " " +
          (r.restaurantName || "") +
          " " +
          r.pickup +
          " " +
          r.delivery +
          " " +
          r.status +
          " " +
          (r.missing || "")
        ).toLowerCase();
        if (!haystack.includes(q)) visible = false;
      }

      return visible;
    });
  }

  function renderTable() {
    tbody.innerHTML = "";
    const rows = getFilteredRows();

    rows.forEach((r, idx) => {
      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid #F3F4F6";
      if (r.missing) {
        tr.style.background = "#FEF2F2"; // light red for any missing
      } else if (idx % 2) {
        tr.style.background = "#FFFFFF";
      } else {
        tr.style.background = "#F9FAFB";
      }

      function td(text) {
        const cell = document.createElement("td");
        cell.textContent = text || "";
        cell.style.padding = "6px 10px";
        cell.style.verticalAlign = "top";
        cell.style.fontSize = "12px";
        cell.style.whiteSpace = "nowrap";
        cell.style.textOverflow = "ellipsis";
        cell.style.overflow = "hidden";
        return cell;
      }

      tr.appendChild(td(r.variantId));
      tr.appendChild(td(r.productVariant));
      tr.appendChild(td(r.restaurantName || ""));
      tr.appendChild(td(r.pickup));
      tr.appendChild(td(r.delivery));

      const statusCell = document.createElement("td");
      statusCell.style.padding = "6px 10px";
      const badge = document.createElement("span");
      badge.textContent = r.status;
      badge.style.display = "inline-block";
      badge.style.padding = "2px 7px";
      badge.style.borderRadius = "999px";
      badge.style.fontSize = "11px";
      badge.style.fontWeight = "600";
      badge.style.color = "#FFFFFF";
      badge.style.background = getStatusColor(r.status);
      statusCell.appendChild(badge);
      tr.appendChild(statusCell);

      tr.appendChild(td(r.missing || "—"));

      tbody.appendChild(tr);
    });
  }

  renderTable();

  /************************************
   * CSV EXPORT
   *************************************/
  function escCsv(val) {
    const s = String(val == null ? "" : val);
    if (/[",\n]/.test(s)) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  function exportCsv() {
    const rows = getFilteredRows();
    if (!rows.length) {
      alert("No rows to export for the current filter/search.");
      return;
    }

    const headerRow = [
      "VariantID",
      "Product – Variant",
      "Restaurant",
      "Pickup Restriction",
      "Delivery Restriction",
      "Status",
      "MISSING"
    ];

    const lines = [];
    lines.push(headerRow.map(escCsv).join(","));

    rows.forEach((r) => {
      lines.push(
        [
          r.variantId,
          r.productVariant,
          r.restaurantName || "",
          r.pickup,
          r.delivery,
          r.status,
          r.missing || ""
        ]
          .map(escCsv)
          .join(",")
      );
    });

    const blob = new Blob([lines.join("\n")], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "zapiet-pdr-audit.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  /************************************
   * HOOK EVENTS
   *************************************/
  searchInput.addEventListener("input", function () {
    currentSearch = this.value || "";
    renderTable();
  });

  filterSelect.addEventListener("change", function () {
    currentFilter = this.value || "all";
    renderTable();
  });

  closeBtn.addEventListener("click", function () {
    overlay.remove();
  });

  csvBtn.addEventListener("click", exportCsv);

  /************************************
   * MOUNT PANEL
   *************************************/
  panel.appendChild(header);
  panel.appendChild(summaryStrip);
  panel.appendChild(body);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);
})();
