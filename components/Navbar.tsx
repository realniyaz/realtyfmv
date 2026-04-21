"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Returns', href: '#returns' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* 🔶 REFINED ANNOUNCEMENT BAR */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="w-full bg-[#EAB308] text-[#0B1C3D] py-2 md:py-2.5 px-4 border-b border-[#0B1C3D]/5 relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-center">
          {/* DESKTOP VIEW */}
          <div className="hidden md:flex items-center gap-2 font-serif font-bold text-[12px] tracking-wide">
            <span className="uppercase text-[10px] bg-[#0B1C3D] text-[#EAB308] px-2 py-0.5 rounded italic mr-1">Limited</span>
            Get your free <span className="italic underline decoration-1 underline-offset-4">NRI Investment Report</span>
            <span className="text-[#0B1C3D]/40 mx-2">—</span>
            <span className="font-sans font-black text-[10px] uppercase tracking-tighter">Trusted by 2,500+ families</span>
          </div>

          {/* MOBILE VIEW (High-End Marquee) */}
          <div className="flex md:hidden w-full relative h-4 overflow-hidden">
            <motion.div 
              animate={{ x: [0, -535] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap items-center gap-12 font-serif font-bold text-[11px]"
            >
              <div className="flex items-center gap-2">
                <span className="italic text-[#0B1C3D] font-black">Limited:</span>
                <span>Get your free NRI Investment Report</span>
                <span className="mx-2 opacity-30">•</span>
                <span className="uppercase tracking-tighter font-black">2,500+ families served</span>
              </div>
              {/* Loop Duplicate */}
              <div className="flex items-center gap-2">
                <span className="italic text-[#0B1C3D] font-black">Limited:</span>
                <span>Get your free NRI Investment Report</span>
                <span className="mx-2 opacity-30">•</span>
                <span className="uppercase tracking-tighter font-black">2,500+ families served</span>
              </div>
            </motion.div>
            {/* Edge Gradients for the Marquee */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#EAB308] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#EAB308] to-transparent z-10" />
          </div>
        </div>
      </motion.div>

      {/* 🧭 MAIN NAV */}
      <nav 
        className={`transition-all duration-500 w-full ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white py-4 md:py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LEFT: LOGO */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 md:gap-3 cursor-pointer group"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#EAB308] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <img 
                src="/logorealtyfm.png" 
                alt="RealtyFM Logo"
                className="relative z-10 w-full h-full object-contain" 
              />
            </div>
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-[#0B1C3D]">
              Realty<span className="text-[#EAB308] italic ml-1">FM</span>
            </span>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="font-serif text-[16px] text-[#475569] hover:text-[#0B1C3D] hover:italic transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EAB308] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT: BRANDED WHATSAPP CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="https://wa.me/919899152327" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <motion.button suppressHydrationWarning
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0B1C3D] text-white px-7 py-2.5 rounded-full flex items-center gap-3 border border-white/10 shadow-[0_10px_20px_-10px_rgba(245,179,0,0.3)] hover:shadow-[0_10px_25px_-5px_rgba(245,179,0,0.4)] transition-all group"
              >
                <div className="bg-[#F5B300] p-1.5 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <MessageCircle size={14} fill="#0B1C3D" stroke="none" />
                </div>
                <span className="font-serif font-bold italic text-[14px] tracking-tight group-hover:text-[#F5B300] transition-colors">
                  WhatsApp Now
                </span>
              </motion.button>
            </a>

            {!isMobileMenuOpen && (
              <button 
                className="lg:hidden p-2 text-[#0B1C3D] hover:bg-[#FAF9F6] rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[120] lg:hidden flex flex-col h-screen"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                    <img src="/logorealtyfm.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="font-serif font-bold text-xl text-[#0B1C3D]">Realty<span className="text-[#EAB308] italic">FM</span></span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 text-[#0B1C3D] hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={28} />
                </button>
            </div>

            <div className="flex flex-col gap-1 p-6 overflow-y-auto bg-white flex-1">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl font-light italic text-[#0B1C3D] py-4 border-b border-gray-50 flex justify-between items-center group"
                >
                  {link.name}
                  <ArrowRight size={20} className="text-[#EAB308]" />
                </motion.a>
              ))}
              
              <div className="mt-8">
                <div className="bg-[#FAF9F6] p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 opacity-[0.03]">
                    <MessageCircle size={120} fill="#0B1C3D" stroke="none" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-[10px] tracking-[0.3em] text-[#F5B300] font-black uppercase mb-3 italic">Global NRI Desk</p>
                    <h3 className="font-serif text-xl text-[#0B1C3D] font-bold italic leading-tight mb-6">Direct Strategic Advisory</h3>
                    <a href="https://wa.me/919899152327" target="_blank" rel="noopener noreferrer" className="w-full">
                      <motion.button whileTap={{ scale: 0.96 }} className="w-full bg-[#0B1C3D] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl">
                        <div className="bg-[#F5B300] p-1.5 rounded-full flex items-center justify-center">
                          <MessageCircle size={14} fill="#0B1C3D" stroke="none" />
                        </div>
                        <span className="font-serif font-bold italic text-lg tracking-tight">WhatsApp Now</span>
                      </motion.button>
                    </a>
                    <p className="mt-4 text-gray-400 text-[9px] uppercase tracking-widest font-medium italic">Response: Under 5 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}