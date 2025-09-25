import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener?.subscription?.unsubscribe?.();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  return (
    <nav className="p-4 border-b flex justify-between max-w-3xl mx-auto">
      <div>
        <Link href="/">MySocialMVP</Link>
      </div>
      <div className="flex gap-4">
        {user ? (
          <>
            <Link href="/profile"></Link>
            <button onClick={handleSignOut} className="bg-gray-200 px-3 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login"></Link>
            <Link href="/signup">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
