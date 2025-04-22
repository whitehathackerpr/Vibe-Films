import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlayCircle, FaStar, FaChevronRight } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Films | Vibe Films',
  description: 'Explore our collection of feature films, documentaries, and award-winning productions from Vibe Films.',
}

// Film data
const films = [
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
    slug: '/films/the-lions-whisper',
    description: 'A coming-of-age drama about a young Ugandan girl who discovers her voice and courage during a time of political upheaval.',
    rating: 4.8,
    featured: true,
    category_slug: 'drama',
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
    slug: '/films/kampala-stories',
    description: 'An anthology series exploring the interconnected lives of diverse residents in Uganda\'s vibrant capital city.',
    rating: 4.5,
    featured: true,
    category_slug: 'series',
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
    slug: '/films/pearl-of-africa',
    description: 'A breathtaking documentary showcasing Uganda\'s stunning natural beauty and the conservation efforts to protect it.',
    rating: 4.7,
    featured: true,
    category_slug: 'documentary',
  },
  {
    id: 4,
    title: 'Savanna Dreams',
    tagline: 'Where wild hearts roam',
    year: 2021,
    duration: '30m',
    category: 'Short Film',
    thumbnail: 'https://images.unsplash.com/photo-1546887276-25a8a29bacd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    poster: 'https://images.unsplash.com/photo-1546887276-25a8a29bacd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    slug: '/films/savanna-dreams',
    description: 'A poetic short film following the journey of wildlife across the Ugandan savanna.',
    rating: 4.3,
    featured: false,
    category_slug: 'short-film',
  },
  {
    id: 5,
    title: 'Urban Beat',
    tagline: 'The rhythm of city life',
    year: 2022,
    duration: '5m',
    category: 'Music Video',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    poster: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1670&q=80',
    slug: '/films/urban-beat',
    description: 'A vibrant music video showcasing the energy and creativity of Kampala\'s urban music scene.',
    rating: 4.6,
    featured: false,
    category_slug: 'music-video',
  },
  {
    id: 6,
    title: 'The Crossing',
    tagline: 'Between two worlds',
    year: 2022,
    duration: '1h 35m',
    category: 'Drama',
    poster: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    slug: '/films/the-crossing',
    description: 'A powerful drama about a family divided by borders and the journey to reunite against all odds.',
    rating: 4.5,
    featured: false, 
    category_slug: 'drama',
  },
  {
    id: 7,
    title: 'Echoes of Tradition',
    tagline: 'The past speaks through us',
    year: 2021,
    duration: '1h 42m',
    category: 'Drama',
    poster: 'https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    slug: '/films/echoes-of-tradition',
    description: 'A compelling story of a young woman navigating between modern life and her deep cultural heritage.',
    rating: 4.2,
    featured: false,
    category_slug: 'drama',
  },
  {
    id: 8,
    title: 'Wonders of the Nile',
    tagline: 'Life along the ancient waters',
    year: 2020,
    duration: '1h 55m',
    category: 'Documentary',
    poster: 'https://images.unsplash.com/photo-1523702542780-9fe088fdcd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1523702542780-9fe088fdcd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    slug: '/films/wonders-of-the-nile',
    description: 'A visually stunning documentary exploring the rich biodiversity and human cultures that thrive along the Nile River.',
    rating: 4.4,
    featured: false,
    category_slug: 'documentary',
  },
]

// Film categories
const categories = [
  { name: 'All Films', slug: 'all' },
  { name: 'Drama', slug: 'drama' },
  { name: 'Documentary', slug: 'documentary' },
  { name: 'TV Series', slug: 'series' },
  { name: 'Short Films', slug: 'short-film' },
  { name: 'Music Videos', slug: 'music-video' },
]

// Generate star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-secondary text-sm" />
      ))}
      
      {hasHalfStar && <FaStar className="text-secondary text-sm" />}
      
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={`empty-${i}`} className="text-gray-400 text-sm" />
      ))}
      
      <span className="ml-1 text-gray-700 text-sm">{rating.toFixed(1)}</span>
    </div>
  );
};

export default function FilmsPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Films"
        subtitle="Feature Films & Productions"
        backgroundImage="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Featured Films Section */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="inline-block text-secondary uppercase tracking-wider font-bold text-sm mb-2">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                Latest Releases
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl">
                Watch trailers and discover our newest original films and series
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {films.filter(film => film.featured).map((film) => (
              <Link key={film.id} href={film.slug} className="block group">
                <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={film.poster}
                      alt={film.title}
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
                        {film.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-secondary transition-colors">
                      {film.title}
                    </h3>
                    <p className="text-secondary mt-1">{film.tagline}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 mt-3 mb-4">
                      <div className="flex items-center text-gray-300 text-sm space-x-4">
                        <span>{film.year}</span>
                        <span>{film.duration}</span>
                      </div>
                      <StarRating rating={film.rating} />
                    </div>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {film.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center text-secondary font-medium group-hover:underline">
                        Watch Trailer
                        <FaChevronRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Films Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              Explore Our Films
            </h2>
            <p className="text-gray-700 text-lg">
              Browse our complete collection of films, documentaries, and series.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Films Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {films.map((film) => (
              <Link key={film.id} href={film.slug} className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={film.thumbnail}
                      alt={film.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="rounded-full bg-secondary/80 p-3 transform group-hover:scale-110 transition-transform">
                        <FaPlayCircle className="w-8 h-8 text-dark" />
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-2 left-2">
                      <span className="text-xs font-bold bg-secondary text-dark px-2 py-1 rounded-sm">
                        {film.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                      {film.title}
                    </h3>
                    
                    <div className="mt-1 mb-2 flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{film.year} • {film.duration}</span>
                      <StarRating rating={film.rating} />
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-2 mt-auto">
                      {film.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Films Section */}
      <section className="py-16 md:py-24 bg-dark text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-secondary uppercase tracking-wider font-bold text-sm mb-2">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Upcoming Releases
            </h2>
            <p className="text-gray-300 text-lg">
              Get a sneak peek of our projects currently in production and coming soon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Upcoming Film 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Untamed Spirit"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">Coming 2024</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Untamed Spirit</h3>
                <p className="text-gray-400 mb-4">A thrilling adventure following wildlife researchers in Uganda's national parks.</p>
                <span className="text-secondary text-sm">Production in progress</span>
              </div>
            </div>
            
            {/* Upcoming Film 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1584448097639-797a229a9c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
                  alt="Modern Pioneers"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">Coming 2024</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Modern Pioneers</h3>
                <p className="text-gray-400 mb-4">A documentary series about young entrepreneurs transforming East Africa's tech landscape.</p>
                <span className="text-secondary text-sm">Pre-production</span>
              </div>
            </div>
            
            {/* Upcoming Film 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
                  alt="Children of the Sun"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">Coming 2025</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Children of the Sun</h3>
                <p className="text-gray-400 mb-4">A heartwarming drama about childhood friends reuniting to save their village's cultural heritage.</p>
                <span className="text-secondary text-sm">In development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to get updates on new releases, behind-the-scenes content, and special events.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-4 rounded-l-sm text-dark focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-secondary text-dark font-bold py-3 px-6 rounded-r-sm hover:bg-secondary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-2 text-white/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 