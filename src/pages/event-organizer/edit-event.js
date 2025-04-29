// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Navbar from '../components/NavbarAdmin';
// import Footer from '../components/FooterAdmin';



// export default function EditEvent() {
//   const router = useRouter();
//   const { eventId } = router.query;

//   // Simulate fetching event data for editing
//   const eventToEdit = eventId
//     ? {
//         id: eventId,
//         name: 'Concert Night',
//         date: '2024-01-15',
//         time: '20:00',
//         location: 'Riyadh',
//         price: 50,
//       }
//     : null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     console.log({
//       name: formData.get('name'),
//       date: formData.get('date'),
//       time: formData.get('time'),
//       location: formData.get('location'),
//       price: formData.get('price'),
//     });
//     // Handle API call to save or update event data
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Flex Ticket - {eventId ? 'Edit Event' : 'Add Event'}</title>
//       </Head>
//       {/* Navbar */}
//             <Navbar />

//       <h1 className="text-3xl font-bold text-center my-8">
//         {eventId ? 'Edit Event' : 'Add New Event'}
//       </h1>

//       <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
//         <input
//           type="text"
//           name="name"
//           placeholder="Event Name"
//           defaultValue={eventToEdit?.name || ''}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           defaultValue={eventToEdit?.date || ''}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
//         <input
//           type="time"
//           name="time"
//           defaultValue={eventToEdit?.time || ''}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           defaultValue={eventToEdit?.location || ''}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           defaultValue={eventToEdit?.price || ''}
//           className="w-full p-2 border rounded mb-4"
//           required
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//           {eventId ? 'Update Event' : 'Save Event'}
//         </button>
//       </form>

//       {/* Footer */}
//             <Footer />
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function EditEvent() {
  const router = useRouter();
  const { eventId } = router.query;
  const [eventData, setEventData] = useState(null);

  // Fetch event details
  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) return;

      try {
        const response = await fetch(`/api/event-organizer/events?id=${eventId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event.');
        }
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event:', error);
        alert('Failed to fetch event.');
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/event-organizer/edit-event', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: eventId, updatedData: eventData }),
      });

      if (response.ok) {
        alert('Event updated successfully!');
        router.push('/event-organizer/dashboard');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Failed to update event.');
    }
  };

  if (!eventData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Edit Event</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Edit Event</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={eventData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Available Tickets</label>
            <input
              type="number"
              name="availableTickets"
              value={eventData.availableTickets}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-yellow-500 text-white p-2 rounded w-full">
            Update Event
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}