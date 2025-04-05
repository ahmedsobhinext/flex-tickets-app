// export default function SearchBar() {
//     const handleSearch = (e) => {
//       e.preventDefault();
//       const query = e.target.query.value;
//       console.log('Searching for:', query);
//       // Redirect or filter events based on the query
//     };
  
//     return (
//       <form onSubmit={handleSearch} className="max-w-md mx-auto bg-white p-4 rounded shadow">
//         <div className="flex">
//           <input
//             type="text"
//             name="query"
//             placeholder="Search for events..."
//             className="w-full p-2 border rounded-l focus:outline-none focus:border-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
//           >
//             Search
//           </button>
//         </div>
//       </form>
//     );
//   }

export default function SearchBar() {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search events, parks, or locations..." 
        className="w-full py-4 pl-6 pr-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}