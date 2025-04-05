// import Head from 'next/head';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Meta Tags */}
//       <Head>
//         <title>Flex Ticket - About Us</title>
//         <meta name="description" content="Learn more about Flex Ticket, a modern online ticket booking system designed to simplify your entertainment experience." />
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto p-4">
//         {/* Hero Section */}
//         <h1 className="text-4xl font-bold text-center my-8 text-blue-700">About Flex Ticket</h1>
//         <p className="text-lg text-center text-gray-700 mb-8">
//           Flex Ticket is a modern online ticket booking system designed to provide users with a flexible and streamlined way to purchase tickets for entertainment events and amusement parks.
//         </p>

//         {/* Mission and Vision */}
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
//           <p className="text-gray-700">
//             Our mission is to simplify the ticket booking process by eliminating long queues, paper tickets, and overcrowding. We aim to enhance operational efficiency and deliver a smooth and convenient entertainment experience for users worldwide.
//           </p>
//         </div>

//         {/* Key Features */}
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Key Features</h2>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Easy browsing and selection of events.</li>
//             <li>Secure and fast online payments.</li>
//             <li>Digital tickets with QR codes for quick entry.</li>
//             <li>Comprehensive event information and reviews.</li>
//             <li>User-friendly interface for all devices.</li>
//           </ul>
//         </div>

//         {/* The Team */}
//         <div className="bg-white p-6 rounded shadow mb-8">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">The Team</h2>
//           <p className="text-gray-700 mb-4">
//             Flex Ticket is developed by a dedicated team of students from Majmaah University as part of their graduation project. Under the supervision of T. Chafika Laabidi Ouni, the team includes:
//           </p>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Raghad Suliman Almulhem (ID: 421200599)</li>
//             <li>Aryam Mohammed Althunyyan (ID: 421200979)</li>
//             <li>Reem Ibrahim Alyahya (ID: 421200520)</li>
//           </ul>
//         </div>

//         {/* Acknowledgments */}
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-2xl font-semibold text-blue-600 mb-4">Acknowledgments</h2>
//           <p className="text-gray-700">
//             We extend our deepest gratitude to our supervisor, T. Chafika Laabidi Ouni, for her invaluable guidance and support throughout this project. We also thank our families and friends for their encouragement and feedback.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Head>
        <title>Flex Ticket - About Us</title>
        <meta name="description" content="Learn more about Flex Ticket, a modern online ticket booking system designed to simplify your entertainment experience." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8 ">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="mt-10 text-5xl font-extrabold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-4">
            About Flex Ticket
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Revolutionizing entertainment access through digital innovation and seamless experiences
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Our Mission
            </h2>
            <p className="text-white/90 leading-relaxed">
              Eliminating traditional barriers in ticket purchasing, we are committed to transforming how the world accesses entertainment through: </p>
              <ul className="list-disc list-inside pl-4 mt-4 space-y-2 text-white/80">
                <li>Digital-first ticketing solutions</li>
                <li>Frictionless QR code entry systems</li>
                <li>Smart crowd management technology</li>
                <li>Global accessibility standards</li>
              </ul>
           
          </div>

          {/* Features Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Core Innovations
            </h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                <span>Instant digital ticket delivery</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                <span>Military-grade transaction security</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0" />
                <span>Real-time event analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                <span>Universal device compatibility</span>
              </li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Development Team
            </h2>
            <p className="text-white/80 mb-6">
          Crafted with passion by Majmaah University s brightest minds under expert guidance
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <h3 className="text-white font-semibold mb-1">Supervisor</h3>
                <p className="text-blue-300">T. Chafika Laabidi Ouni</p>
              </div>
              {[
                'Raghad Suliman Almulhem (ID: 421200599)',
                'Aryam Mohammed Althunyyan (ID: 421200979)',
                'Reem Ibrahim Alyahya (ID: 421200520)'
              ].map((member, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-xl">
                  <p className="text-white/90">{member}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Acknowledgments */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Gratitude
            </h2>
            <p className="text-white/80 leading-relaxed">
              We extend our deepest appreciation to our mentor T. Chafika Laabidi Ouni for her unwavering support, 
              and to our families for their endless encouragement throughout this transformative journey.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}