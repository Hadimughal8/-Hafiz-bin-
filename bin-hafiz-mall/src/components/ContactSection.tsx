import React, { useState } from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, TIKTOK_HANDLE, LOCATION_TEXT } from '../data/products';
import { TikTokButton, WhatsAppButton, WhatsAppIcon, TikTokIcon } from './SocialIcons';
import { MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg) return;
    
    // Generate pre-filled WhatsApp link with message
    const fullMsg = `Hello Bin Hafiz Mall! My name is ${name || 'Customer'}. ${userMsg}`;
    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(fullMsg)}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e0e0e] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#25D366]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-bold text-[#f3e5ab] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-white tracking-wide">
            Contact <span className="text-gold-gradient">Bin Hafiz Mall</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            We are always here to assist you with orders, inquiries, and custom sizing.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Card (Left - 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-[#d4af37]/30 flex flex-col justify-between gold-border-glow"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
                SAF DAR ABAD BRANCH
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-2">
                Visit Us or Order Online
              </h3>

              {/* Contact Info List */}
              <div className="mt-8 space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">📍 Location</h4>
                    <p className="text-base font-bold text-white mt-0.5">
                      {LOCATION_TEXT}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Safdarabad, Sheikhupura District</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#25D366]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366] fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">📱 WhatsApp</h4>
                    <p className="text-base font-bold text-white mt-0.5">
                      {WHATSAPP_NUMBER}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Direct support & order placement</p>
                  </div>
                </div>

                {/* TikTok */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#25F4EE]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-black border border-[#25F4EE]/40 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(37,244,238,0.2)]">
                    <TikTokIcon className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">🎵 TikTok</h4>
                    <p className="text-base font-bold text-white mt-0.5">
                      {TIKTOK_HANDLE}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Official video showcase & latest arrivals</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <WhatsAppButton size="md" label="Chat on WhatsApp" fullWidth />
              <TikTokButton size="md" label="Visit TikTok" fullWidth />
            </div>
          </motion.div>

          {/* Direct WhatsApp Quick Message Form (Right - 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#d4af37]/30 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Send Direct Message
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Fill out this quick form to send an instant inquiry to our WhatsApp line.
              </p>

              {submitted ? (
                <div className="my-10 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3 animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Redirected to WhatsApp!</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Your message has been formatted. Continue chatting on WhatsApp with Bin Hafiz Mall.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-bold text-[#f3e5ab] underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ali Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Your Inquiry / Order Request
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. I want to inquire about Mens Polo Shirts availability and sizing..."
                      value={userMsg}
                      onChange={(e) => setUserMsg(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6e] shadow-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <p className="text-[11px] text-gray-500">
                Bin Hafiz Mall Outlet • Near UBL Bank, Safdarabad
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
