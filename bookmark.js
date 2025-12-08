/* ================================
  CONTI'S ZAPIET EATS AUDIT ENGINE v3.1
  Author: Mario | computerpsychologist
  Bookmarklet Loader Version
================================ */

(function(){

  // Prevent duplicate UI
  if(document.getElementById("contisAuditPanel")){
    alert("Audit Panel already open.");
    return;
  }

  /* ============= VARIANT MAP ============= */
  const VARIANTS = [
    ["48739436265749","Petite Strawberry Shortcake","Petite Strawberry Shortcake"],
    ["48739453174037","Petite Ube Custard","Petite Ube Custard"],
    ["45317879300373","Petite Choco Overload","Petite Choco Overload"],
    ["45746820841749","Banana Dream","Banana Dream"],
    ["45317870780693","Box of 12","Asado Roll (Pork)"],
    ["46420646658325","Box of 6","Asado Roll (Pork)"],
    ["45317870747925","Per Piece","Asado Roll (Pork)"],
    ["45317870223637","Box of 25","Mamonitos"],
    ["45317878939925","Regular (Max 8km)","Ube Custard"],
    ["45317878972693","Mini (Max 8km)","Ube Custard"],
    ["45317879038229","Regular","Strawberry Shortcake"],
    ["45317879070997","Mini","Strawberry Shortcake"],
    ["49300964999445","Ube","Burnt Basque Cheesecake"],
    ["49300965032213","Biscoff","Burnt Basque Cheesecake"],
    ["49300965064981","Strawberry","Burnt Basque Cheesecake"],
    ["45317879726357","Chocolate Blush","Chocolate Blush"],
    ["46231334781205","Family","Truffle Mushroom Linguine"],
    ["46231334813973","Party","Truffle Mushroom Linguine"],
    ["45317875368213","Family","Buttered Vegetables"],
    ["45317875400981","Party","Buttered Vegetables"],
    ["45317874843925","Family","Mango Royale Salad"],
    ["45317874647317","Family","Symphony Salad"],
    ["45317875040533","Family","Tofu Steak"],
    ["45317875073301","Party","Tofu Steak"],
    ["45317877661973","Family (25pcs)","Shanghai Rolls"],
    ["45317877694741","Party (50pcs)","Shanghai Rolls"],
    ["45317872353557","Family","Japanese Rice"],
    ["45317872386325","Party","Japanese Rice"],
    ["45317872419093","Family","Garlic Rice"],
    ["45317872451861","Party","Garlic Rice"],
    ["45317876711701","Family","Beef Caldereta"],
    ["45317876744469","Party","Beef Caldereta"],
    ["45317874057493","Family","Lasagna"],
    ["45317874090261","Party","Lasagna"],
    ["45317874516245","Family","Cheesey Baked Mac"],
    ["45317874549013","Party","Cheesey Baked Mac"],
    ["45317873697045","Family","Carbonara"],
    ["45317873729813","Party","Carbonara"],
    ["45317872746773","Family","Pancit Bam-I"],
    ["45317872779541","Party","Pancit Bam-I"],
    ["45317872582933","Family","Pancit Palabok"],
    ["45317872615701","Party","Pancit Palabok"],
    ["45317872484629","Family","Buttered Corn Rice"],
    ["45317872517397","Party","Buttered Corn Rice"],
    ["46460520988949","Family 50pcs","Shanghai Bites"],
    ["46460521021717","Party 100pcs","Shanghai Bites"],
    ["49526281240853","10pax","Lasagna & Chicken"],
    ["49526279012629","10pax","Bam-I & Shanghai"],
    ["49526275277077","10pax","Sotanghon & Shanghai"],
    ["49526280651029","10pax","Lasagna & Shanghai"],
    ["49526279930133","10pax","Bam-I & Chicken"],
    ["49526281437461","10pax","Jr Spag & Shanghai"],
    ["49526280126741","10pax","Pesto & Shanghai"],
    ["49526281830677","10pax","Jr Mac & Shanghai"],
    ["49526281961749","10pax","Jr Mac & Chicken"],
    ["45317871763733","10pax","Bundle A"],
    ["49273186353429","30pax","Bundle A"],
    ["45317871862037","50pax","Bundle A"],
    ["45317871108373","10pax","Bundle B"],
    ["49273186451733","30pax","Bundle B"],
    ["45317871173909","50pax","Bundle B"],
    ["45317871010069","10pax","Bundle C"],
    ["49273186877717","30pax","Bundle C"],
    ["45317871075605","50pax","Bundle C"],
    ["45317870911765","10pax","Bundle 1"],
    ["49273186943253","30pax","Bundle 1"],
    ["45317870977301","50pax","Bundle 1"],
    ["48331350376725","10pax","Bundle 2"],
    ["49273185206549","30pax","Bundle 2"],
    ["48331350442261","50pax","Bundle 2"],
    ["45317870813461","10pax","Bundle 3"],
    ["49273185763605","30pax","Bundle 3"],
    ["45317870878997","50pax","Bundle 3"]
  ];

  /* ================= UI PANEL ================= */

  const panel = document.createElement("div");
  panel.id="contisAuditPanel";
  panel.style = `
    position:fixed;top:20px;right:20px;width:420px;height:550px;z-index:999999;
    background:white;border-radius:10px;overflow:hidden;
    box-shadow:0 0 22px rgba(0,0,0,.25);font-family:Arial;
  `;

  panel.innerHTML = `
    <div style="background:#111;color:#fff;padding:10px;font-size:16px;font-weight:bold">
      🟢 CONTI'S ZAPIET AUDIT TOOL
      <button id="closeAudit" style="float:right;background:red;color:white;border:none;padding:2px 8px;cursor:pointer">X</button>
    </div>

    <div style="padding:8px;">
      <button id="runAudit" style="background:#00995a;color:white;border:none;padding:8px 12px;border-radius:6px;cursor:pointer">
        Scan this Restaurant
      </button>
      <button id="dlCSV" style="margin-left:6px;background:#006eff;color:white;border:none;padding:8px 12px;border-radius:6px;cursor:pointer">
        Export CSV
      </button>
      <br><br>
      <input id="searchBox" placeholder="Search product…" style="width:96%;padding:6px;border:1px solid #ccc;border-radius:5px">
      <div id="auditResults" style="margin-top:10px;height:380px;overflow:auto;font-size:13px;"></div>
    </div>
  `;
  document.body.appendChild(panel);

  document.getElementById("closeAudit").onclick = ()=>panel.remove();

  function readRestrictions(){
    const r = ZapietEats?.getSelectedRestaurant?.();
    if(!r){ alert("Select restaurant first");return []; }
    const pickup={},delivery={};
    (r.menus||[]).forEach(m=>{
      (m.config?.store_pickup?.product_date_restrictions||[]).forEach(v=>
        (pickup[v.variant_id] = (v.restricted_dates||[]).join("; ")));
      (m.config?.local_delivery?.product_date_restrictions||[]).forEach(v=>
        (delivery[v.variant_id] = (v.restricted_dates||[]).join("; ")));
    });
    return [r,pickup,delivery];
  }

  function runAudit(){
    const [store,pick,del] = readRestrictions();
    const out=[];
    VARIANTS.forEach(v=>{
      const p=pick[v[0]]||"none", d=del[v[0]]||"none";
      out.push({id:v[0],variant:v[1],product:v[2],pickup:p,delivery:d});
    });

    let html="<table border=1 cellpadding=4 style='width:100%;font-size:12px;border-collapse:collapse'>";
    html+="<tr style='background:#222;color:white'><th>ID</th><th>Variant</th><th>Pickup</th><th>Delivery</th></tr>";
    out.forEach(r=>{
      const miss=(r.pickup=="none"&&r.delivery=="none");
      html+=`<tr style="background:${miss?'#ffe0e0':'#e8ffe8'}">
        <td>${r.id}</td><td>${r.product} - ${r.variant}</td>
        <td>${r.pickup}</td><td>${r.delivery}</td>
      </tr>`;
    });
    html+="</table>";
    document.getElementById("auditResults").innerHTML=html;

    window._contisAuditData=out;
  }

  function exportCSV(){
    if(!window._contisAuditData){alert("Run audit first");return;}
    const rows=["variant_id,product,variant,pickup,delivery"];
    window._contisAuditData.forEach(r=>rows.push(`${r.id},"${r.product}","${r.variant}",${r.pickup},${r.delivery}`));
    const blob=new Blob([rows.join("\n")],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;a.download="restaurant-audit.csv";a.click();
  }

  document.getElementById("runAudit").onclick = runAudit;
  document.getElementById("dlCSV").onclick = exportCSV;
  document.getElementById("searchBox").oninput = e=>{
    const val=e.target.value.toLowerCase();
    [...document.querySelectorAll("#auditResults tr")].forEach(tr=>{
      tr.style.display = tr.innerText.toLowerCase().includes(val)? "":"none";
    });
  };

})();
