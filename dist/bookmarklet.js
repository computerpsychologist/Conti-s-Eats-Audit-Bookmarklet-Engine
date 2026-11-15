
/* ================================
  CONTI'S ZAPIET EATS AUDIT ENGINE v3.2
  Filename: bookmarklet.js
  Author: Mario | computerpsychologist
================================ */

(function(){

  if(document.getElementById("contisAuditPanel")){
    alert("Audit Panel already active.");
    return;
  }

  const VARIANTS = [
    ["45317870780693","Box of 12","Asado Roll (Pork)"],
    ["46420646658325","Box of 6","Asado Roll (Pork)"],
    ["45317870747925","Per Piece","Asado Roll (Pork)"],
    ["45746820841749","Banana Dream","Banana Dream"],
    ["45317876711701","Family","Beef Caldereta"],
    ["45317876744469","Party","Beef Caldereta"],
    ["45317875368213","Family","Buttered Vegetables"],
    ["45317875400981","Party","Buttered Vegetables"],
    ["45317874942229","Family","Conti's Signature Salad"],
    ["45317874876693","Family","Homemade Caesar Salad"],
    ["45317872353557","Family","Japanese Rice"],
    ["45317872386325","Party","Japanese Rice"],
    ["49526281437461","10 pax","Jr Spaghetti & Shanghai"],
    ["49526281961749","10 pax","Jr Mac & Cheese & Chicken"],
    ["49526281830677","10 pax","Jr Mac & Cheese & Shanghai"],
    ["45317874057493","Family","Lasagna"],
    ["45317874090261","Party","Lasagna"],
    ["49526281240853","10 pax","Lasagna & Chicken"],
    ["49526280651029","10 pax","Lasagna & Shanghai"],
    ["45317870223637","Box of 25","Mamonitos"],
    ["45317872746773","Family","Pancit Bam-I"],
    ["45317872779541","Party","Pancit Bam-I"],
    ["49526279930133","10 pax","Bam-I & Chicken"],
    ["49526279012629","10 pax","Bam-I & Shanghai"],
    ["45317872582933","Family","Pancit Palabok"],
    ["45317872615701","Party","Pancit Palabok"],
    ["45317873697045","Family","Pasta Carbonara"],
    ["45317873729813","Party","Pasta Carbonara"],
    ["49526280126741","10 pax","Pesto & Shanghai"],
    ["45317879300373","Petite","Petite Choco Overload"],
    ["48739436265749","Petite","Petite Strawberry Shortcake"],
    ["48739453174037","Petite","Petite Ube Custard"],
    ["46460520988949","Family 50pcs","Shanghai Bites"],
    ["46460521021717","Party 100pcs","Shanghai Bites"],
    ["45317877661973","Family 25pcs","Shanghai Rolls"],
    ["45317877694741","Party 50pcs","Shanghai Rolls"],
    ["49526275277077","10 pax","Sotanghon & Shanghai"],
    ["45317879038229","Regular Pick-up Only","Strawberry Shortcake"],
    ["45317879070997","Mini","Strawberry Shortcake"],
    ["45317874647317","Family","Symphony Salad"],
    ["45317875040533","Family","Tofu Steak"],
    ["45317875073301","Party","Tofu Steak"],
    ["46231334781205","Family","Truffle Mushroom Linguine"],
    ["46231334813973","Party","Truffle Mushroom Linguine"],
    ["45317878939925","Regular","Ube Custard"],
    ["45317878972693","Mini","Ube Custard"],
    ["45317873041685","Family","Molo Soup"],
    ["45317880086805","Molo Soup","Molo Soup"],
    ["48520445985045","Creamy Tomato Soup","Creamy Tomato Soup"],
    ["49520067772693","Family","Bacon Mac & Cheese"],
    ["49520067805461","Party","Bacon Mac & Cheese"],
    ["49520102572309","Family","Cheesy Spaghettimelt"],
    ["49520102605077","Party","Cheesy Spaghettimelt"],
    ["49929105473813","Arroz Caldo","Arroz Caldo"],
    ["49929110520085","Arroz Caldo with Crispy Pork","Arroz Caldo with Crispy Pork"],
    ["48785001087253","Double Chocolate Champorado","Double Chocolate Champorado"],
    ["46323273138453","Biscoff French Toast","Biscoff French Toast"],
    ["45317885591829","Homemade Beef Tapa Strips","Homemade Beef Tapa Strips"],
    ["45317885657365","Daing na Bangus","Daing na Bangus"],
    ["45317885559061","Mom's Garlic Longganisa","Mom's Garlic Longganisa"],
    ["45401375506709","Pork Tocino","Pork Tocino"],
    ["46384590848277","Bacon Bagnet","Bacon Bagnet"],
    ["45442239922453","Smoked Boneless Bangus","Smoked Boneless Bangus"],
    ["45400083726613","Chef's Special Plate","Chef's Special Plate"],
    ["45400825168149","Ultimate Filipino Plate","Ultimate Filipino Plate"],
    ["45401482690837","Really Meaty Plate","Really Meaty Plate"],
    ["49929115140373","Crispy Tofu and Pork","Crispy Tofu and Pork"],
    ["49795091792149","Camembert with Hot Honey and Sourdough Toast","Camembert with Hot Honey and Sourdough Toast"],
    ["47983434957077","Truffle Mozzarella Sticks","Truffle Mozzarella Sticks"],
    ["47931490566421","Buffalo Wings","Buffalo Wings"],
    ["45746449776917","Single Order","Chicken Lollies"],
    ["45317885329685","Gambas y Champiñon al Ajillo","Gambas y Champiñon al Ajillo"],
    ["45720684200213","Regular 8 Slices","Classic Caramel"],
    ["50367069454613","Per Piece","Ube Whoopie Crunch"],
    ["50367069487381","Box of 6","Ube Whoopie Crunch"],
    ["50158129676565","Box of 6","Assorted Whoopie Crunch Pies"],
    ["50015262998805","1 Piece","Mango Tart Mochi"],
    ["50015263031573","6 Pieces","Mango Tart Mochi"],
    ["49803426005269","6 Pieces","Mochi Pistachio Crunch"],
    ["49803426038037","1 Piece","Mochi Pistachio Crunch"],
    ["45317884674325","Mango Royale Salad","Mango Royale Salad"],
    ["45317885002005","Chicken Potato Salad","Chicken Potato Salad"],
    ["45317884936469","Conti's Signature Salad","Conti's Signature Salad"],
    ["45317884805397","Homemade Caesar Salad","Homemade Caesar Salad"],
    ["45317884608789","Pineapple Macaroni Salad","Pineapple Macaroni Salad"],
    ["45317884510485","Symphony Salad","Symphony Salad"],
    ["50202060161301","Russian Potato Salad","Russian Potato Salad"],
    ["50366157979925","Smoky BBQ Pork Ribs","Smoky BBQ Pork Ribs"],
    ["50366158274837","Chicken Roulade","Chicken Roulade"],
    ["45317884281109","Conti's Baked Salmon","Conti's Baked Salmon"],
    ["46414446952725","Baked Prawns","Baked Prawns"],
    ["45317884150037","Salmon Salpicao","Salmon Salpicao"],
    ["49402685817109","Boneless Chicken Inasal","Boneless Chicken Inasal"],
    ["45317883887893","Chicken ala Kiev","Chicken ala Kiev"],
    ["46448102015253","Java Rice","Chicken Barbeque"],
    ["46448102048021","Steamed Rice","Chicken Barbeque"],
    ["46448102080789","Garlic Rice","Chicken Barbeque"],
    ["46448129474837","Java Rice","Barbequed Spare Ribs"],
    ["46448129507605","Steamed Rice","Barbequed Spare Ribs"],
    ["46448129540373","Garlic Rice","Barbequed Spare Ribs"],
    ["49985301840149","Roasted Beef Belly","Roasted Beef Belly"],
    ["46414466416917","Mashed Potato","Roast Beef in Mushroom Sauce"],
    ["46414466449685","Garlic Rice","Roast Beef in Mushroom Sauce"],
    ["45317883560213","Garlic Rice","Beef Salpicao"],
    ["45317883592981","Paella Rice","Beef Salpicao"],
    ["45317883494677","Lengua Estofado","Lengua Estofado"],
    ["49089229324565","Bacon Mac n Cheese","Bacon Mac n Cheese"],
    ["49089225163029","Cheesy Spaghettimelt","Cheesy Spaghettimelt"],
    ["46355656245525","Truffle Mushroom Linguine","Truffle Mushroom Linguine"],
    ["45317882413333","Lasagna","Lasagna"],
    ["45317882380565","Linguine in Pesto Sauce","Linguine in Pesto Sauce"],
    ["45317882282261","Pasta Carbonara","Pasta Carbonara"],
    ["45317881069845","Pasta con Gambas","Pasta con Gambas"],
    ["46414512029973","Vongole Bianco","Vongole Bianco"],
    ["45746726928661","Single Order","Tofu Steak with Japanese Rice"],
    ["45317880152341","Fresh Lumpiang Ubod (2 pcs)","Fresh Lumpiang Ubod"],
    ["45317880217877","Hearty Club Sandwich","Hearty Club Sandwich"],
    ["45317880348949","Chicken Salad Sandwich","Chicken Salad Sandwich"],
    ["45317880119573","Garlic Sotanghon","Garlic Sotanghon"],
    ["49825467498773","Mango Sago Snow","Mango Sago Snow"],
    ["49825466810645","Ube Custard Snow","Ube Custard Snow"],
    ["45317878743317","Regular","Halo-Halo Special"],
    ["45317878776085","Junior Dine-in Only","Halo-Halo Special"],
    ["46412752519445","Mango Bravo Slice","Mango Bravo Slice"],
    ["50056849719573","Crunchy Sisig Rice Bowl","Crunchy Sisig Rice Bowl"],
    ["49697613545749","Light Teriyaki Salmon","Light Teriyaki Salmon"],
    ["49693645668629","Zesty Chicken Souvlaki","Zesty Chicken Souvlaki"],
    ["48207986983189","Crispy Pork","Crispy Pork"],
    ["47550095753493","Soy Chicken Rice Bowl","Soy Chicken Rice Bowl"],
    ["47550075568405","Glazed Salmon Rice Bowl","Glazed Salmon Rice Bowl"]
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

  document.getElementById("closeAudit").onclick = () =>
    document.getElementById("contisAuditPanel").remove();

  function scanRestaurant(){
    const store = ZapietEats?.getSelectedRestaurant?.();

    if(!store){
      alert("Select a restaurant first via Zapiet widget!");
      return;
    }

    // Format Zapiet Product Date Restriction
    function formatRestriction(rule){
      if(!rule) return "none";

      const type = String(rule.restriction_type || "deny").toLowerCase();

      if(type === "until_further_notice"){
        return "Unavailable Until Further Notice";
      }

      const dates = Array.isArray(rule.restricted_dates)
        ? rule.restricted_dates
        : [];

      if(type === "allow"){
        return dates.length
          ? "Available: " + dates.join("; ")
          : "Available";
      }

      if(type === "deny"){
        return dates.length
          ? "Unavailable: " + dates.join("; ")
          : "Unavailable";
      }

      return type.toUpperCase() +
        (dates.length ? ": " + dates.join("; ") : "");
    }

    const pickup = {};
    const delivery = {};

    (store.menus || []).forEach(menu => {

      (menu.config?.store_pickup?.product_date_restrictions || [])
        .forEach(v => {
          pickup[String(v.variant_id)] = formatRestriction(v);
        });

      (menu.config?.local_delivery?.product_date_restrictions || [])
        .forEach(v => {
          delivery[String(v.variant_id)] = formatRestriction(v);
        });

    });

    const rows = VARIANTS.map(v => ({
      id: v[0],
      variant: v[1],
      prod: v[2],
      p: pickup[v[0]] || "none",
      d: delivery[v[0]] || "none"
    }));

    window.auditData = rows;

    let html = `<table border=1 style="width:100%;border-collapse:collapse;">
      <tr style="background:#111;color:#fff;">
        <th>ID</th>
        <th>Product</th>
        <th>Variant</th>
        <th>Pickup</th>
        <th>Delivery</th>
      </tr>`;

    rows.forEach(r => {

      const red = (r.p === "none" && r.d === "none");

      const hasUFN =
        r.p === "Unavailable Until Further Notice" ||
        r.d === "Unavailable Until Further Notice";

      const background = hasUFN
        ? "#ffe4b5"
        : red
          ? "#ffdddd"
          : "#ddffdd";

      html += `<tr style="background:${background};">
        <td>${r.id}</td>
        <td>${r.prod}</td>
        <td>${r.variant}</td>
        <td>${r.p}</td>
        <td>${r.d}</td>
      </tr>`;

    });

    html += "</table>";

    document.getElementById("results").innerHTML = html;
  }

  function exportCSV(){

    if(!window.auditData){
      alert("Run scan first.");
      return;
    }

    const escapeCSV = value =>
      '"' + String(value ?? "").replace(/"/g, '""') + '"';

    const list = [
      "VariantID,Product,Variant,Pickup,Delivery"
    ];

    window.auditData.forEach(r => {

      list.push([
        escapeCSV(r.id),
        escapeCSV(r.prod),
        escapeCSV(r.variant),
        escapeCSV(r.p),
        escapeCSV(r.d)
      ].join(","));

    });

    const blob = new Blob(
      [list.join("\n")],
      {type:"text/csv;charset=utf-8;"}
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "zapiet_audit.csv";
    a.click();

    URL.revokeObjectURL(url);
  }

  document.getElementById("scanBtn").onclick = scanRestaurant;
  document.getElementById("csvBtn").onclick = exportCSV;

  document.getElementById("searchBox").oninput = e => {

    const val = e.target.value.toLowerCase();

    document.querySelectorAll("#results tr").forEach(r => {
      r.style.display =
        r.innerText.toLowerCase().includes(val) ? "" : "none";
    });

  };

})();
