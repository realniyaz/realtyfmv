"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Clock, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const articles = [
  {
    title: "Complete Guide to FEMA Regulations for NRI Property Investors",
    tag: "Tax & Compliance",
    time: "6 min read",
  },
  {
    title: "NCR Real Estate: Q1 2026 Performance Report & Forecast",
    tag: "Market Analysis",
    time: "10 min read",
  },
  {
    title: "Step-by-Step Buying Property in India as an NRI from Abroad",
    tag: "How-To",
    time: "7 min read",
  },
  {
    title: "NRI Capital Gains Tax on Indian Property: 2026 Rules & Optimization",
    tag: "Tax Planning",
    time: "9 min read",
  },
  {
    title: "The Adani Jaypee Deal: What ₹4,535 Cr Means for Your Investment",
    tag: "Market Signal",
    time: "5 min read",
  },
  {
    title: "Maximizing Rental Yields: Furnished vs Unfurnished Properties",
    tag: "Rental Strategy",
    time: "6 min read",
  },
  {
    title: "Power of Attorney for NRI Property Purchase: Complete Guide",
    tag: "Legal",
    time: "8 min read",
  },
];

export default function Insights() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
          >
            <p className="text-[11px] tracking-[0.5em] text-[#F5B300] mb-4 font-black uppercase">
              Knowledge Base
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-tight">
              Insights & <span className="italic text-gray-400 font-light">Resources</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl text-lg font-light leading-relaxed">
              Expert analysis and actionable guides curated for the sophisticated NRI investor. 
              Updated weekly by our global research team.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm"
          >
            <div className="w-2 h-2 bg-[#F5B300] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0B1C3D]">
              8 Articles Published
            </span>
          </motion.div>
        </div>

        {/* FEATURED ARTICLE CARD (No Button, Full Card Clickable) */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          whileHover={{ y: -5 }}
          className="group block relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] border border-gray-50 mb-12 overflow-hidden transition-all duration-500"
        >
          {/* Subtle Background Icon */}
          <BookOpen className="absolute -right-10 -bottom-10 w-64 h-64 text-gray-50 opacity-50 group-hover:text-[#F5B300]/10 transition-colors duration-500" />
          
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="inline-block bg-[#F5B300] text-[#0B1C3D] text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                Featured Insight
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#0B1C3D] leading-snug group-hover:text-[#F5B300] transition-colors duration-300">
                Why Dwarka Expressway Is the Hottest NRI Investment Corridor in 2026
              </h3>
              <p className="text-gray-500 mt-6 text-lg font-light max-w-2xl leading-relaxed">
                A deep-dive analysis into the 536% ROI story and the infrastructure catalysts 
                driving the next wave of capital appreciation.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Clock size={14} className="text-[#F5B300]" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#F5B300] group-hover:border-[#F5B300] transition-all duration-500">
                <ArrowUpRight size={24} className="text-gray-300 group-hover:text-[#0B1C3D] transition-colors" />
              </div>
            </div>
          </div>
        </motion.a>

        {/* ARTICLE GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {articles.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: "rgba(245, 179, 0, 0.3)" }}
              className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-xl hover:shadow-[#F5B300]/5"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#F5B300] bg-[#F5B300]/5 px-2 py-1 rounded">
                  {item.tag}
                </span>
                <ArrowUpRight size={16} className="text-gray-200 group-hover:text-[#F5B300] transition-colors" />
              </div>

              <h4 className="font-serif text-lg text-[#0B1C3D] leading-snug flex-grow group-hover:text-[#F5B300] transition-colors duration-300">
                {item.title}
              </h4>

              <div className="mt-8 pt-5 border-t border-gray-50 flex items-center gap-2 text-gray-400 text-[10px] font-medium uppercase tracking-widest">
                <Clock size={12} className="text-[#F5B300]" />
                {item.time}
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}