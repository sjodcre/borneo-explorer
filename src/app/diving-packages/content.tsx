'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DivingPackagesContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Sipadan Diving Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class diving with our exclusive Sipadan packages
          </p>
        </div>

        {/* 4D3N Package */}
        <div id="4d3n" className="mb-16 scroll-mt-24">
          <Card>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/package-4d3n.webp"
                  alt="4D3N Sipadan Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">4D3N Sipadan Cruise</h2>
                <p className="text-secondary font-bold mb-4">SGD 1,088 per person</p>
                <p className="text-gray-600 mb-6">
                  Perfect for a long weekend getaway, featuring 9 dives across Sipadan's most spectacular sites.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>9 dives in Sipadan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Full board meals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Permit fees included</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Professional guides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Equipment available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Max 10 divers</span>
                    </div>
                  </div>
                </div>
                <Link href="/book-now?package=4d3n">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* 5D4N Package */}
        <div id="5d4n" className="mb-16 scroll-mt-24">
          <Card>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/package-5d4n.webp"
                  alt="5D4N Sipadan Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">5D4N Sipadan Adventure</h2>
                <p className="text-xl text-blue-600 font-bold mb-4">SGD 1,585 per person</p>
                <p className="text-gray-600 mb-6">
                  Extended cruise with 12 dives, perfect for experiencing all of Sipadan's marine life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>12 dives in Sipadan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Full board meals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Permit fees included</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Professional guides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Equipment available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Extra dive time</span>
                    </div>
                  </div>
                </div>
                <Link href="/book-now?package=5d4n">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Charter Package */}
        <div id="charter" className="mb-16 scroll-mt-24">
          <Card>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/package-charter.webp"
                  alt="Private Charter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Private Charter</h2>
                <p className="text-xl text-blue-600 font-bold mb-4">SGD 14,540 for up to 10 divers</p>
                <p className="text-gray-600 mb-6">
                  Exclusive vessel charter with customizable itinerary.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Exclusive vessel use</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Custom schedule</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>All permits included</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Private guides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Flexible meals</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Up to 4 dives/day</span>
                    </div>
                  </div>
                </div>
                <Link href="/book-now?package=charter">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Requirements Section */}
        <div className="bg-blue-50 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold mb-6">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                  <span>Advanced Open Water certification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                  <span>Minimum 20 logged dives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                  <span>Valid diving insurance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Additional Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                  <span>Nitrox available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-1" />
                  <span>Equipment rental available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}