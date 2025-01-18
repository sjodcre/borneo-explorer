import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Existing columns remain the same */}
          <div>
            <h3 className="text-xl font-bold mb-4">Celebes Explorer</h3>
            <p className="text-blue-100">Malaysia's premier Sipadan liveaboard vessel, offering exclusive diving experiences at the world's top dive sites.</p>
            {/* Add social media icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com/celebesexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/celebesexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Packages</h3>
            <ul className="space-y-2">
              <li><Link href="/diving-packages#4d3n" className="text-blue-100 hover:text-white">4D3N Sipadan Cruise</Link></li>
              <li><Link href="/diving-packages#5d4n" className="text-blue-100 hover:text-white">5D4N Sipadan Adventure</Link></li>
              <li><Link href="/diving-packages#charter" className="text-blue-100 hover:text-white">Private Charter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/the-vessel" className="text-blue-100 hover:text-white">About Our Vessel</Link></li>
              <li><Link href="/dive-sites" className="text-blue-100 hover:text-white">Dive Sites</Link></li>
              <li><Link href="/getting-here" className="text-blue-100 hover:text-white">How to Get Here</Link></li>
              <li><Link href="/book-now" className="text-blue-100 hover:text-white">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+60 12 345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@celebesexplorer.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Semporna, Sabah, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 MV Celebes Explorer. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-blue-100">PADI 5 Star Dive Operator | Licensed Sipadan Permit Holder</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer