'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Added missing import
import { 
  Search, Filter, Phone, Mail, MessageSquare, 
  Plus, Users, Trash2, Clock, CheckCircle2 // Added Plus
} from 'lucide-react';

export default function LeadsManager() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const fetchLeads = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads/`, {
        headers: { 'ngrok-skip-browser-warning': 'true' }
      });
      const data = await res.json();
      if (Array.isArray(data)) setLeads(data);
    } catch (err) {
      console.error("Leads Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLeads(); }, []);

  const updateStatus = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) fetchLeads();
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  const deleteLead = async (id: number) => {
    if (!confirm("Are you sure you want to remove this lead?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads/${id}`, {
        method: 'DELETE',
        headers: { 'ngrok-skip-browser-warning': 'true' }
      });
      if (res.ok) setLeads(leads.filter(l => l.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* 1. Improved Single Header Row */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#0A1629] tracking-tight">Leads Pipeline</h1>
          <div className="flex items-center gap-3 mt-1">
             <p className="text-gray-500 font-medium text-sm">Manage inquiries and schedule follow-ups for 2026.</p>
             <div className="h-1 w-1 rounded-full bg-gray-300" />
             <span className="text-[11px] font-black uppercase text-[#EAB308] tracking-widest bg-yellow-50 px-2 py-0.5 rounded-md">
                {leads.length} Total Prospects
             </span>
          </div>
        </div>
        <Link 
          href="/admin/leads/create" 
          className="bg-[#EAB308] text-[#0A1629] px-6 py-4 rounded-[22px] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:shadow-xl hover:shadow-yellow-500/10 transition-all active:scale-[0.98]"
        >
          <Plus size={18} strokeWidth={3} />
          Manual Entry
        </Link>
      </div>

      {/* 2. Control Bar */}
      <div className="flex gap-4 bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm">
        <div className="flex-1 flex items-center bg-gray-50 px-5 py-3.5 rounded-2xl group focus-within:ring-2 ring-[#EAB308]/20 transition-all">
          <Search className="text-gray-400 mr-3" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, email or requirement..." 
            className="bg-transparent border-none outline-none text-sm w-full font-medium text-[#0A1629] placeholder:text-gray-300" 
          />
        </div>
        <button className="px-6 py-3 bg-gray-50 text-gray-500 rounded-2xl border border-gray-100 text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center gap-2">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* 3. Improved Leads Table */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[2px]">Prospect Information</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[2px]">Requirements</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[2px]">Status</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[2px] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              [1, 2, 3].map(i => <tr key={i} className="animate-pulse h-24 bg-gray-50/10" />)
            ) : leads.length > 0 ? (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50/30 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0A1629] text-[#EAB308] rounded-[18px] flex items-center justify-center font-bold text-sm shadow-inner">
                        {lead.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#0A1629] text-base leading-tight">{lead.name}</p>
                        <div className="flex gap-3 mt-1.5">
                          <a href={`mailto:${lead.email}`} className="text-gray-300 hover:text-blue-500 transition-colors"><Mail size={13} /></a>
                          <a href={`tel:${lead.phone}`} className="text-gray-300 hover:text-green-500 transition-colors"><Phone size={13} /></a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 max-w-[320px]">
                    <p className="text-sm text-gray-500 line-clamp-2 font-medium leading-relaxed">
                      {lead.message || 'No specific requirement mentioned.'}
                    </p>
                    {lead.follow_up_date && (
                      <div className="flex items-center gap-1.5 mt-2.5 text-[10px] font-black text-orange-500 bg-orange-50 w-fit px-2 py-1 rounded-lg uppercase tracking-tighter">
                        <Clock size={10} strokeWidth={3} /> {new Date(lead.follow_up_date).toLocaleDateString()}
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6">
                    <select 
                      value={lead.status || 'New'}
                      disabled={updatingId === lead.id}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className={`text-[10px] font-black uppercase tracking-[1.5px] px-4 py-2 rounded-full border-none outline-none cursor-pointer shadow-sm transition-all ${
                        lead.status === 'Closed' ? 'bg-green-100 text-green-700' : 
                        lead.status === 'Negotiating' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <option value="New">New Lead</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Negotiating">Negotiating</option>
                      <option value="Closed">Closed / Client</option>
                    </select>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <button className="p-2.5 text-gray-400 hover:text-[#0A1629] hover:bg-white rounded-xl border border-transparent hover:border-gray-100 transition-all shadow-sm">
                        <MessageSquare size={18} />
                      </button>
                      <button 
                        onClick={() => deleteLead(lead.id)}
                        className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-8 py-20 text-center">
                  <div className="flex flex-col items-center">
                     <div className="bg-gray-50 p-4 rounded-full mb-3 text-gray-300"><Users size={32} /></div>
                     <p className="font-bold text-gray-900">Pipeline is Empty</p>
                     <p className="text-gray-400 text-sm">Waiting for new leads from Realtyfm.in</p>
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