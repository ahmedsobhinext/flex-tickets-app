// pages/events/[id].js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Simulate API call for reviews
    const fetchReviews = async () => {
      try {
        // Mock reviews data
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockReviews = [
          {
            id: 1,
            rating: 5,
            comment: 'Absolutely breathtaking performance! The light show was incredible.',
            createdAt: '2024-01-16T14:23:00'
          },
          {
            id: 2,
            rating: 4,
            comment: 'Great atmosphere, but the lines were a bit long.',
            createdAt: '2024-01-17T09:45:00'
          }
        ];
        setReviews(mockReviews);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    if (id) fetchReviews();
  }, [id]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      const newReview = {
        id: reviews.length + 1,
        rating,
        comment,
        createdAt: new Date().toISOString()
      };
      
      setReviews(prev => [newReview, ...prev]);
      setComment('');
      setRating(5);
      
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };

  if (!event) return <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 text-white p-8">Event not found</div>;

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
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Details */}
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Event Details</h2>
                <div className="grid grid-cols-2 gap-6 text-gray-200">
                  <div>
                    <p className="text-sm text-cyan-400">Date</p>
                    <p className="text-xl">{new Date(event.date).toLocaleDateString()}</p>
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

              {/* Reviews Section */}
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Reviews</h2>
                
                {/* Review Form */}
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-cyan-400 text-sm mb-2">Rating</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full bg-white/10 rounded-lg p-3 text-black focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        required
                      >
                        {[5, 4, 3, 2, 1].map((value) => (
                          <option key={value} value={value}>
                            {value} Star{value !== 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-cyan-400 text-sm mb-2">Comment</label>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full bg-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        rows="4"
                        placeholder="Share your experience..."
                        required
                      />
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Submit Review
                    </motion.button>
                  </div>
                </form>

                {/* Reviews List */}
                <div className="space-y-6">
                  {loading ? (
                    <p className="text-gray-300 text-center">Loading reviews...</p>
                  ) : reviews.length === 0 ? (
                    <p className="text-gray-300 text-center">No reviews yet. Be the first to share your experience!</p>
                  ) : (
                    reviews.map((review) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white/5 rounded-xl p-6"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-cyan-400">
                              {[...Array(review.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-400">
                            {new Date(review.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-gray-200 leading-relaxed">{review.comment}</p>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Ticket Purchase */}
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
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-cyan-600 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all"
                    >
                      Buy Now
                    </motion.button>
                  </Link>
                </div>
                <div className="text-sm text-white/80 space-y-1">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    All sales are final
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                    </svg>
                    E-ticket provided
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-14h-4v2h4v6h-2v-4h-2v4H8V8h2V6h4z"/>
                    </svg>
                    24/7 Support
                  </p>
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