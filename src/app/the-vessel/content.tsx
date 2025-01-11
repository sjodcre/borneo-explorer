'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Ship, Users, Bath, Camera, Utensils, Wifi } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function VesselContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">MV Celebes Explorer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premium liveaboard vessel for exploring Sipadan's underwater wonders
          </p>
        </div>

        {/* Vessel Image */}
        <div className="relative h-[60vh] mb-16 rounded-xl overflow-hidden">
          <Image
            src="/images/vessel.webp"
            alt="MV Celebes Explorer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Card className="p-6 text-center">
            <Ship className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Length</h3>
            <p>35 meters</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Capacity</h3>
            <p>10 divers</p>
          </Card>
          <Card className="p-6 text-center">
            <Bath className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Cabins</h3>
            <p>5 en-suite</p>
          </Card>
          <Card className="p-6 text-center">
            <Camera className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold">Camera Room</h3>
            <p>Dedicated space</p>
          </Card>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Vessel Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Diving Facilities</h3>
              <ul className="space-y-3">
                <li>• Spacious dive deck with individual gear storage</li>
                <li>• Nitrox available</li>
                <li>• Dedicated camera room with charging stations</li>
                <li>• Fresh water rinse tanks</li>
                <li>• Emergency oxygen and first aid equipment</li>
                <li>• Professional dive guides</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Comfort & Leisure</h3>
              <ul className="space-y-3">
                <li>• Air-conditioned saloon and cabins</li>
                <li>• En-suite bathrooms in all cabins</li>
                <li>• Indoor and outdoor dining areas</li>
                <li>• Sun deck with loungers</li>
                <li>• WiFi available when in range</li>
                <li>• Entertainment system in saloon</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cabins */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Accommodation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/cabin.webp"
                alt="Cabin Interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Comfortable Cabins</h3>
              <p className="text-gray-600 mb-4">
                Our vessel features 5 air-conditioned cabins, each with en-suite bathrooms. 
                All cabins are designed for comfort after long days of diving, with:
              </p>
              <ul className="space-y-2">
                <li>• Premium mattresses and linens</li>
                <li>• Individual climate control</li>
                <li>• Storage space for personal items</li>
                <li>• Daily housekeeping service</li>
                <li>• Fresh towels provided daily</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Safety Equipment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Navigation & Communication</h3>
              <ul className="space-y-2">
                <li>• GPS navigation system</li>
                <li>• Radar</li>
                <li>• Satellite communication</li>
                <li>• Emergency position indicating radio beacon</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Emergency Equipment</h3>
              <ul className="space-y-2">
                <li>• Life rafts</li>
                <li>• Emergency oxygen units</li>
                <li>• First aid kits</li>
                <li>• DAN emergency assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Sipadan?</h2>
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
  );
}