"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  BarChart3, 
  TrainFront, 
  Map, 
  ShieldCheck, 
  Gem, 
  Zap,
  LucideProps
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const catalysts = [
  {
    title: "Delhi-Mumbai Industrial Corridor",
    desc: "₹100 lakh crore mega infrastructure project transforming India's real estate landscape.",
    icon: <Map />,
    tag: "National Impact"
  },
  {
    title: "Rapid Metro & Expressway",
    desc: "6 expressways and metro lines converging into one high-velocity investment corridor.",
    icon: <TrainFront />,
    tag: "Hyper-Connectivity"
  },
  {
    title: "Smart City Mission",
    desc: "Government-backed urban transformation with sustainable, world-class amenities.",
    icon: <BarChart3 />,
    tag: "Urban Evolution"
  },
  {
    title: "RERA Protection",
    desc: "Complete buyer protection with transparent, strictly regulated real estate transactions.",
    icon: <ShieldCheck />,
    tag: "Investor Security"
  },
  {
    title: "Value Unlocking",
    desc: "Massive land appreciation driven by government-mandated infrastructure completion timelines.",
    icon: <Gem />,
    tag: "Wealth Creation"
  },
  {
    title: "NRI Tax Advantages",
    desc: "Significant tax benefits and seamless repatriation for overseas Indian investors.",
    icon: <Zap />,
    tag: "Fiscal Benefit"
  },
];

export default function Catalysts() {
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
        
        {/* HEADER */}
        <div className="max-w-4xl mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="text-[11px] tracking-[0.5em] text-[#F5B300] mb-6 font-black uppercase"
          >
            Market Dynamics
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-[#0B1C3D] leading-[1.1] mb-8 tracking-tight"
          >
            Six Catalysts. One Corridor. <br />
            <span className="italic text-gray-400 font-light">One Window of Opportunity.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            A rare convergence of central government policy, local infrastructure, 
            and perfect market timing created for the sophisticated investor.
          </motion.p>
        </div>

        {/* INTERACTIVE GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {catalysts.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-500 hover:shadow-[#F5B300]/10 overflow-hidden"
            >
              {/* Decorative Accent Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B300]/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-[#F5B300]/10 transition-colors duration-500" />

              {/* ICON BLOCK - Fixed TS Error 2769 */}
              <div className="w-14 h-14 rounded-2xl bg-[#0B1C3D]/5 flex items-center justify-center text-[#0B1C3D] group-hover:bg-[#F5B300] group-hover:text-[#0B1C3D] transition-all duration-500 mb-8">
                {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { 
                  size: 28,
                  className: "transition-transform group-hover:scale-110" 
                })}
              </div>

              {/* TAG */}
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F5B300] bg-[#F5B300]/10 px-3 py-1 rounded-full mb-4 inline-block">
                {item.tag}
              </span>

              {/* CONTENT */}
              <h3 className="font-serif text-2xl text-[#0B1C3D] mb-4 group-hover:text-[#F5B300] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>

              {/* BOTTOM DETAIL */}
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold text-[#0B1C3D] uppercase tracking-widest">Market Driver 0{i+1}</span>
                <div className="w-8 h-[1px] bg-[#F5B300]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}