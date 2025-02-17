import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function AdminDashboard() {
  const stats = [
    { title: 'Total Users', value: 500 },
    { title: 'Total Events', value: 20 },
    { title: 'Total Bookings', value: 1200 },
    { title: 'Total Revenue', value: '$60,000' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Admin Dashboard</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Admin Dashboard</h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-xl font-semibold">{stat.title}</h3>
              <p className="text-2xl text-blue-600">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Manage Users Button */}
        <Link href="/admin/manage-users" passHref>
          <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            Manage Users
          </button>
        </Link>
          {/* Manage Events Button */}
        <Link href="/admin/manage-events" passHref>
          <button className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
            Manage Events
          </button>
        </Link>
          {/* View Reports Button */}
        <Link href="/admin/view-reports" passHref>
          <button className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
            View Reports
          </button>
        </Link>
        </div>

        {/* Recent Activity */}
        <h2 className="text-2xl font-semibold mt-8">Recent Activity</h2>
        <div className="bg-white p-4 rounded shadow mt-4">
          <ul className="list-disc list-inside text-gray-700">
            <li>User John Doe booked tickets for Concert Night.</li>
            <li>Event Amusement Park Day updated by organizer.</li>
            <li>New user Jane Smith registered on the platform.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}