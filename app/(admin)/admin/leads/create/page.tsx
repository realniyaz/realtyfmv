"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, UserPlus, Phone, Mail, MessageSquare, 
  Send, CheckCircle2, Loader2, AlertCircle, ShieldCheck, Clock
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreateLeadPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");
    const fullUrl = `${baseUrl}/leads/`; 

    try {
      const res = await fetch(fullUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'ngrok-skip-browser-warning': 'true' 
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => router.push('/admin/leads'), 1500);
      } else {
        const data = await res.json();
        setError(data.detail?.[0]?.msg || data.detail || "Validation failed.");
      }
    } catch (err) {
      setError("Server unreachable. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-12 space-y-12 min-h-screen bg-[#FDFDFD]">
      
      {/* 🏛️ BREADCRUMB & TITLE */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <Link 
          href="/admin/leads" 
          className="w-14 h-14 flex items-center justify-center bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-[#0B1C3D] hover:shadow-2xl transition-all duration-500"
        >
          <ArrowLeft size={24} />
        </Link>
        <div className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-serif text-[#0B1C3D] tracking-tight">
            Lead <span className="italic font-light text-gray-300">Registration</span>
          </h1>
          <p className="text-sm text-gray-400 font-light tracking-wide uppercase">Add a new investor to your global pipeline</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* 📝 FORM COLUMN */}
        <div className="lg:col-span-3">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit} 
            className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-gray-50 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.06)] space-y-10 relative overflow-hidden"
          >
            <AnimatePresence>
              {success && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="absolute inset-0 z-10 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-serif text-[#0B1C3D] mb-2">Record Finalized</h3>
                  <p className="text-gray-400 font-light">Lead successfully synced with database.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="p-5 bg-red-50 border border-red-100 rounded-[1.5rem] flex items-center gap-4 text-red-600 text-xs font-black uppercase tracking-widest"
              >
                <AlertCircle size={20} />
                {error}
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* FIXED: Explicitly typed 'v' as string */}
              <PremiumInput 
                label="Identity" 
                icon={<UserPlus size={20}/>} 
                placeholder="Full Legal Name" 
                value={formData.name} 
                onChange={(v: string) => setFormData({...formData, name: v})} 
              />
              <PremiumInput 
                label="Contact" 
                icon={<Phone size={20}/>} 
                placeholder="+91..." 
                value={formData.phone} 
                onChange={(v: string) => setFormData({...formData, phone: v})} 
              />
            </div>

            <PremiumInput 
              label="Email Address" 
              type="email" 
              icon={<Mail size={20}/>} 
              placeholder="investor@example.com" 
              value={formData.email} 
              onChange={(v: string) => setFormData({...formData, email: v})} 
            />

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0B1C3D]/30 ml-2">Notes & Requirements</label>
              <div className="relative group">
                <MessageSquare className="absolute left-6 top-6 text-gray-300 group-focus-within:text-[#F5B300] transition-colors" size={20} />
                <textarea 
                  required 
                  placeholder="Summarize the client's investment criteria..."
                  className="w-full p-6 pl-16 bg-[#FAF9F6] rounded-[2.5rem] border-2 border-transparent outline-none h-48 resize-none text-md font-medium text-[#0B1C3D] focus:bg-white focus:border-[#F5B300]/20 focus:ring-4 ring-[#F5B300]/5 transition-all duration-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || success}
              className="w-full bg-[#0B1C3D] text-white p-7 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-[#F5B300] hover:shadow-2xl hover:shadow-[#F5B300]/30 transition-all duration-500 active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Authorize Entry"}
              {!loading && !success && <Send size={18} />}
            </button>
          </motion.form>
        </div>

        {/* 💡 SIDEBAR */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0B1C3D] p-12 rounded-[3.5rem] text-white space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B300]/10 rounded-full blur-3xl" />
            <ShieldCheck size={40} className="text-[#F5B300]" />
            <div className="space-y-4">
              <h3 className="font-serif text-3xl">Quality Assurance</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Manually added leads are prioritized in the <span className="text-white font-medium">New Inquiries</span> filter.
              </p>
            </div>
            <div className="pt-8 border-t border-white/10 space-y-4">
              {['End-to-end Encryption', 'Unique ID Generation', 'Audit Log Entry'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#F5B300]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5B300]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-white flex items-center gap-6">
             <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#F5B300]">
               <Clock size={24} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Average Sync Time</p>
               <p className="text-xl font-serif text-[#0B1C3D]">Instantaneous</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🧩 FIXED: Added proper TypeScript interface for PremiumInput
interface PremiumInputProps {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}

function PremiumInput({ label, icon, placeholder, value, onChange, type = "text" }: PremiumInputProps) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0B1C3D]/30 ml-2">{label}</label>
      <div className="relative group">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#F5B300] transition-colors duration-500">
          {icon}
        </div>
        <input 
          required 
          type={type} 
          placeholder={placeholder}
          value={value}
          className="w-full p-6 pl-16 bg-[#FAF9F6] rounded-[2.5rem] border-2 border-transparent outline-none text-md font-medium text-[#0B1C3D] placeholder:text-gray-300 focus:bg-white focus:border-[#F5B300]/20 focus:ring-4 ring-[#F5B300]/5 transition-all duration-500"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}