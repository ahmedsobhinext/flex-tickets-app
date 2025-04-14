import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function EditUser() {
  const router = useRouter();
  const { userId } = router.query;
  const [userData, setUserData] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/users?id=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user.');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        alert('Failed to fetch user.');
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/edit-user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId, updatedData: userData }),
      });

      if (response.ok) {
        alert('User updated successfully!');
        router.push('/admin/manage-users');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Edit User</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Edit User</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={userData.role || 'Customer'}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Customer">Customer</option>
              <option value="Organizer">Event Organizer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600">
            Update User
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}