"use client"

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player/lazy'
import { FaPlay, FaChevronRight, FaInfoCircle } from 'react-icons/fa'
import { getImageSrc, DEFAULT_THUMBNAIL } from "@/utils/imageUtils"

// Sample featured movies (in a real implementation, these would come from a CMS or API)
const featuredMovies = [
  {
    id: 1,
    title: 'The Lion\'s Whisper',
    tagline: 'Her courage echoes across the savanna',
    year: 2023,
    duration: '1h 48m',
    category: 'Drama',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    slug: '/movies/the-lions-whisper',
    description: 'A coming-of-age drama about a young Ugandan girl who discovers her voice and courage during a time of political upheaval.',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Kampala Stories',
    tagline: 'Every corner holds a tale',
    year: 2022,
    duration: '45m per episode',
    category: 'TV Series',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2225&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    slug: '/movies/kampala-stories',
    description: 'An anthology series exploring the interconnected lives of diverse residents in Uganda\'s vibrant capital city.',
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Pearl of Africa',
    tagline: 'Nature\'s untold wonders',
    year: 2023,
    duration: '2h 10m',
    category: 'Documentary',
    poster: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    slug: '/movies/pearl-of-africa',
    description: 'A breathtaking documentary showcasing Uganda\'s stunning natural beauty and the conservation efforts to protect it.',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Savanna Dreams',
    tagline: 'Where wild hearts roam',
    year: 2021,
    duration: '30m',
    category: 'Short Film',
    thumbnail: 'https://images.unsplash.com/photo-1546887276-25a8a29bacd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    slug: '/movies/savanna-dreams',
    rating: 4.3,
  },
  {
    id: 5,
    title: 'Urban Beat',
    tagline: 'The rhythm of city life',
    year: 2022,
    duration: '5m',
    category: 'Music Video',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    slug: '/movies/urban-beat',
    rating: 4.6,
  },
];

// Updated movie type to help with TypeScript
type Movie = {
  id: number;
  title: string;
  tagline: string;
  year: number;
  duration: string;
  category: string;
  poster?: string;
  thumbnail?: string;
  trailer?: string;
  slug: string;
  description?: string;
  rating: number;
};

// Generate star rating component
const StarRating = ({ rating }: { rating: number }) => {
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-secondary text-lg">★</span>
      ))}
      
      {hasHalfStar && <span className="text-secondary text-lg">★</span>}
      
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-400 text-lg">★</span>
      ))}
      
      <span className="ml-1 text-white text-sm">{rating.toFixed(1)}</span>
    </div>
  );
};

export default function MoviesSection() {
  const [activeMovie, setActiveMovie] = useState(featuredMovies[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleMovieSelect = (movie: typeof featuredMovies[0]) => {
    // Only change if selecting a different movie
    if (movie.id !== activeMovie.id) {
      setIsPlaying(false);
      setIsVideoLoaded(false);
      setActiveMovie(movie);
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-dark" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <span className="inline-block text-secondary uppercase tracking-wider font-bold text-sm mb-2">
              Featured
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
              Latest Releases
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              Watch trailers and discover our newest original films and series
            </p>
          </div>
          
          <Link 
            href="/movies" 
            className="hidden md:flex items-center text-secondary hover:text-white transition-colors mt-4 md:mt-0 group"
          >
            View All
            <FaChevronRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Featured Movie with Trailer */}
          <motion.div
            className="xl:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video w-full relative overflow-hidden">
                {isPlaying ? (
                  <div className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <ReactPlayer
                      ref={playerRef}
                      url={activeMovie.trailer || ''}
                      width="100%"
                      height="100%"
                      playing={isPlaying}
                      controls={true}
                      onReady={() => setIsVideoLoaded(true)}
                      onEnded={() => {
                        setIsPlaying(false);
                        setIsVideoLoaded(false);
                      }}
                      onError={() => {
                        setIsPlaying(false);
                        setIsVideoLoaded(false);
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <Image
                      src={getImageSrc(activeMovie.poster, DEFAULT_THUMBNAIL)}
                      alt={activeMovie.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <button
                        onClick={handlePlayClick}
                        className="w-20 h-20 bg-secondary/80 rounded-full flex items-center justify-center hover:bg-secondary transition-colors mb-6 group"
                        aria-label="Play trailer"
                      >
                        <FaPlay className="w-8 h-8 text-dark ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                      <p className="text-white text-lg font-medium">Watch Trailer</p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <span className="inline-block bg-secondary text-dark text-sm font-bold px-3 py-1 uppercase tracking-wider mb-3">
                        {activeMovie.category}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
                        {activeMovie.title}
                      </h3>
                      <p className="text-xl text-secondary mb-4">{activeMovie.tagline}</p>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-4">
                        <div className="flex items-center text-gray-300">
                          <span className="mr-4">{activeMovie.year}</span>
                          <span className="mr-4">{activeMovie.duration}</span>
                          <StarRating rating={activeMovie.rating} />
                        </div>
                      </div>
                      
                      <p className="text-gray-300 max-w-3xl mb-6">
                        {activeMovie.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4">
                        <Link href={activeMovie.slug} className="inline-flex items-center bg-secondary text-dark font-bold px-6 py-3 hover:bg-secondary-dark transition-colors">
                          <FaInfoCircle className="mr-2" />
                          More Details
                        </Link>
                        <Link href={`/watch${activeMovie.slug}`} className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-dark transition-colors">
                          Watch Now
                        </Link>
                      </div>
                    </div>
                  </>
                )}
                
                {isPlaying && !isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark">
                    <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Movie List & Trending Now */}
          <motion.div
            className="xl:col-span-4 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-gray-800 pb-2">
              Trending Now
            </h3>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              {featuredMovies.slice(0, 3).map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieSelect(movie)}
                  className={`flex bg-gray-900 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeMovie.id === movie.id 
                      ? 'border-l-4 border-secondary shadow-lg' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <div className="w-32 h-24 relative flex-shrink-0">
                    <Image
                      src={getImageSrc(movie.thumbnail, DEFAULT_THUMBNAIL)}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                    {activeMovie.id !== movie.id && (
                      <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <FaPlay className="text-white w-8 h-8" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3 flex-1">
                    <h4 className="font-medium text-white mb-1 line-clamp-1">{movie.title}</h4>
                    <div className="text-xs text-gray-400 flex items-center gap-2 mb-2">
                      <span>{movie.year}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                      <span>{movie.category}</span>
                    </div>
                    <StarRating rating={movie.rating} />
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-gray-800 pb-2">
              Coming Soon
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {featuredMovies.slice(3, 5).map((movie) => (
                <div
                  key={movie.id}
                  className="flex bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="w-32 h-24 relative flex-shrink-0">
                    <Image
                      src={getImageSrc(movie.thumbnail, DEFAULT_THUMBNAIL)}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                      <span className="text-white text-xs font-medium bg-primary px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3 flex-1">
                    <h4 className="font-medium text-white mb-1 line-clamp-1">{movie.title}</h4>
                    <div className="text-xs text-gray-400 mb-2">
                      <span>{movie.category}</span> • <span>Expected {movie.year}</span>
                    </div>
                    <Link 
                      href={`/movies/upcoming/${movie.slug}`} 
                      className="text-secondary text-sm hover:underline flex items-center"
                    >
                      More Info
                      <FaChevronRight className="ml-1 w-2 h-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All - Mobile Only */}
            <Link 
              href="/movies" 
              className="md:hidden text-center mt-8 text-secondary hover:text-white transition-colors inline-flex items-center justify-center"
            >
              View All Movies & Series
              <FaChevronRight className="ml-2 w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 