import Link from 'next/link';


// components/EventCard.js
export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={event.image} 
        alt={event.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
        <p className="text-gray-600 mb-1">Date: {event.date}</p>
        <p className="text-gray-600">Location: {event.location}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
View Details
      </button>
      </div>
    </div>
    </Link>
  );
}

