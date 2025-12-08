/* ================================
  CONTI'S ZAPIET EATS AUDIT ENGINE v3.1
  Author: Mario | computerpsychologist
  Bookmarklet Loader Version
================================ */

(function () {

//////////////////////////////////////////////////////
// CONFIG — Variant Reference Name Table
//////////////////////////////////////////////////////
const VARIANTS = {
"48739436265749":["Petite Strawberry Shortcake","Petite Strawberry Shortcake"],
"48739453174037":["Petite Ube Custard","Petite Ube Custard"],
"45317879300373":["Petite Choco Overload","Petite Choco Overload"],
"45746820841749":["Banana Dream","Banana Dream"],
"45317870780693":["Box of 12","Asado Roll (Pork)"],
"46420646658325":["Box of 6","Asado Roll (Pork)"],
"45317870747925":["Per Piece","Asado Roll (Pork)"],
"45317870223637":["Box of 25","Mamonitos"],
"45317878939925":["Regular","Ube Custard"],
"45317878972693":["Mini","Ube Custard"],
"45317879038229":["Regular","Strawberry Shortcake"],
"45317879070997":["Mini","Strawberry Shortcake"],
"49300964999445":["Ube","Burnt Basque Cheesecake"],
"49300965032213":["Biscoff","Burnt Basque Cheesecake"],
"49300965064981":["Strawberry","Burnt Basque Cheesecake"],
"45317879726357":["Chocolate Blush","Chocolate Blush"],
"46231334781205":["Family Size","Truffle Mushroom Linguine"],
"46231334813973":["Party Size","Truffle Mushroom Linguine"],
"45317875368213":["Family Size","Buttered Vegetables"],
"45317875400981":["Party Size","Buttered Vegetables"],
"45317874843925":["Family Size","Mango Royale Salad"],
"45317874647317":["Family Size","Symphony Salad"],
"45317875040533":["Family Size","Tofu Steak"],
"45317875073301":["Party Size","Tofu Steak"],
"45317877661973":["Family Size","Shanghai Rolls"],
"45317877694741":["Party Size","Shanghai Rolls"],
"45317872353557":["Family Size","Japanese Rice"],
"45317872386325":["Party Size","Japanese Rice"],
"45317872419093":["Family Size","Garlic Rice"],
"45317872451861":["Party Size","Garlic Rice"],
"45317876711701":["Family Size","Beef Caldereta"],
"45317876744469":["Party Size","Beef Caldereta"],
"45317874057493":["Family Size","Lasagna"],
"45317874090261":["Party Size","Lasagna"],
"45317874516245":["Family Size","Cheesey Baked Macaroni"],
"45317874549013":["Party Size","Cheesey Baked Macaroni"],
"45317873697045":["Family Size","Pasta Carbonara"],
"45317873729813":["Party Size","Pasta Carbonara"],
"45317872746773":["Family Size","Pancit Bam-I"],
"45317872779541":["Party Size","Pancit Bam-I"],
"45317872582933":["Family Size","Pancit Palabok"],
"45317872615701":["Party Size","Pancit Palabok"],
"45317872484629":["Family Size","Buttered Corn Rice"],
"45317872517397":["Party Size","Buttered Corn Rice"],
"46460520988949":["Family Size","Shanghai Bites"],
"46460521021717":["Party Size","Shanghai Bites"]
};

//////////////////////////////////////////////////////
// UI — Fullscreen Panel
//////////////////////////////////////////////////////
function buildUI(){
    if(document.getElementById("auditPanel")) return;

    const wrap = document.createElement("div");
    wrap.id="auditPanel";
    wrap.innerHTML = `
    <style>
    #auditPanel{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;z-index:999999;
        overflow:auto;padding:20px;font-family:Arial;border:3px solid #111;}
    #auditPanel table{width:100%;border-collapse:collapse;font-size:13px;}
    #auditPanel th{background:#222;color:#fff;padding:8px;position:sticky;top:0;}
    #auditPanel td{padding:6px;border-bottom:1px solid #ddd;}
    .deny{background:#ffcece;}
    .allow{background:#c8ffd4;}
    .missing{background:#ffe08c !important;font-weight:bold;}
    .closeBtn{position:absolute;top:10px;right:10px;padding:10px;background:#111;color:#fff;cursor:pointer;}
    </style>
    <div class="closeBtn" onclick="document.getElementById('auditPanel').remove()">CLOSE ✖</div>
    <h2>Zapiet Variant Restriction Audit</h2>
    <input id="searchBox" placeholder="Search variant..." style="width:300px;font-size:16px;margin-bottom:15px">
    <table id="resultTable">
    <tr><th>Variant</th><th>Product</th><th>Status</th><th>Dates</th></tr>
    </table>
    `;
    document.body.appendChild(wrap);

    document.getElementById("searchBox").onkeyup = function(){
        let q=this.value.toLowerCase();
        document.querySelectorAll("#resultTable tr").forEach(r=>{
            if(!r.innerText.toLowerCase().includes(q)) r.style.display="none";
            else r.style.display="";
        });
    }
}

//////////////////////////////////////////////////////
// MAIN — Reads restrictions for the CURRENT restaurant
//////////////////////////////////////////////////////
function scan(){
    const rest = ZapietEats.getSelectedRestaurant(); 
    if(!rest){ alert("Select a restaurant first."); return;}

    buildUI();
    const table = document.getElementById("resultTable");
    const menus = rest.menus||[];
    let deny={},allow={};

    menus.forEach(m=>{
        let p=m.config?.store_pickup?.product_date_restrictions||[];
        let d=m.config?.local_delivery?.product_date_restrictions||[];

        [...p,...d].forEach(v=>{
            if(v.restriction_type=="deny") deny[v.variant_id]=v.restricted_dates.join(";");
            if(v.restriction_type=="allow") allow[v.variant_id]=v.restricted_dates.join(";");
        });
    });

    Object.keys(VARIANTS).forEach(id=>{
        let [vname,pname]=VARIANTS[id];
        let status="none",dates="",cls="missing";

        if(deny[id]){status="DENY";dates=deny[id];cls="deny";}
        if(allow[id]){status="ALLOW";dates=allow[id];cls="allow";}
        if(!deny[id]&&!allow[id]){dates="none";}

        table.insertAdjacentHTML("beforeend",
            `<tr class="${cls}"><td>${id} - ${vname}</td><td>${pname}</td><td>${status}</td><td>${dates}</td></tr>`
        );
    });
}

scan();

})();
