// Data for each advertising product category.
// Each `gallery` entry is { image: "url", label: "caption" }.
// - Set `image` to a real photo URL to show it in the gallery grid.
// - Leave `image` as "" (or omit it) to show a styled icon placeholder
//   until you have a real photo - and if a URL 404s, it automatically
//   falls back to the icon tile instead of a broken-image icon.
const advertisementData = {
  "Flex Banner": {
    title: "Flex Banner",
    subtitle:
      "Heavy-duty, weather-resistant vinyl banners built to grab attention at storefronts, events, and roadside locations.",
    icon: "flag",
    heroImage: "https://img.magnific.com/premium-psd/psd-outdoor-textile-banner-mockup_820930-30.jpg?semt=ais_hybrid&w=740&q=80",
    desc: `Flex banners are the workhorse of outdoor advertising - durable, vividly printed, and ready to hang almost anywhere. Made from tear-resistant scrim vinyl, they hold up to sun, rain, and wind while keeping colors bold for months at a stretch. Whether it's a grand opening, a seasonal sale, or a permanent storefront sign, a flex banner delivers big visual impact at a fraction of the cost of rigid signage.`,
    specs: [
      { label: "Material", val: "13oz Scrim Vinyl" },
      { label: "Print", val: "Full Color UV Ink" },
      { label: "Finishing", val: "Hemmed & Grommeted" },
      { label: "Max Width", val: "Up to 10ft Seamless" },
    ],
    gallery: [
      { image: "https://www.mdprintingpress.com/images/products/flex1.jpg", label: "Retail Storefront" },
      { image: "https://www.mdprintingpress.com/images/products/flex2.jpg", label: "Grand Opening" },
      { image: "https://www.mdprintingpress.com/images/products/flex3.jpg", label: "Seasonal Sale" },
      { image: "https://www.mdprintingpress.com/images/products/flex4.jpg", label: "Roadside Advertising" },
      { image: "https://www.mdprintingpress.com/images/products/flex5.jpg", label: "Restaurant Signage" },
      { image: "https://www.mdprintingpress.com/images/products/flex6.jpg", label: "Event Backdrop" },
    ],
  },
  Flyer: {
    title: "Flyer",
    subtitle:
      "Crisp, single-sheet handouts optimized for mass distribution and rapid, high-retention audience engagement.",
    icon: "description",
    heroImage: "https://unblast.com/wp-content/uploads/2025/03/Single-Flyer-Mockup.jpg",
    desc: `Flyers remain one of the most cost-effective ways to spread the word fast. Printed on premium stock with vibrant, fade-resistant inks, our flyers are built for hand-to-hand distribution, mailbox drops, and countertop displays alike. From single sheets to multi-fold formats, we help you create a handout that gets noticed and gets kept.`,
    specs: [
      { label: "Stock", val: "150gsm Gloss/Matte" },
      { label: "Sizes", val: "A6 / A5 / A4 / DL" },
      { label: "Finishing", val: "Single, Bi-fold, Tri-fold" },
      { label: "Turnaround", val: "1-2 Business Days" },
    ],
    gallery: [
      { image: "https://www.mdprintingpress.com/images/products/fly1.jpg", label: "Product Launch" },
      { image: "https://www.mdprintingpress.com/images/products/fly2.jpg", label: "Local Business Promo" },
      { image: "https://www.mdprintingpress.com/images/products/fly3.jpg", label: "Menu Handout" },
      { image: "https://www.mdprintingpress.com/images/products/fly4.jpg", label: "Event Invitation" },
      { image: "https://www.mdprintingpress.com/images/products/fly5.jpg", label: "Real Estate Listing" },
      { image: "https://www.mdprintingpress.com/images/products/fly6.jpg", label: "Community Notice" },
    ],
  },
  Canopy: {
    title: "Canopy",
    subtitle:
      "Branded pop-up tents that turn any outdoor booth, market stall, or activation into a mobile storefront.",
    icon: "camping",
    heroImage: "https://unblast.com/wp-content/uploads/2024/06/Promotional-Outdoor-Display-Tent-Mockup.jpg",
    desc: `A printed canopy does double duty - shelter from the elements and a billboard-sized branding opportunity. Our canopies are fully customizable across the roof, valance, and optional sidewalls, using dye-sublimation printing that bonds color directly into the fabric for a wash-resistant, fade-resistant finish. Perfect for trade shows, farmers markets, sporting events, and pop-up retail.`,
    specs: [
      { label: "Frame", val: "Commercial Aluminum" },
      { label: "Fabric", val: "600D Waterproof Polyester" },
      { label: "Sizes", val: "10x10 / 10x15 / 10x20 ft" },
      { label: "Setup", val: "Tool-Free, Under 10 Min" },
    ],
    gallery: [
      { image: "https://www.mdprintingpress.com/images/products/can1.jpg", label: "Trade Show Booth" },
      { image: "https://www.mdprintingpress.com/images/products/can2.jpg", label: "Farmers Market Stall" },
      { image: "https://www.mdprintingpress.com/images/products/can3.jpg", label: "Sports Sponsorship" },
      { image: "https://www.mdprintingpress.com/images/products/can4.jpg", label: "Street Fair Activation" },
      { image: "https://www.mdprintingpress.com/images/products/can5.jpg", label: "Corporate Event" },
      { image: "https://www.mdprintingpress.com/images/products/can6.jpg", label: "Pop-Up Retail" },
    ],
  },
  Standing: {
    title: "Standing",
    subtitle:
      "Portable roll-up and X-stand banners that set up in seconds for indoor presentations and lobby displays.",
    icon: "crop_portrait",
    heroImage: "https://unblast.com/wp-content/uploads/2020/04/Stand-Roll-up-Banner-Mockup-2.jpg",
    desc: `Standing banners are the go-to solution when you need a professional presence without permanent installation. Our roll-up stands retract into a compact base for easy transport and set up in seconds - no tools required. Ideal for conference booths, retail counters, office lobbies, and anywhere you need branding that can move with you.`,
    specs: [
      { label: "Material", val: "220gsm Satin Banner" },
      { label: "Base", val: "Retractable Aluminum" },
      { label: "Sizes", val: "80x200 / 100x200cm" },
      { label: "Includes", val: "Carry Bag" },
    ],
    gallery: [
      { image: "https://cdn.cssauthor.com/wp-content/uploads/2024/12/Company-Stand-Banner-Mockup-PSD.jpg?strip=all", label: "Conference Booth" },
      { image: "https://resourceboy.com/wp-content/uploads/2022/04/3-4-view-of-a-wooden-stand-banner-mockup-2.jpg", label: "Retail Counter Display" },
      { image: "https://static.vecteezy.com/system/resources/previews/050/143/664/non_2x/x-stand-banner-mockups-standee-travel-psd.png", label: "Office Lobby" },
      { image: "https://freemockupzone.com/wp-content/uploads/2021/07/Free-Realistic-Wooden-Stand-Banner-Mockup-600.jpg", label: "Product Demo" },
      { image: "https://img.freepik.com/premium-psd/tripod-banner-stand-mockup_1051-3602.jpg?semt=ais_hybrid&w=740&q=80", label: "Career Fair" },
      { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSyfieObxTAYicob5U_5iz67ZP80stVhheT7wbdvGaYt323VIckxnqYmC&s=10", label: "Reception Signage" },
    ],
  },
  Vinyl: {
    title: "Vinyl",
    subtitle:
      "Precision-cut adhesive graphics for windows, walls, vehicles, and floors - built to stick and stay sharp.",
    icon: "texture",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcpJ6DsGfQaVjo2g2Snv_JpeIusERSMsoM6xQOGfnvtup-NEqMvTRbRhd&s=10",
    desc: `From storefront window graphics to vehicle decals and floor markings, vinyl printing gives you a durable, high-resolution finish that adheres cleanly to almost any surface. We offer both cut vinyl for clean logo shapes and full-color printed vinyl for photographic detail, with laminate options for extra protection against scuffing and UV fading.`,
    specs: [
      { label: "Material", val: "Self-Adhesive Vinyl" },
      { label: "Finish", val: "Gloss / Matte / Laminated" },
      { label: "Application", val: "Window, Wall, Vehicle, Floor" },
      { label: "Durability", val: "Up to 5 Years Outdoor" },
    ],
    gallery: [
      { image: "https://www.mdprintingpress.com/images/products/vinyl1.jpg", label: "Storefront Window" },
      { image: "https://www.mdprintingpress.com/images/products/vinyl2.jpg", label: "Vehicle Decal" },
      { image: "https://www.mdprintingpress.com/images/products/vinyl3.jpg", label: "Wall Branding" },
      { image: "https://www.mdprintingpress.com/images/products/vinyl4.jpg", label: "Floor Graphics" },
      { image: "https://www.mdprintingpress.com/images/products/vinyl5.jpg", label: "Trade Show Cut Logo" },
      { image: "https://www.mdprintingpress.com/images/products/vinyl6.jpg", label: "Product Labeling" },
    ],
  },
};

function slugify(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "_");
}

function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  nav.innerHTML = "";
  Object.keys(advertisementData).forEach((key, index) => {
    const data = advertisementData[key];
    const btn = document.createElement("button");
    btn.id = "nav-" + slugify(key);
    btn.className =
      "nav-item flex items-center gap-sm px-md py-xs text-left w-full hover:pl-lg transition-all duration-150 text-on-surface-variant hover:bg-surface-container-high" +
      (index === 0 ? " active" : "");
    btn.innerHTML = `<span class="material-symbols-outlined">${data.icon}</span><span class="truncate">${key}</span>`;
    btn.addEventListener("click", () => {
      updateContent(key);
      if (window.innerWidth < 768) toggleSidebar(false);
    });
    nav.appendChild(btn);
  });
}

// Cycles through a few of the theme's tonal palettes so icon chips, the
// hero tile, and gallery tiles share a consistent, branded color system.
const TILE_TONES = [
  "bg-primary-container text-on-primary",
  "bg-secondary-container text-on-secondary-container",
  "bg-tertiary-container text-on-tertiary-container",
];

// Assign each category a fixed tone (by its position in advertisementData)
// so the same category always gets the same color everywhere it appears.
const CATEGORY_TONE = {};
Object.keys(advertisementData).forEach((key, index) => {
  CATEGORY_TONE[key] = TILE_TONES[index % TILE_TONES.length];
});

function slugify(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "_");
}

function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  nav.innerHTML = "";
  Object.keys(advertisementData).forEach((key, index) => {
    const data = advertisementData[key];
    const btn = document.createElement("button");
    btn.id = "nav-" + slugify(key);
    btn.className =
      "nav-item flex items-center gap-sm px-md py-xs text-left w-full hover:pl-lg transition-all duration-150 text-on-surface-variant hover:bg-surface-container-high" +
      (index === 0 ? " active" : "");
    btn.innerHTML = `
   <span class="material-symbols-outlined">
chevron_forward
</span>
      <span class="truncate">${key}</span>
    `;
    btn.addEventListener("click", () => {
      updateContent(key);
      if (window.innerWidth < 768) toggleSidebar(false);
    });
    nav.appendChild(btn);
  });
}

function renderHero(data) {
  const hero = document.getElementById("hero-tile");
  hero.innerHTML = "";

  function showFallbackIcon() {
    hero.className =
      "rounded-xl overflow-hidden border border-outline-variant aspect-video lg:aspect-square flex items-center justify-center " +
      CATEGORY_TONE[data.title];
    hero.innerHTML = `<span class="material-symbols-outlined" style="font-size:6rem; opacity:0.9; font-variation-settings: 'FILL' 1;">${data.icon}</span>`;
  }

  // Use the category's hero image if set, otherwise fall back to the
  // first gallery photo that has one.
  const heroImage =
    data.heroImage || (data.gallery.find((item) => item.image) || {}).image;

  if (heroImage) {
    hero.className =
      "rounded-xl overflow-hidden border border-outline-variant aspect-video lg:aspect-square";
    const img = document.createElement("img");
    img.src = heroImage;
    img.alt = data.title;
    img.className = "w-full h-full object-cover";
    img.addEventListener("error", showFallbackIcon);
    hero.appendChild(img);
  } else {
    showFallbackIcon();
  }
}

function renderGalleryTile(item, icon, toneIndex) {
  const tile = document.createElement("div");
  tile.className =
    "gallery-tile relative rounded-lg overflow-hidden aspect-square cursor-pointer";

  function showFallbackIcon() {
    tile.classList.add(
      ...TILE_TONES[toneIndex % TILE_TONES.length].split(" "),
      "flex",
      "items-center",
      "justify-center",
    );
    const fallbackIcon = document.createElement("span");
    fallbackIcon.className = "material-symbols-outlined";
    fallbackIcon.style.fontSize = "3rem";
    fallbackIcon.style.opacity = "0.8";
    fallbackIcon.textContent = icon;
    tile.prepend(fallbackIcon);
  }

  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.label || "";
    img.loading = "lazy";
    img.className = "absolute inset-0 w-full h-full object-cover";
    // If a link is broken/not-yet-added, fall back to an icon tile
    // instead of showing a broken-image icon.
    img.addEventListener("error", () => {
      img.remove();
      showFallbackIcon();
    });
    tile.appendChild(img);
  } else {
    showFallbackIcon();
  }

  const overlay = document.createElement("div");
  overlay.className =
    "gallery-overlay absolute inset-0 flex flex-col items-center justify-center gap-xs text-center px-xs";
  overlay.innerHTML = `
    <div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
      <span class="material-symbols-outlined text-white">add</span>
    </div>
    <span class="text-white font-label-bold text-label-sm uppercase tracking-wide">${item.label || ""}</span>
  `;
  tile.appendChild(overlay);

  return tile;
}

function renderGallery(data) {
  const gallery = document.getElementById("product-gallery");
  gallery.innerHTML = "";
  data.gallery.forEach((item, i) => {
    gallery.appendChild(renderGalleryTile(item, data.icon, i));
  });
  document.getElementById("gallery-title").innerText = data.title + " Printing";
}

function updateContent(category) {
  document.querySelectorAll(".nav-item").forEach((el) => {
    el.classList.remove(
      "active",
      "bg-secondary-container",
      "text-on-secondary-container",
      "border-l-4",
      "border-secondary",
    );
    el.classList.add("text-on-surface-variant");
  });
  const activeNav = document.getElementById("nav-" + slugify(category));
  if (activeNav) {
    activeNav.classList.remove("text-on-surface-variant");
    activeNav.classList.add(
      "active",
      "bg-secondary-container",
      "text-on-secondary-container",
      "border-l-4",
      "border-secondary",
    );
  }

  const data = advertisementData[category];
  if (!data) {
    console.warn(`No advertisement data found for category: "${category}"`);
    return;
  }

  document.getElementById("product-title").innerText = data.title;
  document.getElementById("product-subtitle").innerText = data.subtitle;
  document.getElementById("product-desc").innerText = data.desc;

  const specsContainer = document.getElementById("product-specs");
  specsContainer.innerHTML = "";
  data.specs.forEach((spec) => {
    specsContainer.innerHTML += `
      <li class="flex flex-col border-b border-outline-variant pb-unit">
        <span class="text-on-surface-variant">${spec.label}</span>
        <strong class="font-label-bold text-primary">${spec.val}</strong>
      </li>
    `;
  });

  renderHero(data);
  renderGallery(data);
}

function toggleSidebar(force) {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isOpen = sidebar.classList.contains("translate-x-0");
  const shouldOpen = force !== undefined ? force : !isOpen;

  if (shouldOpen) {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
  } else {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
    overlay.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  const firstCategory = Object.keys(advertisementData)[0];
  updateContent(firstCategory);
});