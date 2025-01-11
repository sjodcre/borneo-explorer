'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Fish, Anchor, Waves } from 'lucide-react'

const diveSites = [
  {
    id: 'barracuda-point',
    name: 'Barracuda Point',
    image: '/images/dive-sites/barracuda-point.webp',
    depth: '15-30m',
    level: 'Advanced',
    description: 'Famous for its massive schools of barracudas forming tornado-like formations. Also frequent sightings of grey reef sharks, white tip sharks, and large schools of jackfish.',
    highlights: [
      'Barracuda tornados',
      'Grey reef sharks',
      'Strong currents',
      'Wall diving'
    ]
  },
  {
    id: 'drop-off',
    name: 'South Point Drop-Off',
    image: '/images/dive-sites/drop-off.webp',
    depth: '20-40m',
    level: 'Advanced',
    description: 'A dramatic wall dropping into the abyss. Known for hammerhead shark sightings and large pelagic species. Strong currents make this an exciting dive for experienced divers.',
    highlights: [
      'Hammerhead sharks',
      'Eagle rays',
      'Deep wall',
      'Pelagic species'
    ]
  },
  {
    id: 'turtle-cave',
    name: 'Turtle Cave',
    image: '/images/dive-sites/turtle-cave.webp',
    depth: '10-25m',
    level: 'Advanced',
    description: 'Named for its resident green and hawksbill turtles. Features a cave system and vibrant coral gardens. Perfect for underwater photography.',
    highlights: [
      'Sea turtles',
      'Cave formations',
      'Coral gardens',
      'Macro life'
    ]
  },
  {
    id: 'mid-reef',
    name: 'Mid Reef',
    image: '/images/dive-sites/mid-reef.webp',
    depth: '5-20m',
    level: 'Advanced',
    description: 'A ridge featuring pristine coral gardens and abundant marine life. Perfect for observing smaller reef species and occasional turtle encounters.',
    highlights: [
      'Coral gardens',
      'Reef sharks',
      'Turtles',
      'Schooling fish'
    ]
  }
];

export default function DiveSites() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Sipadan Dive Sites</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of the world's most spectacular dive sites, featuring dramatic walls, 
            pristine coral reefs, and abundant marine life
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          <Card className="text-center p-6">
            <Fish className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Marine Life</h3>
            <p>3000+ Species</p>
          </Card>
          <Card className="text-center p-6">
            <Waves className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Visibility</h3>
            <p>20-30 meters</p>
          </Card>
          <Card className="text-center p-6">
            <Anchor className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Max Depth</h3>
            <p>40 meters</p>
          </Card>
        </div>

        {/* Dive Sites */}
        <div className="space-y-12">
          {diveSites.map((site) => (
            <div key={site.id} id={site.id} className="scroll-mt-20">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{site.name}</h2>
                    <div className="flex space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Depth: {site.depth}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Level: {site.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{site.description}</p>
                    <h3 className="font-bold mb-2">Highlights:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {site.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Marine Life Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Marine Life</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3">Large Pelagics</h3>
              <ul className="space-y-2">
                <li>• Hammerhead sharks</li>
                <li>• Grey reef sharks</li>
                <li>• Eagle rays</li>
                <li>• Barracudas</li>
                <li>• Giant trevallies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Reef Residents</h3>
              <ul className="space-y-2">
                <li>• Green turtles</li>
                <li>• Hawksbill turtles</li>
                <li>• Bumphead parrotfish</li>
                <li>• Napoleon wrasse</li>
                <li>• Various reef fish</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Macro Life</h3>
              <ul className="space-y-2">
                <li>• Nudibranchs</li>
                <li>• Pygmy seahorses</li>
                <li>• Leaf scorpionfish</li>
                <li>• Mantis shrimp</li>
                <li>• Various crustaceans</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive Sipadan?</h2>
          <p className="text-xl text-gray-600 mb-8">Book your liveaboard adventure today</p>
          <Link 
            href="/diving-packages" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition duration-300"
          >
            View Packages
          </Link>
        </div>
      </div>
    </div>
  )
}