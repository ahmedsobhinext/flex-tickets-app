// import Head from 'next/head';
// import Link from 'next/link';

// import Navbar from '../components/NavbarAdmin';
// import Footer from '../components/FooterAdmin';

// export default function OrganizerDashboard() {
//   const events = [
//     { id: 1, name: 'Concert Night', date: '2024-01-15', status: 'Upcoming' },
//     { id: 2, name: 'Amusement Park Day', date: '2024-02-20', status: 'Ongoing' },
//     { id: 3, name: 'Sports Championship', date: '2024-03-10', status: 'Past' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Flex Ticket - Event Organizer Dashboard</title>
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Event Organizer Dashboard</h1>

//         {/* Quick Actions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           {/* Add New Event Button */}
//         <Link href="/event-organizer/add-event" passHref>
//           <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
//             Add New Event
//           </button>
//         </Link>
//          {/* View Sales Reports Button */}
//         <Link href="/event-organizer/sales-reports" passHref>
//           <button className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
//             View Sales Reports
//           </button>
//         </Link>

//           {/* Manage Reviews Button */}
//         <Link href="/event-organizer/manage-reviews" passHref>
//           <button className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
//             Manage Reviews
//           </button>
//         </Link>
//         </div>

//         {/* Event Overview */}
//         <h2 className="text-2xl font-semibold mt-8">Your Events</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//           {events.map((event) => (
//             <div key={event.id} className="bg-white p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">{event.name}</h3>
//               <p>Date: {event.date}</p>
//               <p>Status: {event.status}</p>
//               {/* Link to Edit Event Page */}
//             <Link href={`/event-organizer/edit-event?eventId=${event.id}`} passHref>
//               <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
//                 Edit Event
//               </button>
//             </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function OrganizerDashboard() {
  const [events, setEvents] = useState([]); // State to store fetched events
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to handle event deletion
  const handleDelete = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch('/api/event-organizer/delete-event', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: eventId }),
        });

        if (response.ok) {
          // Remove the deleted event from the state
          setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
          alert('Event deleted successfully!');
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Failed to delete event.');
      }
    }
  };

  // Fetch events from Firestore
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/event-organizer/events'); // Call the API route to fetch events
        if (!response.ok) {
          throw new Error('Failed to fetch events.');
        }
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Event Organizer Dashboard</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Event Organizer Dashboard</h1>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Add New Event Button */}
          <Link href="/event-organizer/add-event" passHref>
            <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
              Add New Event
            </button>
          </Link>

          {/* View Sales Reports Button */}
          <Link href="/event-organizer/sales-reports" passHref>
            <button className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
              View Sales Reports
            </button>
          </Link>

          {/* Manage Reviews Button */}
          <Link href="/event-organizer/manage-reviews" passHref>
            <button className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
              Manage Reviews
            </button>
          </Link>
        </div>

        {/* Event Overview */}
        <h2 className="text-2xl font-semibold mt-8">Your Events</h2>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-600">Loading events...</p>
        )}

        {/* Event Cards */}
        {!loading && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p>Date: {event.date}</p>
                <p>Status: {event.status}</p>

                {/* Edit Event Button */}
                <Link href={`/event-organizer/edit-event?eventId=${event.id}`} passHref>
                  <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Edit Event
                  </button>
                </Link>

                {/* Delete Event Button */}
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete Event
                </button>
              </div>
            ))}
          </div>
        )}

        {/* No Events Found */}
        {!loading && events.length === 0 && (
          <p className="text-center text-gray-600">No events found.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );

  
}