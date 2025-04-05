// import Head from 'next/head';
// import Navbar from '../components/NavbarAdmin';
// import Footer from '../components/FooterAdmin';

// export default function AddEvent() {
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
//     // Handle API call to save event data
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Flex Ticket - Add Event</title>
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Add New Event</h1>
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
//           <input
//             type="text"
//             name="name"
//             placeholder="Event Name"
//             className="w-full p-2 border rounded mb-4"
//             required
//           />
//           <input
//             type="date"
//             name="date"
//             className="w-full p-2 border rounded mb-4"
//             required
//           />
//           <input
//             type="time"
//             name="time"
//             className="w-full p-2 border rounded mb-4"
//             required
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             className="w-full p-2 border rounded mb-4"
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             className="w-full p-2 border rounded mb-4"
//             required
//           />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//             Save Event
//           </button>
//         </form>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function AddEvent() {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    price: 0,
    availableTickets: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/event-organizer/add-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert('Event added successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Add Event</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Add New Event</h1>

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
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
            Add Event
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}