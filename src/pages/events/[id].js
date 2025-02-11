// pages/events/[id].js
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';


const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock data with expanded details
  const events = [
    {
      id: 1,
      name: 'Concert Night',
      date: '2024-01-15',
      location: 'Riyadh Arena',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
      description: 'Experience the ultimate live music festival featuring international artists and stunning light shows.',
      price: 250,
      organizer: 'Royal Arts Group',
      duration: '4 Hours',
      type: 'Music Concert'
    },
    {
      id: 2,
      name: 'Amusement Park Day',
      date: '2024-02-20',
      location: 'Jeddah Wonderland',
      image: 'https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--4e157450-6d65-4f5e-910a-0f7ca39c5b97/ey-fun-roller-coaster.jpg?preferwebp=true&width=1600&quality=85',
      description: 'Family-friendly day out with thrilling rides, games, and entertainment for all ages.',
      price: 150,
      organizer: 'Saudi Entertainment',
      duration: 'Full Day',
      type: 'Amusement Park'
    },
    {
      id: 3,
      name: 'Sports Championship',
      date: '2024-03-10',
      location: 'Dammam Stadium',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      description: 'Witness the ultimate showdown of regional sports stars competing for championship glory.',
      price: 180,
      organizer: 'National Sports League',
      duration: '6 Hours',
      type: 'Sports Event'
    },
  ];

  const event = events.find(e => e.id === Number(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      <Head>
        <title>{event.name} | Flex Ticket</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Event Header */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 p-8 text-white"
          >
            <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">{event.name}</h1>
            <p className="text-xl font-light">{event.location}</p>
          </motion.div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all"
        >
          ← Back to Events
        </button>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Event Details</h2>
                <div className="grid grid-cols-2 gap-6 text-gray-200">
                  <div>
                    <p className="text-sm text-cyan-400">Date</p>
                    <p className="text-xl">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-400">Duration</p>
                    <p className="text-xl">{event.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-400">Event Type</p>
                    <p className="text-xl">{event.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-400">Organizer</p>
                    <p className="text-xl">{event.organizer}</p>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Description</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {event.description}
                </p>
              </motion.div>
            </div>

            {/* Ticket Purchase */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="sticky top-8 h-fit bg-gradient-to-b from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-white space-y-6">
                <h3 className="text-2xl font-bold">Get Your Tickets</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Standard Ticket</span>
                    <span className="text-2xl font-bold">SAR {event.price}</span>
                  </div>
                  <Link href={`/purchase/${event.id}`}>
                  <button className="w-full bg-white text-cyan-600 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all transform hover:scale-[1.02]">
                    Buy Now
                  </button>
                  </Link>
                </div>
                <div className="text-sm text-white/80">
                  <p>* All sales are final</p>
                  <p>* E-ticket will be provided</p>
                  <p>* 24/7 customer support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetails;