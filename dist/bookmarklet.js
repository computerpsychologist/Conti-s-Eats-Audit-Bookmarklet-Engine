/* ================================
  CONTI'S ZAPIET EATS AUDIT ENGINE v3.1
  Filename: bookmarklet.js
  Author: Mario | computerpsychologist
================================ */

(function(){

  if(document.getElementById("contisAuditPanel")){
    alert("Audit Panel already active.");
    return;
  }

  const VARIANTS = [
    ["48739436265749","Petite Strawberry Shortcake","Petite Strawberry Shortcake"],
    ["48739453174037","Petite Ube Custard","Petite Ube Custard"],
    ["45317879300373","Petite Choco Overload","Petite Choco Overload"],
    ["45746820841749","Banana Dream","Banana Dream"],
    ["45317870780693","Box of 12","Asado Roll (Pork)"],
    ["46420646658325","Box of 6","Asado Roll (Pork)"],
    ["45317870747925","Per Piece","Asado Roll (Pork)"],
    ["45317870223637","Box of 25","Mamonitos"],
    ["45317878939925","Regular","Ube Custard"],
    ["45317878972693","Mini","Ube Custard"],
    ["45317879038229","Regular Pick-up Only","Strawberry Shortcake"],
    ["45317879070997","Mini 4km","Strawberry Shortcake"],
    ["49300964999445","Ube","Burnt Basque Cheesecake"],
    ["49300965032213","Biscoff","Burnt Basque Cheesecake"],
    ["49300965064981","Strawberry","Burnt Basque Cheesecake"],
    ["45317879726357","Chocolate Blush","Chocolate Blush"],
    ["46231334781205","Family","Truffle Linguine"],
    ["46231334813973","Party","Truffle Linguine"],
    ["45317875368213","Family","Buttered Vegetables"],
    ["45317875400981","Party","Buttered Vegetables"],
    ["45317874843925","Family","Mango Royale Salad"],
    ["45317874647317","Family","Symphony Salad"],
    ["45317875040533","Family","Tofu Steak"],
    ["45317875073301","Party","Tofu Steak"],
    ["45317877661973","Family 25pcs","Shanghai Rolls"],
    ["45317877694741","Party 50pcs","Shanghai Rolls"],
    ["45317872353557","Family","Japanese Rice"],
    ["45317872386325","Party","Japanese Rice"],
    ["45317872419093","Family","Garlic Rice"],
    ["45317872451861","Party","Garlic Rice"],
    ["45317876711701","Family","Beef Caldereta"],
    ["45317876744469","Party","Beef Caldereta"],
    ["45317874057493","Family","Lasagna"],
    ["45317874090261","Party","Lasagna"],
    ["45317874516245","Family","Cheesy Baked Mac"],
    ["45317874549013","Party","Cheesy Baked Mac"],
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
    ["49526281240853","10 pax","Lasagna & Chicken"],
    ["49526279012629","10 pax","Bam-I & Shanghai"],
    ["49526275277077","10 pax","Sotanghon & Shanghai"],
    ["49526280651029","10 pax","Lasagna & Shanghai"],
    ["49526279930133","10 pax","Bam-I & Chicken"],
    ["49526281437461","10 pax","Jr Spag & Shanghai"],
    ["49526280126741","10 pax","Pesto & Shanghai"],
    ["49526281830677","10 pax","Jr Mac & Shanghai"],
    ["49526281961749","10 pax","Jr Mac & Chicken"],
    ["45317871763733","10 pax","Bundle A"],
    ["49273186353429","30 pax","Bundle A"],
    ["45317871862037","50 pax","Bundle A"],
    ["45317871108373","10 pax","Bundle B"],
    ["49273186451733","30 pax","Bundle B"],
    ["45317871173909","50 pax","Bundle B"],
    ["45317871010069","10 pax","Bundle C"],
    ["49273186877717","30 pax","Bundle C"],
    ["45317871075605","50 pax","Bundle C"],
    ["45317870911765","10 pax","Bundle 1"],
    ["49273186943253","30 pax","Bundle 1"],
    ["45317870977301","50 pax","Bundle 1"],
    ["48331350376725","10 pax","Bundle 2"],
    ["49273185206549","30 pax","Bundle 2"],
    ["48331350442261","50 pax","Bundle 2"],
    ["45317870813461","10 pax","Bundle 3"],
    ["49273185763605","30 pax","Bundle 3"],
    ["45317870878997","50 pax","Bundle 3"]
  ];

  const UI = `
    <div id="contisAuditPanel" style="
      position:fixed;top:20px;right:20px;width:420px;height:550px;background:#fff;
      z-index:999999;border-radius:10px;padding:0;overflow:hidden;
      box-shadow:0 0 25px rgba(0,0,0,.25);font-family:Arial;">
      
      <div style="background:#111;color:#fff;padding:10px;font-size:15px;font-weight:bold;">
        🔍 Conti's Variant Restriction Auditor
        <span id="closeAudit" style="float:right;cursor:pointer;background:#e00;padding:2px 8px;border-radius:6px;">X</span>
      </div>

      <div style="padding:10px;">
        <button id="scanBtn" style="background:#0a8c4a;color:white;padding:8px 12px;border-radius:6px;border:none;">SCAN</button>
        <button id="csvBtn" style="background:#006eff;color:white;margin-left:6px;padding:8px 12px;border-radius:6px;border:none;">CSV</button>
        <br><br>
        <input id="searchBox" placeholder="Search items..." style="width:96%;padding:6px;border:1px solid #ccc;border-radius:5px;">
        <div id="results" style="margin-top:10px;height:380px;overflow:auto;font-size:12px;"></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", UI);

  document.getElementById("closeAudit").onclick = ()=>document.getElementById("contisAuditPanel").remove();

  function scanRestaurant(){
    const store = ZapietEats?.getSelectedRestaurant?.();
    if(!store){ alert("Select a restaurant first via Zapiet widget!"); return; }

    const pickup={},delivery={};
    (store.menus||[]).forEach(menu=>{
      (menu.config?.store_pickup?.product_date_restrictions||[]).forEach(v=>pickup[v.variant_id]=(v.restricted_dates||[]).join("; ")||"none");
      (menu.config?.local_delivery?.product_date_restrictions||[]).forEach(v=>delivery[v.variant_id]=(v.restricted_dates||[]).join("; ")||"none");
    });

    const rows = VARIANTS.map(v=>({
      id:v[0],variant:v[1],prod:v[2],
      p:pickup[v[0]]||"none", d:delivery[v[0]]||"none"
    }));

    window.auditData=rows;

    let html=`<table border=1 style="width:100%;border-collapse:collapse;">
      <tr style="background:#111;color:#fff;">
        <th>ID</th><th>Product</th><th>Variant</th><th>Pickup</th><th>Delivery</th>
      </tr>`;
    
    rows.forEach(r=>{
      const red=(r.p=="none"&&r.d=="none");
      html+=`<tr style="background:${red?"#ffdddd":"#ddffdd"};">
        <td>${r.id}</td>
        <td>${r.prod}</td>
        <td>${r.variant}</td>
        <td>${r.p}</td>
        <td>${r.d}</td>
      </tr>`;
    });
    html+="</table>";

    document.getElementById("results").innerHTML=html;
  }

  function exportCSV(){
    if(!window.auditData){alert("Run scan first.");return;}
    const list=["VariantID,Product,Variant,Pickup,Delivery"];
    window.auditData.forEach(r=>list.push(`${r.id},"${r.prod}","${r.variant}",${r.p},${r.d}`));
    const blob=new Blob([list.join("\n")],{type:"text/csv"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="zapiet_audit.csv";
    a.click();
  }

  document.getElementById("scanBtn").onclick=scanRestaurant;
  document.getElementById("csvBtn").onclick=exportCSV;

  document.getElementById("searchBox").oninput=e=>{
    const val=e.target.value.toLowerCase();
    document.querySelectorAll("#results tr").forEach(r=>{
      r.style.display=r.innerText.toLowerCase().includes(val)? "":"none";
    });
  };

})();
