import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';

export default function Home() {
  // Mock data for featured events with images
  const featuredEvents = [
    { 
      id: 1, 
      name: 'Concert Night', 
      date: '2024-01-15', 
      location: 'Riyadh',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063' 
    },
    { 
      id: 2, 
      name: 'Amusement Park Day', 
      date: '2024-02-20', 
      location: 'Jeddah',
      image: 'https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--4e157450-6d65-4f5e-910a-0f7ca39c5b97/ey-fun-roller-coaster.jpg?preferwebp=true&width=1600&quality=85'
    },
    { 
      id: 3, 
      name: 'Sports Championship', 
      date: '2024-03-10', 
      location: 'Dammam',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Home</title>
        <meta name="description" content="Book tickets for events and amusement parks effortlessly." />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-center my-8 text-blue-700">
          Welcome to Flex Ticket
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Simplify your ticket booking experience with digital tickets and QR codes.
        </p>

        {/* Search Bar */}
        <SearchBar />

        {/* Featured Events */}
        <h2 className="text-2xl font-semibold mt-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}