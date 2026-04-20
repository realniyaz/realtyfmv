'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('realty_token');
    router.push('/login');
  };

  useEffect(() => {
    // 1. Initial Auth Check
    const token = localStorage.getItem('realty_token');
    if (!token) {
      router.push('/login');
      return;
    }
    setAuthorized(true);

    // 2. Auto-Logout Logic (Inactivity Timer)
    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      // Auto-logout after 30 minutes of inactivity
      timeout = setTimeout(handleLogout, 30 * 60 * 1000); 
    };

    // Track mouse movement, clicks, or keypresses
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('mousedown', resetTimer);
    window.addEventListener('keypress', resetTimer);

    resetTimer(); // Initialize timer

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('mousedown', resetTimer);
      window.removeEventListener('keypress', resetTimer);
    };
  }, [router]);

  if (!authorized) return null;

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}