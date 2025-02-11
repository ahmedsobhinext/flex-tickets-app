// pages/purchase/[id].js
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { CheckIcon, LockClosedIcon, TicketIcon } from '@heroicons/react/24/solid';

const PurchasePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({});
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Mock event data
  const events = [
    {
      id: 1,
      name: 'Concert Night',
      price: 250,
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
      date: '2024-01-15',
      location: 'Riyadh Arena',
      type: 'Music Concert'
    },
    // ... other events
  ];

  const event = events.find(e => e.id === Number(id));

  if (!event) return <div>Event not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      router.push(`/confirmation/${event.id}`);

    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      <Head>
        <title>Purchase Tickets - {event.name} | Flex Ticket</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center">
            <div className={`h-2 w-32 bg-cyan-500 rounded-full`} />
            <div className={`h-2 w-32 ${success ? 'bg-cyan-500' : 'bg-gray-700'} rounded-full mx-2`} />
            <div className={`h-2 w-32 ${success ? 'bg-cyan-500' : 'bg-gray-700'} rounded-full`} />
          </div>
        </div>

        {!success ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Payment Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-cyan-300 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 text-sm mb-2">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-white/10 rounded-lg p-4 pr-12 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="4242 4242 4242 4242"
                      required
                    />
                    <div className="absolute right-4 top-4 flex space-x-2">
                      <img src="/visa.svg" className="h-6" alt="Visa" />
                      <img src="/mastercard.svg" className="h-6" alt="Mastercard" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-300 text-sm mb-2">Expiration Date</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-300 text-sm mb-2">CVC</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center"
                >
                  {processing ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <LockClosedIcon className="w-5 h-5 mr-2" />
                      Complete Payment
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="sticky top-8 h-fit bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-white space-y-8">
                <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
                
                <div className="flex items-center space-x-6">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">{event.name}</h4>
                    <p className="text-gray-400">{event.date}</p>
                    <p className="text-gray-400">{event.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Standard Ticket x1</span>
                    <span className="font-bold">SAR {event.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Service Fee</span>
                    <span className="font-bold">SAR 25</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-cyan-400">SAR {event.price + 25}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-400 space-y-2">
                  <p className="flex items-center">
                    <TicketIcon className="w-4 h-4 mr-2 text-cyan-400" />
                    Instant e-ticket delivery
                  </p>
                  <p className="flex items-center">
                    <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" />
                    100% Refundable up to 24h before event
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          {/* Success Screen */}
          
        //   <motion.div
        //     initial={{ scale: 0.8, opacity: 0 }}
        //     animate={{ scale: 1, opacity: 1 }}
        //     className="text-center py-24">
                
        //     <div className="mx-auto w-32 h-32 bg-cyan-500 rounded-full flex items-center justify-center mb-8">
        //       <CheckIcon className="w-20 h-20 text-white" />
        //     </div>
        //     <h2 className="text-4xl font-bold text-white mb-4">Payment Successful!</h2>
        //     <p className="text-xl text-gray-300 mb-8">
        //       Your tickets for {event.name} have been booked successfully
        //     </p>
        //     <button
        //       onClick={() => router.push('/')}
        //       className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all"
        //     >
        //       View Tickets
        //     </button>
        //   </motion.div>
        )}
      </motion.div>
    
    </div>
  );
};

export default PurchasePage;