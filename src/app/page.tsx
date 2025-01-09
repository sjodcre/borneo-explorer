import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
      <Image
        src="/images/bali-landscape.webp"
        alt="Hero image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Bali Tarantula</h1>
            <p className="text-xl mb-8">Discover the magic of Bali with our exclusive tour packages</p>
            <Link href="/packages" className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">
              Explore Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/images/bali-adventure.webp?height=300&width=400&text=Package ${i}`}
                  alt={`Package ${i}`}
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bali Adventure Package {i}</h3>
                  <p className="text-gray-600 mb-4">Experience the thrill of Bali with our adventure package.</p>
                  <Link href="/packages" className="text-blue-600 font-bold hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"Amazing experience with Bali Tarantula! The tour was well-organized and our guide was knowledgeable and friendly."</p>
                <p className="font-bold">- Happy Traveler {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
