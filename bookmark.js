(async function(){

/*******************************************
 * 1. MEMO MASTER LIST (REFERENCE)
 * 2. VERSION - 1.9
 *******************************************/
const MEMO = [
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

/*******************************************
 * 2. FRONTEND SCRAPER (Pickup + Delivery)
 *******************************************/
const SELECTOR_VARIANT = `[data-variant-id], .zapiet-variant`;
const SELECTOR_PICKUP   = `.zapiet-product-restrictions, .product-restrictions`;      // = Pickup PDR
const SELECTOR_DELIVERY = `.zapiet-delivery-restrictions, .delivery-restrictions`;    // = Delivery PDR
const SELECTOR_PRODUCT  = `.zapiet-product-name, .product-name`;
const SELECTOR_VARIANT_NAME = `.zapiet-variant-title, .variant-name`;
const SELECTOR_RESTAURANT   = `[data-location-name], .zapiet-location-selector .selected, .location-name, h1`;

const RESTAURANT = document.querySelector(SELECTOR_RESTAURANT)?.textContent.trim() || "Unknown Store";

const zapietData = Array.from(document.querySelectorAll(SELECTOR_VARIANT)).map(v=>{
    return {
        id:v.getAttribute("data-variant-id")||"",
        pickup:v.querySelector(SELECTOR_PICKUP)?.innerText.trim()||"",
        delivery:v.querySelector(SELECTOR_DELIVERY)?.innerText.trim()||"",
        product:v.querySelector(SELECTOR_PRODUCT)?.innerText.trim()||"",
        variant:v.querySelector(SELECTOR_VARIANT_NAME)?.innerText.trim()||"",
    }
});

const Z={}; zapietData.forEach(z=>Z[z.id]=z);

/*******************************************
 * 3. MERGE MEMO + ZAPIET
 *******************************************/
const dataset = MEMO.map(m=>{
    const z = Z[m.id];
    return {
        id:m.id,
        name:m.name,
        restaurant:RESTAURANT,
        pickup:z?.pickup||"",
        delivery:z?.delivery||"",
        status:z?"OK":"MISSING"
    }
});

/*******************************************
 * 4. UI RENDER
 *******************************************/
const UI=document.createElement("div");
UI.style=`
position:fixed;top:0;left:0;width:100%;height:100%;
background:#ffffff;z-index:999999999;overflow:auto;padding:20px;font-family:sans-serif;
`;

UI.innerHTML=`
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
  <h2>PDR Audit — Based on Memo Reference</h2>
  <div style="display:flex;gap:8px;">
    <input id="search" placeholder="Search..." style="padding:6px;border:1px solid #ccc;width:200px;border-radius:6px;">
    <select id="filter" style="padding:6px;border-radius:6px;">
      <option value="all">All</option>
      <option value="missing">Missing</option>
      <option value="ok">Complete</option>
    </select>
    <button id="csv" style="padding:6px 12px;background:#111;color:#fff;border-radius:6px;">CSV</button>
    <button id="close" style="padding:6px 12px;background:#ffb469;border-radius:6px;">Close</button>
  </div>
</div>

<table id="table" style="width:100%;border-collapse:collapse;font-size:13px;">
<thead>
<tr style="background:#eee;">
  <th style="padding:6px;border:1px solid #ddd;">Variant ID</th>
  <th style="padding:6px;border:1px solid #ddd;">Product - Variant Name</th>
  <th style="padding:6px;border:1px solid #ddd;">Restaurant</th>
  <th style="padding:6px;border:1px solid #ddd;">Pickup Restriction</th>
  <th style="padding:6px;border:1px solid #ddd;">Delivery Restriction</th>
  <th style="padding:6px;border:1px solid #ddd;">Status</th>
</tr></thead><tbody>
${
dataset.map(d=>`
<tr style="background:${d.status=="MISSING"?"#ffe6e6":""}">
  <td style="padding:6px;border:1px solid #eee;">${d.id}</td>
  <td style="padding:6px;border:1px solid #eee;">${d.name}</td>
  <td style="padding:6px;border:1px solid #eee;">${d.restaurant}</td>
  <td style="padding:6px;border:1px solid #eee;color:${d.pickup?'#000':'red'}">${d.pickup||"—"}</td>
  <td style="padding:6px;border:1px solid #eee;color:${d.delivery?'#000':'red'}">${d.delivery||"—"}</td>
  <td style="padding:6px;border:1px solid #eee;font-weight:bold;color:${d.status=='MISSING'?'red':'green'}">${d.status}</td>
</tr>`).join("")
}
</tbody></table>
`;

document.body.appendChild(UI);

/*******************************************
 * 5. Controls
 *******************************************/
document.getElementById("close").onclick=()=>UI.remove();

const rows=[...document.querySelectorAll("#table tbody tr")];
const search=document.getElementById("search");
const filter=document.getElementById("filter");

function filterNow(){
    const q=search.value.toLowerCase();
    rows.forEach(r=>{
        const missing=r.innerText.includes("MISSING");
        let hide=false;

        if(filter.value=="missing"&&!missing) hide=true;
        if(filter.value=="ok"&&missing) hide=true;
        if(q&&!r.innerText.toLowerCase().includes(q)) hide=true;

        r.style.display=hide?"none":"";
    });
}
search.oninput=filterNow; filter.onchange=filterNow;

document.getElementById("csv").onclick=()=>{
    let csv="VariantID,Name,Restaurant,Pickup,Delivery,Status\n";
    dataset.forEach(d=>csv+=`${d.id},"${d.name}",${d.restaurant},${d.pickup},${d.delivery},${d.status}\n`);
    const blob=new Blob([csv],{type:"text/csv"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="PDR-Audit.csv";
    a.click();
};

})();
