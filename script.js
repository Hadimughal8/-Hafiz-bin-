/* ===== Bin Hafiz Mall — Site Data & Logic ===== */

const WHATSAPP_LINK = "https://wa.me/923498777013";
const TIKTOK_LINK = "https://www.tiktok.com/@binhafiz_01?_r=1&_t=ZS-98TyAwNbSw4";
const WHATSAPP_NUMBER = "0349-8777013";
const TIKTOK_HANDLE = "@binhafiz_01";
const LOCATION_TEXT = "Near UBL Bank, Safdarabad";

const MEN_PRODUCTS = [
  { id: 'men-1', name: 'Premium T-Shirt', categoryLabel: 'Men Dressing', tag: 'Men Apparel', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', price: 'PKR 2,499', tagline: 'Heavyweight Cotton Luxury Tee', description: 'Crafted from 240 GSM organic combed cotton with subtle gold embroidered insignia.', fabric: '100% Organic Pima Cotton' },
  { id: 'men-2', name: 'Casual Shirt', categoryLabel: 'Men Dressing', tag: 'Men Apparel', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80', price: 'PKR 3,999', tagline: 'Tailored Linen-Blend Shirt', description: 'Breathable midnight weave with custom mother-of-pearl buttons for executive downtime.', fabric: 'Pure Italian Linen' },
  { id: 'men-3', name: 'Polo Shirt', categoryLabel: 'Men Dressing', tag: 'Men Apparel', image: 'https://images.unsplash.com/photo-1625910513413-722135544465?auto=format&fit=crop&w=800&q=80', price: 'PKR 3,299', tagline: 'Executive Crest Pique Polo', description: 'Structure-retaining double pique knit finished with gold thread crest work.', fabric: 'Mercerized Cotton' },
  { id: 'men-4', name: 'Hoodie', categoryLabel: 'Men Dressing', tag: 'Men Apparel', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', price: 'PKR 4,899', tagline: 'Heavyweight Luxe Fleece Pullover', description: 'Ultra-soft brushed interior fleece with metallic gold aglets and double-lined hood.', fabric: '400 GSM Heavy Fleece' },
  { id: 'men-5', name: 'Jeans', categoryLabel: 'Men Dressing', tag: 'Men Apparel', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', price: 'PKR 4,499', tagline: 'Dark Indigo Stretch Denim', description: 'Tailored slim-taper denim with custom oxidized gold rivets and comfort stretch blend.', fabric: 'Selvedge Cotton Denim' },
  { id: 'men-6', name: 'Trouser', categoryLabel: 'Men Dressing', tag: 'Men Apparel', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80', price: 'PKR 3,799', tagline: 'Italian Cut Slim Formal Trouser', description: 'Wrinkle-resistant luxury stretch weave tailored for formal and smart-casual styling.', fabric: 'Wool Blend Stretch' },
];

const WOMEN_PRODUCTS = [
  { id: 'women-1', name: 'Maxi Dress', categoryLabel: 'Women Dressing', tag: 'Women Collection', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80', price: 'PKR 7,999', tagline: 'Flowing Designer Velvet Maxi', description: 'Royal silhouette adorned with intricate golden embroidery and sheer pleated hemline.', fabric: 'Silk Velvet & Chiffon' },
  { id: 'women-2', name: 'Abaya', categoryLabel: 'Women Dressing', tag: 'Women Collection', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80', price: 'PKR 8,499', tagline: 'Royal Dubai Style Silk Abaya', description: 'Floor-length modest outerwear with gold satin piping and metallic snap closures.', fabric: 'Nida Premium Silk' },
  { id: 'women-3', name: 'Kurti', categoryLabel: 'Women Dressing', tag: 'Women Collection', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80', price: 'PKR 3,599', tagline: 'Intricate Cotton Satin Kurti', description: 'Hand-detailed neckline motifs on breathable cotton satin for effortless luxury.', fabric: 'Cotton Satin & Threadwork' },
  { id: 'women-4', name: 'Ladies Suit', categoryLabel: 'Women Dressing', tag: 'Women Collection', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', price: 'PKR 9,999', tagline: '3-Piece Embellished Luxury Suit', description: 'Includes embroidered shirt, organza dupatta with gold zari, and silk trousers.', fabric: 'Chiffon & Raw Silk' },
  { id: 'women-5', name: 'Hand Bag', categoryLabel: 'Women Dressing', tag: 'Women Collection', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80', price: 'PKR 5,499', tagline: 'Quilted Leather BH Insignia Tote', description: 'Structured vegan leather handbag accented with polished gold chain strap and turn-lock.', fabric: 'Grain Leather & Gold Hardware' },
  { id: 'women-6', name: 'Scarf', categoryLabel: 'Women Dressing', tag: 'Women Collection', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80', price: 'PKR 1,899', tagline: 'Pure Silk Patterned Luxury Shawl', description: 'Lightweight silk-feeling scarf featuring royal geometric gold & black motifs.', fabric: '100% Silk Feel Satin' },
];

const WATCHES_PRODUCTS = [
  { id: 'watch-1', name: 'Luxury Watch', categoryLabel: 'Men & Women Watches', tag: 'Luxury Horology', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80', price: 'PKR 14,999', tagline: 'Automatic Bezel & Leather Edition', description: 'Self-winding skeleton dial encased in 18K gold-tone stainless steel with calfskin strap.', fabric: 'Sapphire Glass & Leather' },
  { id: 'watch-2', name: 'Smart Watch', categoryLabel: 'Men & Women Watches', tag: 'Luxury Horology', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80', price: 'PKR 8,999', tagline: 'HD Curved AMOLED Executive Smartwatch', description: 'Full-touch AMOLED screen, health telemetry, bluetooth call connectivity, and 10-day battery.', fabric: 'Gold Zinc Alloy Frame' },
  { id: 'watch-3', name: 'Couple Watch', categoryLabel: 'Men & Women Watches', tag: 'Luxury Horology', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80', price: 'PKR 18,500', tagline: 'Matching Dual Gold & Onyx Set', description: 'Complementary pair designed for royalty with anti-scratch mineral glass and quartz movement.', fabric: 'Two-Tone Gold Steel' },
  { id: 'watch-4', name: 'Gold Watch', categoryLabel: 'Men & Women Watches', tag: 'Luxury Horology', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80', price: 'PKR 12,999', tagline: '24K Gold Plated Executive Edition', description: 'Radiant sunray gold dial with diamond-cut hour markers and water resistance up to 50m.', fabric: '24K Gold Plated Steel' },
  { id: 'watch-5', name: 'Silver Watch', categoryLabel: 'Men & Women Watches', tag: 'Luxury Horology', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80', price: 'PKR 11,499', tagline: 'Polished Stainless Diver Edition', description: 'Precision Swiss quartz movement with luminous hands and unidirectional rotating bezel.', fabric: '316L Stainless Steel' },
  { id: 'watch-6', name: 'Classic Watch', categoryLabel: 'Men & Women Watches', tag: 'Luxury Horology', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', price: 'PKR 9,499', tagline: 'Minimalist Slim Dress Watch', description: 'Ultra-thin 6.5mm profile with minimalist gold index indicators and mesh wristband.', fabric: 'Stainless Steel Mesh' },
];

const ALL_PRODUCTS = [...MEN_PRODUCTS, ...WOMEN_PRODUCTS, ...WATCHES_PRODUCTS];

/* ===== BH Logo SVG Generator ===== */
function bhLogoSVG(size, glow) {
  const glowClass = glow ? 'drop-shadow(0 0 15px rgba(212,175,55,0.35))' : 'none';
  return `
  <div style="width:${size}px;height:${size}px;filter:${glowClass}" class="relative inline-block select-none">
    <svg viewBox="0 0 300 300" class="w-full h-full">
      <defs>
        <linearGradient id="bhGoldGradient-${size}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF0B2" /><stop offset="35%" stop-color="#E6C657" />
          <stop offset="70%" stop-color="#D4AF37" /><stop offset="100%" stop-color="#8F6B1A" />
        </linearGradient>
        <linearGradient id="bhGoldBright-${size}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F5E498" /><stop offset="50%" stop-color="#FFD700" /><stop offset="100%" stop-color="#D4AF37" />
        </linearGradient>
        <radialGradient id="goldGlowBg-${size}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(212,175,55,0.2)" /><stop offset="100%" stop-color="rgba(0,0,0,0)" />
        </radialGradient>
        <path id="topTextArc-${size}" d="M 45,150 A 105,105 0 1,1 255,150" fill="none" />
        <path id="bottomTextArc-${size}" d="M 35,150 A 115,115 0 0,0 265,150" fill="none" />
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#goldGlowBg-${size})" />
      <circle cx="150" cy="150" r="142" fill="none" stroke="url(#bhGoldGradient-${size})" stroke-width="5" />
      <circle cx="150" cy="150" r="135" fill="none" stroke="rgba(212,175,55,0.4)" stroke-width="1.5" />
      <circle cx="150" cy="150" r="133" fill="#0E0E0E" />
      <circle cx="150" cy="150" r="96" fill="none" stroke="url(#bhGoldGradient-${size})" stroke-width="3" />
      <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(212,175,55,0.3)" stroke-width="1" />
      <text fill="url(#bhGoldGradient-${size})" font-size="13" font-weight="800" letter-spacing="3.5">
        <textPath href="#topTextArc-${size}" startOffset="50%" text-anchor="middle">MEN - WOMEN - KIDS</textPath>
      </text>
      <g transform="translate(32, 147) scale(0.7)"><path d="M 0,-10 L 3,-3 L 10,0 L 3,3 L 0,10 L -3,3 L -10,0 L -3,-3 Z" fill="url(#bhGoldBright-${size})" /></g>
      <g transform="translate(268, 147) scale(0.7)"><path d="M 0,-10 L 3,-3 L 10,0 L 3,3 L 0,10 L -3,3 L -10,0 L -3,-3 Z" fill="url(#bhGoldBright-${size})" /></g>
      <text fill="url(#bhGoldGradient-${size})" font-size="15" font-weight="900" letter-spacing="4.5">
        <textPath href="#bottomTextArc-${size}" startOffset="50%" text-anchor="middle">HOUSE OF BRANDS</textPath>
      </text>
      <g fill="none" stroke="url(#bhGoldGradient-${size})" stroke-width="2.2" stroke-linecap="round">
        <path d="M 82 170 C 72 130, 90 95, 120 78" />
        <path d="M 80 160 Q 68 152 72 144 Q 82 148 84 156" fill="url(#bhGoldGradient-${size})" />
        <path d="M 80 142 Q 65 132 72 124 Q 82 130 84 138" fill="url(#bhGoldGradient-${size})" />
        <path d="M 85 125 Q 70 112 78 104 Q 88 110 89 120" fill="url(#bhGoldGradient-${size})" />
        <path d="M 94 108 Q 80 94 90 86 Q 98 94 98 104" fill="url(#bhGoldGradient-${size})" />
        <path d="M 106 93 Q 95 78 106 72 Q 112 82 110 90" fill="url(#bhGoldGradient-${size})" />
      </g>
      <g fill="none" stroke="url(#bhGoldGradient-${size})" stroke-width="2.2" stroke-linecap="round">
        <path d="M 218 170 C 228 130, 210 95, 180 78" />
        <path d="M 220 160 Q 232 152 228 144 Q 218 148 216 156" fill="url(#bhGoldGradient-${size})" />
        <path d="M 220 142 Q 235 132 228 124 Q 218 130 216 138" fill="url(#bhGoldGradient-${size})" />
        <path d="M 215 125 Q 230 112 222 104 Q 212 110 211 120" fill="url(#bhGoldGradient-${size})" />
        <path d="M 206 108 Q 220 94 210 86 Q 202 94 202 104" fill="url(#bhGoldGradient-${size})" />
        <path d="M 194 93 Q 205 78 194 72 Q 188 82 190 90" fill="url(#bhGoldGradient-${size})" />
      </g>
      <text x="150" y="142" font-family="Cinzel, Georgia, serif" font-size="74" font-weight="900" font-style="italic" text-anchor="middle" letter-spacing="-3" fill="url(#bhGoldBright-${size})" stroke="#4A3709" stroke-width="0.8">BH</text>
      <path d="M 95 168 L 205 168 L 195 186 L 105 186 Z" fill="#8F6B1A" />
      <path d="M 90 165 C 130 160, 170 160, 210 165 L 202 185 C 165 182, 135 182, 98 185 Z" fill="url(#bhGoldGradient-${size})" stroke="#FFF0B2" stroke-width="0.8" />
      <path d="M 90 165 L 82 175 L 98 185 Z" fill="#694C10" />
      <path d="M 210 165 L 218 175 L 202 185 Z" fill="#694C10" />
      <text x="150" y="179" font-family="Cinzel, serif" font-size="14" font-weight="800" fill="#0B0B0B" text-anchor="middle" letter-spacing="1">Bin Hafiz</text>
    </svg>
  </div>`;
}

/* ===== Product Card Renderer ===== */
function productCard(p) {
  return `
  <div class="product-card group cursor-pointer rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col h-full border border-[#d4af37]/20 relative" onclick="openProductModal('${p.id}')">
    <div class="relative h-80 overflow-hidden bg-black">
      <img src="${p.image}" alt="${p.name}" referrerpolicy="no-referrer" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-black/30 to-transparent opacity-80"></div>
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#f3e5ab] border border-[#d4af37]/40 shadow-lg">${p.tag}</span>
      </div>
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 text-[#f3e5ab] text-xs font-bold border border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          <i data-lucide="eye" class="w-4 h-4 text-[#d4af37]"></i><span>Quick Preview</span>
        </span>
      </div>
    </div>
    <div class="p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-[#121212] to-[#0b0b0b]">
      <div>
        <h3 class="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">${p.name}</h3>
        <p class="mt-1 text-xs text-gray-400 font-medium line-clamp-2">${p.tagline}</p>
      </div>
      <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <span class="text-xs text-gray-400 uppercase tracking-wider">Price</span>
        <span class="text-base font-extrabold text-[#f3e5ab] group-hover:text-amber-300 transition-colors">${p.price}</span>
      </div>
    </div>
    <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>`;
}

function renderProducts() {
  document.getElementById('menGrid').innerHTML = MEN_PRODUCTS.map(productCard).join('');
  document.getElementById('womenGrid').innerHTML = WOMEN_PRODUCTS.map(productCard).join('');
  document.getElementById('watchGrid').innerHTML = WATCHES_PRODUCTS.map(productCard).join('');
}

/* ===== Product Modal ===== */
function openProductModal(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const waMsg = `Hello Bin Hafiz Mall! I am interested in ordering the "${p.name}" (${p.price}) from your ${p.categoryLabel} collection.`;
  const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(waMsg)}`;

  document.getElementById('modalContent').innerHTML = `
    <button onclick="closeProductModal()" class="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-[#d4af37]/30 border border-white/10 transition-colors" aria-label="Close modal">
      <i data-lucide="x" class="w-5 h-5 text-[#d4af37]"></i>
    </button>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="relative h-64 md:h-full bg-black min-h-[280px]">
        <img src="${p.image}" alt="${p.name}" referrerpolicy="no-referrer" class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#121212]"></div>
        <div class="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 text-xs font-bold text-[#f3e5ab]">
          <i data-lucide="tag" class="w-3.5 h-3.5 text-[#d4af37]"></i><span>${p.categoryLabel}</span>
        </div>
      </div>
      <div class="p-6 md:p-8 flex flex-col justify-between space-y-5">
        <div>
          <span class="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">BIN HAFIZ LUXURY COLLECTION</span>
          <h3 class="font-serif-luxury text-2xl md:text-3xl font-bold text-white mt-1">${p.name}</h3>
          <div class="mt-2 inline-block px-3 py-1 bg-[#d4af37]/15 rounded-lg border border-[#d4af37]/30">
            <span class="text-lg font-extrabold text-[#f3e5ab]">${p.price}</span>
          </div>
          <p class="mt-4 text-sm text-gray-300 leading-relaxed">${p.description}</p>
          <div class="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <i data-lucide="sparkles" class="w-4 h-4 text-[#d4af37]"></i>
            <span>Material: <strong class="text-gray-200">${p.fabric}</strong></span>
          </div>
          <div class="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
            <i data-lucide="shield-check" class="w-4 h-4 text-[#25D366]"></i>
            <span>100% Authentic Product • Safdarabad Outlet</span>
          </div>
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6e] shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transition-all uppercase tracking-wider text-center">
          <i data-lucide="message-circle" class="w-5 h-5"></i><span>Order on WhatsApp</span>
        </a>
      </div>
    </div>`;
  document.getElementById('productModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ===== Navbar: scroll spy + mobile menu ===== */
function initNavbar() {
  const header = document.getElementById('siteHeader');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBtn = document.getElementById('menuBtn');
  const sections = ['home', 'men-dressing', 'women-dressing', 'watches', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const progressBar = document.getElementById('scrollProgress');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('.nav-anchor').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.add('hidden');
      document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-[#0a0a0a]/95', 'backdrop-blur-md', 'border-b', 'border-[#d4af37]/20', 'py-3', 'shadow-[0_10px_30px_rgba(0,0,0,0.8)]');
      header.classList.remove('bg-gradient-to-b', 'from-[#000000]/90', 'via-[#000000]/40', 'to-transparent', 'py-5');
    } else {
      header.classList.remove('bg-[#0a0a0a]/95', 'backdrop-blur-md', 'border-b', 'border-[#d4af37]/20', 'py-3', 'shadow-[0_10px_30px_rgba(0,0,0,0.8)]');
      header.classList.add('bg-gradient-to-b', 'from-[#000000]/90', 'via-[#000000]/40', 'to-transparent', 'py-5');
    }

    // scroll progress
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      progressBar.style.width = `${(window.scrollY / totalHeight) * 100}%`;
    }

    // active section
    const scrollPos = window.scrollY + 200;
    let active = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
        active = id;
        break;
      }
    }
    navLinks.forEach(link => {
      if (link.dataset.section === active) {
        link.classList.add('text-[#f3e5ab]', 'font-semibold');
        link.classList.remove('text-gray-300');
      } else {
        link.classList.remove('text-[#f3e5ab]', 'font-semibold');
        link.classList.add('text-gray-300');
      }
    });

    // back to top button
    const backToTop = document.getElementById('backToTop');
    backToTop.classList.toggle('hidden', window.scrollY <= 300);
  });
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('contactSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const msg = document.getElementById('contactMsg').value;
    if (!msg) return;
    const fullMsg = `Hello Bin Hafiz Mall! My name is ${name || 'Customer'}. ${msg}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(fullMsg)}`, '_blank');
    form.classList.add('hidden');
    successBox.classList.remove('hidden');
  });

  document.getElementById('sendAnother').addEventListener('click', () => {
    successBox.classList.add('hidden');
    form.classList.remove('hidden');
    form.reset();
  });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Inject logos
  document.getElementById('loadingLogo').innerHTML = bhLogoSVG(140, true);
  document.getElementById('navLogo').innerHTML = bhLogoSVG(46, false);
  document.getElementById('heroLogo').innerHTML = bhLogoSVG(180, true);
  document.getElementById('footerLogo').innerHTML = bhLogoSVG(54, true);

  // Static links/text
  document.querySelectorAll('.wa-link').forEach(el => el.href = WHATSAPP_LINK);
  document.querySelectorAll('.tt-link').forEach(el => el.href = TIKTOK_LINK);
  document.querySelectorAll('.location-text').forEach(el => el.textContent = LOCATION_TEXT);
  document.querySelectorAll('.wa-number').forEach(el => el.textContent = WHATSAPP_NUMBER);
  document.querySelectorAll('.tt-handle').forEach(el => el.textContent = TIKTOK_HANDLE);

  renderProducts();
  initNavbar();
  initContactForm();
  lucide.createIcons();

  // Loading screen
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hide');
    setTimeout(() => document.getElementById('loadingScreen').style.display = 'none', 500);
  }, 1200);

  // Back to top click
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Close modal on backdrop click
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') closeProductModal();
  });
});
