'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true' 
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) router.push('/admin/blogs');
    } catch (error) {
      console.error("Post failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Link href="/admin/blogs" className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-[#0A1629] transition-all">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-[#0A1629]">Compose Insight</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 ml-1">Article Headline</label>
            <input 
              required
              type="text" 
              placeholder="e.g., Why Noida International Airport is 2026's Top Global Corridor"
              className="w-full text-2xl font-bold text-[#0A1629] placeholder:text-gray-200 border-none outline-none focus:ring-0 p-0"
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 ml-1">Content Editor</label>
            <textarea 
              required
              placeholder="Start writing your deep-dive..."
              className="w-full min-h-[400px] text-gray-600 leading-relaxed border-none outline-none focus:ring-0 p-0 text-lg resize-none"
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#0A1629] text-white p-6 rounded-[24px] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-blue-900/20"
        >
          {loading ? "Publishing to Global Feed..." : "Publish Article"}
          <Sparkles size={18} className="text-[#EAB308]" />
        </button>
      </form>
    </div>
  );
}