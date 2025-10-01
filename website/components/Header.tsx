'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 pt-0">
        <div className="relative flex items-center">
          {/* Main Header Window */}
          <div className="flex-1 bg-gradient-to-r from-cyan-700/35 to-green-600/35 backdrop-blur-md rounded-b-2xl rounded-t-none shadow-lg border border-white/20 pr-6 pl-2 py-3">
            <div className="flex items-center justify-between h-12">
              {/* Logo inside header to the left of search */}
              <Link href="/" className="hidden md:inline-flex items-center mr-2">
                <Image
                  src="/LeechyMainLogo.png"
                  alt="Leechy logo"
                  width={140}
                  height={140}
                  className="object-contain drop-shadow"
                  priority
                />
              </Link>
              {/* Desktop Search */}
              <div className="hidden md:flex flex-1 max-w-md mx-2">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="search"
                    placeholder="Search listings..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/listings/new"
                  className="text-white font-semibold hover:text-white/80 transition-colors"
                >
                  Post a new listing
                </Link>
                <Link href="/" className="text-white/90 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/listings" className="text-white/90 hover:text-white transition-colors">
                  Listings
                </Link>
                <Link href="/signup" className="text-white/90 hover:text-white transition-colors">
                  Sign up
                </Link>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/5 hover:text-white backdrop-blur-sm bg-transparent" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-white/30 bg-white/10 text-white backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden mt-2 ml-16 bg-gradient-to-r from-cyan-700/35 to-green-600/35 backdrop-blur-md rounded-2xl shadow-lg border border-white/20",
            isMobileMenuOpen ? "block" : "hidden"
          )}
        >
          {/* Mobile Search */}
          <div className="p-4 border-b border-white/30">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="search"
                placeholder="Search listings..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/listings/new"
              className="text-white font-semibold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Post a new listing
            </Link>
            <Link
              href="/"
              className="text-white/90 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/listings"
              className="text-white/90 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              href="/signup"
              className="text-white/90 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
            <div className="pt-2">
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}