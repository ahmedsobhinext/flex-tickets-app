export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg mt-16 py-8 border-t border-white/20">
      <div className="container mx-auto px-4 text-center text-white/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">FlexTicket</h4>
            <p className="text-sm">Your gateway to unforgettable experiences</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-300 transition-colors">About Us</a>
              <a href="#" className="block hover:text-blue-300 transition-colors">FAQs</a>
              <a href="#" className="block hover:text-blue-300 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-sm">
          © 2024 FlexTicket. All rights reserved.
        </div>
      </div>
    </footer>
  )
}