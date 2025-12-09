

(function () {

//////////////////////////////////////////////////////
// CONFIG — Variant Reference Name Table
// BY : MARIO SANCHEZ
// Version : 1.9.3
//////////////////////////////////////////////////////

  // Remove old panel if it exists
  const old = document.getElementById("contisAuditPanel");
  if (old) old.remove();

  // === VARIANT MASTER DATA ===
  // [id, variantName, productName]
  const VARIANTS = [
 javascript:(function () {
  /************************************
   * CONFIG – UPDATE FOR YOUR ZAPIET UI
   *************************************/
  const ZAPIET_CONFIG = {
    // Main selector for each PDR row in Zapiet’s UI
    rowSelector: '.zapiet-pdr-row', // <-- CHANGE THIS

    // How to read data from each row – tweak as needed
    getVariantId(el) {
      // Try attribute then text
      return (
        el.getAttribute('data-variant-id') ||
        (el.querySelector('.zapiet-pdr-variant-id') || {}).textContent ||
        ''
      ).trim();
    },
    getVariantName(el) {
      return (
        (el.querySelector('.zapiet-pdr-variant-name') || {}).textContent || ''
      ).trim();
    },
    getRestaurantName(el) {
      return (
        (el.querySelector('.zapiet-pdr-location-name') || {}).textContent || ''
      ).trim();
    },
    // Product restriction date text
    getProductDates(el) {
      return (
        (el.querySelector('.zapiet-pdr-product-dates') || {}).textContent || ''
      ).trim();
    },
    // Delivery restriction date text
    getDeliveryDates(el) {
      return (
        (el.querySelector('.zapiet-pdr-delivery-dates') || {}).textContent || ''
      ).trim();
    },
    // Allow / Deny text (if visible anywhere on the row)
    getRestrictionType(el) {
      const explicit =
        (el.querySelector('.zapiet-pdr-restriction-type') || {})
          .textContent || '';
      const source = (explicit || el.textContent || '').toLowerCase();

      const hasAllow = source.includes('allow');
      const hasDeny = source.includes('deny');

      if (hasAllow && !hasDeny) return 'Allow';
      if (hasDeny && !hasAllow) return 'Deny';
      if (hasAllow && hasDeny) return 'Mixed';
      return '';
    },
  };

  /************************************
   * MEMO VARIANTS – FROM YOUR MESSAGE
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
   * PANEL INIT
   *************************************/
  const PANEL_ID = 'zapietPdrAuditPanel';

  // Remove old panel if any
  const old = document.getElementById(PANEL_ID);
  if (old) old.remove();

  /************************************
   * HELPERS
   *************************************/
  function formatDateList(raw) {
    if (!raw) return '';

    // Look for ISO-style dates (YYYY-MM-DD); adjust/extend if Zapiet uses another format
    const matches = raw.match(/\d{4}-\d{2}-\d{2}/g);
    if (!matches) {
      // If no recognizable dates, return raw text
      return raw.trim();
    }

    // Unique + sort
    const unique = Array.from(new Set(matches)).map((d) => ({
      iso: d,
      date: new Date(d + 'T00:00:00'),
    }));
    unique.sort((a, b) => a.date - b.date);

    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
      const diffDays =
        (cur.date - prev.date) / (1000 * 60 * 60 * 24);
      if (diffDays === 1) {
        // continue range
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
        return fmt(a) + ';';
      }
      const sameMonth = a.date.getMonth() === b.date.getMonth();
      const first = fmt(a);
      const second = sameMonth
        ? MONTHS[b.date.getMonth()] + String(b.date.getDate())
        : fmt(b);
      return first + '-' + second + ';';
    });

    return tokens.join(' ');
  }

  function combineDatesAndType(rawDates, type) {
    const formatted = formatDateList(rawDates || '');
    if (!type) return formatted;
    if (!formatted) return '[' + type + ']';
    return formatted + ' [' + type + ']';
  }

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

  /************************************
   * BUILD DATASET (MEMO vs ZAPIET)
   *************************************/
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
    // If multiple rows for one variant in Zapiet, just merge basic info
    const z = zapietRecords[0] || null;

    const restaurantName = z ? z.restaurantName : '';
    const productDates = z ? combineDatesAndType(z.productDatesRaw, z.restrictionType) : '';
    const deliveryDates = z ? combineDatesAndType(z.deliveryDatesRaw, z.restrictionType) : '';
    const missing = !z;

    return {
      variantId: id,
      variantName: memo.variantName,
      productName: memo.productName,
      restaurantName,
      productDates,
      deliveryDates,
      missing,
    };
  });

  /************************************
   * BUILD UI
   *************************************/
  const overlay = document.createElement('div');
  overlay.id = PANEL_ID;
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.zIndex = '999999';
  overlay.style.background = 'rgba(0,0,0,0.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'flex-start';
  overlay.style.justifyContent = 'center';
  overlay.style.padding = '24px';
  overlay.style.boxSizing = 'border-box';
  overlay.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  const panel = document.createElement('div');
  panel.style.background = '#fff';
  panel.style.borderRadius = '10px';
  panel.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
  panel.style.width = '100%';
  panel.style.maxWidth = '1400px';
  panel.style.maxHeight = '100%';
  panel.style.display = 'flex';
  panel.style.flexDirection = 'column';
  panel.style.overflow = 'hidden';

  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.padding = '12px 16px';
  header.style.borderBottom = '1px solid #e5e7eb';
  header.style.background = '#f9fafb';
  header.style.gap = '12px';

  const title = document.createElement('div');
  title.textContent = "Zapiet Product Date Restrictions – Memo Audit";
  title.style.fontWeight = '600';
  title.style.fontSize = '14px';
  title.style.flex = '1 1 auto';

  const controls = document.createElement('div');
  controls.style.display = 'flex';
  controls.style.gap = '8px';
  controls.style.alignItems = 'center';

  // Search box
  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = 'Search Variant ID / Name / Restaurant / Dates…';
  searchInput.style.fontSize = '12px';
  searchInput.style.padding = '6px 8px';
  searchInput.style.borderRadius = '6px';
  searchInput.style.border = '1px solid #d1d5db';
  searchInput.style.minWidth = '240px';

  // Filter select
  const filterSelect = document.createElement('select');
  filterSelect.style.fontSize = '12px';
  filterSelect.style.padding = '6px 8px';
  filterSelect.style.borderRadius = '6px';
  filterSelect.style.border = '1px solid #d1d5db';

  [
    { value: 'all', label: 'All variants' },
    { value: 'missing', label: 'Missing in Zapiet PDR' },
    { value: 'withRestrictions', label: 'With restrictions' },
    { value: 'noRestrictions', label: 'No restrictions' },
  ].forEach((opt) => {
    const o = document.createElement('option');
    o.value = opt.value;
    o.textContent = opt.label;
    filterSelect.appendChild(o);
  });

  // CSV button
  const csvBtn = document.createElement('button');
  csvBtn.textContent = 'Download CSV';
  csvBtn.style.fontSize = '12px';
  csvBtn.style.padding = '6px 10px';
  csvBtn.style.borderRadius = '6px';
  csvBtn.style.border = '1px solid #d1d5db';
  csvBtn.style.background = '#111827';
  csvBtn.style.color = '#fff';
  csvBtn.style.cursor = 'pointer';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.title = 'Close';
  closeBtn.style.fontSize = '16px';
  closeBtn.style.lineHeight = '1';
  closeBtn.style.padding = '4px 8px';
  closeBtn.style.borderRadius = '999px';
  closeBtn.style.border = '1px solid #d1d5db';
  closeBtn.style.background = '#fff';
  closeBtn.style.cursor = 'pointer';

  controls.appendChild(searchInput);
  controls.appendChild(filterSelect);
  controls.appendChild(csvBtn);
  controls.appendChild(closeBtn);

  header.appendChild(title);
  header.appendChild(controls);

  const body = document.createElement('div');
  body.style.flex = '1 1 auto';
  body.style.overflow = 'auto';

  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';
  table.style.fontSize = '12px';

  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const headers = [
    'VariantID',
    'Variant Name',
    'RestaurantName',
    'P. Restriction Dates',
    'D. Restriction Dates',
  ];
  headers.forEach((h) => {
    const th = document.createElement('th');
    th.textContent = h;
    th.style.position = 'sticky';
    th.style.top = '0';
    th.style.background = '#f3f4f6';
    th.style.borderBottom = '1px solid #e5e7eb';
    th.style.padding = '8px 10px';
    th.style.textAlign = 'left';
    th.style.fontWeight = '600';
    th.style.whiteSpace = 'nowrap';
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  const tbody = document.createElement('tbody');

  const rowEls = [];
  rowsData.forEach((r, idx) => {
    const tr = document.createElement('tr');
    tr.dataset.index = String(idx);
    tr.style.borderBottom = '1px solid #f3f4f6';

    if (r.missing) {
      tr.style.background = '#fef2f2';
    } else {
      tr.style.background = idx % 2 ? '#ffffff' : '#f9fafb';
    }

    function td(text) {
      const cell = document.createElement('td');
      cell.textContent = text || '';
      cell.style.padding = '6px 10px';
      cell.style.verticalAlign = 'top';
      cell.style.fontSize = '12px';
      cell.style.whiteSpace = 'nowrap';
      cell.style.textOverflow = 'ellipsis';
      cell.style.overflow = 'hidden';
      return cell;
    }

    tr.appendChild(td(r.variantId));
    tr.appendChild(td(r.variantName));
    tr.appendChild(td(r.restaurantName || ''));
    tr.appendChild(td(r.productDates || (r.missing ? 'MISSING IN ZAPIET PDR' : '')));
    tr.appendChild(td(r.deliveryDates || (r.missing ? 'MISSING IN ZAPIET PDR' : '')));

    tbody.appendChild(tr);
    rowEls.push(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  body.appendChild(table);
  panel.appendChild(header);
  panel.appendChild(body);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  /************************************
   * FILTER / SEARCH / CSV / CLOSE
   *************************************/
  let currentSearch = '';
  let currentFilter = 'all';

  function applyFilters() {
    const q = currentSearch.toLowerCase();

    rowEls.forEach((tr) => {
      const idx = Number(tr.dataset.index || '0');
      const r = rowsData[idx];
      let visible = true;

      // Filter type
      if (currentFilter === 'missing' && !r.missing) visible = false;
      if (currentFilter === 'withRestrictions') {
        const hasRes = !!(r.productDates || r.deliveryDates);
        if (!hasRes) visible = false;
      }
      if (currentFilter === 'noRestrictions') {
        const hasRes = !!(r.productDates || r.deliveryDates);
        if (hasRes || r.missing) visible = false;
      }

      // Search
      if (visible && q) {
        const haystack = (
          r.variantId +
          ' ' +
          r.variantName +
          ' ' +
          (r.productName || '') +
          ' ' +
          (r.restaurantName || '') +
          ' ' +
          (r.productDates || '') +
          ' ' +
          (r.deliveryDates || '')
        ).toLowerCase();
        if (!haystack.includes(q)) visible = false;
      }

      tr.style.display = visible ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', function () {
    currentSearch = this.value || '';
    applyFilters();
  });

  filterSelect.addEventListener('change', function () {
    currentFilter = this.value || 'all';
    applyFilters();
  });

  closeBtn.addEventListener('click', function () {
    overlay.remove();
  });

  csvBtn.addEventListener('click', function () {
    const headerRow = [
      'VariantID',
      'Variant Name',
      'RestaurantName',
      'P. Restriction Dates',
      'D. Restriction Dates',
      'Missing?',
    ];

    function escCsv(val) {
      const s = String(val == null ? '' : val);
      if (/[",\n]/.test(s)) {
        return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
    }

    const lines = [];
    lines.push(headerRow.map(escCsv).join(','));

    rowEls.forEach((tr) => {
      if (tr.style.display === 'none') return;
      const idx = Number(tr.dataset.index || '0');
      const r = rowsData[idx];

      const row = [
        r.variantId,
        r.variantName,
        r.restaurantName || '',
        r.productDates || (r.missing ? 'MISSING IN ZAPIET PDR' : ''),
        r.deliveryDates || (r.missing ? 'MISSING IN ZAPIET PDR' : ''),
        r.missing ? 'YES' : 'NO',
      ];
      lines.push(row.map(escCsv).join(','));
    });

    const blob = new Blob([lines.join('\n')], {
      type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zapiet-pdr-audit.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // Initial apply
  applyFilters();
})();

  ];

  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function compressDates(dateList){
    if(!dateList || !dateList.length) return "none";
    const parsed = dateList
      .map(d => new Date(d))
      .filter(d => !isNaN(d))
      .sort((a,b)=>a-b);

    if(!parsed.length) return "none";

    const groups = [];
    let start = parsed[0];
    let prev  = parsed[0];

    for(let i=1;i<parsed.length;i++){
      const curr = parsed[i];
      const diffDays = (curr - prev) / 86400000;
      if(diffDays === 1){
        prev = curr;
      }else{
        groups.push([start, prev]);
        start = curr;
        prev = curr;
      }
    }
    groups.push([start, prev]);

    function fmt(d){
      return monthNames[d.getMonth()] + (""+d.getDate()).padStart(2,"0");
    }

    return groups.map(([s,e])=>{
      if(s.getMonth() === e.getMonth()){
        if(s.getDate() === e.getDate()) return fmt(s);
        return monthNames[s.getMonth()] + (""+s.getDate()).padStart(2,"0") +
               "-" + (""+e.getDate()).padStart(2,"0");
      }else{
        return fmt(s) + "-" + fmt(e);
      }
    }).join("; ");
  }

  function escapeCsv(val){
    if(val == null) val = "";
    val = String(val);
    if(/[",\n]/.test(val)){
      return '"' + val.replace(/"/g,'""') + '"';
    }
    return val;
  }

  
// === Build Full-screen UI ===
const panel = document.createElement("div");
panel.id = "contisAuditPanel";
panel.style = [
  "position:fixed","top:0","left:0","width:100vw","height:100vh",
  "background:#1A1D21","color:#E6E6E6",
  "z-index:999999","font-family:Arial, sans-serif",
  "box-sizing:border-box","padding:15px"
].join(";");

panel.innerHTML = `
  <div style="display:flex;align-items:center;justify-content:space-between;
              margin-bottom:12px;background:#0E1115;padding:12px 16px;
              border-radius:6px;color:#fff;">
    <div style="font-size:18px;font-weight:bold;letter-spacing:.6px;">
      🥮 Conti's Zapiet Audit (Pickup & Delivery)
    </div>
    <button id="contisAuditClose"
      style="background:#7B1E1E;color:#fff;border:none;padding:6px 14px;
      border-radius:6px;cursor:pointer;font-weight:bold;">
      CLOSE ✖
    </button>
  </div>

  <div style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
    <button id="contisRunScan"
      style="background:#2A4A69;color:#fff;border:none;padding:6px 12px;
      border-radius:6px;cursor:pointer;font-weight:bold;">🔍 Scan Selected Restaurant</button>

    <button id="contisExportCsv"
      style="background:#2A4A69;color:#fff;border:none;padding:6px 12px;
      border-radius:6px;cursor:pointer;font-weight:bold;">⬇ Export CSV</button>

    <span style="margin-left:10px;font-size:13px;color:#C9C9C9;">Filter:</span>

    <button class="contisFilterBtn" data-filter="all"      style="background:#2F3338;color:#fff;border:1px solid #444;padding:4px 8px;border-radius:4px;">All</button>
    <button class="contisFilterBtn" data-filter="allow"    style="background:#2F3338;color:#fff;border:1px solid #444;padding:4px 8px;border-radius:4px;">Allow</button>
    <button class="contisFilterBtn" data-filter="deny"     style="background:#2F3338;color:#fff;border:1px solid #444;padding:4px 8px;border-radius:4px;">Deny</button>
    <button class="contisFilterBtn" data-filter="missing"  style="background:#2F3338;color:#fff;border:1px solid #444;padding:4px 8px;border-radius:4px;">Missing</button>

    <input id="contisSearch" placeholder="Search by product/variant/id..."
      style="flex:1;min-width:240px;padding:6px 8px;border:1px solid #444;
      background:#0F1215;color:#E6E6E6;border-radius:4px;">
  </div>

  <div id="contisSummary" style="font-size:12px;margin-bottom:8px;color:#BDBDBD;"></div>

  <div style="width:100%;height:calc(100vh - 150px);overflow:auto;border:1px solid #333;background:#0F1215;">
    <table id="contisTable" style="width:100%;border-collapse:collapse;font-size:12px;color:#E6E6E6;">
      <thead style="position:sticky;top:0;z-index:1;">
        <tr style="background:#111418;color:#fff;">
          <th style="padding:6px;border-bottom:1px solid #333;">Variant ID</th>
          <th style="padding:6px;border-bottom:1px solid #333;">Variant Name</th>
          <th style="padding:6px;border-bottom:1px solid #333;">Product Name</th>
          <th style="padding:6px;border-bottom:1px solid #333;">Pickup Dates</th>
          <th style="padding:6px;border-bottom:1px solid #333;">Delivery Dates</th>
          <th style="padding:6px;border-bottom:1px solid #333;">Status</th>
        </tr>
      </thead>
      <tbody id="contisTbody"></tbody>
    </table>
  </div>
`;


  document.body.appendChild(panel);

  document.getElementById("contisAuditClose").onclick = () => panel.remove();

  const tbody   = document.getElementById("contisTbody");
  const summary = document.getElementById("contisSummary");

  let baseRows = [];
  let currentFilter = "all";
  let currentSearch = "";

  function classifyStatus(pkInfo, dlInfo){
    const types = new Set();
    if(pkInfo && pkInfo.types) pkInfo.types.forEach(t=>types.add(t));
    if(dlInfo && dlInfo.types) dlInfo.types.forEach(t=>types.add(t));

    if(types.size === 0){
      // your rule B: no restriction entry = "none" (missing)
      return "none";
    }

    if(types.size === 1){
      const t = [...types][0];
      if(t === "deny") return "DENY";
      if(t === "allow") return "ALLOW";
      return t.toUpperCase();
    }
    return "MIXED";
  }

  function render(){
    tbody.innerHTML = "";
    const rows = baseRows.filter(row => {
      if(currentFilter === "allow"  && row.status !== "ALLOW") return false;
      if(currentFilter === "deny"   && row.status !== "DENY") return false;
      if(currentFilter === "missing"&& row.status !== "none") return false;

      if(currentSearch){
        const txt = (
          row.id + " " + row.variantName + " " + row.productName +
          " " + row.pickup + " " + row.delivery + " " + row.status
        ).toLowerCase();
        if(!txt.includes(currentSearch)) return false;
      }
      return true;
    });

    rows.forEach(row => {
      const tr = document.createElement("tr");
      let bg = "#ffffff";
      if(row.status === "DENY") bg = "#7B1E1E";       // dark masculine red
else if(row.status === "ALLOW") bg = "#1C5E2E"; // deep green
else if(row.status === "none") bg = "#5A5A5A";  // gray signifies no rule
else if(row.status === "MIXED") bg = "#705008"; // bronze tone


      tr.style.background = bg;
      tr.innerHTML = `
        <td style="padding:4px;border-bottom:1px solid #eee;">${row.id}</td>
        <td style="padding:4px;border-bottom:1px solid #eee;">${row.variantName}</td>
        <td style="padding:4px;border-bottom:1px solid #eee;">${row.productName}</td>
        <td style="padding:4px;border-bottom:1px solid #eee;">${row.pickup}</td>
        <td style="padding:4px;border-bottom:1px solid #eee;">${row.delivery}</td>
        <td style="padding:4px;border-bottom:1px solid #eee;font-weight:bold;">${row.status}</td>
      `;
      tbody.appendChild(tr);
    });

    const total   = baseRows.length;
    const missing = baseRows.filter(r=>r.status === "none").length;
    const deny    = baseRows.filter(r=>r.status === "DENY").length;
    const allow   = baseRows.filter(r=>r.status === "ALLOW").length;
    const mixed   = baseRows.filter(r=>r.status === "MIXED").length;

    summary.textContent =
      `Total variants: ${total} | DENY: ${deny} | ALLOW: ${allow} | MIXED: ${mixed} | Missing (no rule): ${missing}`;
  }

  function runScan(){
    const rest = (window.ZapietEats &&
                  typeof ZapietEats.getSelectedRestaurant === "function" &&
                  ZapietEats.getSelectedRestaurant());
    if(!rest){
      alert("Select a restaurant first in the Zapiet Eats widget.");
      return;
    }

    const pickupInfo = {};
    const deliveryInfo = {};

    (rest.menus || []).forEach(menu => {
      const pickup = (((menu || {}).config || {}).store_pickup || {}).product_date_restrictions || [];
      const delivery = (((menu || {}).config || {}).local_delivery || {}).product_date_restrictions || [];

      pickup.forEach(v => {
        const vid = String(v.variant_id);
        if(!pickupInfo[vid]) pickupInfo[vid] = {dates:new Set(), types:new Set()};
        (v.restricted_dates || []).forEach(d => pickupInfo[vid].dates.add(d));
        const t = String(v.restriction_type || "deny").toLowerCase();
        pickupInfo[vid].types.add(t);
      });

      delivery.forEach(v => {
        const vid = String(v.variant_id);
        if(!deliveryInfo[vid]) deliveryInfo[vid] = {dates:new Set(), types:new Set()};
        (v.restricted_dates || []).forEach(d => deliveryInfo[vid].dates.add(d));
        const t = String(v.restriction_type || "deny").toLowerCase();
        deliveryInfo[vid].types.add(t);
      });
    });

    baseRows = VARIANTS.map(([id,vn,pn]) => {
      const pk = pickupInfo[id];
      const dl = deliveryInfo[id];
      const pickupDates   = pk && pk.dates.size ? compressDates(Array.from(pk.dates)) : "none";
      const deliveryDates = dl && dl.dates.size ? compressDates(Array.from(dl.dates)) : "none";
      const status        = classifyStatus(pk, dl);
      return {
        id,
        variantName: vn,
        productName: pn,
        pickup: pickupDates,
        delivery: deliveryDates,
        status
      };
    });

    currentFilter = "all";
    currentSearch = "";
    document.getElementById("contisSearch").value = "";
    render();
  }

  function exportCsv(){
    if(!baseRows.length){
      alert("Scan first before exporting CSV.");
      return;
    }
    const lines = [];
    lines.push("variant_id,variant_name,product_name,pickup_dates,delivery_dates,status");
    baseRows.forEach(r => {
      lines.push([
        escapeCsv(r.id),
        escapeCsv(r.variantName),
        escapeCsv(r.productName),
        escapeCsv(r.pickup),
        escapeCsv(r.delivery),
        escapeCsv(r.status)
      ].join(","));
    });
    const blob = new Blob([lines.join("\n")], {type:"text/csv"});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = "contis-zapiet-audit.csv";
    a.click();
  }

  document.getElementById("contisRunScan").onclick   = runScan;
  document.getElementById("contisExportCsv").onclick = exportCsv;

  document.getElementById("contisSearch")
    .addEventListener("input", function(){
      currentSearch = this.value.toLowerCase();
      render();
    });

  document.querySelectorAll(".contisFilterBtn").forEach(btn => {
    btn.style.border = "1px solid #aaa";
    btn.style.padding = "4px 8px";
    btn.style.borderRadius = "4px";
    btn.style.background = "#f5f5f5";
    btn.style.cursor = "pointer";
    btn.onclick = function(){
      currentFilter = this.dataset.filter;
      render();
    };
  });

})();  // ✅ single, correct IIFE end
