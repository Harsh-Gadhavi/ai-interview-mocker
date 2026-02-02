"use client";
import { useEffect, useState } from "react";

export default function ClerkStatusBanner() {
  const [status, setStatus] = useState({ loading: true, ok: true, message: '' });

  useEffect(() => {
    let mounted = true;
    async function check() {
      try {
        const res = await fetch('/api/clerk-status');
        const data = await res.json();
        if (!mounted) return;
        if (data.ok) {
          setStatus({ loading: false, ok: true, message: data.message });
        } else {
          // detect common user-limit wording
          const msg = (data.message || '').toLowerCase();
          const reachedLimit = msg.includes('limit') || msg.includes('500 users') || msg.includes('reached your limit');
          setStatus({ loading: false, ok: !reachedLimit, message: data.message || 'Clerk issue detected' });
        }
      } catch (err) {
        if (!mounted) return;
        setStatus({ loading: false, ok: false, message: String(err) });
      }
    }
    check();
    return () => { mounted = false; };
  }, []);

  if (status.loading || status.ok) return null;

  return (
    <div style={{ background: '#7c2d12', color: 'white', padding: '8px 12px', textAlign: 'center' }}>
      <strong>Clerk account limit reached:</strong>&nbsp;{status.message}
      <div style={{ marginTop: 6 }}>
        <a href="https://dashboard.clerk.com/billing" target="_blank" rel="noreferrer" style={{ color: '#ffe4b5', textDecoration: 'underline' }}>
          Upgrade Clerk plan
        </a>
        &nbsp;·&nbsp;
        <button onClick={() => window.location.reload()} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '6px 10px', borderRadius: 6 }}>
          Retry
        </button>
      </div>
    </div>
  );
}
