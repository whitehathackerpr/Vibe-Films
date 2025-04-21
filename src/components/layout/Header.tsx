"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaFacebook, FaYoutube, FaSearch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { cn } from '@/utils/cn'

// Main navigation categories
const mainNavCategories = [
  { 
    name: 'Films', 
    path: '/films',
    subMenu: [
      { name: 'Latest Releases', path: '/films/latest' },
      { name: 'Coming Soon', path: '/films/upcoming' },
      { name: 'Award Winners', path: '/films/awards' },
      { name: 'Film Shop', path: '/shop/films' },
    ]
  },
  { 
    name: 'TV & Series', 
    path: '/tv-series',
    subMenu: [
      { name: 'Drama Series', path: '/tv-series/drama' },
      { name: 'Documentaries', path: '/tv-series/documentaries' },
      { name: 'Original Shows', path: '/tv-series/originals' },
      { name: 'Stream Now', path: '/watch' },
    ]
  },
  { 
    name: 'Services', 
    path: '/services',
    subMenu: [
      { name: 'Live-Action Production', path: '/services/live-action' },
      { name: 'Post-Production', path: '/services/post-production' },
      { name: 'Motion Graphics', path: '/services/motion-graphics' },
      { name: 'Actor Training', path: '/services/actor-training' },
    ]
  },
  { 
    name: 'Portfolio', 
    path: '/portfolio',
    subMenu: [
      { name: 'Feature Films', path: '/portfolio/feature-films' },
      { name: 'Documentaries', path: '/portfolio/documentaries' },
      { name: 'Short Films', path: '/portfolio/short-films' },
      { name: 'Music Videos', path: '/portfolio/music-videos' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'News', path: '/news' },
  { 
    name: 'Shop', 
    path: '/shop',
    subMenu: [
      { name: 'Films', path: '/shop/films' },
      { name: 'Merchandise', path: '/shop/merchandise' },
      { name: 'Digital Downloads', path: '/shop/downloads' },
      { name: 'Gift Cards', path: '/shop/gift-cards' },
    ]
  },
]

// Secondary links
const secondaryLinks = [
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
]

// Social media links
const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/vibefilms' },
  { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/vibefilms' },
  { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/vibefilms' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Search for:', searchQuery)
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-dark shadow-md py-2' 
          : 'bg-gradient-to-b from-dark/80 to-transparent py-3'
      )}
    >
      {/* Top Secondary Navigation */}
      <div className="hidden lg:block border-b border-gray-700/50">
        <div className="container flex items-center justify-between py-2">
          {/* Secondary Links */}
          <div className="flex items-center space-x-6">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-300 text-sm hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links & Search */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-secondary transition-colors ml-2"
              aria-label="Search"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 py-2">
          <div className="flex items-center">
            <div className="w-14 h-14 relative mr-3">
              <Image 
                src="/logo.png" 
                alt="Vibe Films Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="font-serif font-bold text-white">
              <span className="text-3xl tracking-wider">VIBE</span>
              <span className="text-3xl text-secondary tracking-wider">FILMS</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {mainNavCategories.map((category) => (
              <li key={category.name} className="group relative"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  href={category.path}
                  className={cn(
                    'text-white font-medium text-base tracking-wide hover:text-secondary py-4 px-1 inline-block transition-colors uppercase',
                    activeCategory === category.name ? 'text-secondary' : ''
                  )}
                >
                  {category.name}
                </Link>
                
                {/* Dropdown Menu */}
                {category.subMenu && (
                  <div className={cn(
                    "absolute top-full left-0 bg-dark min-w-[200px] shadow-xl rounded-b-md overflow-hidden transform origin-top transition-all duration-200",
                    activeCategory === category.name ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                  )}>
                    <ul className="py-2">
                      {category.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.path}
                            className="block px-5 py-2 text-gray-300 hover:bg-primary hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-secondary transition-colors"
            aria-label="Search"
          >
            <FaSearch className="w-5 h-5" />
          </button>
          <button
            className="z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Search Overlay */}
        <div className={cn(
          "fixed inset-0 bg-dark/95 flex items-center justify-center z-50 transition-all duration-300",
          searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <button 
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-secondary"
            aria-label="Close search"
          >
            <FaTimes className="w-6 h-6" />
          </button>
          
          <div className="w-full max-w-3xl px-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Vibe Films..."
                className="w-full bg-transparent border-b-2 border-primary/30 focus:border-secondary text-white text-xl py-3 px-2 outline-none placeholder:text-gray-500"
                aria-label="Search"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary"
                aria-label="Submit search"
              >
                <FaSearch className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-dark bg-opacity-98 flex flex-col z-40 transition-all duration-300 lg:hidden',
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex-1 flex flex-col overflow-y-auto pt-20 pb-6 px-6">
            {/* Main Categories */}
            <nav className="mt-8">
              <ul className="space-y-6">
                {mainNavCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.path}
                      className="text-white text-xl font-medium uppercase tracking-wide hover:text-secondary transition-colors block mb-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    {category.subMenu && (
                      <ul className="ml-4 space-y-3">
                        {category.subMenu.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.path}
                              className="text-gray-400 hover:text-secondary transition-colors block"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Secondary Links */}
            <div className="mt-auto pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-6">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-gray-400 hover:text-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Social Links in Mobile Menu */}
              <div className="flex items-center space-x-6 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 