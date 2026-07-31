import React from 'react';
import { BHLogo } from './BHLogo';
import { TikTokButton, WhatsAppButton, WhatsAppIcon } from './SocialIcons';
import { LOCATION_TEXT } from '../data/products';
import { MapPin, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0b0b0b]">
      
      {/* Ambient Radial Background Light Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#d4af37]/15 via-[#aa771c]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#f3e5ab]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Gold Grid Lines overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered BH Emblem Logo with Glowing Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block relative mb-6"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/30 to-[#f3e5ab]/20 rounded-full blur-2xl animate-pulse" />
          <BHLogo size={180} showGlow={true} className="mx-auto" />
        </motion.div>

        {/* Brand Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="font-serif-luxury font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-wider uppercase">
            <span className="text-white">Bin Hafiz </span>
            <span className="text-gold-gradient">Mall</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-2 inline-flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <p className="text-base sm:text-xl font-bold tracking-[0.35em] text-[#d4af37] uppercase">
              HOUSE OF BRANDS
            </p>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </motion.div>

        {/* 🚨 Our Goal Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-7 relative border border-[#d4af37]/30 gold-border-glow">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 mb-3 text-xs font-bold text-[#f3e5ab] uppercase tracking-widest">
              <span className="text-base">🚨</span>
              <span>Our Goal</span>
            </div>

            {/* Goal Text */}
            <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-wide leading-snug">
              🫶🏻 TO MAKE BIN HAFIZ THE MOST TRUSTED BRAND.
            </h2>
          </div>
        </motion.div>

        {/* Location Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#d4af37]/50 transition-colors"
        >
          <MapPin className="w-5 h-5 text-[#d4af37] animate-bounce" />
          <span className="text-sm sm:text-base font-semibold text-gray-200 tracking-wide">
            📍 {LOCATION_TEXT}
          </span>
        </motion.div>

        {/* Premium Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* 🟢 Chat on WhatsApp Button */}
          <WhatsAppButton size="lg" label="Chat on WhatsApp" className="w-full sm:w-auto" />

          {/* 🎵 Visit TikTok Button */}
          <TikTokButton size="lg" label="Visit TikTok" className="w-full sm:w-auto" />
        </motion.div>

        {/* Floating Trust Pills */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-6 h-6 text-[#d4af37] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase">100% Guaranteed</p>
              <p className="text-[11px] text-gray-400">Premium Fabrics</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Award className="w-6 h-6 text-[#d4af37] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase">House of Brands</p>
              <p className="text-[11px] text-gray-400">Authentic Lineup</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Sparkles className="w-6 h-6 text-[#d4af37] shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase">Safdarabad Branch</p>
              <p className="text-[11px] text-gray-400">Walk-In & Online</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <WhatsAppIcon className="w-6 h-6 text-[#25D366] shrink-0 fill-current" />
            <div>
              <p className="text-xs font-bold text-white uppercase">Instant Order</p>
              <p className="text-[11px] text-gray-400">Direct WhatsApp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
