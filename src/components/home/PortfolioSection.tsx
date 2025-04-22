"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa'
import { getImageSrc, DEFAULT_IMAGE } from '@/utils/imageUtils'

// Define Project type
type Project = {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  image?: string;
  slug: string;
  featured: boolean;
};

// Sample portfolio projects (in a real implementation, these would come from a CMS or API)
const projects: Project[] = [
  {
    id: 1,
    title: 'The River Between',
    subtitle: 'Feature Film',
    category: 'Feature Film',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1640&q=80',
    slug: '/portfolio/the-river-between',
    featured: true,
  },
  {
    id: 2,
    title: 'Kampala Nights',
    subtitle: 'A City in Motion',
    category: 'Documentary',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1579846321882-45cf6140c2ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80',
    slug: '/portfolio/kampala-nights',
    featured: true,
  },
  {
    id: 3,
    title: 'Tomorrow\'s Promise',
    subtitle: 'Drama Series',
    category: 'TV Series',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1616469829526-7057a1427659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: '/portfolio/tomorrows-promise',
    featured: true,
  },
  {
    id: 4,
    title: 'Savanna Dreams',
    subtitle: 'Wildlife Story',
    category: 'Short Film',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1546887276-25a8a29bacd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: '/portfolio/savanna-dreams',
    featured: false,
  },
  {
    id: 5,
    title: 'Heartbeat of Uganda',
    subtitle: 'Cultural Rhythms',
    category: 'Music Video',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: '/portfolio/heartbeat-of-uganda',
    featured: false,
  },
  {
    id: 6,
    title: 'Urban Voices',
    subtitle: 'Street Stories',
    category: 'Documentary',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80',
    slug: '/portfolio/urban-voices',
    featured: false,
  },
]

// Project categories
const categories = ['All', 'Feature Film', 'TV Series', 'Documentary', 'Short Film', 'Music Video']

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-light to-gray-100" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <span className="block uppercase tracking-wider text-sm font-bold text-primary mb-2">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              Featured Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Explore our diverse collection of award-winning films, documentaries, and series
            </p>
          </motion.div>

          {/* View All Link - Desktop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <Link 
              href="/portfolio" 
              className="group inline-flex items-center text-primary hover:text-primary-dark font-medium text-lg transition-colors"
            >
              View All Projects
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Link href={project.slug} className="block group">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={getImageSrc(project.image, DEFAULT_IMAGE)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-80 transition-opacity group-hover:opacity-70"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-secondary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <FaPlayCircle className="w-10 h-10 text-dark" />
                      </div>
                    </div>
                    
                    {/* Category & Year Tag */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-secondary text-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-dark group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.subtitle}</p>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{project.year}</span>
                      <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                        Watch Now
                        <FaArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link - Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center md:hidden"
        >
          <Link href="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 