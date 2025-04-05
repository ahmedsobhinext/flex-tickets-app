
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function AddEventOrganizer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/event-organizers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Event Organizer Added Successfully!');
      } else if (response.status==400) {
        alert('The email address is already in use.');

      }
    } catch (error) {
        alert(error);

      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Add Event Organizer</title>
      </Head>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">
          Add Event Organizer
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
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
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
            Add Organizer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}