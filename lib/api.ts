const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchDashboardStats() {
  const res = await fetch(`${BASE_URL}/reports/dashboard`, {
    cache: 'no-store', // Ensures fresh data for your dashboard
  });
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
}