import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK, TIKTOK_LINK } from '../data/products';
import { TikTokIcon, WhatsAppIcon } from './SocialIcons';
import { ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3.5 rounded-full bg-[#121212] text-[#f3e5ab] border border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-[#d4af37] hover:text-[#0b0b0b] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          aria-label="Back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating TikTok Button (Official Brand Styling) */}
      <a
        href={TIKTOK_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto p-3.5 rounded-full bg-[#000000] border border-[#25F4EE] text-white shadow-[0_0_15px_rgba(37,244,238,0.3)] hover:shadow-[0_0_25px_rgba(37,244,238,0.6),_0_0_25px_rgba(254,44,85,0.5)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
        aria-label="Visit TikTok"
        title="Visit TikTok (@binhafiz_01)"
      >
        <TikTokIcon className="w-6 h-6 fill-current text-white group-hover:text-[#25F4EE] transition-colors" />
      </a>

      {/* Floating WhatsApp Button (Official Brand Styling) */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto p-3.5 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (0349-8777013)"
      >
        <WhatsAppIcon className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};
