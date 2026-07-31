import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Tag, CheckCircle2, Headphones, Lock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handpicked luxury fabrics, precision stitching, and flawless craftsmanship.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Brand',
      description: 'Bin Hafiz Mall stands as Safdarabad’s premier house of trusted brands.',
    },
    {
      icon: Tag,
      title: 'Affordable Prices',
      description: 'Direct outlet rates offering authentic luxury without markup.',
    },
    {
      icon: CheckCircle2,
      title: 'Original Products',
      description: '100% genuine apparel, bags, accessories, and timepieces.',
    },
    {
      icon: Headphones,
      title: 'Fast Customer Support',
      description: 'Instant response on WhatsApp for orders, sizing, and inquiries.',
    },
    {
      icon: Lock,
      title: 'Secure Shopping',
      description: 'Direct verified store shopping and transparent payment options.',
    },
  ];

  return (
    <section className="py-20 bg-[#0b0b0b] relative border-t border-b border-[#d4af37]/20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase">
            EXCELLENCE & INTEGRITY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-white tracking-wide mt-2">
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Dedicated to providing an uncompromised luxury retail experience at Bin Hafiz Mall.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#aa771c]/10 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#d4af37]/30 transition-all">
                  <Icon className="w-7 h-7 text-[#f3e5ab] group-hover:text-amber-300" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg text-[#d4af37]">✔</span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed pl-6">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
