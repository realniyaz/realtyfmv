"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,   
  ShieldCheck,
  Globe,
  Landmark
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1C3D] text-white pt-24 pb-12 overflow-hidden">
      {/* 🌌 AMBIENT DESIGN ELEMENTS */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F5B300]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP GRID: PRIMARY INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* LOGO & MISSION - 4 COLS */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F5B300] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src="/logorealtyfm.png" 
                  alt="RealtyFM Logo"
                  className="relative w-20 h-20 object-contain transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight text-white leading-none">
                  Realty<span className="text-[#F5B300] italic ml-0.5">FM</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-black mt-2 italic">
                  Your Finance Manager
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg font-serif italic font-light leading-relaxed mb-8 max-w-sm">
              "Engineering wealth for the global Indian through strategic corridor intelligence and institutional-grade advisory."
            </p>
          </div>

          {/* QUICK LINKS - 2 COLS */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F5B300] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              {[
                { name: "Properties", href: "#properties" },
                { name: "Returns", href: "#returns" },
                { name: "Why Us", href: "#why-us" },
                { name: "FAQ", href: "#faq" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-[#F5B300] hover:italic transition-all flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#F5B300] transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INTELLIGENCE - 2 COLS */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F5B300] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Intelligence</h4>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              {["NRI Tax Guide", "FEMA Compliance", "RERA Directory", "Market Signals"].map((item) => (
                <li key={item}>
                  <a href="#contact" className="hover:text-[#F5B300] hover:italic transition-all flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#F5B300] transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GLOBAL DESK INFO - 4 COLS (DUBAI + INDIA) */}
          <div className="lg:col-span-4">
            <h4 className="text-[#F5B300] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Global Desk</h4>
            <div className="space-y-8">
              
              {/* DUBAI DESK */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={14} className="text-[#F5B300]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white italic">Dubai Global Desk</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                    B 3003, Latifa Tower, Sheikh Zayed Rd, Dubai, UAE
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={16} className="text-[#F5B300] flex-shrink-0" />
                  <a href="tel:+971526519798" className="text-white font-medium hover:text-[#F5B300] transition-colors tabular-nums">
                    +971 52 651 9798
                  </a>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/5" />

              {/* INDIA HEADQUARTERS */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark size={14} className="text-[#F5B300]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white italic">India Headquarters</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                    B 625, Alphathum, Sector-90, Noida, UP, India
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <Phone size={16} className="text-[#F5B300] flex-shrink-0" />
                    <a href="tel:+919899152327" className="text-white font-medium hover:text-[#F5B300] transition-colors tabular-nums">
                      +91 98991 52327
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={16} className="text-[#F5B300] flex-shrink-0" />
                    <a href="mailto:info@realtyfm.com" className="text-white font-medium hover:text-[#F5B300] transition-colors italic">
                      info@realtyfm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP: LEGAL & SCROLL */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
              © {currentYear} RealtyFM. All rights reserved. 
            </p>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <ShieldCheck size={12} className="text-[#F5B300]" />
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">RERA Registered Advisory</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              <Link href="/privacy-policy" className="hover:text-[#F5B300] hover:italic transition-all">Privacy</Link>
              <Link href="/terms" className="hover:text-[#F5B300] hover:italic transition-all">Terms</Link>
              <Link href="/disclaimer" className="hover:text-[#F5B300] hover:italic transition-all">Disclaimer</Link>
            </div>
            
            <button
              suppressHydrationWarning
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F5B300] hover:border-[#F5B300] hover:text-[#0B1C3D] transition-all duration-500 shadow-lg hover:shadow-[#F5B300]/20"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[#F5B300] text-[#0B1C3D] text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}