(function () {

//////////////////////////////////////////////////////
// CONFIG — Variant Reference Name Table
// BY : MARIO SANCHEZ
// Version : 1.4
//////////////////////////////////////////////////////

  // Remove old panel if it exists
  const old = document.getElementById("contisAuditPanel");
  if (old) old.remove();

  // === VARIANT MASTER DATA ===
  // [id, variantName, productName]
  const VARIANTS = [
    ["48739436265749","Petite Strawberry Shortcake","Petite Strawberry Shortcake"],
    ["48739453174037","Petite Ube Custard","Petite Ube Custard"],
    ["45317879300373","Petite Choco Overload","Petite Choco Overload"],
    ["45746820841749","Banana Dream","Banana Dream"],
    ["45317870780693","Box of 12","Asado Roll (Pork)"],
    ["46420646658325","Box of 6","Asado Roll (Pork)"],
    ["45317870747925","Per Piece","Asado Roll (Pork)"],
    ["45317870223637","Box of 25","Mamonitos"],
    ["45317878939925","Regular (Maximum of 8km distance for delivery)","Ube Custard"],
    ["45317878972693","Mini (Maximum of 8km distance for delivery)","Ube Custard"],
    ["45317879038229","Regular (For Pick-up Only)","Strawberry Shortcake"],
    ["45317879070997","Mini (Maximum of 4km distance for delivery)","Strawberry Shortcake"],
    ["49300964999445","Ube","Burnt Basque Cheesecake"],
    ["49300965032213","Biscoff","Burnt Basque Cheesecake"],
    ["49300965064981","Strawberry","Burnt Basque Cheesecake"],
    ["45317879726357","Chocolate Blush","Chocolate Blush"],
    ["46231334781205","Family Size (approxiamtely good for 6 to 8 pax)","Truffle Mushroom Linguine (Large Food Order)"],
    ["46231334813973","Party Size (approxiamtely good for 12 to 15 pax)","Truffle Mushroom Linguine (Large Food Order)"],
    ["45317875368213","Family Size (approxiamtely good for 6 to 8 pax)","Buttered Vegetables"],
    ["45317875400981","Party Size (approxiamtely good for 12 to 15 pax)","Buttered Vegetables"],
    ["45317874843925","Family Size (approxiamtely good for 6 to 8 pax)","Mango Royale Salad (Large Food Order)"],
    ["45317874647317","Family Size (approxiamtely good for 6 to 8 pax)","Symphony Salad (Lagre Food Order)"],
    ["45317875040533","Family Size (approxiamtely good for 6 to 8 pax)","Tofu Steak"],
    ["45317875073301","Party Size (approxiamtely good for 12 to 15 pax)","Tofu Steak"],
    ["45317877661973","Family Size (25 pcs approxiamtely good for 6 to 8 pax)","Shanghai Rolls"],
    ["45317877694741","Party Size (50 pcs approxiamtely good for 12 to 15 pax)","Shanghai Rolls"],
    ["45317872353557","Family Size (approxiamtely good for 6 to 8 pax)","Japanese Rice"],
    ["45317872386325","Party Size (approxiamtely good for 12 to 15 pax)","Japanese Rice"],
    ["45317872419093","Family Size (approxiamtely good for 6 to 8 pax)","Garlic Rice"],
    ["45317872451861","Party Size (approxiamtely good for 12 to 15 pax)","Garlic Rice"],
    ["45317876711701","Family Size (approxiamtely good for 6 to 8 pax)","Beef Caldereta (Large Food Order)"],
    ["45317876744469","Party Size (approxiamtely good for 12 to 15 pax)","Beef Caldereta (Large Food Order)"],
    ["45317874057493","Family Size (approxiamtely good for 6 to 8 pax)","Lasagna (Large Food Order)"],
    ["45317874090261","Party Size (approxiamtely good for 12 to 15 pax)","Lasagna (Large Food Order)"],
    ["45317874516245","Family Size (approxiamtely good for 6 to 8 pax)","Cheesey Baked Macaroni (Large Food Order)"],
    ["45317874549013","Party Size (approxiamtely good for 12 to 15 pax)","Cheesey Baked Macaroni (Large Food Order)"],
    ["45317873697045","Family Size (approxiamtely good for 6 to 8 pax)","Pasta Carbonara (Large Food Order)"],
    ["45317873729813","Party Size (approxiamtely good for 12 to 15 pax)","Pasta Carbonara (Large Food Order)"],
    ["45317872746773","Family Size (approxiamtely good for 6 to 8 pax)","Pancit Bam-I"],
    ["45317872779541","Partly Size (approxiamtely good for 12 to 15 pax)","Pancit Bam-I"],
    ["45317872582933","Family Size (approxiamtely good for 6 to 8 pax)","Pancit Palabok (Large Food Order)"],
    ["45317872615701","Partly Size (approxiamtely good for 12 to 15 pax)","Pancit Palabok (Large Food Order)"],
    ["45317872484629","Family Size (approxiamtely good for 6 to 8 pax)","Buttered Corn Rice"],
    ["45317872517397","Partly Size (approxiamtely good for 12 to 15 pax)","Buttered Corn Rice"],
    ["46460520988949","Family Size (50 pcs)","Shanghai Bites"],
    ["46460521021717","Party Size (100pcs)","Shanghai Bites"],
    ["49526281240853","10 pax","Lasagna & Chicken (for 10 pax)"],
    ["49526279012629","10 pax","Pancit Bam-I & Shanghai (for 10 pax)"],
    ["49526275277077","10 pax","Sotanghon & Shanghai (for 10 pax)"],
    ["49526280651029","10 pax","Lasagna & Shanghai (for 10 pax)"],
    ["49526279930133","10 pax","Pancit Bam-I & Chicken (for 10 pax)"],
    ["49526281437461","10 pax","Jr Spaghetti & Shanghai (for 10 pax)"],
    ["49526280126741","10 pax","Pesto Pasta & Shanghai (for 10 pax)"],
    ["49526281830677","10 pax","Jr. Mac n Cheese & Shanghai"],
    ["49526281961749","10 pax","Jr. Mac n Cheese & Chicken"],
    ["45317871763733","10 pax","Delivery  Bundle A"],
    ["49273186353429","30 pax","Delivery  Bundle A"],
    ["45317871862037","50 pax","Delivery  Bundle A"],
    ["45317871108373","10 pax","Delivery  Bundle B"],
    ["49273186451733","30 pax","Delivery  Bundle B"],
    ["45317871173909","50 pax","Delivery  Bundle B"],
    ["45317871010069","10 pax","Delivery  Bundle C"],
    ["49273186877717","30 pax","Delivery  Bundle C"],
    ["45317871075605","50 pax","Delivery  Bundle C"],
    ["45317870911765","10 pax","Delivery  Bundle 1"],
    ["49273186943253","30 pax","Delivery  Bundle 1"],
    ["45317870977301","50 pax","Delivery  Bundle 1"],
    ["48331350376725","10 pax","Delivery  Bundle 2"],
    ["49273185206549","30 pax","Delivery  Bundle 2"],
    ["48331350442261","50 pax","Delivery  Bundle 2"],
    ["45317870813461","10 pax","Delivery  Bundle 3"],
    ["49273185763605","30 pax","Delivery  Bundle 3"],
    ["45317870878997","50 pax","Delivery  Bundle 3"]
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
    "position:fixed",
    "top:0","left:0",
    "width:100vw","height:100vh",
    "background:#ffffff",
    "z-index:999999",
    "font-family:Arial, sans-serif",
    "box-sizing:border-box",
    "padding:15px"
  ].join(";");
  panel.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="font-size:18px;font-weight:bold;">
        🥮 Conti's Zapiet Audit (Pickup & Delivery)
      </div>
      <button id="contisAuditClose"
        style="background:#c62828;color:#fff;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;font-weight:bold;">
        CLOSE ✖
      </button>
    </div>

    <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
      <button id="contisRunScan"
        style="background:#2e7d32;color:#fff;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;">
        🔍 Scan Selected Restaurant
      </button>
      <button id="contisExportCsv"
        style="background:#1565c0;color:#fff;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;">
        ⬇ Export CSV
      </button>

      <span style="margin-left:10px;font-size:13px;">Filter:</span>
      <button class="contisFilterBtn" data-filter="all">All</button>
      <button class="contisFilterBtn" data-filter="allow">Allow</button>
      <button class="contisFilterBtn" data-filter="deny">Deny</button>
      <button class="contisFilterBtn" data-filter="missing">Missing</button>

      <input id="contisSearch" placeholder="Search by product/variant/id..."
        style="flex:1;min-width:240px;padding:5px 8px;border:1px solid #ccc;border-radius:4px;">
    </div>

    <div style="font-size:12px;margin-bottom:5px;" id="contisSummary"></div>

    <div style="width:100%;height:calc(100vh - 120px);overflow:auto;border:1px solid #ddd;">
      <table id="contisTable" style="width:100%;border-collapse:collapse;font-size:12px;">
        <thead style="position:sticky;top:0;z-index:1;">
          <tr style="background:#222;color:#fff;">
            <th style="padding:6px;border-bottom:1px solid #444;">Variant ID</th>
            <th style="padding:6px;border-bottom:1px solid #444;">Variant Name</th>
            <th style="padding:6px;border-bottom:1px solid #444;">Product Name</th>
            <th style="padding:6px;border-bottom:1px solid #444;">Pickup Dates</th>
            <th style="padding:6px;border-bottom:1px solid #444;">Delivery Dates</th>
            <th style="padding:6px;border-bottom:1px solid #444;">Status</th>
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
      if(row.status === "DENY") bg = "#ffcdd2";        // red-ish
      else if(row.status === "ALLOW") bg = "#c8e6c9"; // green-ish
      else if(row.status === "none") bg = "#fff9c4";  // yellow-ish
      else if(row.status === "MIXED") bg = "#ffe0b2"; // orange-ish

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

})();


scan();

})();
