'use client';

import React, { useEffect, useState } from 'react';
import { Plus, BookOpen, Trash2, Calendar, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogsManager() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch function
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/`, {
        headers: { 'ngrok-skip-browser-warning': 'true' }
      });
      const data = await res.json();
      if (Array.isArray(data)) setBlogs(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  // 2. Delete function
  const deleteBlog = async (id: number) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: { 'ngrok-skip-browser-warning': 'true' }
      });

      if (res.ok) {
        // Remove from UI immediately
        setBlogs(blogs.filter(blog => blog.id !== id));
      }
    } catch (err) {
      alert("Failed to delete article");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0A1629]">Strategic Insights</h1>
          <p className="text-gray-500 mt-1 font-medium text-sm">Manage educational content and market reports for NRIs.</p>
        </div>
        <Link 
          href="/admin/blogs/create" 
          className="bg-[#EAB308] text-black px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:shadow-xl transition-all"
        >
          <Plus size={20} />
          Create Article
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [1, 2, 3].map(i => <div key={i} className="h-64 bg-white rounded-[40px] animate-pulse border border-gray-100" />)
        ) : blogs.length > 0 ? (
          blogs.map((blog: any) => (
            <div key={blog.id} className="group bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-yellow-50 p-3 rounded-2xl text-[#EAB308]">
                  <BookOpen size={20} />
                </div>
                {/* DELETE BUTTON */}
                <button 
                  onClick={() => deleteBlog(blog.id)}
                  className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-[#0A1629] leading-tight mb-4 line-clamp-2">
                {blog.title}
              </h3>

              <div className="mt-auto flex items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                <Calendar size={14} />
                <span>Published in 2026</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 bg-white rounded-[40px] border border-dashed border-gray-200 text-center">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <BookOpen className="text-gray-300" />
            </div>
            <p className="text-gray-900 font-bold">No live articles found</p>
            <p className="text-gray-400 text-sm mt-1 max-w-xs mx-auto">
              Any articles you hardcoded on the frontend won't show here. Create your first live article now!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}