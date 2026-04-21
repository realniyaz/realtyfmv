"use client";

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, MessageCircle, X, CheckCircle2, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const metrics = [
  { value: '$250mn', label: 'Assets Under Advisory' },
  { value: '2,500+', label: 'NRI Families Served' },
  { value: '536%', label: 'Top Corridor ROI' },
  { value: '18', label: 'Countries' },
];

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Lead Capture States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    }, 1500);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section 
      ref={ref}
      // lg:min-h-screen ensures full height on desktop, auto on mobile
      className="relative bg-[#0B1C3D] text-white overflow-hidden lg:min-h-screen flex flex-col justify-center"
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,179,0,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1C3D]/60 to-[#0B1C3D]" />
      </div>

      {/* Main Content Grid - pt-36 provides the necessary space on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 md:pt-48 pb-10 md:pb-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left items-center lg:items-start"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-[#F5B300]/30 text-[#F5B300] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase w-fit shadow-lg"
          >
            <span className="w-2 h-2 bg-[#F5B300] rounded-full animate-pulse" />
            NRI Real Estate Investment Platform
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            Add High-Growth <br className="hidden md:block" />
            <span className="text-[#F5B300] italic">Indian Real Estate</span> <br className="hidden md:block" />
            to Your Portfolio
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base md:text-xl max-w-xl leading-relaxed font-light"
          >
            Invest in India&apos;s most coveted corridors — vetted assets trusted by 2,500+ families across 18 countries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto group bg-[#F5B300] text-[#0B1C3D] px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#F5B300]/20 active:scale-95"
            >
              Start Investing 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a href="#properties" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95 text-sm md:text-base">
                <span className="bg-[#F5B300] p-1 rounded-full text-[#0B1C3D]">
                  <Play size={14} fill="currentColor" />
                </span>
                View Properties
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Visuals (Desktop Only) */}
        <div className="relative h-[500px] hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-20 z-20 bg-white/5 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 w-72 shadow-2xl"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img src="/airport.jpg" alt="Airport" className="h-40 w-full object-cover" />
            </div>
            <p className="text-sm font-semibold tracking-wide">Noida International Airport</p>
            <p className="text-[#F5B300] text-xs font-bold mt-1">Operational March 2026</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-48 -right-8 z-10 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 w-64 shadow-2xl"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img src="/yamunaexpressway.jpg" alt="ROI" className="h-32 w-full object-cover" />
            </div>
            <p className="text-sm font-semibold">Yamuna Expressway</p>
            <p className="text-xs text-gray-400 mt-1">536% Appreciation Achieved</p>
          </motion.div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="border-t border-white/5 bg-black/20 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          >
            {metrics.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start group">
                <span className="text-2xl md:text-4xl font-serif font-bold text-white group-hover:text-[#F5B300] transition-colors">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-[8px] md:text-xs uppercase tracking-[0.2em] font-medium text-center md:text-left">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0B1C3D]/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }} 
              className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#0B1C3D]"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <span className="text-[#F5B300] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block italic">Institutional Access</span>
                <h3 className="font-serif text-3xl font-bold text-[#0B1C3D] mb-4">Begin Your Journey</h3>
                
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <input required type="text" placeholder="Full Name" className="w-full bg-[#FAF9F6] border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-[#F5B300]" />
                  <input required type="tel" placeholder="Phone Number" className="w-full bg-[#FAF9F6] border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-[#F5B300]" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#FAF9F6] border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-[#F5B300]" />
                  
                  <button 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-500 ${
                      isSuccess ? "bg-green-600 text-white" : "bg-[#0B1C3D] text-[#F5B300] hover:brightness-110"
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Send size={16} /></motion.div>
                    ) : isSuccess ? (
                      <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Details shared successfully</div>
                    ) : (
                      "Speak with an Advisor"
                    )}
                  </button>
                </form>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="w-full h-[1px] bg-gray-100 relative">
                    <span className="absolute left-1/2 -top-2 -translate-x-1/2 bg-white px-2 text-[8px] text-gray-400 uppercase font-bold text-center w-max">Or Connect via WhatsApp</span>
                  </div>
                  
                  <a 
                    href="https://wa.me/919899152327" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-sm shadow-md"
                  >
                    <MessageCircle size={18} fill="currentColor" stroke="none" />
                    WhatsApp Us
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