'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Plane, Car, Ship, Hotel, Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Map from '../components/Maps'

export default function GettingHere() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">How to Get Here</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to world-class diving starts with a scenic trip to Semporna
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Step 1: Fly to Tawau</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Tawau Airport (TWU) is the gateway to Sipadan. Regular flights available from:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Kuala Lumpur (KUL) - Multiple daily flights by Malaysia Airlines, AirAsia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Kota Kinabalu (BKI) - Frequent connections available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>International connections via Kota Kinabalu or Kuala Lumpur</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Step 2: Transfer to Semporna</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  From Tawau Airport to Semporna (approximately 1.5 hours):
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Private transfer service (recommended) - We can arrange this for you</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Shared minivan service - Regular departures throughout the day</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Taxi service available at the airport</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Location & Route</h2>
          <div className="rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </div>
    </div>
  )
}