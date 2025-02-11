export default function SearchBar() {
    const handleSearch = (e) => {
      e.preventDefault();
      const query = e.target.query.value;
      console.log('Searching for:', query);
      // Redirect or filter events based on the query
    };
  
    return (
      <form onSubmit={handleSearch} className="max-w-md mx-auto bg-white p-4 rounded shadow">
        <div className="flex">
          <input
            type="text"
            name="query"
            placeholder="Search for events..."
            className="w-full p-2 border rounded-l focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
    );
  }