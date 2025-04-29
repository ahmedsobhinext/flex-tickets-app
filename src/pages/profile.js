import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function UserProfile() {
  // Dummy user data
  const [user] = useState({
    id: 'user123',
    name: 'raghad',
    email: 'raghad@gmail.com',
    phone: '1234567890',
  });

  // Dummy booking history
  const [bookings, setBookings] = useState([
    {
      id: 'booking1',
      eventName: 'Concert Night',
      ticketCount: 2,
      totalPrice: 100,
      status: 'Confirmed',
    },
    {
      id: 'booking2',
      eventName: 'Amusement Park Day',
      ticketCount: 4,
      totalPrice: 200,
      status: 'Pending',
    },
  ]);

  // Dummy reviews
  const [reviews, setReviews] = useState([
    {
      id: 'review1',
      rating: 5,
      comment: 'Amazing event! The venue was beautiful.',
      createdAt: '2024-01-15T10:30:00Z',
    },
    {
      id: 'review2',
      rating: 4,
      comment: 'Great experience, but the food could be better.',
      createdAt: '2024-01-16T12:45:00Z',
    },
  ]);

  // Function to handle updating user profile (dummy implementation)
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  // Function to delete a booking
  const handleDeleteBooking = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
      alert('Booking deleted successfully!');
    }
  };

  // Function to edit a review
  const handleEditReview = (id, newComment, newRating) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, comment: newComment, rating: newRating } : review
      )
    );
    alert('Review updated successfully!');
  };

  // Function to delete a review
  const handleDeleteReview = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
      alert('Review deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Head>
        <title>Flex Ticket - User Profile</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-20">
          My Profile
        </h1>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Account Details</h2>
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <label className="block text-white/80 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/80 mb-2">Email Address</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/80 mb-2">Phone Number</label>
              <input
                type="text"
                defaultValue={user.phone}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Booking History Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Booking History</h2>
          {bookings.length === 0 ? (
            <p className="text-white/80">No bookings found.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90">
                    <div>
                      <p className="text-sm text-white/70">Event</p>
                      <p className="font-semibold">{booking.eventName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Tickets</p>
                      <p>{booking.ticketCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Total</p>
                      <p>SAR {booking.totalPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Status</p>
                      <span className={`px-2 py-1 rounded-full ${
                        booking.status === 'Confirmed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                      onClick={() => handleDeleteBooking(booking.id)}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">My Reviews</h2>
          {reviews.length === 0 ? (
            <p className="text-white/80">No reviews yet.</p>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${i < review.rating ? 'text-yellow-400' : 'text-white/20'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-white/60">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-white/90 mb-4 italic">{review.comment}</p>
                  <div className="flex space-x-2">
                    <button
                      className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors"
                      onClick={() => {
                        const newComment = prompt('Edit your comment:', review.comment);
                        const newRating = prompt('Edit your rating (1-5):', review.rating);
                        if (newComment && newRating) {
                          handleEditReview(review.id, newComment, parseInt(newRating));
                        }
                      }}
                    >
                      Edit Review
                    </button>
                    <button
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                      onClick={() => handleDeleteReview(review.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}