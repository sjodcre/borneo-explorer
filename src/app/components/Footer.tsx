const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Bali Tarantula</h3>
              <p>Explore the beauty of Bali with our tailor-made tour packages.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/packages" className="hover:text-gray-300">Packages</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>Email: info@balitarantula.com</p>
              <p>Phone: +62 123 456 7890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Bali Tarantula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  