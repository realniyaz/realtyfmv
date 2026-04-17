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
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP METRICS STRIP */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 mb-24 border-b border-gray-100 pb-12">
          {[
            { val: "4.9/5", label: "Global Rating" },
            { val: "2,500+", label: "Families Served" },
            { val: "18", label: "Countries" },
            { val: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-[#F5B300] text-3xl font-serif font-bold mb-1 group-hover:scale-110 transition-transform duration-500">
                {stat.val}
              </p>
              <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-black">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative grid lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7 relative min-h-[400px] flex flex-col justify-center">
            <Quote className="absolute -top-10 -left-6 text-[#F5B300]/10 w-32 h-32 -z-0" />
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#F5B300] text-[#F5B300]" />
                  ))}
                </div>

                <blockquote className="font-serif text-3xl md:text-5xl text-[#0B1C3D] leading-tight mb-10 italic">
                  “{testimonials[index].text}”
                </blockquote>

                <div>
                  <h4 className="text-xl font-bold text-[#0B1C3D]">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-gray-500 font-light tracking-wide uppercase text-xs mt-1">
                    {testimonials[index].role}
                  </p>
                  <div className="mt-4 inline-block bg-[#F5B300]/10 text-[#F5B300] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Verified {testimonials[index].roi}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="flex items-center gap-6 mt-16">
              <button suppressHydrationWarning
                onClick={prevStep}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0B1C3D] hover:text-white transition-all duration-500"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-[#F5B300]' : 'w-2 bg-gray-200'}`} 
                  />
                ))}
              </div>

              <button suppressHydrationWarning
                onClick={nextStep}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0B1C3D] hover:text-white transition-all duration-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT: DECORATIVE VISUAL */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F5B300] rounded-[3rem] rotate-6 scale-95 opacity-10" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                <div className="bg-[#0B1C3D] rounded-[2.2rem] h-[500px] flex flex-col items-center justify-center text-center p-12 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B300]/10 blur-3xl" />
                  <p className="text-[#F5B300] text-6xl font-serif mb-4">“</p>
                  <p className="text-white text-2xl font-light leading-relaxed mb-8">
                    Investing with RealtyFM is like having a private family office in India.
                  </p>
                  <span className="w-12 h-[1px] bg-[#F5B300] mb-6" />
                  <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em]">Investor Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔄 GLOBAL PRESENCE MARQUEE */}
        <div className="relative pt-12 border-t border-gray-100 overflow-hidden">
          {/* Edge Gradients */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col items-center">
            <p className="text-[9px] tracking-[0.4em] text-gray-400 mb-10 font-black uppercase">
              Currently Serving Global Investors
            </p>

            <div className="flex overflow-hidden w-full">
              <motion.div 
                className="flex gap-4 md:gap-8 items-center whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 35, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...globalPresence, ...globalPresence, ...globalPresence].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#F5B300]/30 transition-colors group"
                  >
                    <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-500">
                      {item.flag}
                    </span>
                    <span className="text-[10px] font-bold text-[#0B1C3D] tracking-wider uppercase">
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