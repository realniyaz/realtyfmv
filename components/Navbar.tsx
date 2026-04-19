"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

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
      {/* 🔶 GOLD ANNOUNCEMENT BAR */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="w-full bg-[#EAB308] text-[#1E293B] text-[10px] md:text-[12px] text-center py-2 font-serif font-bold tracking-wide px-4 flex items-center justify-center gap-2"
      >
        <span className="text-sm italic">Limited:</span>
        Get your free <span className="italic underline decoration-1">NRI Investment Report</span> — Trusted by 2,500+ families
      </motion.div>

      {/* 🧭 MAIN NAV */}
      <nav 
        className={`transition-all duration-500 w-full ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LEFT: LOGO */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#EAB308] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <img 
                src="/logorealtyfm.png" 
                alt="RealtyFM Logo"
                className="relative z-10 w-full h-full object-contain" 
              />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-[#1E293B]">
              Realty<span className="text-[#EAB308] italic ml-1">FM</span>
            </span>
          </div>

          {/* CENTER: NAV LINKS (Updated to Serif & Italic) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="font-serif text-[16px] text-[#475569] hover:text-[#1E293B] hover:italic transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EAB308] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT: CONTACT & CTA */}
          <div className="flex items-center gap-4 md:gap-8">
            <a 
              href="tel:+919899152327" 
              className="hidden xl:flex items-center gap-2 font-serif text-[15px] text-[#475569] hover:text-[#1E293B] hover:italic transition-all"
            >
              <Phone size={14} className="text-[#EAB308]" />
              <span className="tabular-nums">+91 9899152327</span>
            </a>

            <a href="tel:+919899152327">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block bg-[#FACC15] text-[#1E293B] px-8 py-3 rounded-full font-serif font-bold italic text-[14px] hover:bg-[#EAB308] transition-all shadow-md active:scale-95"
              >
                Whats'app Now
              </motion.button>
            </a>

            {!isMobileMenuOpen && (
              <button 
                className="lg:hidden p-2 text-[#1E293B]"
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
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                    <img src="/logorealtyfm.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="font-serif font-bold text-2xl text-[#1E293B]">Realty<span className="text-[#EAB308] italic">FM</span></span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 text-[#1E293B] hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={32} />
                </button>
            </div>

            <div className="flex flex-col gap-2 p-8 overflow-y-auto bg-white flex-1">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl font-light italic text-[#1E293B] py-6 border-b border-gray-50 flex justify-between items-center group"
                >
                  {link.name}
                  <ArrowRight size={24} className="text-[#EAB308] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              <div className="mt-12 space-y-8">
                <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-100">
                    <p className="font-serif italic text-[#64748B] text-sm mb-4">Strategic Consultation</p>
                    <a href="tel:+919899152327" className="font-serif text-2xl font-bold text-[#1E293B] flex items-center gap-4">
                        <div className="bg-[#EAB308] p-3 rounded-full text-[#1E293B]">
                            <Phone size={20} />
                        </div>
                        <span className="tabular-nums">+91 9899152327</span>
                    </a>
                </div>

                <a href="tel:+919899152327" className="block w-full">
                  <button 
                    className="w-full bg-[#0B1C3D] text-[#F5B300] py-6 rounded-2xl font-serif font-bold italic text-xl shadow-xl active:scale-95 transition-transform"
                  >
                    Speak with an Advisor
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}