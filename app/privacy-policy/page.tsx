"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Realtyfm',
  description: 'Your data security is our priority. Read the Realtyfm Privacy Policy to learn how we protect, encrypt, and manage your personal and investment information.',
  openGraph: {
    title: 'Privacy Policy | Realtyfm',
    description: 'How Realtyfm handles and secures your investment data.',
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "April 15, 2026";

  const sections = [
    {
      title: "Data Collection",
      icon: <Eye className="text-[#F5B300]" size={20} />,
      content: "We collect information you provide directly to us when you request an investment report, book a consultation, or sign up for our 'Intelligence' guides. This includes your name, email address, phone number, and investment preferences."
    },
    {
      title: "How We Use Your Data",
      icon: <FileText className="text-[#F5B300]" size={20} />,
      content: "Your data is used specifically to provide personalized real estate advisory, conduct corridor analysis, and facilitate compliant transactions under FEMA regulations. We do not sell your personal data to third-party advertisers."
    },
    {
      title: "Institutional Security",
      icon: <Lock className="text-[#F5B300]" size={20} />,
      content: "We implement industry-standard encryption and security protocols to protect your investment profiles. Access to your data is strictly limited to authorized RealtyFM strategists assisting with your portfolio."
    },
    {
      title: "Cookies & Analytics",
      icon: <ShieldCheck className="text-[#F5B300]" size={20} />,
      content: "We use essential cookies to enhance your experience on our platform. Analytical data is anonymized and used solely to improve our corridor reporting and user interface."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] font-sans">
      <Navbar/>
      {/* 🏛️ HEADER SECTION */}
      <section className="bg-[#0B1C3D] pt-44 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,179,0,0.05),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F5B300] text-xs font-bold uppercase tracking-widest mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            Privacy <span className="italic text-gray-400 font-light">Protocol</span>
          </motion.h1>
          
          <p className="text-gray-400 text-lg font-light">
            Last updated: {lastUpdated} • Compliance: GDPR, CCPA & IT Act 2000
          </p>
        </div>
      </section>

      {/* 📄 CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-gray-200/50 border border-gray-100">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
              At RealtyFM, we understand that investment data is a matter of profound trust. This Privacy Protocol outlines our rigorous commitment to safeguarding the personal and financial information of our global NRI clientele.
            </p>

            <div className="grid gap-12">
              {sections.map((section, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] flex items-center justify-center border border-gray-100 group-hover:bg-[#F5B300]/10 transition-colors">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#0B1C3D]">{section.title}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed font-light pl-14">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <hr className="my-16 border-gray-100" />

            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-100">
              <h3 className="font-serif text-xl font-bold text-[#0B1C3D] mb-4">Contact our Compliance Desk</h3>
              <p className="text-gray-500 text-sm mb-6 font-light">
                For queries regarding data portability, deletion, or specific FEMA compliance privacy, reach out to our legal department.
              </p>
              <a 
                href="mailto:info@realtyfm.com" 
                className="text-[#0B1C3D] font-bold text-sm underline decoration-[#F5B300] underline-offset-8 hover:text-[#F5B300] transition-all"
              >
                info@realtyfm.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}