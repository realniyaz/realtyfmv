"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Building2, CheckCircle2, X, MessageCircle, Send, Check } from "lucide-react";

const properties = [
  { id: 1, title: "Smartworld One DXP", location: "Dwarka Expressway, Sector 113", type: "Apartments", price: "₹1.85 Cr onwards", roi: "536%", tag: "Hot Selling", category: "buy", image: "/property-1.jpg" },
  { id: 2, title: "Krisumi Waterfall Residences", location: "Sector 36A, Gurgaon", type: "Luxury Apartments", price: "₹2.45 Cr onwards", roi: "210%", tag: "Premium", category: "featured", image: "/property-2.jpg" },
  { id: 3, title: "M3M Crown Sector 111", location: "Dwarka Expressway", type: "Luxury Residences", price: "₹3.20 Cr onwards", roi: "180%", tag: "New Launch", category: "buy", image: "/property-3.jpg" },
  { id: 4, title: "DLF Privana South", location: "Sector 76-77, Gurgaon", type: "Ultra-Luxury", price: "₹5.50 Cr onwards", roi: "165%", tag: "Ultra Luxury", category: "featured", image: "/property-4.jpg" },
  { id: 5, title: "Godrej Zenith", location: "Sector 89, New Gurgaon", type: "Commercial Hub", price: "₹85 Lakh onwards", roi: "145%", tag: "Commercial", category: "rent", image: "/property-5.jpg" },
  { id: 6, title: "Adani Samsara Vilasa", location: "Sector 63A, Gurgaon", type: "Exclusive Villas", price: "₹8.90 Cr onwards", roi: "190%", tag: "Ready to Move", category: "buy", image: "/property-6.jpg" },
];

export default function Properties() {
  const [active, setActive] = useState("all");
  const [selectedProp, setSelectedProp] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const filtered = active === "all" ? properties : properties.filter((p) => p.category === active);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedProp(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="bg-[#FAF9F6] py-0 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] tracking-[0.4em] text-[#F5B300] mb-3 font-black uppercase italic"
            >
              Curated Portfolio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-[#0B1C3D] leading-tight font-bold"
            >
              Premium Investment <br />
              <span className="italic text-gray-400 font-light">Opportunities</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm font-light italic md:text-right leading-relaxed max-w-sm"
          >
            A bespoke selection of North India&apos;s highest appreciating assets.
          </motion.p>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {["all", "buy", "rent", "featured"].map((tab) => (
            <button suppressHydrationWarning
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-7 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                active === tab
                  ? "bg-[#0B1C3D] text-white border-[#0B1C3D] shadow-lg"
                  : "bg-white text-gray-400 border-gray-100 hover:text-[#F5B300]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROPERTY GRID - Fixed spacing and responsiveness */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0B1C3D] text-[9px] font-black px-3 py-1.5 rounded-full uppercase italic shadow-sm">{item.tag}</div>
                  <div className="absolute bottom-4 right-4 bg-[#0B1C3D]/90 backdrop-blur-md text-[#F5B300] text-[9px] font-bold px-3 py-1.5 rounded-lg italic tracking-widest">ROI {item.roi}</div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0B1C3D] group-hover:text-[#F5B300] transition-colors duration-300 leading-tight mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-2 mb-auto pb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                      <MapPin size={12} className="text-[#F5B300] flex-shrink-0" /> 
                      <span className="truncate">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                      <Building2 size={12} className="text-[#F5B300] flex-shrink-0" /> 
                      <span>{item.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-5 border-t border-gray-50">
                    <div className="flex justify-between items-end">
                       <div className="flex flex-col">
                          <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest leading-none">Starting At</p>
                          <p className="font-bold text-[#0B1C3D] text-lg italic leading-none tabular-nums">{item.price}</p>
                       </div>
                       <button 
                        onClick={() => setSelectedProp(item)}
                        className="bg-white text-[#0B1C3D] border-2 border-[#F5B300] px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#0B1C3D] hover:border-[#0B1C3D] hover:text-[#F5B300] transition-all flex items-center gap-2 shadow-sm active:scale-95 whitespace-nowrap"
                      >
                        Get Details Now
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* POP-UP MODAL FORM */}
      <AnimatePresence>
        {selectedProp && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-[#0B1C3D]/80 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <button onClick={() => setSelectedProp(null)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#0B1C3D] z-10 transition-colors"><X size={24} /></button>
              
              <div className="p-8 md:p-12">
                <span className="text-[#F5B300] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block italic">Strategic Inquiry</span>
                <h3 className="font-serif text-3xl font-bold text-[#0B1C3D] mb-4">{selectedProp.title}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required type="text" placeholder="Full Name" className="w-full bg-[#FAF9F6] border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-[#F5B300] transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#FAF9F6] border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-[#F5B300] transition-colors" />
                  
                  <button 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 ${
                      isSuccess ? "bg-green-600 text-white scale-[1.02]" : "bg-[#0B1C3D] text-[#F5B300] hover:bg-[#0B1C3D]/90"
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <Send size={16} />
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2">
                        <Check size={18} strokeWidth={3} />
                        Details shared successfully
                      </motion.div>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>

                <div className="mt-8 flex flex-col items-center gap-5">
  {/* Elegant Separator Line */}
  <div className="w-full h-[1px] bg-gray-100 relative">
    <span className="absolute left-1/2 -top-2 -translate-x-1/2 bg-white px-3 text-[9px] text-gray-400 uppercase tracking-widest font-bold">
      Direct Access
    </span>
  </div>

  {/* Premium WhatsApp Button */}
  <a 
    href="https://wa.me/919899152327" 
    target="_blank"
    rel="noopener noreferrer"
    className="w-full group bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-[#25d366]/20 active:scale-[0.98]"
  >
    <motion.div
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <MessageCircle size={20} fill="currentColor" stroke="none" />
    </motion.div>
    
    <span className="font-bold text-sm uppercase tracking-wider">
      WhatsApp Us
    </span>
    
    {/* Subtle status indicator */}
    <div className="flex items-center gap-1.5 ml-1 opacity-80">
      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      <span className="text-[10px] font-medium uppercase tracking-tighter">Online</span>
    </div>
  </a>
</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}