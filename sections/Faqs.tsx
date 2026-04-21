"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const faqs = [
  {
    q: "Can NRIs buy property in India directly?",
    a: "Absolutely. Under current FEMA regulations, NRIs and OCIs have full rights to purchase residential and commercial property. RealtyFM manages the end-to-end compliance, including Form 15CA/CB, Power of Attorney, and consulate attestations, ensuring you never need to travel for paperwork.",
  },
  {
    q: "Is there a taxation benefit for NRI property investors?",
    a: "Yes. Beyond the primary capital appreciation, NRIs can leverage Double Taxation Avoidance Agreements (DTAA), deductions under Section 80C, and specific indexation benefits that significantly optimize your net global tax liability.",
  },
  {
    q: "Why is the Dwarka Expressway corridor outperforming other markets?",
    a: "It represents a rare convergence of three factors: ₹100L Cr in government infrastructure, proximity to IGI Airport, and the 'Singapore-style' urban planning of the Global City project. It’s currently the highest-velocity appreciation zone in NCR.",
  },
  {
    q: "What kind of returns can I realistically expect?",
    a: "While market-dependent, our core portfolios in premium corridors have historically delivered 15–25% annual capital appreciation. When combined with strategic rental management, the total IRR often outperforms traditional global indices.",
  },
  {
    q: "How does RealtyFM ensure project credibility?",
    a: "Our due diligence is institutional-grade. We go beyond RERA; we perform forensic title verification, developer liquidity audits, and construction milestone tracking before any property is listed on our platform.",
  },
  // {
  //   q: "What is the process for buying property from abroad?",
  //   a: "Our digital-first ecosystem allows for 100% remote execution. From virtual drone tours and digital document verification to e-signing and remote registration through a registered PoA, your physical presence is never required.",
  // },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <HelpCircle size={14} className="text-[#F5B300]" />
                <span className="text-[10px] tracking-[0.4em] text-[#0B1C3D] font-black uppercase">
                    Knowledge Base
                </span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-[1.1] mb-8">
              Investor <span className="italic text-gray-400 font-light">Intel</span>
            </h2>
            
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Comprehensive answers to the most sophisticated NRI investment queries. 
              <span className="text-[#0B1C3D] font-medium italic"> Transparent. Legal. Verified.</span>
            </p>
          </motion.div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                active === i 
                ? "bg-white border-[#F5B300] shadow-xl shadow-[#F5B300]/5" 
                : "bg-white/50 border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
              suppressHydrationWarning
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex justify-between items-center px-8 py-7 text-left group"
              >
                <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${
                  active === i ? "text-[#0B1C3D]" : "text-gray-600 group-hover:text-[#0B1C3D]"
                }`}>
                  {item.q}
                </span>
                
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  active === i ? "bg-[#0B1C3D] text-white rotate-180" : "bg-gray-100 text-gray-400"
                }`}>
                  {active === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 pb-8">
                      <div className="w-12 h-[1px] bg-[#F5B300] mb-6" />
                      <p className="text-gray-500 text-lg font-light leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col items-center"
        >
          <a 
            href="tel:+919899152327" 
            target="_blank"
            className="group flex items-center gap-4 bg-[#0B1C3D] text-white px-10 py-5 rounded-full shadow-2xl hover:bg-[#F5B300] hover:text-[#0B1C3D] transition-all duration-500"
          >
            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Ask a Specific Question</span>
          </a>
          <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest">
            Average response time: &lt; 2 Hours
          </p>
        </motion.div>

      </div>
    </section>
  );
}