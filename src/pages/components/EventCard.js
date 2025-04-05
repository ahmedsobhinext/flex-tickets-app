import Link from 'next/link';


// components/EventCard.js
// export default function EventCard({ eventt}) {
//   return (
//     <Link href={`/events/${eventt?.idd}`}>
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <img 
//         src={eventt?.image} 
//         alt={eventt?.name} 
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold mb-2">{eventt?.name}</h3>
//         <p className="text-gray-600 mb-1">Date: {eventt?.date}</p>
//         <p className="text-gray-600">Location: {eventt?.location}</p>
//         <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// View Details
//       </button>
//       </div>
//     </div>
//     </Link>
//   );
// }

export default function EventCard({ eventt, className }) {
  return (
    <Link href={`/events/${eventt?.idd}`}>
    <div className={`${className} rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm border border-white/20`}>
      <div className="h-48 relative overflow-hidden">
        <img 
          src={eventt?.image} 
          alt={eventt?.name} 
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{eventt?.name}</h3>
        </div>
      </div>
      <div className="p-4 text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm opacity-80">{eventt?.date}</span>
          <span className="text-sm bg-blue-500 px-2 py-1 rounded-full">{eventt?.location}</span>
        </div>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 rounded-lg transition-all">
          Book Now
        </button>
      </div>
    </div>
    </Link>
  )
}

