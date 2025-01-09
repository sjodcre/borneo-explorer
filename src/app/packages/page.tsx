import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const packages = [
  { id: 1, name: 'Bali Adventure Package', description: 'Experience the thrill of Bali with our adventure package.', price: '$999', image: '/images/bali-adventure.webp' },
  { id: 2, name: 'Bali Cultural Tour', description: 'Immerse yourself in Balinese culture with our guided tour.', price: '$799', image: '/images/bali-cultural.webp' },
  { id: 3, name: 'Bali Beach Getaway', description: 'Relax and unwind on Bali\'s beautiful beaches.', price: '$899', image: '/images/bali-beach.webp' },
  { id: 4, name: 'Bali Culinary Experience', description: 'Taste the flavors of Bali with our food-focused tour.', price: '$1099', image: '/images/bali-culinary.webp' },
  { id: 5, name: 'Bali Wellness Retreat', description: 'Rejuvenate your mind and body with our wellness package.', price: '$1299', image: '/images/bali-wellness.webp' },
  { id: 6, name: 'Bali Photography Tour', description: 'Capture the beauty of Bali with our photography-focused tour.', price: '$1199', image: '/images/bali-photography.webp' },
]

export default function Packages() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Packages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.id}>
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={400}
                height={300}
                className="w-full rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">{pkg.price}</span>
              <Button asChild>
                <Link href={`/contact?topic=${encodeURIComponent(pkg.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                  Book Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
