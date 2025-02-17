import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ManageEvents() {
  const events = [
    { id: 1, name: 'Concert Night', date: '2024-01-15', location: 'Riyadh', organizer: 'Org A' },
    { id: 2, name: 'Amusement Park Day', date: '2024-02-20', location: 'Jeddah', organizer: 'Org B' },
  ];

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

        {/* Event Table */}
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
                <td className="p-2 text-center">{event.name}</td>
                <td className="p-2 text-center">{event.date}</td>
                <td className="p-2 text-center">{event.location}</td>
                <td className="p-2 text-center">{event.organizer}</td>
                <td className="p-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}