import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenDressingSection } from './components/MenDressingSection';
import { WomenDressingSection } from './components/WomenDressingSection';
import { WatchesSection } from './components/WatchesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProductModal } from './components/ProductModal';
import { BHLogo } from './components/BHLogo';
import { Product } from './data/products';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initial loading splash screen timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Scroll progress bar logic
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white selection:bg-[#d4af37]/30 selection:text-[#f3e5ab] relative">
      
      {/* Scroll Progress Bar at top edge */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#FFF0B2] to-[#AA771C] z-50 transition-all duration-150 shadow-[0_0_10px_#d4af37]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Elegant Initial Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="animate-pulse flex flex-col items-center">
            <BHLogo size={140} showGlow={true} />
            <h1 className="font-serif-luxury font-bold text-2xl text-white tracking-widest mt-6 uppercase">
              BIN HAFIZ MALL
            </h1>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#d4af37] mt-1 uppercase">
              HOUSE OF BRANDS
            </p>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: Men Dressing (6 cards, no View Collection button) */}
        <MenDressingSection onSelectProduct={(product) => setSelectedProduct(product)} />

        {/* Section 2: Women Dressing (6 cards, no View Collection button) */}
        <WomenDressingSection onSelectProduct={(product) => setSelectedProduct(product)} />

        {/* Section 3: Men & Women Watches (6 cards, no buttons on cards) */}
        <WatchesSection onSelectProduct={(product) => setSelectedProduct(product)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons: WhatsApp, TikTok, Back to Top */}
      <FloatingActions />

      {/* Product Inspection Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
