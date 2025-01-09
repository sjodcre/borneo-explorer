'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Palmtree } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Palmtree className="h-6 w-6" />
          <span className="text-2xl font-bold">Bali Tarantula</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {['Home', 'About', 'Packages', 'Contact'].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-200">
                    {item}
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

