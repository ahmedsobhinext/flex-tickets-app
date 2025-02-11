export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Flex Ticket</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>
          
          <li>
            <a href="/signin" className="hover:text-blue-300">
              Sign In
            </a>
          </li>

          <li>
            <a href="/signup" className="hover:text-blue-300">
              Sign Up
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-blue-300">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}