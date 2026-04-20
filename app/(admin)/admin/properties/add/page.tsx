'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Link as LinkIcon, Info } from 'lucide-react';
import Link from 'next/link';

export default function AddPropertyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "Residential", // Default values matching schema
    name: "",
    location: "",
    property_type: "Apartment",
    starting_price: "",
    description: "",
    image_url: "" 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true' 
        },
        body: JSON.stringify(formData), // Sending the exact schema
      });

      if (res.ok) {
        router.push('/admin/properties'); // Return to list view after success
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/properties" className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-[#0A1629] transition-all shadow-sm">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#0A1629]">Create New Listing</h1>
          <p className="text-sm text-gray-500 font-medium">Add property details to the NRICRM database.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Basic Info */}
        <div className="space-y-6 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Property Name</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. Godrej Woods"
              className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium text-[#0A1629]"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Category</label>
              <select 
                className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium"
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Plots">Plots</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Price Range</label>
              <input 
                required 
                type="text" 
                placeholder="₹1.25 Cr onwards"
                className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium"
                onChange={(e) => setFormData({...formData, starting_price: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Location</label>
            <input 
              required 
              type="text" 
              placeholder="Sector 150, Noida"
              className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium"
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
        </div>

        {/* Right Column: Media & Description */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Media URL</label>
                <div className="group relative cursor-help">
                  <Info size={14} className="text-gray-300" />
                  <span className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-[#0A1629] text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Paste the direct image link from your Hostinger storage here.
                  </span>
                </div>
              </div>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  required 
                  type="text" 
                  placeholder="https://realtyfm.in/assets/img.jpg"
                  className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium text-blue-600"
                  onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Description</label>
              <textarea 
                required 
                placeholder="Highlight key amenities and project USPs..."
                className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 ring-[#EAB308]/20 transition-all font-medium h-[152px] resize-none"
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#EAB308] text-[#0A1629] p-5 rounded-[24px] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? "Syncing Database..." : "Publish Listing"}
            {!loading && <Send size={18} />}
          </button>
        </div>
      </form>
    </div>
  );
}