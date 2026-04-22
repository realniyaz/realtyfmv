"use client";

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Globe2, ShieldCheck, PieChart, FileText, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const benefits = [
  { icon: <PieChart size={16} />, text: "Personalized corridor analysis" },
  { icon: <CheckCircle2 size={16} />, text: "Projected 5-year ROI models" },
  { icon: <ShieldCheck size={16} />, text: "RERA-verified recommendations" },
  { icon: <FileText size={16} />, text: "Tax optimization strategies" },
];

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    budget: "Select Investment Budget"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Simulate short processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      // 2. WHATSAPP REDIRECT (Direct to Owner)
      const ownerPhone = "919899152327"; // Your exact number
      
      // Constructing the encoded message
      const message = `*RealtyFM*%0A` +
                      `--------------------------%0A` +
                      `*Name:* ${formData.name}%0A` +
                      `*Phone:* ${formData.phone}%0A` +
                      `*Email:* ${formData.email}%0A` +
                      `*Country:* ${formData.country}%0A` +
                      `*Budget:* ${formData.budget}`;

      // Open WhatsApp in a new tab
      window.open(`https://wa.me/${ownerPhone}?text=${message}`, '_blank');

      // 3. SHOW THE SUCCESS POPUP
      setShowPopup(true);
    }, 800);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-[#0B1C3D]">
      
      {/* SUCCESS POPUP (MODAL) */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-[#0B1C3D]/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-10 max-w-md w-full text-center relative shadow-2xl"
            >
              <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
                <X size={24} />
              </button>
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="font-serif text-3xl text-[#0B1C3D] mb-4">Details Shared</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Thank you, <span className="font-bold text-[#0B1C3D]">{formData.name}</span>. Your inquiry has been forwarded to our strategist via WhatsApp. 
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full bg-[#0B1C3D] text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Return to Insights
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-[#F5B300]/10 border border-[#F5B300]/20 rounded-full flex items-center gap-2">
                    <Globe2 size={12} className="text-[#F5B300]" />
                    <span className="text-[10px] tracking-[0.3em] text-[#F5B300] font-black uppercase">Direct Engagement</span>
                </div>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-5xl text-white leading-[1.1] mb-8 tracking-tight">
                Most NRI Investors Act <br />
                Before the Mainstream <br />
                <span className="italic text-gray-400 font-light text-4xl md:text-6xl">Direct to You.</span>
              </motion.h2>

              <motion.ul variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-[#F5B300]">{b.icon}</span>
                    {b.text}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <input suppressHydrationWarning
                  required
                  placeholder="Full Name"
                  autoComplete="name"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0B1C3D]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-500 outline-none focus:border-[#F5B300]/50"
                />
                <input
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0B1C3D]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-500 outline-none focus:border-[#F5B300]/50"
                />
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone Number"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#0B1C3D]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-500 outline-none focus:border-[#F5B300]/50"
                />
                <input
                  required
                  placeholder="Current Country"
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full bg-[#0B1C3D]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-500 outline-none focus:border-[#F5B300]/50"
                />

                <div className="sm:col-span-2">
                  <select 
                    required
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-[#0B1C3D]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-gray-400 outline-none focus:border-[#F5B300]/50 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Investment Budget</option>
                    <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                    <option value="₹1Cr - ₹3Cr">₹1Cr - ₹3Cr</option>
                    <option value="₹3Cr+">₹3Cr+</option>
                  </select>
                </div>

                <motion.button 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:col-span-2 bg-[#F5B300] text-[#0B1C3D] py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Generating..." : "Get Free Report"} <Send size={14} />
                </motion.button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-gray-500" />
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Direct WhatsApp Transfer • Encrypted</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}