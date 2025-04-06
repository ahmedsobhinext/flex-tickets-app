// import Head from 'next/head';
// import Navbar from '../components/NavbarAdmin';
// import Footer from '../components/FooterAdmin';

// export default function ManageEvents() {
//   const events = [
//     { id: 1, name: 'Concert Night', date: '2024-01-15', location: 'Riyadh', organizer: 'Org A' },
//     { id: 2, name: 'Amusement Park Day', date: '2024-02-20', location: 'Jeddah', organizer: 'Org B' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Flex Ticket - Manage Events</title>
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Manage Events</h1>

//         {/* Event Table */}
//         <table className="w-full bg-white rounded shadow">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2">ID</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Date</th>
//               <th className="p-2">Location</th>
//               <th className="p-2">Organizer</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => (
//               <tr key={event.id} className="border-b">
//                 <td className="p-2 text-center">{event.id}</td>
//                 <td className="p-2 text-center">{event.name}</td>
//                 <td className="p-2 text-center">{event.date}</td>
//                 <td className="p-2 text-center">{event.location}</td>
//                 <td className="p-2 text-center">{event.organizer}</td>
//                 <td className="p-2 text-center">
//                   <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
//                     Edit
//                   </button>
//                   <button className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function ManageEvents() {
  const [events, setEvents] = useState([]); // State to store fetched events
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch all events from Firestore
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/admin/events'); // Call the API route to fetch all events
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

  // Function to handle event deletion
  const handleDelete = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch('/api/admin/delete-event', {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Manage Events</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Manage Events</h1>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-600">Loading events...</p>
        )}

        {/* Event Table */}
        {!loading && events.length > 0 && (
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Date</th>
                <th className="p-2">Location</th>
                <th className="p-2">Organizer</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b">
                  <td className="p-2 text-center">{event.id}</td>
                  <td className="p-2 text-center">{event.title}</td>
                  <td className="p-2 text-center">{event.date}</td>
                  <td className="p-2 text-center">{event.location}</td>
                  <td className="p-2 text-center">{event.organizerId}</td>
                  <td className="p-2 text-center space-x-2">
                    {/* Edit Button */}
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      onClick={() => window.location.href = `/admin/edit-event?eventId=${event.id}`}
                    >
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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