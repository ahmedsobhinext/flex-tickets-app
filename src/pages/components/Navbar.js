// export default function Navbar() {
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Flex Ticket</h1>
//         <ul className="flex space-x-4">
//           <li>
//             <a href="/" className="hover:text-blue-300">
//               Home
//             </a>
//           </li>
          
//           <li>
//             <a href="/signin" className="hover:text-blue-300">
//               Sign In
//             </a>
//           </li>

//           <li>
//             <a href="/signup" className="hover:text-blue-300">
//               Sign Up
//             </a>
//           </li>

//           <li>
//             <a href="/about" className="hover:text-blue-300">
//               About Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <nav className="backdrop-blur-lg bg-white/10 py-4 px-6 fixed w-full top-0 z-50 border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold text-white">FlexTicket</span>
        <div className="space-x-6">
          <a href="/" className="text-white hover:text-blue-200 transition-colors">Events</a>
          <a href="/signin" className="text-white hover:text-blue-200 transition-colors">Sign In</a>
          <a href="/signup" className="text-white hover:text-blue-200 transition-colors">Sign Up</a>
          <a href="/about" className="text-white hover:text-blue-200 transition-colors">About Us</a>

        </div>
      </div>
    </nav>
  )
}