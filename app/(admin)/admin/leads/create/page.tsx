'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserPlus, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';

export default function CreateLeadPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads/`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true' 
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/leads');
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.detail[0].msg || "Check your inputs"}`);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/leads" className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-[#0A1629] transition-all shadow-sm">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#0A1629]">Add Manual Lead</h1>
          <p className="text-sm text-gray-500 font-medium">Capture inquiries from offline channels or phone calls.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
            <div className="relative">
              <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                required 
                type="text" 
                placeholder="e.g. Sachin Maurya"
                className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                required 
                type="tel" 
                placeholder="+91 98765-43210"
                className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              required 
              type="email" 
              placeholder="sachin@example.com"
              className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Requirement / Notes</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-gray-300" size={18} />
            <textarea 
              required 
              placeholder="Interested in 3BHK flats in Noida Sector 150..."
              className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium h-32 resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#EAB308] text-[#0A1629] p-5 rounded-[24px] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? "Registering Prospect..." : "Save Lead"}
          {!loading && <Send size={18} />}
        </button>
      </form>
    </div>
  );
}