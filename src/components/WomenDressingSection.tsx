import React from 'react';
import { WOMEN_PRODUCTS, Product } from '../data/products';
import { motion } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';

interface WomenDressingSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const WomenDressingSection: React.FC<WomenDressingSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="women-dressing" className="py-20 bg-[#0b0b0b] relative">
      
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-bold text-[#f3e5ab] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Couture & Modest Fashion</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-white tracking-wide">
            Women <span className="text-gold-gradient">Dressing</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Luxury Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WOMEN_PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col h-full border border-[#d4af37]/20 relative"
            >
              {/* Card Image Container */}
              <div className="relative h-80 overflow-hidden bg-black">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#f3e5ab] border border-[#d4af37]/40 shadow-lg">
                    Women Collection
                  </span>
                </div>

                {/* Hover Inspect Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 text-[#f3e5ab] text-xs font-bold border border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <Eye className="w-4 h-4 text-[#d4af37]" />
                    <span>Quick Preview</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-[#121212] to-[#0b0b0b]">
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 font-medium line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Price</span>
                  <span className="text-base font-extrabold text-[#f3e5ab] group-hover:text-amber-300 transition-colors">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
