"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText, Menu, X, ArrowRight } from 'lucide-react';

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

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // UPDATED: Added correct ID anchors to match your app/page.tsx
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
    <header className="fixed top-0 w-full z-[100] font-sans">
      {/* 🔶 GOLD ANNOUNCEMENT BAR */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="w-full bg-[#EAB308] text-[#1E293B] text-[11px] md:text-[13px] text-center py-2.5 font-semibold px-4 flex items-center justify-center gap-2"
      >
        <span className="text-sm">🔥</span>
        Limited: Get your free NRI Investment Report — Trusted by 2,500+ families across 18 countries
      </motion.div>

      {/* 🧭 MAIN NAV */}
      <nav 
        className={`transition-all duration-500 w-full ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
            : 'bg-white py-4'
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
            <span className="font-bold text-xl tracking-tight text-[#1E293B]">
              Realty<span className="text-[#EAB308]">FM</span>
            </span>
          </div>

          {/* CENTER: NAV LINKS (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[15px] font-semibold text-[#64748B] hover:text-[#1E293B] transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EAB308] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT: CONTACT & CTA */}
          <div className="flex items-center gap-4 md:gap-8">
            <a 
              href="tel:+919899152327" 
              className="hidden xl:flex items-center gap-2 text-[15px] font-semibold text-[#64748B] hover:text-[#1E293B] transition-colors"
            >
              <Phone size={18} className="text-[#EAB308]" />
              +91 9899152327
            </a>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-[#FACC15] text-[#1E293B] px-8 py-3 rounded-full font-bold text-[14px] hover:bg-[#EAB308] transition-all shadow-md"
            >
              Call Now 
            </motion.button>

            {/* Mobile Toggle Button */}
            {!isMobileMenuOpen && (
              <button 
                className="lg:hidden p-2 text-[#1E293B]"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={30} />
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
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                    <img src="/logorealtyfm.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="font-bold text-lg text-[#1E293B]">Realty<span className="text-[#EAB308]">FM</span></span>
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
                  className="text-xl font-bold text-[#1E293B] py-5 border-b border-gray-50 flex justify-between items-center group"
                >
                  {link.name}
                  <ArrowRight size={20} className="text-[#EAB308]" />
                </motion.a>
              ))}
              
              <div className="mt-8 space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <p className="text-[#64748B] text-xs uppercase tracking-widest font-bold mb-3">Connect with us</p>
                    <a href="tel:+919899152327" className="text-[#1E293B] text-lg font-bold flex items-center gap-3">
                        <div className="bg-[#EAB308] p-2 rounded-full text-white">
                            <Phone size={18} />
                        </div>
                        +91 9899152327
                    </a>
                </div>

                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#FACC15] text-[#1E293B] py-5 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-500/10 active:scale-95 transition-transform"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}