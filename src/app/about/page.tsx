import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Bali Tarantula</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <Image
            src="/images/about-us.webp?height=400&width=600&text=About Us"
            alt="About Bali Tarantula"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Bali Tarantula was founded in 2010 with a passion for sharing the beauty and culture of Bali with travelers from around the world. Our team of experienced local guides and travel experts work tirelessly to create unforgettable experiences for our clients.
          </p>
          <p className="text-gray-600">
            We specialize in crafting tailor-made tour packages that cater to various interests, from adventure seekers to culture enthusiasts. Our commitment to excellence and sustainable tourism has made us a trusted name in Bali's travel industry.
          </p>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Expert Local Guides', 'Customized Experiences', 'Sustainable Tourism'].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/images/member.webp?height=300&width=300&text=Team Member ${i}`}
                alt={`Team Member ${i}`}
                width={300}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Team Member {i}</h3>
                <p className="text-gray-600">Position</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
