import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlayCircle, FaArrowRight } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Portfolio | Vibe Films',
  description: 'Explore the portfolio of Vibe Films, including feature films, documentaries, TV series, short films, and music videos created in Uganda.',
}

// Portfolio project data
const projects = [
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
  {
    id: 7,
    title: 'The Harvest',
    subtitle: 'Rural Life Documentary',
    category: 'Documentary',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    slug: '/portfolio/the-harvest',
    featured: false,
  },
  {
    id: 8,
    title: 'Market Day',
    subtitle: 'Short Documentary',
    category: 'Short Film',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: '/portfolio/market-day',
    featured: false,
  },
  {
    id: 9,
    title: 'Dance Revolution',
    subtitle: 'Modern Expression',
    category: 'Music Video',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1525175144825-a8ee9e92bf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: '/portfolio/dance-revolution',
    featured: false,
  },
]

// Project categories
const categories = ['All', 'Feature Film', 'TV Series', 'Documentary', 'Short Film', 'Music Video']

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Portfolio"
        subtitle="Our Work"
        backgroundImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1640&q=80"
      />

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-secondary uppercase tracking-wider font-bold text-sm mb-2">
              Highlighted Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg">
              Explore some of our most acclaimed and groundbreaking productions, showcasing the 
              diversity and quality of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <Link key={project.id} href={project.slug} className="block group">
                <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
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
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{project.subtitle}</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{project.year}</span>
                      <span className="inline-flex items-center text-secondary font-medium group-hover:underline">
                        View Project
                        <FaArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full Portfolio */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              Explore Our Work
            </h2>
            <p className="text-gray-700 text-lg">
              Browse our complete portfolio of films, documentaries, TV series, and more.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={project.slug} className="block group">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-80 transition-opacity group-hover:opacity-70"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <FaPlayCircle className="w-8 h-8 text-dark" />
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
                    <h3 className="text-xl font-serif font-bold text-dark group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.subtitle}</p>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{project.year}</span>
                      <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                        View Details
                        <FaArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-secondary uppercase tracking-wider font-bold text-sm mb-2">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Awards & Accolades
            </h2>
            <p className="text-gray-300 text-lg">
              Our work has been recognized at film festivals and competitions around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark p-8 rounded-lg text-center">
              <div className="text-secondary text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Best Documentary</h3>
              <p className="text-gray-400">Uganda Film Festival 2022</p>
              <p className="text-gray-400 mt-2">For "Kampala Nights"</p>
            </div>
            
            <div className="bg-dark p-8 rounded-lg text-center">
              <div className="text-secondary text-5xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2">Audience Choice Award</h3>
              <p className="text-gray-400">East African Film Festival 2023</p>
              <p className="text-gray-400 mt-2">For "The River Between"</p>
            </div>
            
            <div className="bg-dark p-8 rounded-lg text-center">
              <div className="text-secondary text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-2">Best Drama Series</h3>
              <p className="text-gray-400">African TV & Film Awards 2023</p>
              <p className="text-gray-400 mt-2">For "Tomorrow's Promise"</p>
            </div>
            
            <div className="bg-dark p-8 rounded-lg text-center">
              <div className="text-secondary text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-2">Best Music Video</h3>
              <p className="text-gray-400">MTV Africa Music Awards 2022</p>
              <p className="text-gray-400 mt-2">For "Heartbeat of Uganda"</p>
            </div>
            
            <div className="bg-dark p-8 rounded-lg text-center">
              <div className="text-secondary text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold mb-2">Best Cinematography</h3>
              <p className="text-gray-400">Pan-African Film Festival 2023</p>
              <p className="text-gray-400 mt-2">For "Savanna Dreams"</p>
            </div>
            
            <div className="bg-dark p-8 rounded-lg text-center">
              <div className="text-secondary text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Rising Filmmaker Award</h3>
              <p className="text-gray-400">Kampala Film Society 2022</p>
              <p className="text-gray-400 mt-2">For our production team</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life. Our team is ready to help you create something amazing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-primary font-bold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 