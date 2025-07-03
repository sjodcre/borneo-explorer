'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Ship, Users } from 'lucide-react';

export default function Availability() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Ship Availability</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check real-time availability for MV Celebes Explorer. See when the ship is full and secure your spot on our next diving adventure.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Ship className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold mb-1">Vessel Capacity</h3>
            <p className="text-gray-600">Up to 10 divers</p>
          </Card>
          <Card className="text-center p-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold mb-1">Group Bookings</h3>
            <p className="text-gray-600">Private charters available</p>
          </Card>
          <Card className="text-center p-6">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-bold mb-1">Booking Window</h3>
            <p className="text-gray-600">Book up to 12 months ahead</p>
          </Card>
        </div>

        {/* Availability Calendar */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Real-Time Availability Calendar</CardTitle>
            <p className="text-gray-600">
              This calendar shows the current booking status for MV Celebes Explorer. 
              Green dates indicate availability, while red dates show when the ship is full.
            </p>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-hidden rounded-lg border">
              <iframe 
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQsfWQxp909tu3T8D8e5SnlWJvtjLeITuFS1Z3zoi1G-IXqk3oyC7AqWS04bWdoQVq9c_2SNaoMLSFI/pubhtml?widget=true&amp;headers=false"
                width="100%" 
                height="600"
                frameBorder="0"
                title="MV Celebes Explorer Availability Calendar"
                className="min-h-[600px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Booking Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How to Book</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Check Availability</h4>
                  <p className="text-gray-600">Use the calendar above to find available dates for your preferred trip duration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Submit Booking Request</h4>
                  <p className="text-gray-600">Fill out our booking form with your preferred dates and package.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Confirmation</h4>
                  <p className="text-gray-600">We'll confirm availability and send you payment details within 24 hours.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                  !
                </div>
                <div>
                  <h4 className="font-semibold">Sipadan Permits</h4>
                  <p className="text-gray-600">All our packages include guaranteed Sipadan diving permits.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                  !
                </div>
                <div>
                  <h4 className="font-semibold">Group Discounts</h4>
                  <p className="text-gray-600">Special rates available for groups of 4 or more divers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                  !
                </div>
                <div>
                  <h4 className="font-semibold">Weather Considerations</h4>
                  <p className="text-gray-600">Diving schedules may be adjusted due to weather conditions for safety.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Adventure?</h2>
          <p className="text-xl text-gray-600 mb-8">Secure your spot on our next diving expedition</p>
          <a 
            href="/book-now" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition duration-300 inline-block"
          >
            Book Your Dive Trip
          </a>
        </div>
      </div>
    </div>
  );
} 