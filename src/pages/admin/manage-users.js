import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ManageUsers() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', role: 'Customer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', role: 'Organizer' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Manage Users</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Manage Users</h1>

        {/* User Table */}
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2 text-center">{user.id}</td>
                <td className="p-2 text-center">{user.name}</td>
                <td className="p-2 text-center">{user.email}</td>
                <td className="p-2 text-center">{user.phone}</td>
                <td className="p-2 text-center">{user.role}</td>
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