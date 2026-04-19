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
    title: "DMIC Corridor",
    desc: "₹100 lakh crore mega project transforming India's real estate landscape.",
    icon: <Map />,
    tag: "National Impact"
  },
  {
    title: "Hyper-Connectivity",
    desc: "6 expressways and metro lines converging into one high-velocity corridor.",
    icon: <TrainFront />,
    tag: "Connectivity"
  },
  {
    title: "Smart City Mission",
    desc: "Government-backed urban transformation with world-class amenities.",
    icon: <BarChart3 />,
    tag: "Urban Evolution"
  },
  {
    title: "RERA Protection",
    desc: "Complete buyer protection with transparent, strictly regulated transactions.",
    icon: <ShieldCheck />,
    tag: "Investor Security"
  },
  {
    title: "Value Unlocking",
    desc: "Land appreciation driven by government-mandated infrastructure timelines.",
    icon: <Gem />,
    tag: "Wealth Creation"
  },
  {
    title: "NRI Tax Advantages",
    desc: "Significant tax benefits and seamless repatriation for overseas investors.",
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
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      // REDUCED: Section padding from py-32 to py-20
      className="py-16 md:py-20 overflow-hidden border-y border-gray-100"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER - Reduced bottom margin from mb-20 to mb-12 */}
        <div className="max-w-4xl mb-12">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            className="text-[10px] tracking-[0.4em] text-[#F5B300] mb-4 font-black uppercase"
          >
            Market Dynamics
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#0B1C3D] leading-tight mb-4 tracking-tight"
          >
            Six Catalysts. <span className="italic text-gray-400 font-light text-3xl md:text-4xl">One Window of Opportunity.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-2xl"
          >
            A convergence of policy and infrastructure created for the sophisticated investor.
          </motion.p>
        </div>

        {/* INTERACTIVE GRID - Reduced gap from 8 to 6 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {catalysts.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              // REDUCED: Card padding from p-10 to p-8. Rounded from 2.5rem to 2rem.
              className="relative group bg-white p-7 md:p-8 rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-500 hover:shadow-[#F5B300]/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5B300]/5 rounded-full blur-2xl -translate-y-12 translate-x-12" />

              {/* ICON BLOCK - Reduced from w-14 to w-12 */}
              <div className="w-12 h-12 rounded-xl bg-[#0B1C3D]/5 flex items-center justify-center text-[#0B1C3D] group-hover:bg-[#F5B300] transition-all duration-500 mb-6">
                {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { 
                  size: 22,
                  className: "transition-transform group-hover:scale-110" 
                })}
              </div>

              {/* TAG */}
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#F5B300] bg-[#F5B300]/10 px-2.5 py-1 rounded-full mb-3 inline-block">
                {item.tag}
              </span>

              {/* CONTENT */}
              <h3 className="font-serif text-xl text-[#0B1C3D] mb-3 group-hover:text-[#F5B300] transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light line-clamp-3">
                {item.desc}
              </p>

              {/* BOTTOM DETAIL - Tighter margin */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] font-bold text-[#0B1C3D] uppercase tracking-widest">Driver 0{i+1}</span>
                <div className="w-6 h-[1px] bg-[#F5B300]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}