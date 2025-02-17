import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function EditEvent() {
  const router = useRouter();
  const { eventId } = router.query;

  // Simulate fetching event data for editing
  const eventToEdit = eventId
    ? {
        id: eventId,
        name: 'Concert Night',
        date: '2024-01-15',
        time: '20:00',
        location: 'Riyadh',
        price: 50,
      }
    : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({
      name: formData.get('name'),
      date: formData.get('date'),
      time: formData.get('time'),
      location: formData.get('location'),
      price: formData.get('price'),
    });
    // Handle API call to save or update event data
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - {eventId ? 'Edit Event' : 'Add Event'}</title>
      </Head>
      {/* Navbar */}
            <Navbar />

      <h1 className="text-3xl font-bold text-center my-8">
        {eventId ? 'Edit Event' : 'Add New Event'}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          defaultValue={eventToEdit?.name || ''}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="date"
          name="date"
          defaultValue={eventToEdit?.date || ''}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="time"
          name="time"
          defaultValue={eventToEdit?.time || ''}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          defaultValue={eventToEdit?.location || ''}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          defaultValue={eventToEdit?.price || ''}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {eventId ? 'Update Event' : 'Save Event'}
        </button>
      </form>

      {/* Footer */}
            <Footer />
    </div>
  );
}