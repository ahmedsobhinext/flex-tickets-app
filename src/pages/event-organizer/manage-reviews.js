import Head from 'next/head';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';
import { useState } from 'react';

export default function ManageReviews() {
  const [reviews, setReviews] = useState([
    { id: 1, userName: 'John Doe', rating: 5, comment: 'Great event!', approved: false },
    { id: 2, userName: 'Jane Smith', rating: 3, comment: 'Could be better.', approved: false },
  ]);

  const handleApprove = (id) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, approved: true } : review
    ));
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Manage Reviews</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Manage Reviews</h1>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-4 rounded shadow">
              <p><strong>{review.userName}</strong>: {review.comment}</p>
              <p>Rating: {review.rating}/5</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleApprove(review.id)}
                  className={`${
                    review.approved 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600'
                  } text-white px-4 py-2 rounded`}
                  disabled={review.approved}
                >
                  {review.approved ? 'Approved' : 'Approve'}
                </button>
                <button 
                  onClick={() => handleDelete(review.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}