const productData = {
  Brochures: {
    title: "Premium Brochures",
    subtitle:
      "High-impact, multi-page marketing collateral designed to communicate your strategic vision with tactile precision.",
    image: "https://www.mdprintingpress.com/images/products/99.jpg",
    imageAlt: `A professional, high-quality photograph of a sleek, dark blue corporate brochure standing upright in a modern, well-lit office setting. The brochure features minimalist typography and a subtle cyan accent line, exuding a modern, high-precision aesthetic.`,
    desc: `Our premium brochures are the gold standard for corporate storytelling. Engineered to balance extensive information with striking design, they offer a tactile experience that captures attention. Printed on ultra-premium gloss or matte text stock with options for tri-fold, z-fold, or gate-fold layouts, these brochures serve as an authoritative, interactive guide that outlines your services, establishes trust, and turns prospects into clients.`,
    specs: [
      { label: "Stock", val: "100lb Gloss Cover" },
      { label: "Coating", val: "Soft-Touch Aqueous" },
      { label: "Folding", val: "Tri-fold / Z-fold" },
      { label: "Turnaround", val: "2-3 Business Days" },
    ],
  },
  Catalogues: {
    title: "Catalogues",
    subtitle:
      "Vibrant, single-sheet promotional materials optimized for quick distribution and high visibility.",
    image: "https://www.mdprintingpress.com/images/products/printing1.jpg",
    imageAlt:
      "A stack of vibrant, freshly printed marketing flyers sitting on a light wooden table in a bustling print shop environment. A professional printer operates machinery in the softly blurred background, highlighting the industrial precision of the process.",
    desc: `Designed for high-impact inventory presentation, our custom catalogues combine crisp image reproduction with structural durability. Utilizing advanced saddle-stitch or perfect-binding methods, they allow businesses to showcase vast product ranges without compromising on aesthetic appeal. Ideal for B2B wholesale orders, luxury retail lines, and comprehensive product guides that demand frequent flipping and long-term durability.`,
    specs: [
      { label: "Binding", val: "Perfect Bound / Saddle-Stitched" },
      { label: "Cover Stock", val: "100lb Gloss Cover + UV" },
      { label: "Page Stock", val: "80lb Gloss Text" },
      { label: "Turnaround", val: "5-7 Business Days" },
    ],
  },
  "Visiting Cards": {
    title: "Visiting Cards",
    subtitle:
      "Premium, high-finish networking essentials tailored to leave a powerful, lasting first impression.",
    image: "https://www.mdprintingpress.com/images/products/1.jpg",
    imageAlt:
      "A clean, minimalist composition of three perfectly folded corrugated kraft paper shipping boxes arranged on a seamless white background. They feature crisp, black printed typography and logos, conveying a modern, premium brand identity.",
    desc: `Your visiting card is often the physical anchor of a first impression. We elevate this essential networking asset using thick, premium cardstocks ranging from 350GSM to ultra-heavy luxury layers. Give your cards a modern competitive edge with specialty finishes like tactile spot UV, brilliant metallic foil stamping, velvet soft-touch lamination, or modern rounded corners that command respect the moment they leave your hand.`,
    specs: [
      { label: "Stock", val: "16pt Ultra-Thick Cardstock" },
      { label: "Finishes", val: "Spot UV / Matte Lamination" },
      { label: "Corners", val: "Standard Straight / Rounded" },
      { label: "Turnaround", val: "1-2 Business Days" },
    ],
  },
  "Invitation Cards": {
    title: "Invitation Cards",
    subtitle:
      "Exquisite, custom-crafted cards designed to set a sophisticated tone for corporate milestones and exclusive events.",
    image: "https://www.mdprintingpress.com/images/products/4.jpg",
    imageAlt:
      "A wide-angle shot of a busy exhibition hall featuring towering, brightly colored large-format display banners. The banners display striking magenta and cyan gradients with bold typography, showcasing high-resolution industrial printing capabilities.",
    desc: `Set an elite tone for your milestone events, corporate galas, and product launches with bespoke invitation cards. Printed on textured, heavy-weight linen or canvas stocks, these invitations balance sensory feel with rich color accuracy. Paired with custom-matched envelopes, they build anticipation and reflect the exact premium scale of the event you are hosting.`,
    specs: [
      { label: "Stock", val: "14pt Premium Natural Linen" },
      { label: "Accents", val: "Metallic Foil Stamping" },
      { label: "Envelopes", val: "Custom V-Flap Included" },
      { label: "Turnaround", val: "3-4 Business Days" },
    ],
  },
  "Letter Head": {
    title: "Head",
    subtitle:
      "Sleek, professional corporate stationery that reinforces your premium brand identity across all official correspondence",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9YjKsn10FgCObq-Io59zNa_097LcvrO-lZa78aR4qKG2NbYWQqbWN6dw&s=10",
    imageAlt: "Letter head designs.jpeg",
    desc: `Establish immediate institutional authority with sleek, corporate letterheads. Printed on high-grade, laser-safe executive bond paper, they ensure your official correspondence, contract proposals, and invoices are framed professionally. The colors stay sharp, the paper doesn’t bleed, and your corporate identity remains impeccably sharp across every single page.`,
    specs: [
      { label: "Stock", val: "70lb Executive Bond Text" },
      { label: "Compatibility", val: "Laser & Inkjet Safe" },
      { label: "Sizing", val: "Standard A4 / Letter" },
      { label: "Turnaround", val: "2-3 Business Days" },
    ],
  },
  Books: {
    title: "Books",
    subtitle:
      "Professionally bound, high-grade publications crafted to preserve extensive written content with retail-quality finishes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHP1-u18GP1yNPIMNlRIvCBPjaNcGSQNK_mya6uti09A&s=10",
    imageAlt: "Books.png",
    desc: `From self-published novels to premium corporate history books, our book printing services deliver retail-ready results. Choose between classic, commanding hardcovers or sleek, versatile paperbacks. We ensure deep black text legibility, rich full-color image inserts, and precision spine binding that stands the test of time on any shelf or coffee table.`,
    specs: [
      { label: "Binding", val: "Casebound Hardcover / Paperback" },
      { label: "Internal Paper", val: "50lb Fine Uncoated Cream" },
      { label: "Cover Finish", val: "Anti-Scuff Matte Film" },
      { label: "Turnaround", val: "7-10 Business Days" },
    ],
  },
  Magazines: {
    title: "Magazines",
    subtitle:
      "Vibrant, high-gloss periodical layouts that engage your audience through striking visuals and immaculate typography",
    image:
      "https://static.rfstat.com/renderforest/images/v2/landing-pics/mockups/magazine/hero_slide_1.jpeg?v=18",
    imageAlt: "Magazines.png",
    desc: `Bring your editorial visions to life with vibrant, high-gloss periodical printing. Engineered to handle high page counts seamlessly, our magazines utilize lightweight internal pages for an effortless reading experience, paired with heavy, UV-coated outer covers for a luxury newsstand feel. Perfect for lifestyle brands, real estate lookbooks, and internal corporate publications.`,
    specs: [
      { label: "Binding", val: "High-Capacity Saddle-Stitch" },
      { label: "Cover Stock", val: "100lb Gloss Premium" },
      { label: "Page Stock", val: "60lb Lightweight Gloss" },
      { label: "Turnaround", val: "4-6 Business Days" },
    ],
  },
  Leaflets: {
    title: "Leaflets",
    subtitle:
      "Crisp, single-sheet handouts optimized for mass distribution and rapid, high-retention audience engagement",
    image:
      "https://mockups-design.com/wp-content/uploads/2024/07/Roll_Fold_DL_Flyer_Mockup_1-1.jpg",
    imageAlt: "Leaflets design.jpeg",
    desc: `When your message needs fast, widespread distribution without breaking the budget, our custom leaflets deliver. These single-sheet handouts are optimized for high-volume printing with razor-sharp graphics. They are the ideal choice for neighborhood saturation campaigns, limited-time retail discounts, menu distributions, or rapid event promotions.`,
    specs: [
      { label: "Stock", val: "100lb Eco-Gloss Text" },
      { label: "Sizing", val: "A5 / A6 / Custom Cut" },
      { label: "Ink Process", val: "Full-Color CMYK" },
      { label: "Turnaround", val: "1-2 Business Days" },
    ],
  },
  Posters: {
    title: "Posters",
    subtitle:
      "Large-format, visually commanding displays engineered to capture attention instantly in high-traffic environments",
    image:
      "https://mockups-design.com/wp-content/uploads/2025/02/Poster_on_the_floor_mockup_1-1.jpg",
    imageAlt: "Posters designs.png",
    desc: `Dominate visual spaces and capture ambient attention with large-format commercial posters. Utilizing fade-resistant architectural inks on premium photo-base paper, these prints deliver brilliant, saturated color ranges and pristine contrast. Perfect for storefront window displays, high-traffic corridors, indoor gallery showcases, or cinematic promotions.`,
    specs: [
      { label: "Stock", val: "8mil High-Shed Photo Paper" },
      { label: "Ink Type", val: "Fade-Resistant UV Architectural" },
      { label: "Sizing", val: "A1 / A2 / Custom Large-Format" },
      { label: "Turnaround", val: "1-2 Business Days" },
    ],
  },
  Dangles: {
    title: "Dangles",
    subtitle:
      "Eye-catching, suspended retail signage designed to draw immediate attention to your active in-store promotions   ",
    image: "https://www.mdprintingpress.com/images/products/8.jpg",
    imageAlt: "Dangles Mockups.jpeg",
    desc: `Maximized for physical retail spaces, danglers are ceiling-suspended marketing assets that introduce movement to static store layouts. Custom die-cut into circular, square, or custom geometric shapes, they float naturally with in-store air currents, guiding customer eyes directly toward your featured products, seasonal aisles, or active sales events.`,
    specs: [
      { label: "Stock", val: "350GSM Ultra-Rigid Board" },
      { label: "Cutting", val: "Custom Die-Cut Geometric Shapes" },
      { label: "Fixtures", val: "Pre-Punched Hole + Clear Cord" },
      { label: "Turnaround", val: "3-5 Business Days" },
    ],
  },
  Wobblers: {
    title: "Wobblers",
    subtitle:
      "Dynamic, micro-interactive shelf marketing tools designed to trigger impulse purchases at the point of sale",
    image:
      "https://img.magnific.com/premium-psd/realistic-round-wobbler-mockup-retail-product-promotion_1188215-186.jpg?semt=ais_hybrid&w=740&q=80",
    imageAlt: "Wobblers_mockup.jpeg",
    desc: `Wobblers are dynamic point-of-sale assets designed to break through the visual clutter of crowded retail shelves. Attached via flexible, clear plastic or spring necks, they physically pop outward toward the customer and vibrate gently as shoppers pass by. This micro-interaction triggers impulse purchases by instantly highlighting flash discounts or new arrivals.`,
    specs: [
      { label: "Material", val: "300GSM Art Card + Clear PVC Neck" },
      { label: "Adhesive", val: "Heavy-Duty Double-Sided Foam Tape" },
      { label: "Sizing", val: '4" x 4" Circle / Square' },
      { label: "Turnaround", val: "3-5 Business Days" },
    ],
  },
  Booklet: {
    title: "Booklet",
    subtitle:
      "Compact, multi-page informational assets perfect for clean, structured, and easily digestible product guides",
    image:
      "https://images.pixeden.com/images/a4-psd-magazine-booklet-mockup-vol3_full_preview_retina.jpg",
    imageAlt: "Booklet_mockup.png",
    desc: `When a brochure is too small but a book is too extensive, our compact booklets provide the perfect middle ground. Ideal for instruction manuals, software documentation, event programs, or technical warranties, these saddle-stitched booklets group your vital data into clean, structured, and highly scannable page sequences.`,
    specs: [
      { label: "Binding", val: "Dual-Staple Saddle-Stitch" },
      { label: "Page Range", val: "8 to 64 Structured Pages" },
      { label: "Stock Type", val: "80lb Silk Touch Text" },
      { label: "Turnaround", val: "3-4 Business Days" },
    ],
  },
  "Note Book": {
    title: "Note Book",
    subtitle:
      "Elegant, durable custom journals built for everyday corporate utility while keeping your brand top-of-mind",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSx0xp5LcJmzro8L75VOPXVsxiTClZB5uEJi7p2EdOTAxIgGMScbFE3HY&s=10",
    imageAlt: "Note Book Design.png",
    desc: `Transform daily utility into a subtle, permanent marketing channel with custom-branded notebooks. Featuring heavy-duty bound covers, premium lined or grid interior pages that resist ink bleeding, and options for built-in ribbon bookmarks, these notebooks serve as excellent luxury gifts for corporate clients, new employee onboardings, or event swag.`,
    specs: [
      { label: "Cover Type", val: "Rigid Heavy-Duty Hardcover" },
      { label: "Pages", val: "160 Premium Ruled Pages" },
      { label: "Paper Weight", val: "80GSM Ghost-Resistant Text" },
      { label: "Turnaround", val: "5-7 Business Days" },
    ],
  },
  "Note Pad": {
    title: "Note Pad",
    subtitle:
      "Practical, branding-integrated desk essentials designed for quick professional notes, sketching, and daily tasks",
    image:
      "https://t3.ftcdn.net/jpg/04/07/05/76/360_F_407057684_OkV7cdwKvCRRurfZmVsbpzH8JDw8JsuY.jpg",
    imageAlt: "Note Pad_mockup.png",
    desc: `Keep your company logo front and center on your client's desk 365 days a year. Built with an easy-tear glue top binding and a rigid cardboard backing, our personalized desk notepads are perfect for rapid sketching, daily task lists, and taking quick phone call notes, ensuring high-frequency brand exposure with every page torn away.`,
    specs: [
      { label: "Binding", val: "Easy-Tear Glue Top Compound" },
      { label: "Backing", val: "40pt Extra-Thick Backing Board" },
      { label: "Sheet Count", val: "50 Sheets Per Pad" },
      { label: "Turnaround", val: "2-3 Business Days" },
    ],
  },
  Calendars: {
    title: "Calendars",
    subtitle:
      "Striking, 365-day marketing real estate ensuring your brand remains highly visible on your clients' desks all year round",
    image:
      "https://mockups-design.com/wp-content/uploads/2017/11/Desk_Calendar_Mockup_OK_3.jpg",
    imageAlt: "Calendars_mockup.jpg",
    desc: `Secure prime advertising real estate inside your clients' offices for an entire year. Available in compact triangle desk setups or large multi-page wall-hanging variants, our custom calendars use heavy gloss paper to showcase stunning company imagery alongside clean, legible date grids that keep your contact info visible day in and day out.`,
    specs: [
      { label: "Styles", val: "Desktop Triangle Tent / Wall Hanging" },
      { label: "Binding", val: "Rugged Twin-Loop Wire-O" },
      { label: "Paper Type", val: "100lb Heavy Satin Gloss" },
      { label: "Turnaround", val: "4-6 Business Days" },
    ],
  },
  Diaries: {
    title: "Diaries",
    subtitle:
      "Premium, structured executive planners tailored for daily productivity and high-end corporate gifting",
    image:
      "https://img.magnific.com/free-vector/premium-journal-cover-design-mockup_53876-76809.jpg?semt=ais_hybrid&w=740&q=80",
    imageAlt: "Diaries_mockup.jpeg",
    desc: `An executive favorite, our premium diaries function as structured daily planners designed for productivity. Wrapped in sophisticated faux-leather, debossed hardcovers, or custom printed casings, they offer structured daily layouts, year-at-a-glance grids, and dedicated note sections, making them the ultimate end-of-year corporate holiday gift.`,
    specs: [
      { label: "Cover Material", val: "Debossed Premium Faux-Leather" },
      { label: "Layouts", val: "Page-A-Day / Executive Weekly" },
      { label: "Add-ons", val: "Ribbon Marker + Pen Loop Holder" },
      { label: "Turnaround", val: "6-8 Business Days" },
    ],
  },
  "Annual Reports": {
    title: "Annual Reports",
    subtitle:
      "Polished, data-driven financial publications designed to communicate corporate transparency and stakeholder confidence",
    image: "https://www.mdprintingpress.com/images/products/17.jpg",
    imageAlt: "Annual Reports_mockup",
    desc: `Communicate corporate transparency and financial health with flawless data presentation. Our annual reports feature hyper-crisp typography for complex numbers, clear color-coded charts, and high-quality card covers. Every element is aligned to project professional confidence to your stakeholders, board members, and potential investors.`,
    specs: [
      { label: "Binding", val: "Premium Perfect Bound / Wire-O" },
      { label: "Page Stock", val: "100lb Matte Ultra-Opaque text" },
      { label: "Cover Finish", val: "Velvet Soft-Touch Lamination" },
      { label: "Turnaround", val: "4-5 Business Days" },
    ],
  },
  Newsletter: {
    title: "Newsletter",
    subtitle:
      "Engaging, editorial-grade prints created to keep your clients and team updated with clean, scannable layouts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPwU-I9x_nT8lPbLAi0-aBDq-FEOKv4AbEYiRZ0GR8N1JY6DR09uiMg8c&s=10",
    imageAlt: "Newsletter_mockup",
    desc: `Bridge the gap between your brand and your audience with tactile print newsletters. Designed around a highly legibile grid layout, they seamlessly balance editorial text columns with supporting imagery. Perfect for alumni updates, community organizations, non-profit outreach, or internal corporate culture reviews.`,
    specs: [
      { label: "Layout style", val: "4-Page / 8-Page Modular Grid" },
      { label: "Stock Type", val: "80lb Non-Glare Silk Text" },
      { label: "Ink Base", val: "High-Density Eco-Solvent Inks" },
      { label: "Turnaround", val: "2-3 Business Days" },
    ],
  },
  Stickers: {
    title: "Stickers",
    subtitle:
      "High-grade, precision-cut adhesive graphics perfect for versatile branding, packaging accents, and product labeling",
    image: "https://www.mdprintingpress.com/images/products/19.jpg",
    imageAlt: "sticker_mockup",
    desc: `Put your branding on literally anything with precision-cut custom stickers and product packaging labels. Printed on weatherproof, scratch-resistant premium vinyl with your choice of a sleek matte or ultra-shiny gloss finish, these stickers feature a strong adhesive back that locks perfectly onto bottles, jars, shipping boxes, or promotional hand-outs.`,
    specs: [
      { label: "Material", val: "Weatherproof / Tearproof Vinyl" },
      { label: "Finishes", val: "Sleek Matte / Crystal High-Gloss" },
      { label: "Cutting Type", val: "Precision Machine Die-Cut / Kiss-Cut" },
      { label: "Turnaround", val: "1-2 Business Days" },
    ],
  },
};

// Turns any category name into a safe, consistent id/lookup key,
// e.g. "Note Book" -> "note_book", so buttons and data always match.
function slugify(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "_");
}

// Build the sidebar once from whatever is in productData, so the
// buttons always stay in sync with the data - no more hardcoded,
// mismatched onclick strings.
function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  nav.innerHTML = "";
  Object.keys(productData).forEach((key, index) => {
    const btn = document.createElement("button");
    btn.id = "nav-" + slugify(key);
    btn.className =
      "nav-item flex items-center gap-sm px-md py-xs text-left w-full hover:pl-lg transition-all duration-150 text-on-surface-variant hover:bg-surface-container-high" +
      (index === 0 ? " active" : "");
    btn.innerHTML = `<span class="material-symbols-outlined">
chevron_forward
</span><span class="truncate">${key}</span>`;
    btn.addEventListener("click", () => {
      updateContent(key);
      // On mobile, close the drawer after picking a category
      if (window.innerWidth < 768) toggleSidebar(false);
    });
    nav.appendChild(btn);
  });
}

// Keeps track of whichever product category is currently on screen, so the
// "Request Quote for this Product" button always knows what to pre-fill.
let currentProductCategory = null;

function updateContent(category) {
  currentProductCategory = category;
  // Update Navigation State
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

  // Update Content
  const data = productData[category];
  if (data) {
    document.getElementById("product-title").innerText = data.title;
    document.getElementById("product-subtitle").innerText = data.subtitle;
    document.getElementById("product-desc").innerText = data.desc;

    const imgEl = document.getElementById("product-image");
    imgEl.src = data.image;
    imgEl.setAttribute("data-alt", data.imageAlt);

    // Update Specs
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
  } else {
    console.warn(`No product data found for category: "${category}"`);
  }
}

// Mobile-only main nav links inside the drawer should close the drawer once
// tapped (anchors navigate away anyway; the in-page "Products" link and the
// "Get a Quote" trigger don't, so this keeps the UI tidy either way).
document.addEventListener("DOMContentLoaded", () => {
  const mobileMainNav = document.querySelector('aside#sidebar nav[aria-label="Main navigation"]');
  if (mobileMainNav) {
    mobileMainNav.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => {
        if (window.innerWidth < 768) toggleSidebar(false);
      });
    });
  }
});

// Mobile sidebar drawer control
let sidebarOpen = false;
function toggleSidebar(force) {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (!sidebar || !overlay) return;

  const shouldOpen = force !== undefined ? force : !sidebarOpen;
  sidebarOpen = shouldOpen;

  if (shouldOpen) {
    sidebar.classList.remove("sidebar-closed");
    sidebar.classList.add("sidebar-open");
    overlay.classList.remove("hidden");
  } else {
    sidebar.classList.remove("sidebar-open");
    sidebar.classList.add("sidebar-closed");
    overlay.classList.add("hidden");
  }
}

// ===================== Get a Quote Modal =====================
(function () {
  const overlay = document.getElementById("quoteModalOverlay");
  const closeBtn = document.getElementById("quoteModalClose");
  const successCloseBtn = document.getElementById("quoteSuccessClose");
  const formView = document.getElementById("quoteFormView");
  const successView = document.getElementById("quoteSuccessView");
  const quoteForm = document.getElementById("quoteForm");
  const quoteMsgDiv = document.getElementById("quoteFormMessage");
  const quoteProductSelect = document.getElementById("quoteProduct");
  const openTriggers = document.querySelectorAll(".js-open-quote-modal");
  const requestQuoteBtn = document.getElementById("requestQuoteBtn");

  if (!overlay || !quoteForm) return;

  const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?[0-9]{7,15}$/;

  const quoteFields = [
    {
      id: "quoteName",
      label: "Name",
      regex: nameRegex,
      errorMsg: "Please enter a valid name (letters only, 2-50 characters).",
    },
    {
      id: "quoteEmail",
      label: "Email Address",
      regex: emailRegex,
      errorMsg: "Please enter a valid email address.",
    },
    {
      id: "quotePhone",
      label: "Phone Number",
      regex: phoneRegex,
      errorMsg: "Please enter a valid phone number (7-15 digits).",
    },
    { id: "quoteProduct", label: "Select Product", errorMsg: "Please select a product." },
    {
      id: "quoteQuantity",
      label: "Expected Order Quantity",
      errorMsg: "Please select the expected order quantity.",
    },
    { id: "quoteState", label: "State", errorMsg: "Please select your state." },
  ];

  // Build the "Select Product" dropdown straight from productData so it
  // always lists every product category shown on the page - no more
  // hardcoded, mismatched option lists.
  function populateQuoteProductOptions() {
    if (!quoteProductSelect) return;
    // Remove any previously injected options, keep the disabled placeholder
    quoteProductSelect
      .querySelectorAll("option:not([value=''])")
      .forEach((opt) => opt.remove());

    Object.keys(productData).forEach((key) => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = productData[key].title;
      quoteProductSelect.appendChild(opt);
    });
  }

  function resetQuoteModalView() {
    formView.classList.remove("hidden");
    successView.classList.add("hidden");
    quoteMsgDiv.classList.add("hidden");
    quoteMsgDiv.classList.remove("bg-error-container", "text-on-error-container");
    quoteForm.reset();
    quoteFields.forEach((f) => {
      document
        .getElementById(f.id)
        .classList.remove("border-error", "border-on-tertiary-container", "border-2");
    });
  }

  function openQuoteModal(prefillCategory) {
    resetQuoteModalView();
    if (prefillCategory && quoteProductSelect && productData[prefillCategory]) {
      quoteProductSelect.value = prefillCategory;
    }
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeQuoteModal() {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    document.body.style.overflow = "";
  }

  openTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openQuoteModal();
    });
  });

  // "Request Quote for this Product" - opens the modal with the currently
  // displayed product already selected in the dropdown.
  if (requestQuoteBtn) {
    requestQuoteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openQuoteModal(currentProductCategory);
    });
  }

  closeBtn.addEventListener("click", closeQuoteModal);
  successCloseBtn.addEventListener("click", closeQuoteModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeQuoteModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) closeQuoteModal();
  });

  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    let firstErrorMsg = "";

    quoteFields.forEach((f) =>
      document
        .getElementById(f.id)
        .classList.remove("border-error", "border-on-tertiary-container", "border-2"),
    );

    for (const field of quoteFields) {
      const el = document.getElementById(field.id);
      const value = el.value.trim();

      if (!value) {
        if (isValid) firstErrorMsg = `Please fill out the ${field.label} field.`;
        isValid = false;
        el.classList.add("border-error");
        continue;
      }

      if (field.regex && !field.regex.test(value)) {
        if (isValid) firstErrorMsg = field.errorMsg;
        isValid = false;
        el.classList.add("border-error");
      }
    }

    quoteMsgDiv.classList.remove("hidden", "bg-error-container", "text-on-error-container");

    if (!isValid) {
      quoteMsgDiv.textContent = firstErrorMsg;
      quoteMsgDiv.classList.add("bg-error-container", "text-on-error-container");
      return;
    }

    quoteMsgDiv.classList.add("hidden");
    quoteFields.forEach((f) => {
      document
        .getElementById(f.id)
        .classList.add("border-on-tertiary-container", "border-2");
    });

    // Simulate successful submission
    formView.classList.add("hidden");
    successView.classList.remove("hidden");
  });

  populateQuoteProductOptions();
})();

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  const firstCategory = Object.keys(productData)[0];
  updateContent(firstCategory);
});