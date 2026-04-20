'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Search, Filter, Home, Edit3, Trash2, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function PropertiesManager() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProperties() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/`, {
          headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        
        const data = await res.json();
        
        // Defensive Check: Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setProperties(data);
          setError(null);
        } else {
          console.error("Expected array but received:", data);
          setProperties([]); // Fallback to empty array to prevent .map crash
          setError("The server returned an unexpected format.");
        }
      } catch (err) {
        setError("Failed to connect to backend.");
      } finally {
        setLoading(false);
      }
    }
    getProperties();
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0A1629]">Property Inventory</h1>
          <p className="text-gray-500 mt-1 font-medium text-sm">
            Review and manage your real estate listings.
          </p>
        </div>
        <Link 
          href="/admin/properties/add" 
          className="bg-[#EAB308] text-black px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:shadow-xl transition-all active:scale-95"
        >
          <Plus size={20} strokeWidth={3} />
          New Property
        </Link>
      </div>

      {/* Control Bar */}
      <div className="flex gap-4 bg-white p-4 rounded-[28px] border border-gray-100 shadow-sm">
        <div className="flex-1 flex items-center bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 group focus-within:border-[#EAB308] transition-colors">
          <Search className="text-gray-400 mr-3" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, location, or type..." 
            className="bg-transparent border-none outline-none text-sm w-full font-medium" 
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-600 rounded-2xl border border-gray-100 text-sm font-bold hover:bg-gray-100 transition-colors">
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Main Table Content */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-8 py-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Property Details</th>
              <th className="px-8 py-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Location</th>
              <th className="px-8 py-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Pricing</th>
              <th className="px-8 py-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Management</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              // Skeleton Loading State
              [1, 2, 3, 4].map((n) => (
                <tr key={n} className="animate-pulse">
                  <td colSpan={4} className="px-8 py-10 bg-gray-50/10" />
                </tr>
              ))
            ) : properties.length > 0 ? (
              properties.map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-[#F8F9FA] rounded-[18px] flex items-center justify-center text-[#EAB308] border border-gray-100">
                        {item.image_url ? (
                          <img src={item.image_url} alt="" className="w-full h-full object-cover rounded-[18px]" />
                        ) : (
                          <Home size={22} />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-[#0A1629] text-base mb-0.5">{item.name}</p>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-tight">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-semibold text-gray-600">{item.location}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.property_type}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-[#0A1629]">{item.starting_price}</p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button className="p-2.5 text-gray-400 hover:text-[#0A1629] hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-gray-100 transition-all">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Empty State
              <tr>
                <td colSpan={4} className="px-8 py-24 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-50 p-4 rounded-full mb-4 text-gray-300">
                      <Home size={40} />
                    </div>
                    <p className="font-bold text-gray-900">{error || "No Properties Found"}</p>
                    <p className="text-gray-500 text-sm mt-1">Start by adding your first listing to the database.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}