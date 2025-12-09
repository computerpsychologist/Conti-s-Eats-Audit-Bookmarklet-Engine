(function () {

  /******************************
   * 1. Memo Variant Master Data
   * 2. Project by : EIT
   * 3. Version : 1.6
   ******************************/
  const MEMO_VARIANTS = [
    // ID | Variant Name | Product Name
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

  /*****************************************************
   * 2. SELECTORS — adjust only these if DOM differs
   *****************************************************/
  const SELECTOR = {
    row: ".zapiet-pdr-row",                          // each restriction item row
    variantId: "[data-variant-id]",                  // input/id element
    variantName: ".zapiet-pdr-variant-name",         // text label
    restaurant: ".zapiet-pdr-location-name",         // location/store name
    pickupDates: ".zapiet-pdr-product-dates",        // pickup restriction dates
    deliveryDates: ".zapiet-pdr-delivery-dates",     // delivery restriction dates
    type: ".zapiet-pdr-restriction-type"             // Allow / Deny label
  };

  /*************************************
   * 3. Extract Zapiet Data (Selected Store)
   *************************************/
  function getZapietList(){
    return [...document.querySelectorAll(SELECTOR.row)].map(row => ({
      id   : row.querySelector(SELECTOR.variantId)?.value?.trim() || "",
      name : row.querySelector(SELECTOR.variantName)?.innerText?.trim() || "",
      loc  : row.querySelector(SELECTOR.restaurant)?.innerText?.trim() || "",
      pickup : row.querySelector(SELECTOR.pickupDates)?.innerText?.trim() || "",
      delivery : row.querySelector(SELECTOR.deliveryDates)?.innerText?.trim() || "",
      type : row.querySelector(SELECTOR.type)?.innerText?.trim() || "",
    }));
  }

  const zapiet = getZapietList();
  const zapietMap = Object.fromEntries(zapiet.map(z => [z.id, z]));

  /*************************************
   * 4. UI – Panel + Table Output
   *************************************/
  const wrap = document.createElement("div");
  wrap.style = `
    position:fixed; inset:0; background:#00000090;
    z-index:999999; display:flex; justify-content:center;
    align-items:flex-start; padding:30px; font-family:sans-serif;
  `;

  const panel = document.createElement("div");
  panel.style = `
    background:#fff; width:95%; max-width:1400px; border-radius:10px;
    overflow:hidden; box-shadow:0 10px 40px #0006; display:flex; flex-direction:column;
  `;
  wrap.appendChild(panel);

  /******** Header Tools ********/
  const header = document.createElement("div");
  header.style="padding:12px 15px; display:flex; gap:10px; background:#f8f8f8; align-items:center;";
  panel.appendChild(header);

  const title = document.createElement("span");
  title.innerText="Conti’s PDR Audit — Memo vs Zapiet Store";
  title.style="flex:1;font-weight:bold;font-size:14px;";
  header.appendChild(title);

  const search = document.createElement("input");
  search.placeholder="Search...";
  search.style="padding:6px 8px;border:1px solid #ccc;border-radius:6px;min-width:200px;font-size:12px;";
  header.appendChild(search);

  const filter = document.createElement("select");
  filter.innerHTML=`
    <option value="all">All</option>
    <option value="missing">Only Missing</option>
    <option value="existing">Only Existing</option>
  `;
  filter.style="padding:6px 8px;border:1px solid #ccc;border-radius:6px;font-size:12px;";
  header.appendChild(filter);

  const btnCSV=document.createElement("button");
  btnCSV.innerText="Export CSV";
  btnCSV.style="padding:6px 10px;background:#111;color:#fff;border-radius:6px;font-size:12px;";
  header.appendChild(btnCSV);

  const close=document.createElement("button");
  close.innerText="✕";
  close.style="padding:4px 10px;border-radius:5px;border:1px solid #aaa;background:#fff;";
  header.appendChild(close);

  close.onclick=()=>wrap.remove();

  /******** Table ********/
  const body=document.createElement("div");
  body.style="overflow:auto;";
  panel.appendChild(body);

  const table=document.createElement("table");
  table.style="width:100%;border-collapse:collapse;font-size:12px;";
  body.appendChild(table);

  table.innerHTML=`
    <thead>
      <tr style="background:#eee">
        <th style="padding:8px;">Variant ID</th>
        <th style="padding:8px;">Variant Name</th>
        <th style="padding:8px;">Store</th>
        <th style="padding:8px;">Pickup Restriction</th>
        <th style="padding:8px;">Delivery Restriction</th>
        <th style="padding:8px;">Status</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody=table.querySelector("tbody");

  /*************************************
   * 5. Render Rows (ONLY MEMO VARIANTS)
   *************************************/
  MEMO_VARIANTS.forEach(v=>{
    const z = zapietMap[v.id] || null;
    const missing = !z;
    const tr=document.createElement("tr");

    tr.style = missing ? "background:#ffe5e5" : "";

    tr.innerHTML=`
      <td style="padding:6px;">${v.id}</td>
      <td style="padding:6px;">${v.variant}</td>
      <td style="padding:6px;">${z?.loc||"-"}</td>
      <td style="padding:6px;">${z?.pickup||"<span style='color:#b00;'>No Data</span>"}</td>
      <td style="padding:6px;">${z?.delivery||"<span style='color:#b00;'>No Data</span>"}</td>
      <td style="padding:6px;">
        ${
          missing
          ? "<span style='padding:2px 6px;background:#c00;color:#fff;border-radius:4px;'>MISSING</span>"
          : "<span style='padding:2px 6px;background:#0a0;color:#fff;border-radius:4px;'>OK</span>"
        }
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.body.appendChild(wrap);

})();
