// import Head from 'next/head';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// export default function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [name, setName] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Simulate signup logic
//     console.log({ name, email, password, confirmPassword });
//     router.push('/');
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <Head>
//         <title>Flex Ticket - Sign Up</title>
//       </Head>
//       <Navbar />
//       <main className="flex-1 flex items-center justify-center p-4">
//         <div className="w-full max-w-md space-y-8">
//           <h1 className="text-3xl font-bold text-center">Create Account</h1>
//           <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
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
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
//             >
//               Sign Up
//             </button>
//           </form>
//           {/* <p className="text-center text-gray-600">
//             Already have an account?{' '}
//             <a href="/signin" className="text-blue-500 hover:underline">
//               Sign in
//             </a>
//           </p> */}
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

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [confirmPassword,setConfirmPassword]=useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('User Added Successfully!');
        router.push('/');
      } else if (response.status==400) {
        alert('The email address is already in use.');

      }
    } catch (error) {
        alert(error);

      console.error('Error:', error);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Head>
        <title>Flex Ticket - Sign Up</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />

      <main className="container mx-auto px-4 py-8  min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <h1 className=" mt-10 text-4xl font-bold text-center bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Create Account
          </h1>
          
          <form 
            onSubmit={handleSubmit} 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 space-y-6 shadow-2xl"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>

            <div>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>


            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-white/80">
            Already have an account?{' '}
            <a 
              href="/signin" 
              className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-semibold hover:underline"
            >
              Sign in here
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}