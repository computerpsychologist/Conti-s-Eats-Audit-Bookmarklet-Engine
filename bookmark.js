(function(){

/* =======================
   CONFIG — UPDATE SELECTORS IF NEEDED
   VERSION - 1.8
   ======================= */

/* Restaurant / Store Selector */
const SELECTOR_RESTAURANT = `
    [data-location-name],
    .zapiet-location-selector .selected,
    .location-name,
    .zapiet-location-name,
    h1
`;

/* Variant Block Wrapper */
const SELECTOR_VARIANT_ROW = `
    .zapiet-variant,
    .zapiet-product,
    [data-variant-id]
`;

/* Individual Text Fields */
const SELECTOR_PRODUCT_NAME = `.zapiet-product-name, .product-name, .header-title`;
const SELECTOR_VARIANT_NAME = `.zapiet-variant-title, .variant-name`;
const SELECTOR_PRODUCT_DATES = `.product-restrictions, .zapiet-product-restrictions, .pdr-product-dates`;
const SELECTOR_DELIVERY_DATES = `.delivery-restrictions, .zapiet-delivery-restrictions, .pdr-delivery-dates`;


/* =======================
   CORE FUNCTIONS
   ======================= */

function getRestaurant(){
    const el=document.querySelector(SELECTOR_RESTAURANT);
    return el ? el.textContent.trim() : "Unknown Store";
}

function getVariantRows(){
    return Array.from(document.querySelectorAll(SELECTOR_VARIANT_ROW));
}

function extract(row){
    const id=row.getAttribute("data-variant-id")||"";

    const p=row.querySelector(SELECTOR_PRODUCT_NAME)?.textContent.trim()||"";
    const v=row.querySelector(SELECTOR_VARIANT_NAME)?.textContent.trim()||"";
    const name = p && v ? `${p} - ${v}` : p||v||"Unnamed";

    const pDates=row.querySelector(SELECTOR_PRODUCT_DATES)?.textContent.trim()||"";
    const dDates=row.querySelector(SELECTOR_DELIVERY_DATES)?.textContent.trim()||"";

    return {
        variantId:id,
        name,
        restaurant:getRestaurant(),
        productRestriction:pDates,
        deliveryRestriction:dDates
    };
}


/* =======================
   UI BUILDER
   ======================= */

function render(data){
    const overlay=document.createElement("div");
    overlay.style=`
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:#fff;z-index:999999999;overflow:auto;
        padding:20px;font-family:sans-serif;
    `;

    overlay.innerHTML=`
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <h2 style="margin:0;font-size:18px;">Zapiet PDR Audit (Frontend Extract)</h2>

    <div style="display:flex;gap:8px;align-items:center;">
        <input id="pdrSearch" placeholder="Search..." style="padding:5px 8px;font-size:12px;border:1px solid #ccc;border-radius:5px;">
        <select id="pdrFilter" style="padding:5px 8px;font-size:12px;border:1px solid #ccc;border-radius:5px;">
            <option value="all">All</option>
            <option value="missing">Missing Restrictions</option>
            <option value="with">With Restrictions</option>
            <option value="none">No Restrictions</option>
        </select>
        <button id="downloadCSV" style="padding:5px 10px;background:#111;color:#fff;border-radius:5px;">CSV</button>
        <button id="closeAudit" style="padding:5px 10px;border-radius:5px;">Close</button>
    </div>
</div>

<table id="pdrTable" style="width:100%;border-collapse:collapse;font-size:13px;">
    <thead>
        <tr style="background:#f3f3f3;">
            <th style="padding:8px;border:1px solid #ddd;">Variant ID</th>
            <th style="padding:8px;border:1px solid #ddd;">Product-Variant Name</th>
            <th style="padding:8px;border:1px solid #ddd;">Restaurant</th>
            <th style="padding:8px;border:1px solid #ddd;">Product Restriction</th>
            <th style="padding:8px;border:1px solid #ddd;">Delivery Restriction</th>
        </tr>
    </thead>
    <tbody>
    ${data.map(r=>`
        <tr>
            <td style="padding:6px;border:1px solid #eee;">${r.variantId}</td>
            <td style="padding:6px;border:1px solid #eee;">${r.name}</td>
            <td style="padding:6px;border:1px solid #eee;">${r.restaurant}</td>
            <td style="padding:6px;border:1px solid #eee;color:${r.productRestriction?'black':'red'}">
                ${r.productRestriction||"NONE"}
            </td>
            <td style="padding:6px;border:1px solid #eee;color:${r.deliveryRestriction?'black':'red'}">
                ${r.deliveryRestriction||"NONE"}
            </td>
        </tr>`).join("")}
    </tbody>
</table>
    `;

    document.body.appendChild(overlay);

    // close
    document.getElementById("closeAudit").onclick=()=>overlay.remove();

    // search + filter live behavior
    const search=document.getElementById("pdrSearch");
    const filter=document.getElementById("pdrFilter");
    const table=document.getElementById("pdrTable").querySelector("tbody");

    function update(){
        const q=search.value.toLowerCase();
        const mode=filter.value;

        [...table.rows].forEach(r=>{
            const text=r.innerText.toLowerCase();
            const hasP=r.cells[3].innerText!="NONE";
            const hasD=r.cells[4].innerText!="NONE";

            let show=true;
            if(mode=="missing" && hasP&&hasD) show=false;
            if(mode=="with" && !(hasP||hasD)) show=false;
            if(mode=="none" && (hasP||hasD)) show=false;
            if(q && !text.includes(q)) show=false;

            r.style.display=show?"":"none";
        });
    }
    search.oninput=update;
    filter.onchange=update;

    // CSV export
    document.getElementById("downloadCSV").onclick=()=>{
        let csv=["VariantID,Product-Variant,Restaurant,P-Restriction,D-Restriction"];
        data.forEach(r=>{
            csv.push(`"${r.variantId}","${r.name}","${r.restaurant}","${r.productRestriction}","${r.deliveryRestriction}"`);
        });
        const blob=new Blob([csv.join("\n")],{type:"text/csv"});
        const url=URL.createObjectURL(blob);
        const a=document.createElement("a");
        a.href=url;a.download="zapiet-pdr-audit.csv";a.click();
        URL.revokeObjectURL(url);
    };
}


/* =======================
   RUN
   ======================= */

setTimeout(()=>{
    const rows=getVariantRows().map(extract);
    render(rows);
},300);

})();
