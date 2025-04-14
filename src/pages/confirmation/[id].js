// pages/confirmation/[id].js
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { TicketIcon } from '@heroicons/react/24/solid';
import {QRCodeCanvas} from 'qrcode.react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

const ConfirmationPage = () => {
  const router = useRouter();
  // const { id } = router.query;
  const ticketRef = useRef(null);

  // Mock booking data
  const booking = {
    id: 'BK123456',
    event: {
      name: 'Concert Night',
      date: '2024-01-15',
      time: '19:00',
      location: 'Riyadh Arena',
      section: 'VIP A12',
      seat: 'Row 5, Seat 23'
    },
    user: {
      name: 'Ahmed Al-Saud',
      email: 'raghad@raghad.com'
    },
    qrData: `flex-ticket:${1}:${Date.now()}`
  };

  const downloadTicket = async () => {
    const canvas = await html2canvas(ticketRef.current);
    const link = document.createElement('a');
    link.download = `flex-ticket-${booking.id}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <Head>
        <title>Booking Confirmation - Flex Ticket</title>
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto"
            >
              <TicketIcon className="w-12 h-12 text-white" />
            </motion.div>
            <div className="absolute inset-0 rounded-full border-4 border-emerald-400/30 animate-ping" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-gray-300">
            Your tickets for <span className="text-emerald-400">{booking.event.name}</span> are ready
          </p>
        </motion.div>

        {/* Ticket Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          ref={ticketRef}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-10" />
          
          {/* Ticket Design */}
          <div className="relative p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{booking.event.name}</h2>
                <p className="text-gray-600">{booking.event.date} • {booking.event.time}</p>
              </div>
              <div className="text-right">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold">
                  {booking.event.section}
                </span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="text-sm text-gray-500">Location</label>
                <p className="text-lg font-semibold">{booking.event.location}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Seat</label>
                <p className="text-lg font-semibold">{booking.event.seat}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Booking ID</label>
                <p className="text-lg font-semibold">{booking.id}</p>
              </div>
            </div>

            {/* User Info */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Name</label>
                  <p className="font-semibold">{booking.user.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="font-semibold">{booking.user.email}</p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="border-t pt-6 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Scan QR at entrance</h3>
                <div className="p-2 bg-white rounded-lg shadow-md inline-block">
                  <QRCodeCanvas
                    value={booking.qrData}
                    size={128}
                    level="H"
                    includeMargin={false}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <TicketIcon className="w-24 h-24 text-gray-200 opacity-50" />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg" />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={downloadTicket}
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <TicketIcon className="w-5 h-5" />
            Download Ticket
          </button>
          
          <button
            className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <TicketIcon className="w-5 h-5" />
            Share Tickets
          </button>
        </motion.div>

        {/* Floating Confetti */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * 100 - 50 + 'vw',
                y: Math.random() * 100 - 50 + 'vh'
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute text-2xl"
              style={{ color: ['#34d399', '#60a5fa', '#a78bfa'][Math.floor(Math.random() * 3)] }}
            >
              ★
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;