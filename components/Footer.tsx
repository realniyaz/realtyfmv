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
              {/* LOGO CONTAINER */}
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-[#F5B300] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* ACTUAL LOGO - Ensure image is in public/logo.png */}
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  src="/logorealtyfm.png" 
                  alt="RealtyFM Logo"
                  className="relative w-24 h-24 object-contain transition-transform duration-500"
                />
              </div>

              {/* BRAND NAME */}
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight text-white leading-none">
                  Realty<span className="text-[#F5B300]">FM</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-black mt-1">
                  Your Finance Manager
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-sm">
              India's premier institutional-grade NRI real estate advisory. 
              Engineering wealth through strategic corridor intelligence.
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
      { name: "Insights", href: "#faq" }, // Assuming Insights is part of the FAQ/Insights group
      { name: "FAQ", href: "#faq" }
    ].map((item) => (
      <li key={item.name}>
        <a 
          href={item.href} 
          className="hover:text-[#F5B300] transition-colors cursor-pointer flex items-center group"
        >
          <span className="w-0 group-hover:w-4 h-[1px] bg-[#F5B300] transition-all duration-300 mr-0 group-hover:mr-2" />
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* RESOURCES - 2 COLS */}
          {/* RESOURCES / INTELLIGENCE - 2 COLS */}
<div className="lg:col-span-2">
  <h4 className="text-[#F5B300] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Intelligence</h4>
  <ul className="space-y-4 text-sm font-light text-gray-300">
    {["NRI Tax Guide", "FEMA Compliance", "RERA Directory", "Market Signals"].map((item) => (
      <li key={item}>
        <a 
          href="#contact" 
          className="hover:text-[#F5B300] transition-colors cursor-pointer flex items-center group"
        >
          <span className="w-0 group-hover:w-4 h-[1px] bg-[#F5B300] transition-all duration-300 mr-0 group-hover:mr-2" />
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* CONTACT INFO - 4 COLS */}
          <div className="lg:col-span-4">
            <h4 className="text-[#F5B300] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Global Desk</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F5B300] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-medium">+91-9899152327</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F5B300] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium">info@realtyfm.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F5B300] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-white font-medium">B 625, Bhutani Alphathum, Sector-90, Noida</p>
                </div>
              </li>
            </ul>
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
  {/* LEGAL LINKS */}
  <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
    <Link 
      href="/privacy-policy" 
      className="hover:text-[#F5B300] transition-colors duration-300"
    >
      Privacy
    </Link>
    <Link 
      href="/terms" 
      className="hover:text-[#F5B300] transition-colors duration-300"
    >
      Terms
    </Link>
    <Link 
      href="/disclaimer" 
      className="hover:text-[#F5B300] transition-colors duration-300"
    >
      Disclaimer
    </Link>
  </div>
  
  {/* BACK TO TOP BUTTON */}
  <button
    suppressHydrationWarning
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Back to top"
    className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F5B300] hover:border-[#F5B300] hover:text-[#0B1C3D] transition-all duration-500 shadow-lg hover:shadow-[#F5B300]/20"
  >
    <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
    
    {/* Floating label that appears on hover */}
    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[#F5B300] text-[#0B1C3D] text-[9px] font-bold px-2 py-1 rounded-md pointer-events-none uppercase tracking-tighter">
      Top
    </span>
  </button>
</div>

        </div>

        {/* FINAL LOGO WATERMARK */}
        <div className="mt-16 opacity-[0.02] select-none pointer-events-none text-center">
            <h1 className="text-[15vw] font-serif font-black leading-none uppercase tracking-tighter">RealtyFM</h1>
        </div>

      </div>
    </footer>
  );
}