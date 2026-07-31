import React from 'react';
import { Product, WHATSAPP_LINK } from '../data/products';
import { X, MessageCircle, ShieldCheck, Tag, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappOrderUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hello Bin Hafiz Mall! I am interested in ordering the "${product.name}" (${product.price}) from your ${product.categoryLabel} collection.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl glass-card bg-[#121212] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-[#d4af37]/30 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#d4af37]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-64 md:h-full bg-black min-h-[280px]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#121212]" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 text-xs font-bold text-[#f3e5ab]">
              <Tag className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{product.categoryLabel}</span>
            </div>
          </div>

          {/* Details & WhatsApp Order */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                BIN HAFIZ LUXURY COLLECTION
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-white mt-1">
                {product.name}
              </h3>
              
              <div className="mt-2 inline-block px-3 py-1 bg-[#d4af37]/15 rounded-lg border border-[#d4af37]/30">
                <span className="text-lg font-extrabold text-[#f3e5ab]">{product.price}</span>
              </div>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {product.description}
              </p>

              {product.fabric && (
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>Material: <strong className="text-gray-200">{product.fabric}</strong></span>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>100% Authentic Product • Safdarabad Outlet</span>
              </div>
            </div>

            {/* Direct Order Button */}
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6e] shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transition-all uppercase tracking-wider text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
