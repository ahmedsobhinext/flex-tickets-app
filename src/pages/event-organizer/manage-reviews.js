import Head from 'next/head';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function ManageReviews() {
  const reviews = [
    { id: 1, userName: 'John Doe', rating: 5, comment: 'Great event!' },
    { id: 2, userName: 'Jane Smith', rating: 3, comment: 'Could be better.' },
  ];

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
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Approve
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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