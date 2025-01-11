'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Ship } from 'lucide-react'

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Diving Packages', path: '/diving-packages' },
    { name: 'The Vessel', path: '/the-vessel' },
    { name: 'Dive Sites', path: '/dive-sites' },
    { name: 'Book Now', path: '/book-now' }
  ]

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Ship className="h-8 w-8" />
          <span className="text-2xl font-bold">Celebes Explorer</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-800 transition-colors duration-200">
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

export default Header