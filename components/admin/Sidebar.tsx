'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, UserCheck, BarChart3, 
  Wallet, Clock, Home, LogOut, 
  Book
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Properties', href: '/admin/properties', icon: Home },
  { name: 'Blogs', href: '/admin/blogs', icon: Book },
  { name: 'Leads', href: '/admin/leads', icon: Users },
  { name: 'Clients', href: '/admin/clients', icon: UserCheck },
  { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
  { name: 'Revenue', href: '/admin/revenue', icon: Wallet },
  { name: 'Follow-ups', href: '/admin/follow-ups', icon: Clock },
];

interface SidebarProps {
  onLogout: () => void;
}

export default function Sidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-[#0A1629] h-screen sticky top-0 flex flex-col border-r border-white/5 shrink-0 shadow-2xl">
      {/* 1. Brand Section */}
      <div className="p-8 pb-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#EAB308] p-2.5 rounded-2xl shadow-lg shadow-yellow-500/20">
            <LayoutDashboard size={20} className="text-black" />
          </div>
          <div>
            <h2 className="text-white font-bold text-xl tracking-tight leading-none">Realtyfm</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-[2px] mt-1.5 font-black">CRM v3.0</p>
          </div>
        </div>
      </div>

      {/* 2. Scrollable Navigation Area */}
      <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto no-scrollbar">
        <p className="text-[11px] font-black text-gray-600 uppercase tracking-[2.5px] px-4 mb-4 opacity-50">Workspace</p>
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-[20px] transition-all duration-300 group ${
                isActive 
                  ? 'bg-[#EAB308] text-black font-bold shadow-xl shadow-yellow-500/10 scale-[1.02]' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={19} className={isActive ? 'text-black' : 'group-hover:text-white transition-colors'} />
              <span className="text-[14px]">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* 3. Fixed Bottom Section (Never Scrolls) */}
      <div className="p-6 mt-auto bg-gradient-to-t from-[#0A1629] via-[#0A1629] to-transparent pt-10">
        <div className="bg-white/[0.03] rounded-[28px] p-5 border border-white/5 mb-4 group hover:bg-white/[0.05] transition-all cursor-default">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse" />
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Pro Tip</p>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
            Respond to new leads within <span className="text-gray-300">5 mins</span> to increase your closing rate by 40%.
          </p>
        </div>

        <button 
          onClick={onLogout}
          className="flex items-center justify-between w-full px-5 py-4 rounded-[22px] text-red-400 bg-red-500/5 hover:bg-red-500/10 transition-all font-bold text-sm group border border-red-500/10 hover:border-red-500/20"
        >
          <div className="flex items-center gap-3">
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Sign Out</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
        </button>
      </div>
    </div>
  );
}