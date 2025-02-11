import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Meta Tags */}
      <Head>
        <title>Flex Ticket - About Us</title>
        <meta name="description" content="Learn more about Flex Ticket, a modern online ticket booking system designed to simplify your entertainment experience." />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-center my-8 text-blue-700">About Flex Ticket</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Flex Ticket is a modern online ticket booking system designed to provide users with a flexible and streamlined way to purchase tickets for entertainment events and amusement parks.
        </p>

        {/* Mission and Vision */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to simplify the ticket booking process by eliminating long queues, paper tickets, and overcrowding. We aim to enhance operational efficiency and deliver a smooth and convenient entertainment experience for users worldwide.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Easy browsing and selection of events.</li>
            <li>Secure and fast online payments.</li>
            <li>Digital tickets with QR codes for quick entry.</li>
            <li>Comprehensive event information and reviews.</li>
            <li>User-friendly interface for all devices.</li>
          </ul>
        </div>

        {/* The Team */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">The Team</h2>
          <p className="text-gray-700 mb-4">
            Flex Ticket is developed by a dedicated team of students from Majmaah University as part of their graduation project. Under the supervision of T. Chafika Laabidi Ouni, the team includes:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Raghad Suliman Almulhem (ID: 421200599)</li>
            <li>Aryam Mohammed Althunyyan (ID: 421200979)</li>
            <li>Reem Ibrahim Alyahya (ID: 421200520)</li>
          </ul>
        </div>

        {/* Acknowledgments */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Acknowledgments</h2>
          <p className="text-gray-700">
            We extend our deepest gratitude to our supervisor, T. Chafika Laabidi Ouni, for her invaluable guidance and support throughout this project. We also thank our families and friends for their encouragement and feedback.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}