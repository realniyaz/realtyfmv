"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MessageCircle, UserPlus, RefreshCw, X, 
  Phone, Trash2, Edit2, ChevronDown, Check, 
  ArrowUpRight, Mail, Calendar, MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';

const STATUS_OPTIONS = ["New", "Contacted", "Qualified", "Lost"];

export default function LeadManagementSystem() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Use the exact environment variable and ensure trailing slashes are handled
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

  // --- 🛠️ API INTEGRATIONS ---

  // 1. [GET] Fetch leads from /leads/ (Corrected path)
  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      // Added ngrok header to bypass the warning page if you're using ngrok
      const res = await fetch(`${baseUrl}/leads/`, {
        headers: { 
            'ngrok-skip-browser-warning': 'true',
            'Accept': 'application/json'
        }
      });
      const data = await res.json();
      // Ensure we set an array even if the API response is nested
      setLeads(Array.isArray(data) ? data : data.results || []);
    } catch (err) { 
      console.error("Fetch Error:", err); 
    } finally { 
      setLoading(false); 
    }
  }, [baseUrl]);

  // 2. [PUT] Update Lead (Status/Notes)
  const handleUpdate = async (id: string, payload: object) => {
    try {
      const res = await fetch(`${baseUrl}/leads/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        fetchLeads();
        setOpenDropdown(null);
        if (selectedLead?.id === id) {
          const updated = await res.json();
          setSelectedLead(updated);
        }
      }
    } catch (err) { console.error("Update Error:", err); }
  };

  // 3. [DELETE] Delete Lead
  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("Confirm permanent deletion?")) return;
    try {
      const res = await fetch(`${baseUrl}/leads/${id}/`, { method: 'DELETE' });
      if (res.ok) {
        fetchLeads();
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) { console.error("Delete Error:", err); }
  };

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const filteredLeads = leads.filter(l => {
    const matchesSearch = (l.name?.toLowerCase().includes(searchTerm.toLowerCase())) || (l.phone?.includes(searchTerm));
    const matchesFilter = activeFilter === 'All' || l.status?.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FB] p-6 md:p-10 font-sans text-[#1A1C1E]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">Leads Registry</h1>
            <p className="text-sm text-slate-400 font-medium">Monitoring {leads.length} active prospects</p>
          </div>
          <div className="flex gap-3">
            <button onClick={fetchLeads} className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-500 shadow-sm">
               <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
            </button>
            <Link 
              href="/admin/leads/create"
              className="bg-[#0F172A] text-white px-8 py-3.5 rounded-2xl flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200"
            >
              <UserPlus size={18} /> New Entry
            </Link>
          </div>
        </div>

        {/* --- SEARCH & FILTERS --- */}
        <div className="bg-white p-3 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or connection..." 
              className="w-full pl-14 pr-6 py-4 bg-transparent outline-none text-sm font-medium placeholder:text-slate-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-50 rounded-2xl">
            {['All', ...STATUS_OPTIONS].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${activeFilter === tab ? 'bg-white text-[#0F172A] shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- DATA TABLE --- */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-visible">
          <table className="w-full text-left">
            <thead className="bg-[#FAFBFD] border-b border-slate-100">
              <tr>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Prospect</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-10 py-20 text-center text-slate-400 font-medium italic">
                    {loading ? "Decrypting registry..." : "No leads found in the database."}
                  </td>
                </tr>
              ) : filteredLeads.map((lead) => (
                <tr 
                  key={lead.id} 
                  onClick={() => setSelectedLead(lead)}
                  className="group hover:bg-slate-50/50 transition-all cursor-pointer relative"
                >
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-[1.25rem] bg-[#0F172A] text-[#F5B300] flex items-center justify-center font-black text-lg shadow-lg">
                        {lead.name?.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-base">{lead.name}</div>
                        <div className="text-[12px] text-slate-400 font-medium">{lead.phone}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-10 py-8" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === lead.id ? null : lead.id)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase border transition-all ${getStatusBadge(lead.status)}`}
                      >
                        {lead.status}
                        <ChevronDown size={14} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === lead.id && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 mt-3 w-48 bg-white border border-slate-100 rounded-[1.5rem] shadow-2xl z-[60] p-2"
                          >
                            {STATUS_OPTIONS.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => handleUpdate(lead.id, { status: opt })}
                                className="w-full text-left px-4 py-3 rounded-xl text-[11px] font-bold text-slate-500 hover:bg-slate-50 hover:text-[#0F172A] flex items-center justify-between transition-colors"
                              >
                                {opt}
                                {lead.status === opt && <Check size={14} className="text-emerald-500" />}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </td>

                  <td className="px-10 py-8 text-sm text-slate-400 font-medium">
                    {new Date(lead.created_at || Date.now()).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                  </td>
                  
                  <td className="px-10 py-8 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                      <button onClick={() => setSelectedLead(lead)} className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-[#0F172A] transition-all"><Edit2 size={16}/></button>
                      <button onClick={(e) => handleDelete(e, lead.id)} className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-red-500 transition-all"><Trash2 size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- ELITE SLIDE-OVER --- */}
      <AnimatePresence>
        {selectedLead && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedLead(null)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100]" />
            <motion.div 
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-screen w-full max-w-md bg-white z-[101] p-12 shadow-2xl border-l border-slate-100 flex flex-col"
            >
              <button onClick={() => setSelectedLead(null)} className="absolute top-10 right-10 p-3 hover:bg-slate-100 rounded-full transition-all text-slate-300"><X size={24}/></button>
              
              <div className="flex-1 space-y-12 mt-12">
                <div className="space-y-6">
                  <div className="w-24 h-24 rounded-[2.5rem] bg-[#0F172A] text-[#F5B300] flex items-center justify-center text-4xl font-black shadow-2xl shadow-slate-200">
                    {selectedLead.name?.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-[#0F172A] tracking-tight">{selectedLead.name}</h2>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-2">{selectedLead.email || "No Email Provided"}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 pt-10 border-t border-slate-100">
                  <DetailItem label="Direct Connection" value={selectedLead.phone} />
                  <DetailItem label="Inscribed Date" value={new Date(selectedLead.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })} />
                </div>

                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-3 block">Registry Notes</label>
                  <textarea 
                    className="w-full bg-transparent text-sm text-slate-600 outline-none resize-none h-32 font-medium leading-relaxed italic"
                    placeholder="Enter private briefing notes..."
                    defaultValue={selectedLead.notes}
                    onBlur={(e) => handleUpdate(selectedLead.id, { notes: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <a href={`tel:${selectedLead.phone}`} className="flex items-center justify-center gap-3 py-5 bg-slate-100 text-[#0F172A] rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all">
                  <Phone size={18} /> Call
                </a>
                <a href={`https://wa.me/${selectedLead.phone?.replace(/\D/g,'')}`} target="_blank" className="flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:shadow-xl shadow-emerald-100 transition-all">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailItem({ label, value }: any) {
    return (
        <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">{label}</p>
            <p className="text-lg font-bold text-slate-800 tracking-tight">{value}</p>
        </div>
    );
}

function getStatusBadge(status: string) {
  const s = status?.toLowerCase();
  switch (s) {
    case 'new': return 'bg-blue-50 text-blue-600 border-blue-100 shadow-sm shadow-blue-50';
    case 'contacted': return 'bg-amber-50 text-amber-600 border-amber-100 shadow-sm shadow-amber-50';
    case 'qualified': return 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-50';
    case 'lost': return 'bg-rose-50 text-rose-600 border-rose-100 shadow-sm shadow-rose-50';
    default: return 'bg-slate-50 text-slate-400 border-slate-100';
  }
}