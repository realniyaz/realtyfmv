"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Building2, CheckCircle2 } from "lucide-react";

const properties = [
  {
    title: "Smartworld One DXP",
    location: "Dwarka Expressway, Sector 113",
    type: "Apartments",
    price: "₹1.85 Cr onwards",
    roi: "536%",
    tag: "Hot Selling",
    category: "buy",
    image: "/property-1.jpg",
  },
  {
    title: "Krisumi Waterfall Residences",
    location: "Sector 36A, Gurgaon",
    type: "Luxury Apartments",
    price: "₹2.45 Cr onwards",
    roi: "210%",
    tag: "Premium",
    category: "featured",
    image: "/property-2.jpg",
  },
  {
    title: "M3M Crown Sector 111",
    location: "Dwarka Expressway",
    type: "Luxury Residences",
    price: "₹3.20 Cr onwards",
    roi: "180%",
    tag: "New Launch",
    category: "buy",
    image: "/property-3.jpg",
  },
  {
    title: "DLF Privana South",
    location: "Sector 76-77, Gurgaon",
    type: "Ultra-Luxury Penthouses",
    price: "₹5.50 Cr onwards",
    roi: "165%",
    tag: "Ultra Luxury",
    category: "featured",
    image: "/property-4.jpg",
  },
  {
    title: "Godrej Zenith",
    location: "Sector 89, New Gurgaon",
    type: "Premium Commercial",
    price: "₹85 Lakh onwards",
    roi: "145%",
    tag: "Commercial",
    category: "rent",
    image: "/property-5.jpg",
  },
  {
    title: "Adani Samsara Vilasa",
    location: "Sector 63A, Gurgaon",
    type: "Exclusive Villas",
    price: "₹8.90 Cr onwards",
    roi: "190%",
    tag: "Ready to Move",
    category: "buy",
    image: "/property-6.jpg",
  },
];

export default function Properties() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? properties
      : properties.filter((p) => p.category === active);

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[11px] tracking-[0.4em] text-[#F5B300] mb-4 font-black uppercase"
            >
              Curated Portfolio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-[#0B1C3D] leading-tight"
            >
              Premium Investment <br />
              <span className="italic text-gray-400">Opportunities</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm font-light lg:text-right"
          >
            {properties.length} Exclusive Listings <br /> 
            Across High-Growth Corridors
          </motion.p>
        </div>

        {/* REFINED FILTER TABS */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {["all", "buy", "rent", "featured"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${
                active === tab
                  ? "bg-[#0B1C3D] text-white border-[#0B1C3D] shadow-xl"
                  : "bg-white text-gray-400 border-gray-100 hover:border-[#F5B300] hover:text-[#F5B300]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ANIMATED GRID */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* OVERLAY BADGES */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-[#0B1C3D] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#0B1C3D]/80 backdrop-blur-md text-[#F5B300] text-[10px] font-bold px-3 py-1.5 rounded-lg">
                    Est. ROI {item.roi}
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-[#0B1C3D] group-hover:text-[#F5B300] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#F5B300] transition-colors" />
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <MapPin size={14} className="text-[#F5B300]" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Building2 size={14} className="text-[#F5B300]" />
                      {item.type}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-5 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Starting Price</p>
                      <p className="font-bold text-[#0B1C3D] text-lg">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-[#F5B300] uppercase bg-[#F5B300]/5 px-2 py-1 rounded">
                      <CheckCircle2 size={10} />
                      RERA
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <a href="#contact" className="inline-block">
  <button 
    suppressHydrationWarning
    className="group relative bg-[#0B1C3D] text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#0B1C3D]/20 active:scale-95"
  >
    <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-[#0B1C3D]">
      View All Properties
      <motion.span 
        animate={{ x: [0, 5, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        →
      </motion.span>
    </span>
    {/* Animated Gold Slide-up background */}
    <div className="absolute inset-0 bg-[#F5B300] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
  </button>
</a>
        </motion.div>
      </div>
    </section>
  );
}