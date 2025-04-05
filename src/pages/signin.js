// import Head from 'next/head';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// export default function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Simulate login logic
//     console.log({ email, password });
//     router.push('/');
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <Head>
//         <title>Flex Ticket - Sign In</title>
//       </Head>
//       <Navbar />
//       <main className="flex-1 flex items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">
//           <h1 className="text-3xl font-bold text-center">Sign In</h1>
//           <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
//             >
//               Sign In
//             </button>
//           </form>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Head>
        <title>Flex Ticket - Sign In</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />

      <main className="container mx-auto px-4 py-8  min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Welcome Back
          </h1>
          
          <form 
            onSubmit={handleSubmit} 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 space-y-6 shadow-2xl"
          >
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <div className="text-center space-y-4">
            {/* <p className="text-white/80">
              <a 
                href="/forgot-password" 
                className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </p> */}
            <p className="text-white/80">
              Don't have an account?{' '}
              <a 
                href="/signup" 
                className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-semibold hover:underline"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}