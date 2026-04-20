'use client';
import React, { useEffect, useState } from 'react';
import StatsCard from "@/components/admin/StatsCard";

export default function AdminDashboard() {
  const [leadsCount, setLeadsCount] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // 1. Fetch live lead data from ngrok
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads/`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    })
    .then(res => res.json())
    .then(data => setLeadsCount(data.length))
    .catch(err => console.error("Stats fetch error:", err));

    // 2. Set the date display
    const now = new Date();
    setCurrentTime(now.toLocaleDateString('en-IN', { 
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
    }));
  }, []);

  return (
    <div className="space-y-10 max-w-[1600px] mx-auto">
      {/* 1. Top Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-[#0A1629]">Welcome back, Aman 👋</h1>
          <p className="text-gray-500 mt-1 font-medium">Here's what's happening across your pipeline today.</p>
        </div>
        <div className="text-right pb-1">
          <p className="text-sm font-bold text-[#0A1629]">{currentTime}</p>
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Leads" 
          value={leadsCount} 
          trend="12.4%" 
          isPositive={true} 
          icon="👥" 
        />
        <StatsCard 
          title="Conversion Rate" 
          value="34%" 
          trend="4.2%" 
          isPositive={true} 
          icon="📈" 
        />
        <StatsCard 
          title="Total Revenue" 
          value="₹1,14,00,000" 
          trend="8.7%" 
          isPositive={true} 
          icon="💳" 
        />
        <StatsCard 
          title="Pending Follow-ups" 
          value="18" 
          trend="3.1%" 
          isPositive={false} 
          icon="⏰" 
        />
      </div>

      {/* 3. Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm min-h-[400px]">
          <h3 className="font-bold text-[#0A1629] mb-6">Revenue Trend</h3>
          <div className="h-64 flex items-center justify-center text-gray-300 border-2 border-dashed border-gray-50 rounded-2xl">
            Chart Loading... (Connect to /api/v1/reports/revenue-trend)
          </div>
        </div>
        
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-[#0A1629] mb-6">Conversion Rate</h3>
          <div className="h-64 flex items-center justify-center text-gray-300 border-2 border-dashed border-gray-50 rounded-2xl">
            Chart Loading...
          </div>
        </div>
      </div>
    </div>
  );
}