"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Gavel, ShieldAlert, Globe, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const lastUpdated = "April 15, 2026";

  const terms = [
    {
      id: "advisory",
      title: "Nature of Advisory",
      icon: <Scale className="text-[#F5B300]" size={22} />,
      content: "RealtyFM operates as a specialized real estate advisory platform for NRIs. While we provide high-fidelity corridor analysis and ROI projections based on government data, real estate investments carry market risks. Our reports are intended for informational and advisory purposes to assist in informed decision-making."
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      icon: <Globe className="text-[#F5B300]" size={22} />,
      content: "All transactions facilitated through our platform must comply with the Foreign Exchange Management Act (FEMA) and RERA guidelines. Users are responsible for ensuring their NRE/NRO account status is active and compliant with the latest Reserve Bank of India (RBI) circulars regarding immovable property acquisition."
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <CheckCircle2 className="text-[#F5B300]" size={22} />,
      content: "The custom Market Signals, Corridor ROI charts, and proprietary Investment Reports provided by RealtyFM are the exclusive property of our firm. They are licensed to the user for personal investment evaluation and may not be redistributed or used for commercial purposes without explicit authorization."
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      icon: <ShieldAlert className="text-[#F5B300]" size={22} />,
      content: "RealtyFM shall not be held liable for fluctuations in property valuations caused by shifts in market sentiment, changes in government infrastructure timelines, or global economic conditions. We act as facilitators and strategists to mitigate risk, not as guarantors of specific future returns."
    },
    {
      id: "dispute",
      title: "Governing Law",
      icon: <Gavel className="text-[#F5B300]" size={22} />,
      content: "These terms are governed by the laws of the Republic of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in Delhi/NCR, where our primary operations are based."
    }
  ];

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-24 font-sans">
      {/* 🏙️ HERO SECTION */}
      <section className="bg-[#0B1C3D] pt-44 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,179,0,0.08),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F5B300] text-xs font-bold uppercase tracking-[0.3em] mb-12 hover:tracking-[0.4em] transition-all">
            <ArrowLeft size={16} /> Return to Dashboard
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8"
          >
            Terms of <span className="italic text-[#F5B300] font-light">Engagement</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 font-light tracking-wide">
            <span>Effective Date: {lastUpdated}</span>
            <span className="hidden md:block text-[#F5B300]">•</span>
            <span>Version 4.2 Corporate</span>
          </div>
        </div>
      </section>

      {/* 📄 TERMS CONTENT */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
          
          <div className="grid lg:grid-cols-12">
            
            {/* Sidebar (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-4 bg-[#FAF9F6] p-12 border-r border-gray-100">
              <h3 className="text-[#0B1C3D] font-bold text-xs uppercase tracking-widest mb-8">Table of Contents</h3>
              <nav className="space-y-6">
                {terms.map((t) => (
                  <a 
                    key={t.id} 
                    href={`#${t.id}`}
                    className="block text-sm text-gray-500 hover:text-[#F5B300] transition-colors font-medium"
                  >
                    {t.title}
                  </a>
                ))}
              </nav>
              
              <div className="mt-20 p-6 bg-[#0B1C3D] rounded-2xl">
                <p className="text-white text-xs font-bold leading-relaxed">
                  Contact Us
                </p>
                <button className="mt-4 text-[#F5B300] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  +91 9899152327 <ArrowLeft className="rotate-180" size={12} />
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-8 p-8 md:p-16">
              <div className="prose prose-slate max-w-none">
                <p className="text-[#0B1C3D] text-xl font-serif leading-relaxed mb-12 italic border-l-4 border-[#F5B300] pl-6">
                  "Our goal is to create a transparent, legally sound corridor for NRI capital into high-growth Indian real estate."
                </p>

                <div className="space-y-16">
                  {terms.map((section, index) => (
                    <motion.div 
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="scroll-mt-32"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white shadow-sm border border-gray-100 rounded-xl">
                          {section.icon}
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-[#0B1C3D]">
                          {index + 1}. {section.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light text-lg">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Final Acceptance Note */}
                <div className="mt-20 pt-12 border-t border-gray-100">
                  <p className="text-gray-400 text-sm font-light leading-relaxed italic">
                    By accessing the RealtyFM platform, requesting reports, or engaging in consultation, you acknowledge that you have read, understood, and agreed to these Terms of Engagement. These terms are subject to periodic updates to reflect changing regulatory landscapes in India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}