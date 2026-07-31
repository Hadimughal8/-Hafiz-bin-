export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women' | 'watches';
  categoryLabel: string;
  image: string;
  price: string;
  tagline: string;
  description: string;
  fabric?: string;
}

export const MEN_PRODUCTS: Product[] = [
  {
    id: 'men-1',
    name: 'Premium T-Shirt',
    category: 'men',
    categoryLabel: 'Men Dressing',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 2,499',
    tagline: 'Heavyweight Cotton Luxury Tee',
    description: 'Crafted from 240 GSM organic combed cotton with subtle gold embroidered insignia.',
    fabric: '100% Organic Pima Cotton'
  },
  {
    id: 'men-2',
    name: 'Casual Shirt',
    category: 'men',
    categoryLabel: 'Men Dressing',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 3,999',
    tagline: 'Tailored Linen-Blend Shirt',
    description: 'Breathable midnight weave with custom mother-of-pearl buttons for executive downtime.',
    fabric: 'Pure Italian Linen'
  },
  {
    id: 'men-3',
    name: 'Polo Shirt',
    category: 'men',
    categoryLabel: 'Men Dressing',
    image: 'https://images.unsplash.com/photo-1625910513413-722135544465?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 3,299',
    tagline: 'Executive Crest Pique Polo',
    description: 'Structure-retaining double pique knit finished with gold thread crest work.',
    fabric: 'Mercerized Cotton'
  },
  {
    id: 'men-4',
    name: 'Hoodie',
    category: 'men',
    categoryLabel: 'Men Dressing',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 4,899',
    tagline: 'Heavyweight Luxe Fleece Pullover',
    description: 'Ultra-soft brushed interior fleece with metallic gold aglets and double-lined hood.',
    fabric: '400 GSM Heavy Fleece'
  },
  {
    id: 'men-5',
    name: 'Jeans',
    category: 'men',
    categoryLabel: 'Men Dressing',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 4,499',
    tagline: 'Dark Indigo Stretch Denim',
    description: 'Tailored slim-taper denim with custom oxidized gold rivets and comfort stretch blend.',
    fabric: 'Selvedge Cotton Denim'
  },
  {
    id: 'men-6',
    name: 'Trouser',
    category: 'men',
    categoryLabel: 'Men Dressing',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 3,799',
    tagline: 'Italian Cut Slim Formal Trouser',
    description: 'Wrinkle-resistant luxury stretch weave tailored for formal and smart-casual styling.',
    fabric: 'Wool Blend Stretch'
  }
];

export const WOMEN_PRODUCTS: Product[] = [
  {
    id: 'women-1',
    name: 'Maxi Dress',
    category: 'women',
    categoryLabel: 'Women Dressing',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 7,999',
    tagline: 'Flowing Designer Velvet Maxi',
    description: 'Royal silhouette adorned with intricate golden embroidery and sheer pleated hemline.',
    fabric: 'Silk Velvet & Chiffon'
  },
  {
    id: 'women-2',
    name: 'Abaya',
    category: 'women',
    categoryLabel: 'Women Dressing',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 8,499',
    tagline: 'Royal Dubai Style Silk Abaya',
    description: 'Floor-length modest outerwear with gold satin piping and metallic snap closures.',
    fabric: 'Nida Premium Silk'
  },
  {
    id: 'women-3',
    name: 'Kurti',
    category: 'women',
    categoryLabel: 'Women Dressing',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 3,599',
    tagline: 'Intricate Cotton Satin Kurti',
    description: 'Hand-detailed neckline motifs on breathable cotton satin for effortless luxury.',
    fabric: 'Cotton Satin & Threadwork'
  },
  {
    id: 'women-4',
    name: 'Ladies Suit',
    category: 'women',
    categoryLabel: 'Women Dressing',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 9,999',
    tagline: '3-Piece Embellished Luxury Suit',
    description: 'Includes embroidered shirt, organza dupatta with gold zari, and silk trousers.',
    fabric: 'Chiffon & Raw Silk'
  },
  {
    id: 'women-5',
    name: 'Hand Bag',
    category: 'women',
    categoryLabel: 'Women Dressing',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 5,499',
    tagline: 'Quilted Leather BH Insignia Tote',
    description: 'Structured vegan leather handbag accented with polished gold chain strap and turn-lock.',
    fabric: 'Grain Leather & Gold Hardware'
  },
  {
    id: 'women-6',
    name: 'Scarf',
    category: 'women',
    categoryLabel: 'Women Dressing',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 1,899',
    tagline: 'Pure Silk Patterned Luxury Shawl',
    description: 'Lightweight silk-feeling scarf featuring royal geometric gold & black motifs.',
    fabric: '100% Silk Feel Satin'
  }
];

export const WATCHES_PRODUCTS: Product[] = [
  {
    id: 'watch-1',
    name: 'Luxury Watch',
    category: 'watches',
    categoryLabel: 'Men & Women Watches',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 14,999',
    tagline: 'Automatic Bezel & Leather Edition',
    description: 'Self-winding skeleton dial encased in 18K gold-tone stainless steel with calfskin strap.',
    fabric: 'Sapphire Glass & Leather'
  },
  {
    id: 'watch-2',
    name: 'Smart Watch',
    category: 'watches',
    categoryLabel: 'Men & Women Watches',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 8,999',
    tagline: 'HD Curved AMOLED Executive Smartwatch',
    description: 'Full-touch AMOLED screen, health telemetry, bluetooth call connectivity, and 10-day battery.',
    fabric: 'Gold Zinc Alloy Frame'
  },
  {
    id: 'watch-3',
    name: 'Couple Watch',
    category: 'watches',
    categoryLabel: 'Men & Women Watches',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 18,500',
    tagline: 'Matching Dual Gold & Onyx Set',
    description: 'Complementary pair designed for royalty with anti-scratch mineral glass and quartz movement.',
    fabric: 'Two-Tone Gold Steel'
  },
  {
    id: 'watch-4',
    name: 'Gold Watch',
    category: 'watches',
    categoryLabel: 'Men & Women Watches',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 12,999',
    tagline: '24K Gold Plated Executive Edition',
    description: 'Radiant sunray gold dial with diamond-cut hour markers and water resistance up to 50m.',
    fabric: '24K Gold Plated Steel'
  },
  {
    id: 'watch-5',
    name: 'Silver Watch',
    category: 'watches',
    categoryLabel: 'Men & Women Watches',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 11,499',
    tagline: 'Polished Stainless Diver Edition',
    description: 'Precision Swiss quartz movement with luminous hands and unidirectional rotating bezel.',
    fabric: '316L Stainless Steel'
  },
  {
    id: 'watch-6',
    name: 'Classic Watch',
    category: 'watches',
    categoryLabel: 'Men & Women Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    price: 'PKR 9,499',
    tagline: 'Minimalist Slim Dress Watch',
    description: 'Ultra-thin 6.5mm profile with minimalist gold index indicators and mesh wristband.',
    fabric: 'Stainless Steel Mesh'
  }
];

export const WHATSAPP_LINK = "https://wa.me/923498777013";
export const TIKTOK_LINK = "https://www.tiktok.com/@binhafiz_01?_r=1&_t=ZS-98TyAwNbSw4";
export const WHATSAPP_NUMBER = "0349-8777013";
export const TIKTOK_HANDLE = "@binhafiz_01";
export const LOCATION_TEXT = "Near UBL Bank, Safdarabad";
