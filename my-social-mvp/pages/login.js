import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return alert(error.message);

    router.push('/feed'); 
  }

  return (
    <>
      <NavBar />
      <main className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input type="email" required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2" />
          <input type="password" required placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2" />
          <button disabled={loading} className="bg-green-500 text-white p-2 rounded">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </main>
    </>
  );
}
