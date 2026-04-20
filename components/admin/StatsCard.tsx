'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export default function StatsCard({ title, value, trend, isPositive, icon }: StatsCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex justify-between items-start"
    >
      <div className="flex flex-col">
        <p className="text-gray-400 text-sm font-medium tracking-tight mb-2">
          {title}
        </p>
        <h3 className="text-[28px] font-bold text-[#0A1629] leading-tight">
          {value}
        </h3>
        
        <div className="flex items-center gap-1.5 mt-4">
          <div className={`flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${
            isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
          }`}>
            {isPositive ? '↗' : '↘'} {trend}
          </div>
          <span className="text-gray-400 text-[11px] font-medium">vs last month</span>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-2xl text-xl grayscale-[0.5]">
        {icon}
      </div>
    </motion.div>
  );
}