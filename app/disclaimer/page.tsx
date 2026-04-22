"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Landmark, ShieldCheck, ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Legal Disclaimer | Realtyfm',
  description: 'Important legal disclosures regarding real estate investments, ROI projections, and RERA compliance. Read our full investment risk and liability statement.',
  openGraph: {
    title: 'Legal Disclaimer | Realtyfm',
    description: 'Important investment disclosures and risk statements from Realtyfm.',
  },
};

export default function DisclaimerPage() {
  const lastReviewed = "April 2026";

  const disclaimers = [
    {
      title: "No Investment Guarantee",
      icon: <TrendingUp className="text-[#F5B300]" size={24} />,
      content: "Real estate appreciation and ROI figures mentioned in our reports are based on historical data and current government infrastructure projections. Past performance is not a definitive indicator of future results. RealtyFM does not guarantee specific financial outcomes."
    },
    {
      title: "Not a Registered Financial Advisor",
      icon: <Landmark className="text-[#F5B300]" size={24} />,
      content: "RealtyFM is a real estate advisory and corridor analysis platform. We are not SEBI-registered investment advisors or licensed tax consultants. We recommend that clients consult with their personal financial and legal counsel before executing high-value transactions."
    },
    {
      title: "Third-Party Data Accuracy",
      icon: <Info className="text-[#F5B300]" size={24} />,
      content: "While we source our 'Intelligence' from RERA, government master plans, and reputable developers, RealtyFM is not responsible for errors, omissions, or changes in third-party infrastructure timelines that may affect property valuations."
    },
    {
      title: "FEMA & Regulatory Compliance",
      icon: <ShieldCheck className="text-[#F5B300]" size={24} />,
      content: "The onus of compliance with FEMA regulations, source of funds verification, and NRE/NRO account management lies with the investor. RealtyFM provides strategic guidance but is not liable for regulatory lapses on the part of the individual investor."
    }
  ];

  return (
    /* CHANGED: Added 'flex' and 'flex-col' to manage footer placement */
    <div className="bg-[#FAF9F6] min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* 🏛️ MINIMALIST HEADER */}
      <section className="bg-white border-b border-gray-100 pt-44 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#0B1C3D] text-[10px] font-bold uppercase tracking-[0.3em] mb-10 hover:text-[#F5B300] transition-colors">
            <ArrowLeft size={14} /> Back to Platform
          </Link>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 bg-[#0B1C3D] rounded-2xl flex items-center justify-center text-[#F5B300]">
              <AlertTriangle size={24} />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-[#0B1C3D]">
              Legal <span className="italic font-light text-gray-400">Disclaimer</span>
            </h1>
          </motion.div>
          
          <p className="text-gray-500 text-lg font-light max-w-2xl leading-relaxed">
            Please read this advisory disclosure carefully. It governs the limitations of information provided on the RealtyFM platform.
          </p>
        </div>
      </section>

      {/* 📄 DISCLAIMER CARDS */}
      {/* CHANGED: Added 'flex-1' so this section grows to fill space, pushing Footer down */}
      <section className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
        <div className="grid gap-8">
          {disclaimers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2rem] hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-[#0B1C3D] mb-4">{item.title}</h2>
                  <p className="text-gray-500 leading-relaxed font-light text-base md:text-lg">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ⚠️ FINAL NOTICE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-10 bg-[#0B1C3D] rounded-[2.5rem] text-center"
        >
          <h3 className="text-white font-serif text-2xl mb-4">Investment Risk Acknowledgment</h3>
          <p className="text-gray-400 font-light text-sm max-w-2xl mx-auto leading-relaxed">
            By continuing to use this platform, you acknowledge that RealtyFM acts as a strategic bridge to the Indian real estate market, and ultimate investment decisions are the sole responsibility of the investor. 
          </p>
          <div className="mt-8 text-[10px] text-[#F5B300] font-bold uppercase tracking-widest">
            Last Reviewed & Audited: {lastReviewed}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}