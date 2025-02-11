import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate signup logic
    console.log({ name, email, password, confirmPassword });
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Flex Ticket - Sign Up</title>
      </Head>
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold text-center">Create Account</h1>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
          {/* <p className="text-center text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}