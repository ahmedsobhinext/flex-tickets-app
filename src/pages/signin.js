import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate login logic
    console.log({ email, password });
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Flex Ticket - Sign In</title>
      </Head>
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}