import Image from 'next/image'
import Link from 'next/link'
import { Anchor, Fish, Ship, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/sipadan-hero.webp"
          alt="Sipadan diving experience"
          sizes="100vw"
          priority
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dive Sipadan's Legendary Waters</h1>
            <p className="text-xl md:text-2xl mb-8">Experience world-class diving at Sipadan's most spectacular sites aboard MV Celebes Explorer</p>
            <Link href="/diving-packages" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition duration-300 inline-flex items-center space-x-2">
              <span>View Packages</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Sipadan Permits</h3>
              <p className="text-gray-600">We secure your Sipadan diving permits, ensuring access to world-renowned dive sites.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Liveaboard</h3>
              <p className="text-gray-600">Comfortable accommodations and professional crew aboard our dedicated diving vessel.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Dive Guides</h3>
              <p className="text-gray-600">PADI-certified guides with extensive knowledge of Sipadan's marine life and diving conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Diving Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/package-4d3n.webp"
                  alt="4D3N Cruise Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">4D3N Sipadan Cruise</h3>
                <p className="text-gray-600 mb-4">9 dives in Sipadan - perfect for a long weekend getaway.</p>
                <p className="text-blue-600 font-bold mb-4">From SGD 1,088 per person</p>
                <Link href="/diving-packages#4d3n" className="text-blue-600 font-semibold hover:text-blue-800">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/package-5d4n.webp"
                  alt="5D4N Cruise Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">5D4N Sipadan Adventure</h3>
                <p className="text-gray-600 mb-4">Extended cruise with more dive time at each site.</p>
                <p className="text-blue-600 font-bold mb-4">From SGD 1,585 per person</p>
                <Link href="/diving-packages#5d4n" className="text-blue-600 font-semibold hover:text-blue-800">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/package-charter.webp"
                  alt="Private Charter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Private Charter</h3>
                <p className="text-gray-600 mb-4">Exclusive vessel charter for groups up to 10 divers.</p>
                <p className="text-blue-600 font-bold mb-4">From SGD 14,540 total</p>
                <Link href="/diving-packages#charter" className="text-blue-600 font-semibold hover:text-blue-800">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Species of Coral</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3000+</div>
              <div className="text-blue-200">Fish Species</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20m+</div>
              <div className="text-blue-200">Visibility</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-blue-200">Dives per Trip</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Divers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-600 mb-4 italic">"Incredible diving experience! The hammerhead sharks at South Point and the barracuda tornado at Barracuda Point were unforgettable. Professional crew and comfortable accommodation."</p>
              <p className="font-bold">- Marcus L., Advanced Open Water Diver</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-600 mb-4 italic">"As a underwater photographer, I couldn't ask for better dive sites. The crew knew exactly where to find the best marine life and the visibility was exceptional."</p>
              <p className="font-bold">- Sarah K., PADI Divemaster</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Sipadan?</h2>
          <p className="text-xl text-gray-600 mb-8">Secure your spot on our next diving expedition</p>
          <Link href="/book-now" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition duration-300">
            Book Your Dive Trip
          </Link>
        </div>
      </section>
    </div>
  )
}