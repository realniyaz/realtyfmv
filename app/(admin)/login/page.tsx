'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true' 
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.access_token) {
        // Store the JWT token securely
        localStorage.setItem('realty_token', data.access_token);
        router.push('/admin'); 
      } else {
        setError(data.detail || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the authentication server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1629] flex items-center justify-center p-6">
      <div className="w-full max-w-[440px] space-y-8">
        {/* Logo Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EAB308] rounded-[22px] mb-6 shadow-xl shadow-yellow-500/10">
            <Lock className="text-[#0A1629]" size={28} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-gray-400 mt-2 font-medium">Log in to manage your Realtyfm ecosystem</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-xl space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold p-4 rounded-2xl text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-[2px] text-gray-500 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                required
                name="email"
                type="email" 
                placeholder="admin@realtyfm.in"
                className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 ring-[#EAB308]/50 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-[2px] text-gray-500 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                required
                name="password"
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 ring-[#EAB308]/50 transition-all font-medium"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#EAB308] text-[#0A1629] p-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-[#f3bc1a] transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Authorize Access"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs font-medium">
          Protected by Realtyfm Security Protocol v3.0
        </p>
      </div>
    </div>
  );
}