"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Hero slides data
const heroSlides = [
  {
    id: 1,
    title: "The River's Secret",
    tagline: "A story of courage and discovery",
    description: "Follow Amara's journey through Uganda's breathtaking landscapes as she uncovers the truth about her ancestry.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2225&q=80",
    cta: {
      primary: {
        text: "Watch Trailer",
        link: "/films/the-rivers-secret",
        icon: FaPlay
      },
      secondary: {
        text: "Learn More",
        link: "/films/the-rivers-secret/about"
      }
    }
  },
  {
    id: 2,
    title: "Kampala Nights",
    tagline: "The city never sleeps",
    description: "An anthology series exploring the vibrant nightlife and untold stories of Uganda's capital city.",
    image: "https://images.unsplash.com/photo-1579846321882-45cf6140c2ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
    cta: {
      primary: {
        text: "Now Streaming",
        link: "/watch/kampala-nights",
        icon: FaPlay
      },
      secondary: {
        text: "Episodes",
        link: "/tv-series/kampala-nights"
      }
    }
  },
  {
    id: 3,
    title: "Pearl of Africa",
    tagline: "Beauty beyond imagination",
    description: "Discover Uganda's stunning landscapes and wildlife in this award-winning documentary series.",
    image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    cta: {
      primary: {
        text: "Watch Now",
        link: "/films/pearl-of-africa",
        icon: FaPlay
      },
      secondary: {
        text: "Behind the Scenes",
        link: "/films/pearl-of-africa/making"
      }
    }
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts with navigation
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    setAutoplay(false);
    // Resume autoplay after 8 seconds of inactivity
    setTimeout(() => setAutoplay(true), 8000);
  };

  const nextSlide = () => {
    handleSlideChange((activeSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    handleSlideChange((activeSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-20 h-full flex items-center">
        <div className="w-full lg:w-2/3 xl:w-1/2 pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="inline-block bg-secondary text-dark text-sm font-bold tracking-wide px-3 py-1 mb-4 uppercase">
                  Featured
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 tracking-wide">
                  {currentSlide.title}
                </h1>
                <p className="text-2xl text-secondary font-medium mb-4">
                  {currentSlide.tagline}
                </p>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 max-w-xl"
              >
                {currentSlide.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Link 
                  href={currentSlide.cta.primary.link} 
                  className="btn-primary px-8 py-4 rounded-none"
                >
                  <currentSlide.cta.primary.icon className="mr-2 w-4 h-4" />
                  {currentSlide.cta.primary.text}
                </Link>
                <Link 
                  href={currentSlide.cta.secondary.link} 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark transition-colors px-8 py-4 inline-flex items-center font-medium"
                >
                  {currentSlide.cta.secondary.text}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center space-x-2">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center text-white hover:text-secondary transition-colors"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'bg-secondary w-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center text-white hover:text-secondary transition-colors"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
} 