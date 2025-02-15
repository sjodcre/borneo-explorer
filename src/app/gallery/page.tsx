'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Utensils, Ship, Users, Map } from 'lucide-react';

const PhotoGallery = () => {
  const galleryCategories = [
    {
      id: 'diving',
      icon: <Camera className="w-4 h-4" />,
      title: 'Diving Adventures',
      description: "Experience world-class diving at Sipadan's legendary sites",
      images: [
        {
          src: '/images/gallery/diving/264193434_1238949199849904_2063098377465929451_n.jpg',
          alt: 'Divers exploring Sipadan waters',
          caption: "Daily diving at Sipadan's best sites"
        },
        {
          src: '/images/gallery/diving/265083869_971472880245574_7286558375051117909_n.jpg',
          alt: 'Divers in crystal clear waters',
          caption: 'Crystal clear visibility year-round'
        }
      ]
    },
    {
      id: 'vessel',
      icon: <Ship className="w-4 h-4" />,
      title: 'MV Celebes Explorer',
      description: 'Your comfortable home at sea',
      images: [
        {
          src: '/images/gallery/vessel/NIC_5616.jpg',
          alt: 'Vessel interior',
          caption: 'Modern and comfortable lounge area'
        },
        {
          src: '/images/gallery/vessel/263668185_328301125689198_5226678590749593793_n.jpg',
          alt: 'Cabin interior',
          caption: 'Well-appointed cabins for restful nights'
        }
      ]
    },
    {
      id: 'dining',
      icon: <Utensils className="w-4 h-4" />,
      title: 'Culinary Experience',
      description: 'Delicious meals prepared fresh daily',
      images: [
        {
          src: '/images/gallery/dining/Dinner3.jpeg',
          alt: 'Fresh seafood dishes',
          caption: 'Freshly prepared seafood specialties'
        },
        {
          src: '/images/gallery/dining/Lunch1.jpeg',
          alt: 'Buffet spread',
          caption: 'Varied menu for all tastes'
        }
      ]
    },
    {
      id: 'memories',
      icon: <Users className="w-4 h-4" />,
      title: 'Guest Memories',
      description: 'Unforgettable moments from our happy divers',
      images: [
        {
          src: '/images/gallery/guests/1.jpeg',
          alt: 'Happy divers',
          caption: 'Creating lasting memories'
        },
        {
          src: '/images/gallery/guests/WhatsApp Image 2021-12-18 at 14.21.22.jpeg',
          alt: 'Group photo',
          caption: 'New friendships formed'
        }
      ]
    },
    {
      id: 'location',
      icon: <Map className="w-4 h-4" />,
      title: 'Sipadan Island',
      description: 'Paradise found in the Celebes Sea',
      images: [
        {
          src: '/images/gallery/location/261710730_433988378299090_3621221333237422314_n.jpg',
          alt: 'Pristine beach',
          caption: 'Pristine beaches of Sipadan'
        },
        {
          src: '/images/gallery/location/264356237_231588505775082_4165810056012296612_n.jpg',
          alt: 'Island view',
          caption: 'Tropical paradise awaits'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center">Photo Gallery</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 text-center px-2">
        Dive into our world of underwater adventures and liveaboard comfort
      </p>
      
      <Tabs defaultValue="diving" className="w-full">
        <TabsList className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center mb-6 sm:mb-8 gap-1 sm:gap-2 p-1 rounded-lg">
          {galleryCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id} 
              className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2 sm:px-6 sm:py-2 text-center min-h-[64px] sm:min-h-0"
            >
              {category.icon}
              <span className="text-[11px] sm:text-sm font-medium leading-tight">{category.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {galleryCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-base sm:text-lg text-gray-600 px-2">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.images.map((image, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative h-60 sm:h-72">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-3 sm:p-4">
                    <p className="text-center text-sm sm:text-base text-gray-600">{image.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PhotoGallery;