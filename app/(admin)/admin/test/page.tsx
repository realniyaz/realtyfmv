'use client';
import { useEffect, useState } from 'react';

export default function BackendTest() {
  const [status, setStatus] = useState('Connecting to Realtyfm API...');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function testConnection() {
      // Accessing the env variable
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      
      if (!baseUrl) {
        setStatus('❌ Error: NEXT_PUBLIC_API_BASE_URL is not defined in .env.local');
        return;
      }

      const finalUrl = `${baseUrl}/leads/`;

      try {
        const response = await fetch(finalUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'ngrok-skip-browser-warning': 'true', // Essential for ngrok stability
          },
        });

        if (response.ok) {
          const result = await response.json();
          setStatus('✅ SUCCESS! Connection verified via Environment Variables.');
          setData(result);
        } else {
          setStatus(`❌ Error: ${response.status}. Double check your .env.local formatting.`);
        }
      } catch (err) {
        setStatus('❌ Network Error. Ensure you restarted your dev server.');
      }
    }
    testConnection();
  }, []);

  return (
    <div className="p-10 font-sans">
      <div className="max-w-2xl bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">System Check</h1>
        <p className="text-gray-500 mb-6">Verifying secure bridge to Python backend...</p>
        
        <div className={`p-4 rounded-xl font-medium mb-6 ${data ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
          {status}
        </div>

        {data && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Live Leads Data</h2>
            <pre className="p-4 bg-gray-900 text-green-400 rounded-xl overflow-auto text-xs leading-relaxed">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}