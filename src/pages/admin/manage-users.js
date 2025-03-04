import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// export default function ManageUsers() {
//   const [users, setUsers] = useState([]); // State to store fetched users
//   const [loading, setLoading] = useState(true); // State to track loading status

//   // Fetch users from Firestore
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await fetch('/api/users'); // Call the API route to fetch users
//         const data = await querySnapshot.json();
//         setUsers(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>Flex Ticket - Manage Users</title>
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Manage Users</h1>

//         {/* Loading State */}
//         {loading && (
//           <p className="text-center text-gray-600">Loading users...</p>
//         )}

//         {/* User Table */}
//         {!loading && users.length > 0 && (
//           <table className="w-full bg-white rounded shadow">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-2">ID</th>
//                 <th className="p-2">Name</th>
//                 <th className="p-2">Email</th>
//                 <th className="p-2">Phone</th>
//                 <th className="p-2">Role</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id} className="border-b">
//                   <td className="p-2 text-center">{user.id}</td>
//                   <td className="p-2 text-center">{user.name}</td>
//                   <td className="p-2 text-center">{user.email}</td>
//                   <td className="p-2 text-center">{user.phone}</td>
//                   <td className="p-2 text-center">{user.role}</td>
//                   <td className="p-2 text-center">
//                     <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
//                       Edit
//                     </button>
//                     <button className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {/* No Users Found */}
//         {!loading && users.length === 0 && (
//           <p className="text-center text-gray-600">No users found.</p>
//         )}
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }



export default function ManageUsers() {
  const [users, setUsers] = useState([]); // State to store fetched organizers
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch users from Firestore via the API route
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Call the API route to fetch organizers
        if (!response.ok) {
          throw new Error('Failed to fetch users.');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Function to handle user deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch('/api/delete-user', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          // Remove the deleted user from the state
          setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
          alert('User deleted successfully!');
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user.');
      }
    }
  };

  // Function to handle user editing
  const handleEdit = async (id, updatedData) => {
    try {
      const response = await fetch('/api/edit-user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, updatedData }),
      });

      if (response.ok) {
        // Update the edited user in the state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === id ? { ...user, ...updatedData } : user
          )
        );
        alert('User updated successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  };

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

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-600">Loading Users...</p>
        )}

        {/* Organizer Table */}
        {!loading && users.length > 0 && (
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
                  <td className="p-2 text-center space-x-2">
                    {/* Edit Button */}
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      onClick={() => {
                        const newName = prompt('Enter new name:', user.name);
                        const newEmail = prompt('Enter new email:', user.email);
                        const newPhone = prompt('Enter new phone:', user.phone);

                        if (newName || newEmail || newPhone) {
                          handleEdit(user.id, {
                            name: newName || user.name,
                            email: newEmail || user.email,
                            phone: newPhone || user.phone,
                          });
                        }
                      }}
                    >
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* No users Found */}
        {!loading && users.length === 0 && (
          <p className="text-center text-gray-600">No users found.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}