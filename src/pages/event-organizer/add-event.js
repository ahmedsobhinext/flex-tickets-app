import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AddEvent() {
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
    // Handle API call to save event data
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
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="time"
            name="time"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Save Event
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}