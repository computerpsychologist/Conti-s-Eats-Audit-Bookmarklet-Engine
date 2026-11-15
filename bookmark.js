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
    { id: "45317875368213", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Buttered Vegetables" },
    { id: "45317875400981", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Buttered Vegetables" },
    { id: "45317874942229", variantName: "Family Size", productName: "Conti's Signature Salad" },
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
    { id: "45317872746773", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Pancit Bam-I" },
    { id: "45317872779541", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Pancit Bam-I" },
    { id: "49526279930133", variantName: "10 pax", productName: "Pancit Bam-I & Chicken (for 10 pax)" },
    { id: "49526279012629", variantName: "10 pax", productName: "Pancit Bam-I & Shanghai (for 10 pax)" },
    { id: "45317872582933", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Pancit Palabok (Large Food Order)" },
    { id: "45317872615701", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Pancit Palabok (Large Food Order)" },
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
    { id: "45317879038229", variantName: "Regular (10 slices) (For Pick-up Only)", productName: "Strawberry Shortcake" },
    { id: "45317879070997", variantName: "Mini (6 slices)", productName: "Strawberry Shortcake" },
    { id: "45317874647317", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Symphony Salad (Large Food Order)" },
    { id: "45317875040533", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Tofu Steak" },
    { id: "45317875073301", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Tofu Steak" },
    { id: "46231334781205", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Truffle Mushroom Linguine (Large Food Order)" },
    { id: "46231334813973", variantName: "Party Size (approxiamtely good for 12 to 15 pax)", productName: "Truffle Mushroom Linguine (Large Food Order)" },
    { id: "45317878939925", variantName: "Regular (Maximum of 8km distance for delivery)", productName: "Ube Custard" },
    { id: "45317878972693", variantName: "Mini (Maximum of 8km distance for delivery)", productName: "Ube Custard" },
    { id: "45317873041685", variantName: "Family Size (approxiamtely good for 6 to 8 pax)", productName: "Molo Soup" },
    { id: "45317880086805", variantName: "Molo Soup", productName: "Molo Soup" },
    { id: "48520445985045", variantName: "Creamy Tomato Soup", productName: "Creamy Tomato Soup" },
    { id: "49520067772693", variantName: "Family Size", productName: "Bacon Mac & Cheese" },
    { id: "49520067805461", variantName: "Party Size", productName: "Bacon Mac & Cheese" },
    { id: "49520102572309", variantName: "Family Size", productName: "Cheesy Spaghettimelt" },
    { id: "49520102605077", variantName: "Party Size", productName: "Cheesy Spaghettimelt" },
    { id: "49929105473813", variantName: "Arroz Caldo", productName: "Arroz Caldo" },
    { id: "49929110520085", variantName: "Arroz Caldo with Crispy Pork", productName: "Arroz Caldo with Crispy Pork" },
    { id: "48785001087253", variantName: "Double Chocolate Champorado", productName: "Double Chocolate Champorado" },
    { id: "46323273138453", variantName: "Biscoff French Toast", productName: "Biscoff French Toast" },
    { id: "45317885591829", variantName: "Homemade Beef Tapa Strips", productName: "Homemade Beef Tapa Strips" },
    { id: "45317885657365", variantName: "Daing na Bangus", productName: "Daing na Bangus" },
    { id: "45317885559061", variantName: "Mom's Garlic Longganisa", productName: "Mom's Garlic Longganisa" },
    { id: "45401375506709", variantName: "Pork Tocino", productName: "Pork Tocino" },
    { id: "46384590848277", variantName: "Bacon Bagnet", productName: "Bacon Bagnet" },
    { id: "45442239922453", variantName: "Smoked Boneless Bangus", productName: "Smoked Boneless Bangus" },
    { id: "45400083726613", variantName: "Chef's Special Plate (Breakfast Medley)", productName: "Chef's Special Plate (Breakfast Medley)" },
    { id: "45400825168149", variantName: "Ultimate Filipino Plate (Breakfast Medley)", productName: "Ultimate Filipino Plate (Breakfast Medley)" },
    { id: "45401482690837", variantName: "Really Meaty Plate (Breakfast Medley)", productName: "Really Meaty Plate (Breakfast Medley)" },
    { id: "49929115140373", variantName: "Crispy Tofu and Pork", productName: "Crispy Tofu and Pork" },
    { id: "49795091792149", variantName: "Camembert with Hot Honey and Sourdough Toast", productName: "Camembert with Hot Honey and Sourdough Toast" },
    { id: "47983434957077", variantName: "Truffle Mozzarella Sticks", productName: "Truffle Mozzarella Sticks" },
    { id: "47931490566421", variantName: "Buffalo Wings", productName: "Buffalo Wings" },
    { id: "45746449776917", variantName: "Single Order (8 PCS.)", productName: "Chicken Lollies" },
    { id: "45317885329685", variantName: "Gambas y Champiñon al Ajillo", productName: "Gambas y Champiñon al Ajillo" },
    { id: "45720684200213", variantName: "Regular (8 slices)", productName: "Classic Caramel" },
    { id: "50367069454613", variantName: "Per Piece", productName: "Ube Whoopie Crunch" },
    { id: "50367069487381", variantName: "Box of 6", productName: "Ube Whoopie Crunch" },
    { id: "50158129676565", variantName: "Assorted Whoopie Crunch Pies (Box of 6)", productName: "Assorted Whoopie Crunch Pies (Box of 6)" },
    { id: "50015262998805", variantName: "1 Piece", productName: "Mango Tart Mochi" },
    { id: "50015263031573", variantName: "6 Pieces", productName: "Mango Tart Mochi" },
    { id: "49803426005269", variantName: "6 Pieces", productName: "Mochi Pistachio Crunch" },
    { id: "49803426038037", variantName: "1 Piece", productName: "Mochi Pistachio Crunch" },
    { id: "45317884674325", variantName: "Mango Royale Salad", productName: "Mango Royale Salad" },
    { id: "45317885002005", variantName: "Chicken Potato Salad", productName: "Chicken Potato Salad" },
    { id: "45317884936469", variantName: "Conti's Signature Salad", productName: "Conti's Signature Salad" },
    { id: "45317884805397", variantName: "Homemade Caesar Salad", productName: "Homemade Caesar Salad" },
    { id: "45317884608789", variantName: "Pineapple Macaroni Salad", productName: "Pineapple Macaroni Salad" },
    { id: "45317884510485", variantName: "Symphony Salad", productName: "Symphony Salad" },
    { id: "50202060161301", variantName: "Russian Potato Salad", productName: "Russian Potato Salad" },
    { id: "50366157979925", variantName: "Smoky BBQ Pork Ribs", productName: "Smoky BBQ Pork Ribs" },
    { id: "50366158274837", variantName: "Chicken Roulade", productName: "Chicken Roulade" },
    { id: "45317884281109", variantName: "Conti's Baked Salmon", productName: "Conti's Baked Salmon" },
    { id: "46414446952725", variantName: "Baked Prawns", productName: "Baked Prawns" },
    { id: "45317884150037", variantName: "Salmon Salpicao", productName: "Salmon Salpicao" },
    { id: "49402685817109", variantName: "Boneless Chicken Inasal", productName: "Boneless Chicken Inasal" },
    { id: "45317883887893", variantName: "Chicken ala Kiev", productName: "Chicken ala Kiev" },
    { id: "46448102015253", variantName: "Java Rice", productName: "Chicken Barbeque" },
    { id: "46448102048021", variantName: "Steamed Rice", productName: "Chicken Barbeque" },
    { id: "46448102080789", variantName: "Garlic Rice", productName: "Chicken Barbeque" },
    { id: "46448129474837", variantName: "Java Rice", productName: "Barbequed Spare Ribs" },
    { id: "46448129507605", variantName: "Steamed Rice", productName: "Barbequed Spare Ribs" },
    { id: "46448129540373", variantName: "Garlic Rice", productName: "Barbequed Spare Ribs" },
    { id: "49985301840149", variantName: "Roasted Beef Belly", productName: "Roasted Beef Belly" },
    { id: "46414466416917", variantName: "Mashed Potato", productName: "Roast Beef in Mushroom Sauce" },
    { id: "46414466449685", variantName: "Garlic Rice", productName: "Roast Beef in Mushroom Sauce" },
    { id: "45317883560213", variantName: "Garlic Rice", productName: "Beef Salpicao" },
    { id: "45317883592981", variantName: "Paella Rice", productName: "Beef Salpicao" },
    { id: "45317883494677", variantName: "Lengua Estofado", productName: "Lengua Estofado" },
    { id: "49089229324565", variantName: "Bacon Mac n Cheese", productName: "Bacon Mac n Cheese" },
    { id: "49089225163029", variantName: "Cheesy Spaghettimelt", productName: "Cheesy Spaghettimelt" },
    { id: "46355656245525", variantName: "Truffle Mushroom Linguine", productName: "Truffle Mushroom Linguine" },
    { id: "45317882413333", variantName: "Lasagna", productName: "Lasagna" },
    { id: "45317882380565", variantName: "Linguine in Pesto Sauce", productName: "Linguine in Pesto Sauce" },
    { id: "45317882282261", variantName: "Pasta Carbonara", productName: "Pasta Carbonara" },
    { id: "45317881069845", variantName: "Pasta con Gambas", productName: "Pasta con Gambas" },
    { id: "46414512029973", variantName: "Vongole Bianco", productName: "Vongole Bianco" },
    { id: "45746726928661", variantName: "Single Order", productName: "Tofu Steak with Japanese Rice" },
    { id: "45317880152341", variantName: "Fresh Lumpiang Ubod (2 pcs)", productName: "Fresh Lumpiang Ubod (2 pcs)" },
    { id: "45317880217877", variantName: "Hearty Club Sandwich", productName: "Hearty Club Sandwich" },
    { id: "45317880348949", variantName: "Chicken Salad Sandwich", productName: "Chicken Salad Sandwich" },
    { id: "45317880119573", variantName: "Garlic Sotanghon", productName: "Garlic Sotanghon" },
    { id: "49825467498773", variantName: "Mango Sago Snow", productName: "Mango Sago Snow" },
    { id: "49825466810645", variantName: "Ube Custard Snow", productName: "Ube Custard Snow" },
    { id: "45317878743317", variantName: "Regular", productName: "Halo-Halo Special" },
    { id: "45317878776085", variantName: "Junior (For dine-in only)", productName: "Halo-Halo Special" },
    { id: "46412752519445", variantName: "Mango Bravo Slice", productName: "Mango Bravo Slice" },
    { id: "50056849719573", variantName: "Crunchy Sisig Rice Bowl", productName: "Crunchy Sisig Rice Bowl" },
    { id: "49697613545749", variantName: "Light Teriyaki Salmon (Mindful Meals)", productName: "Light Teriyaki Salmon (Mindful Meals)" },
    { id: "49693645668629", variantName: "Zesty Chicken Souvlaki (Mindful Meals)", productName: "Zesty Chicken Souvlaki (Mindful Meals)" },
    { id: "48207986983189", variantName: "Crispy Pork", productName: "Crispy Pork" },
    { id: "47550095753493", variantName: "Soy Chicken Rice Bowl", productName: "Soy Chicken Rice Bowl" },
    { id: "47550075568405", variantName: "Glazed Salmon Rice Bowl", productName: "Glazed Salmon Rice Bowl" }
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
