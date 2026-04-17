"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Smartphone, 
  BarChart, 
  FileLock, 
  Wallet, 
  Zap,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

const features = [
  {
    title: "AI Valuation",
    desc: "Real-time property value tracking powered by local intelligence.",
    icon: <BarChart size={20} />,
  },
  {
    title: "Vault Management",
    desc: "Military-grade encryption for your documents & e-signing.",
    icon: <FileLock size={20} />,
  },
  {
    title: "Yield Dashboard",
    desc: "Global rental income tracking with multi-currency support.",
    icon: <Wallet size={20} />,
  },
  {
    title: "Tax Logic",
    desc: "Automated tax optimization for global NRI jurisdictions.",
    icon: <Zap size={20} />,
  }
];

export default function Technology() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
      className="relative py-24 md:py-32 overflow-hidden bg-[#0B1C3D] text-white"
    >
      {/* 🔮 FUTURISTIC BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F5B300] blur-[150px] rounded-full opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[150px] rounded-full opacity-10" />
      </div>

      {/* GRID MESH OVERLAY */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT: THE VISION */}
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-[#F5B300]/10 border border-[#F5B300]/20 rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F5B300] rounded-full animate-pulse" />
                    <span className="text-[10px] tracking-[0.3em] text-[#F5B300] font-black uppercase">
                        Future Roadmap
                    </span>
                </div>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
                The Intelligence <br /> 
                <span className="italic text-gray-400 font-light text-4xl md:text-6xl">In Your Palm.</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-400 text-lg font-light leading-relaxed max-w-xl mb-12">
                We are building the world's first AI-driven NRI real estate ecosystem. 
                Track, manage, and scale your Indian portfolio from anywhere on Earth.
              </motion.p>

              {/* FEATURES BENTO MINI-GRID */}
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#F5B300]/10 hover:border-[#F5B300]/30 transition-all duration-500">
                    <div className="text-[#F5B300] mb-4 transition-transform group-hover:scale-110">
                      {f.icon}
                    </div>
                    <h4 className="text-sm font-bold mb-1">{f.title}</h4>
                    <p className="text-[11px] text-gray-500 font-light leading-snug">{f.desc}</p>
                  </div>
                ))}
              </motion.div>

              <a href="#contact" className="inline-block">
  <motion.button 
    suppressHydrationWarning
    variants={itemVariants}
    whileHover={{ x: 10 }}
    whileTap={{ scale: 0.95 }}
    className="mt-12 flex items-center gap-4 bg-[#F5B300] text-[#0B1C3D] px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#F5B300]/20 transition-all cursor-pointer"
  >
    Join Private Beta <ChevronRight size={16} />
  </motion.button>
</a>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: THE DEVICE REVEAL */}
          <div className="lg:col-span-6 relative perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
              animate={isVisible ? { opacity: 1, rotateY: 0, rotateX: 0 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* GLOW EFFECT BEHIND PHONE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#F5B300]/30 blur-[100px] rounded-full" />

              <div className="relative z-10 p-4 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-2xl">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="overflow-hidden rounded-[2.2rem] shadow-inner"
                >
                  {/* REPLACE WITH YOUR APP SCREENSHOT OR MOCKUP */}
                  <img
                    src="/app-mockup.jpg"
                    alt="RealtyFM Mobile Interface"
                    className="w-[280px] md:w-[320px] object-contain"
                  />
                </motion.div>

                {/* FLOATING DATA OVERLAY */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-100"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Live Yield</p>
                    <p className="text-[#0B1C3D] font-bold text-lg">+12.4%</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute -left-12 bottom-1/4 bg-[#0B1C3D] p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
                >
                  <ShieldCheck className="text-[#F5B300]" size={24} />
                  <div>
                    <p className="text-white font-bold text-sm tracking-tight">Verified</p>
                    <p className="text-gray-500 text-[8px] uppercase">Asset Secured</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}