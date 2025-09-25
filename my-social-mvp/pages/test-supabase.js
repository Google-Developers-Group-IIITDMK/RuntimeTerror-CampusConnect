import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function TestSupabase() {
  const [msg, setMsg] = useState('Checking...');

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) setMsg('Error: ' + error.message);
        else setMsg('Connected. session.user = ' + JSON.stringify(data?.session?.user ?? null));
      } catch (err) {
        setMsg('Exception: ' + err.message);
      }
    })();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Supabase Test</h1>
      <pre>{msg}</pre>
      <p>Expected: “Connected… session.user = null” if nobody is logged in. That means config is OK.</p>
    </main>
  );
}
