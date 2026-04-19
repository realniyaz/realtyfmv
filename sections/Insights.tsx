"use client";

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowUpRight, X, MessageCircle, Share2, FileText, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const articles = [
  {
    id: 1,
    title: "Noida International Airport: Q1 2026 Phase 1 Operations Report",
    tag: "Market Analysis",
    time: "10 min read",
    content: "The inauguration of Phase 1 has fundamentally re-indexed regional rental yields. Current data shows a 42% spike in 'Grade A' commercial space absorption within a 10km radius of the terminal. We are observing a shift from speculative land banking to yield-focused commercial assets. Industrial sectors 24 and 24D are leading the liquidity charts, with multinational logistics firms securing long-term leases ahead of the full cargo terminal activation scheduled for late 2026.",
  },
  {
    id: 2,
    title: "FEMA Compliance for NRI Investment in the Yamuna Corridor",
    tag: "Tax & Compliance",
    time: "6 min read",
    content: "Recent RBI circulars have clarified the repatriation process for capital gains generated through 'Infrastructure-Linked' land parcels. NRIs can now seamlessly repatriate up to USD 1 million per financial year from their NRO accounts, provided the source of funds is clearly linked to NRE/FCNR transfers. For investors in the Jewar cluster, document trail maintenance is critical, especially for agricultural-to-non-agricultural (CLU) converted plots.",
  },
  {
    id: 3,
    title: "The Rise of Jewar Film City: Commercial ROI Projections",
    tag: "Market Signal",
    time: "5 min read",
    content: "The convergence of Asia's largest airport and the North India Film City project is creating a 'Media-Logistics' hybrid ROI. Our projections suggest a 3.5x capital appreciation for peripheral commercial shops over the next 48 months. The state government's single-window clearance for media tech firms is expected to drive 50,000+ new jobs into the corridor, creating a massive housing deficit that early investors can exploit.",
  },
  {
    id: 4,
    title: "NRE/NRO Capital Gains Tax Optimization for 2026 Exits",
    tag: "Tax Planning",
    time: "9 min read",
    content: "With the removal of indexation in certain asset classes, NRI investors must pivot to Section 54F exemptions. By reinvesting sales proceeds into the 'New Noida' residential clusters, investors can effectively bring their tax liability to zero. Our tax desk recommends a 24-month holding period for the current Yamuna Expressway inventory to qualify for the most aggressive Long Term Capital Gains (LTCG) benefits under the updated 2026 fiscal policy.",
  },
];

const featuredArticle = {
  id: 0,
  title: "Why Noida International Airport is 2026's Top Global Corridor",
  tag: "Strategic Insight",
  time: "12 min read",
  desc: "A deep-dive into the 840% ROI potential and the catalysts driving Asia's largest hub.",
  content: "The inauguration of Noida International Airport has ended the speculative phase of Yamuna Expressway. This is now a fundamental infrastructure-driven bull market. Anchored by 6 runways, the upcoming Rapid Rail connection, and the direct link to the Dedicated Freight Corridor, this zone is no longer just 'near Noida'—it is a standalone global economy. Institutional developers are currently outbidding retail investors for large-scale logistics land, signaling the final window for individual NRI entry into high-yield industrial plots.",
};

export default function Insights() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  return (
    <section ref={ref} className="py-16 md:py-20 overflow-hidden border-y border-gray-100 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}}>
            <p className="text-[10px] tracking-[0.4em] text-[#F5B300] mb-3 font-black uppercase italic">Knowledge Base</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0B1C3D] leading-tight">
              Aviation Corridor <span className="italic text-gray-400 font-light">Intelligence</span>
            </h2>
          </motion.div>
          <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-100 shadow-sm">
            <div className="w-2 h-2 bg-[#F5B300] rounded-full animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#0B1C3D]">5 Intelligence Reports Live</span>
          </div>
        </div>

        {/* FEATURED ARTICLE CARD - Reduced Height and Text Size */}
        <motion.div
          onClick={() => setSelectedArticle(featuredArticle)}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          whileHover={{ y: -5 }}
          className="group block relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.06)] border border-gray-50 mb-8 overflow-hidden cursor-pointer transition-all duration-500"
        >
          <BookOpen className="absolute -right-10 -bottom-10 w-48 h-48 text-gray-50 opacity-40 group-hover:text-[#F5B300]/10 transition-colors" />
          <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-9">
              <span className="inline-block bg-[#F5B300] text-[#0B1C3D] text-[8px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-4">Strategic Insight</span>
              <h3 className="font-serif text-2xl md:text-4xl text-[#0B1C3D] leading-[1.2] group-hover:text-[#F5B300] transition-colors duration-300 italic font-bold">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-500 mt-4 text-base md:text-lg font-light max-w-2xl leading-relaxed italic">{featuredArticle.desc}</p>
            </div>
            <div className="md:col-span-3 flex justify-end">
              <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#F5B300] group-hover:border-[#F5B300] transition-all">
                <ArrowUpRight size={20} className="text-gray-300 group-hover:text-[#0B1C3D]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ARTICLE GRID */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setSelectedArticle(item)}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-xl hover:shadow-[#F5B300]/5 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#F5B300] bg-[#F5B300]/5 px-2 py-1 rounded italic">{item.tag}</span>
                <ArrowUpRight size={14} className="text-gray-200 group-hover:text-[#F5B300]" />
              </div>
              <h4 className="font-serif text-[16px] font-bold text-[#0B1C3D] leading-snug flex-grow group-hover:text-[#F5B300] transition-colors">
                {item.title}
              </h4>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-gray-400 text-[8px] font-bold uppercase tracking-widest italic">
                <Clock size={10} className="text-[#F5B300]" />
                {item.time}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ARTICLE MODAL POPUP */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-[#0B1C3D]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative"
            >
              <div className="absolute top-6 right-6 z-10">
                <button onClick={() => setSelectedArticle(null)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:bg-[#F5B300] hover:text-[#0B1C3D] transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto h-full max-h-[90vh] custom-scrollbar">
                <div className="flex items-center gap-2 mb-4">
                   <FileText size={14} className="text-[#F5B300]" />
                   <span className="text-[#F5B300] text-[10px] font-black uppercase tracking-[0.3em] italic">Intelligence Report Q2 2026</span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-[#0B1C3D] leading-tight mb-6 font-bold italic">
                  {selectedArticle.title}
                </h3>
                
                <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400 text-[9px] font-black uppercase tracking-widest">
                    <Clock size={14} className="text-[#F5B300]" />
                    <span>{selectedArticle.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-[9px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span>Verified Insight</span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#F5B300]">
                    {selectedArticle.content}
                  </p>
                  <p className="text-gray-500 mt-6 leading-relaxed italic border-l-2 border-[#F5B300] pl-6 py-2 bg-gray-50">
                    "This corridor represents a once-in-a-generation shift in North Indian wealth creation. The synergy between the 6-runway hub and the Electronic Manufacturing Clusters (EMC) ensures that occupancy is backed by white-collar employment, not just speculative trading."
                  </p>
                  <p className="text-gray-500 mt-6 leading-relaxed">
                    Investors are advised to maintain a 3-5 year horizon to capture the full infrastructure premium. As flight frequency increases, we expect a second wave of appreciation in Grade-A commercial shops and luxury integrated townships.
                  </p>
                </div>

                {/* WHATSAPP CTA */}
                <div className="mt-12 bg-[#0B1C3D] p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#0B1C3D]/20">
                  <div className="text-center md:text-left">
                    <p className="text-white font-bold text-lg mb-1">Get the Full Details !</p>
                    <p className="text-gray-400 text-sm italic font-light">Direct advisory via our Global NRI Desk.</p>
                  </div>
                  <a 
                    href="tel:+919899152327" 
                    className="w-full md:w-auto bg-[#F5B300] text-[#0B1C3D] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg"
                  >
                    <MessageCircle size={18} fill="currentColor" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}