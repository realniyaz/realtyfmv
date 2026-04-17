"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, TrendingUp, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const comparisonData = [
  {
    name: "Dwarka Expressway Real Estate",
    returns: "536%",
    annual: "45%",
    risk: "Medium",
    liquidity: "Medium",
    tax: "Yes",
    invest: "₹85L",
    highlight: true,
  },
  {
    name: "US S&P 500 Index",
    returns: "85%",
    annual: "13%",
    risk: "Medium",
    liquidity: "High",
    tax: "Limited",
    invest: "$1,000",
  },
  {
    name: "Indian Fixed Deposit",
    returns: "35%",
    annual: "6.5%",
    risk: "Low",
    liquidity: "Low",
    tax: "No",
    invest: "₹10K",
  },
  {
    name: "Gold (Physical)",
    returns: "78%",
    annual: "12%",
    risk: "Low",
    liquidity: "Medium",
    tax: "Limited",
    invest: "₹5K",
  },
  {
    name: "Dubai Real Estate",
    returns: "65%",
    annual: "10.5%",
    risk: "Medium",
    liquidity: "Low",
    tax: "No",
    invest: "AED 750K",
  },
  {
    name: "Indian Mutual Funds",
    returns: "72%",
    annual: "11.5%",
    risk: "Medium-High",
    liquidity: "High",
    tax: "Yes (ELSS)",
    invest: "₹500",
  },
];

export default function Comparison() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ASYMMETRIC HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="max-w-2xl"
          >
            <p className="text-[11px] tracking-[0.4em] text-[#F5B300] mb-4 font-black uppercase">
              Investment Comparison
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-[#0B1C3D] leading-tight">
              How Indian Real Estate <br />
              <span className="italic text-gray-400 font-light">Stacks Up</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 bg-[#0B1C3D]/5 px-6 py-4 rounded-2xl border border-[#0B1C3D]/10"
          >
            <TrendingUp className="text-[#F5B300]" size={24} />
            <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
              Data based on 5-year historical performance (2019–2024).
            </p>
          </motion.div>
        </div>

        {/* PREMIUM TABLE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#0B1C3D] text-white">
                  <th className="px-8 py-6 font-serif text-lg tracking-wide sticky left-0 z-20 bg-[#0B1C3D]">Asset Class</th>
                  <th className="px-6 py-6 font-bold text-[10px] uppercase tracking-widest text-gray-400">5-Year Returns</th>
                  <th className="px-6 py-6 font-bold text-[10px] uppercase tracking-widest text-gray-400">Annualized</th>
                  <th className="px-6 py-6 font-bold text-[10px] uppercase tracking-widest text-gray-400">Risk Profile</th>
                  <th className="px-6 py-6 font-bold text-[10px] uppercase tracking-widest text-gray-400">Liquidity</th>
                  <th className="px-6 py-6 font-bold text-[10px] uppercase tracking-widest text-gray-400">Tax Benefit</th>
                  <th className="px-6 py-6 font-bold text-[10px] uppercase tracking-widest text-gray-400">Min. Entry</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className={`group transition-all duration-300 border-b border-gray-50 ${
                      row.highlight ? "bg-[#F5B300]/5" : "hover:bg-gray-50/50"
                    }`}
                  >
                    {/* NAME - STICKY FOR MOBILE SCROLL */}
                    <td className={`px-8 py-6 font-serif font-bold text-[#0B1C3D] text-lg sticky left-0 z-10 transition-colors ${
                      row.highlight ? "bg-[#FDF9F0]" : "bg-white group-hover:bg-gray-50"
                    }`}>
                      {row.highlight && (
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-[#F5B300] rounded-full mr-3">
                          <Check size={12} className="text-[#0B1C3D]" />
                        </span>
                      )}
                      {row.name}
                    </td>

                    {/* RETURNS */}
                    <td className="px-6 py-6">
                      <span className={`text-2xl font-serif font-bold ${row.highlight ? "text-[#F5B300]" : "text-[#0B1C3D]"}`}>
                        {row.returns}
                      </span>
                    </td>

                    <td className="px-6 py-6 font-medium text-gray-600">{row.annual}</td>

                    {/* RISK */}
                    <td className="px-6 py-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                        row.risk === "Low" ? "bg-emerald-100 text-emerald-700" :
                        row.risk === "Medium" ? "bg-amber-100 text-amber-700" :
                        "bg-rose-100 text-rose-700"
                      }`}>
                        <AlertCircle size={10} />
                        {row.risk}
                      </div>
                    </td>

                    <td className="px-6 py-6 text-gray-500 font-light">{row.liquidity}</td>
                    <td className="px-6 py-6 text-gray-500 font-light">{row.tax}</td>
                    <td className="px-6 py-6 font-bold text-[#0B1C3D]">{row.invest}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 text-center"
        >
          <Info size={14} className="text-[#F5B300]" />
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
            * Past performance is not indicative of future results. Sourced from market reports (2019–2024).
          </p>
        </motion.div>

      </div>
    </section>
  );
}