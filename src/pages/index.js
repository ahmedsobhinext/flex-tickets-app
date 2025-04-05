import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';



// export default function Home() {
//   // Mock data for featured events with images
//   const featuredEvents = [
//     { 
//       idd: 1, 
//       name: 'Concert Night', 
//       date: '2024-01-15', 
//       location: 'Riyadh',
//       image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063' 
//     },
//     { 
//       idd: 2, 
//       name: 'Amusement Park Day', 
//       date: '2024-02-20', 
//       location: 'Jeddah',
//       image: 'https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--4e157450-6d65-4f5e-910a-0f7ca39c5b97/ey-fun-roller-coaster.jpg?preferwebp=true&width=1600&quality=85'
//     },
//     { 
//       idd: 3, 
//       name: 'Sports Championship', 
//       date: '2024-03-10', 
//       location: 'Dammam',
//       image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211' 
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
//       <Head>
//         <title>Flex Ticket - Home</title>
//         <meta name="description" content="Book tickets for events and amusement parks effortlessly." />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <div className="text-center mb-12 animate-fade-in">
//           <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-6">
//             Welcome to Flex Ticket
//           </h1>
//           <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
//             Revolutionize your event experience with instant digital tickets and seamless QR code access
//           </p>

//           {/* Search Bar */}
//           <div className="max-w-3xl mx-auto">
//             <SearchBar />
//           </div>
//         </div>

//         {/* Featured Events */}
//         <div className="py-12">
//           <h2 className="text-3xl font-bold text-white mb-8 text-center">
//             Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Events</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredEvents.map((event, i) => (
//               <EventCard 
//                 key={i} 
//                 eventt={event} 
//                 className="transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }



export default function Home() {
  // Mock data for featured events with images
  const featuredEvents = [
    { 
      idd: 1, 
      name: 'Concert Night', 
      date: '2024-01-15', 
      location: 'Riyadh',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063' 
    },
    { 
      idd: 2, 
      name: 'Amusement Park Day', 
      date: '2024-02-20', 
      location: 'Jeddah',
      image: 'https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--4e157450-6d65-4f5e-910a-0f7ca39c5b97/ey-fun-roller-coaster.jpg?preferwebp=true&width=1600&quality=85'
    },
    { 
      idd: 3, 
      name: 'Sports Championship', 
      date: '2024-03-10', 
      location: 'Dammam',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Head>
        <title>Flex Ticket - Home</title>
        <meta name="description" content="Book tickets for events and amusement parks effortlessly." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-6">
            Welcome to Flex Ticket
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Revolutionize your event experience with instant digital tickets and seamless QR code access
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Featured Events */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Events</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, i) => (
              <EventCard 
                key={i} 
                eventt={event} 
                className="transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}