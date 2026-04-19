"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "RealtyFM made investing in Indian real estate from the US seamless. My investment has already appreciated 180% in 3 years.",
    name: "Rajesh Krishnamurthy",
    role: "Tech Executive, San Francisco",
    roi: "180% ROI",
  },
  {
    text: "As an NRI in Dubai, I was skeptical about remote investment. RealtyFM exceeded my expectations end-to-end.",
    name: "Priya Venkatesh",
    role: "Financial Consultant, Dubai",
    roi: "210% ROI",
  },
  {
    text: "The corridor analysis report was incredibly detailed. Best investment decision I’ve made.",
    name: "Amit Sharma",
    role: "Investment Banker, London",
    roi: "195% ROI",
  },
  {
    text: "From documentation to possession, everything was handled remotely. Truly understands NRIs.",
    name: "Sneha Patel",
    role: "Healthcare Professional, Toronto",
    roi: "165% ROI",
  },
];

const globalPresence = [
  { country: "USA", flag: "🇺🇸" },
  { country: "UAE", flag: "🇦🇪" },
  { country: "UK", flag: "🇬🇧" },
  { country: "Canada", flag: "🇨🇦" },
  { country: "Singapore", flag: "🇸🇬" },
  { country: "Australia", flag: "🇦🇺" },
  { country: "NZ", flag: "🇳🇿" },
  { country: "Germany", flag: "🇩🇪" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP METRICS STRIP - Compact on Mobile */}
        <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-4 md:gap-8 mb-12 md:mb-20 border-b border-gray-100 pb-10">
          {[
            { val: "4.9/5", label: "Global Rating" },
            { val: "2,500+", label: "NRIs Served" },
            { val: "18", label: "Countries" },
            { val: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-[#F5B300] text-xl md:text-3xl font-serif font-bold group-hover:scale-105 transition-transform">
                {stat.val}
              </p>
              <p className="text-[8px] md:text-[10px] tracking-[0.2em] text-gray-400 uppercase font-black">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative grid lg:grid-cols-12 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7 relative min-h-[340px] md:min-h-[400px] flex flex-col justify-center">
            <Quote className="absolute -top-6 md:-top-10 -left-2 md:-left-6 text-[#F5B300]/10 w-20 h-20 md:w-32 md:h-32 -z-0" />
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#F5B300] text-[#F5B300]" />
                  ))}
                </div>

                <blockquote className="font-serif text-2xl md:text-5xl text-[#0B1C3D] leading-tight mb-8 md:mb-10 italic font-medium">
                  “{testimonials[index].text}”
                </blockquote>

                <div>
                  <h4 className="text-lg md:text-xl font-bold text-[#0B1C3D]">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-gray-500 font-light tracking-wide uppercase text-[10px] mt-1">
                    {testimonials[index].role}
                  </p>
                  <div className="mt-4 inline-block bg-[#F5B300]/10 text-[#F5B300] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                    Verified {testimonials[index].roi}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS - Positioned better for mobile thumbs */}
            <div className="flex items-center justify-between md:justify-start gap-6 mt-12 md:mt-16">
              <div className="flex items-center gap-4">
                <button suppressHydrationWarning
                  onClick={prevStep}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0B1C3D] hover:text-white transition-all active:scale-90"
                >
                  <ChevronLeft size={18} />
                </button>
                
                <button suppressHydrationWarning
                  onClick={nextStep}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0B1C3D] hover:text-white transition-all active:scale-90"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-6 md:w-8 bg-[#F5B300]' : 'w-1.5 md:w-2 bg-gray-200'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: DECORATIVE VISUAL - Optimized Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle background rotation only on desktop to save mobile space if visible */}
              <div className="absolute inset-0 bg-[#F5B300] rounded-[2rem] md:rounded-[3rem] rotate-3 md:rotate-6 scale-95 opacity-5 md:opacity-10" />
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl bg-white p-3 md:p-4">
                <div className="bg-[#0B1C3D] rounded-[1.5rem] md:rounded-[2.2rem] h-[280px] md:h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-12 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#F5B300]/10 blur-2xl md:blur-3xl" />
                  <p className="text-[#F5B300] text-4xl md:text-6xl font-serif mb-2 md:mb-4">“</p>
                  <p className="text-white text-lg md:text-2xl font-light leading-relaxed mb-6 md:mb-8 italic">
                    Investing with Realty<span className="text-[#F5B300]">FM</span> is like having a private family office in India.
                  </p>
                  <span className="w-8 md:w-12 h-[1px] bg-[#F5B300]/50 mb-4 md:mb-6" />
                  <p className="text-gray-400 text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Investor Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔄 GLOBAL PRESENCE MARQUEE */}
        <div className="relative pt-10 md:pt-12 border-t border-gray-100 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col items-center">
            <p className="text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] text-gray-400 mb-6 md:mb-10 font-black uppercase text-center">
              Trusted by NRIs Across 18+ Countries
            </p>

            <div className="flex overflow-hidden w-full group">
              <motion.div 
                className="flex gap-4 md:gap-8 items-center whitespace-nowrap py-2"
                animate={{ x: [0, -1200] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...globalPresence, ...globalPresence, ...globalPresence, ...globalPresence].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:border-[#F5B300]/40 transition-all group/item"
                  >
                    <span className="text-lg grayscale group-hover/item:grayscale-0 transition-all duration-500">
                      {item.flag}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold text-[#0B1C3D] tracking-wider uppercase">
                      {item.country}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}