"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Calendar, Search, ShieldCheck, Activity, LucideProps } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const steps = [
  {
    title: "Discovery Call",
    desc: "Share your investment goals, budget, and timeline. We analyze your profile and recommend the best corridors and projects.",
    tag: "30 min call",
    icon: <Calendar />,
  },
  {
    title: "Due Diligence & Selection",
    desc: "We present RERA-verified options with detailed corridor analysis, projected ROI models, and risk assessments.",
    tag: "3–5 days",
    icon: <Search />,
  },
  {
    title: "Investment Execution",
    desc: "We handle all paperwork — from booking to registration, FEMA compliance, and payment structuring for NRIs.",
    tag: "2–4 weeks",
    icon: <ShieldCheck />,
  },
  {
    title: "Post-Investment Management",
    desc: "Ongoing portfolio tracking, tenant management, maintenance coordination, and quarterly value reports.",
    tag: "Ongoing",
    icon: <Activity />,
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-24 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT SIDE: CONTENT & TIMELINE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className="text-[11px] tracking-[0.4em] text-[#F5B300] mb-4 font-black uppercase">
            Investment Process
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-6xl text-[#0B1C3D] mb-8 leading-tight">
            How It Works
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-500 text-lg mb-12 max-w-lg font-light leading-relaxed">
            From your first call to property possession — we handle the complexity 
            while you build wealth from anywhere in the world.
          </motion.p>

          <div className="relative space-y-12">
            <div className="absolute left-[23px] top-2 bottom-2 w-[1px] bg-gray-200 hidden md:block" />

            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="relative flex flex-col md:flex-row gap-6 group"
              >
                <div className="relative z-10 w-12 h-12 shrink-0 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#F5B300] shadow-sm group-hover:bg-[#F5B300] group-hover:text-white transition-all duration-500">
                  {React.cloneElement(step.icon as React.ReactElement<LucideProps>, { size: 20 })}
                </div>

                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="font-serif text-xl text-[#0B1C3D] font-bold">
                      {step.title}
                    </h4>
                    <span className="text-[9px] uppercase tracking-widest bg-[#F5B300]/10 text-[#F5B300] px-2 py-0.5 rounded font-black">
                      {step.tag}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed max-w-md font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="inline-block">
  <motion.button 
    suppressHydrationWarning // Prevents the Edge browser hydration error
    variants={itemVariants}
    className="mt-14 bg-[#F5B300] text-[#0B1C3D] px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl shadow-[#F5B300]/20 hover:brightness-110 transition-all text-xs uppercase tracking-widest active:scale-95"
  >
    Start Your Journey <ArrowRight size={16} />
  </motion.button>
</a>
        </motion.div>

        {/* RIGHT SIDE: VISUALS (ANIMATED LIKE THE IMAGE) */}
        <div className="relative mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-[1.5rem] overflow-hidden shadow-xl"
          >
            <img
              src="/consultation.jpg"
              alt="NRI Consultation"
              className="w-full h-[450px] md:h-[550px] object-cover"
            />
            
            {/* FLOATING WHITE STATS CARD (Matching the image) */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/20"
            >
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {[
                  { val: "48hrs", label: "Report Delivery" },
                  { val: "100%", label: "Remote Process" },
                  { val: "0", label: "Visits Needed" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <p className="text-[#F5B300] text-lg md:text-2xl font-serif font-bold leading-none">
                      {stat.val}
                    </p>
                    <p className="text-gray-500 text-[8px] md:text-[10px] font-medium mt-2 leading-tight uppercase tracking-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Glow */}
          <div className="absolute -z-10 -top-10 -right-10 w-48 h-48 bg-[#F5B300] opacity-[0.08] blur-[80px] rounded-full" />
        </div>

      </div>
    </section>
  );
}