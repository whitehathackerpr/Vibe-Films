import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaUsers, FaCalendarAlt, FaClock, FaGraduationCap } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Courses | Vibe Films',
  description: 'Learn filmmaking, screenwriting, cinematography, and acting with our professional courses at Vibe Films. Transform your passion into skill.',
}

// Courses data
const courses = [
  {
    id: 1,
    title: 'Professional Filmmaking',
    subtitle: 'Learn the art and craft of film production',
    description: 'A comprehensive course covering all aspects of filmmaking, from pre-production to post-production. Learn from industry professionals and create your own short film.',
    image: 'https://images.unsplash.com/photo-1585813724284-2aee047c3dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    students: 24,
    startDate: 'January 15, 2024',
    price: '$850',
    featured: true,
    slug: '/courses/filmmaking',
  },
  {
    id: 2,
    title: 'Screenwriting Masterclass',
    subtitle: 'Craft compelling stories for the screen',
    description: 'Develop your screenwriting skills and learn to create engaging narratives, memorable characters, and powerful dialogue. By the end of this course, you will have completed a feature-length screenplay.',
    image: 'https://images.unsplash.com/photo-1542618643-492f1a687142?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    duration: '8 weeks',
    level: 'All Levels',
    students: 18,
    startDate: 'February 5, 2024',
    price: '$650',
    featured: true,
    slug: '/courses/screenwriting',
  },
  {
    id: 3,
    title: 'Cinematography Essentials',
    subtitle: 'Master the visual language of film',
    description: 'Explore the art of visual storytelling through camera techniques, lighting, composition, and movement. Gain hands-on experience with professional camera equipment.',
    image: 'https://images.unsplash.com/photo-1578962173826-72c908c4bf43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 16,
    startDate: 'March 10, 2024',
    price: '$750',
    featured: true,
    slug: '/courses/cinematography',
  },
  {
    id: 4,
    title: 'Acting for Film',
    subtitle: 'Develop authentic screen performance',
    description: 'Learn the craft of screen acting with practical techniques for delivering authentic performances. Work with professional directors and participate in scene studies and filmed exercises.',
    image: 'https://images.unsplash.com/photo-1522413421366-5b036e12855a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    students: 12,
    startDate: 'April 3, 2024',
    price: '$600',
    featured: true,
    slug: '/courses/acting',
  },
  {
    id: 5,
    title: 'Documentary Filmmaking',
    subtitle: 'Tell compelling real-world stories',
    description: 'Discover how to craft powerful documentaries that engage and inform audiences. Learn research methods, interview techniques, and ethical considerations specific to non-fiction storytelling.',
    image: 'https://images.unsplash.com/photo-1534225043406-27c87eef8aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 15,
    startDate: 'May 15, 2024',
    price: '$700',
    featured: false,
    slug: '/courses/documentary-filmmaking',
  },
  {
    id: 6,
    title: 'Film Editing & Post-Production',
    subtitle: 'Shape and refine the final product',
    description: 'Master the art of post-production with hands-on training in industry-standard editing software, sound design, color grading, and visual effects.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    duration: '9 weeks',
    level: 'Intermediate to Advanced',
    students: 14,
    startDate: 'June 7, 2024',
    price: '$800',
    featured: false,
    slug: '/courses/film-editing',
  },
];

export default function CoursesPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Courses"
        subtitle="Professional Film Education"
        backgroundImage="https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              Develop Your Film Skills
            </h2>
            <p className="text-xl text-gray-700">
              Join our professional courses to learn from industry experts and transform your passion for film into
              tangible skills. Whether you're a beginner or looking to refine your craft, we have a course designed
              for you.
            </p>
          </div>
          
          {/* Featured Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {courses.filter(course => course.featured).slice(0, 2).map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-72">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-primary text-white px-3 py-1 text-sm font-bold uppercase tracking-wider">
                      Featured
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2">
                      {course.title}
                    </h3>
                    <p className="text-secondary text-lg mt-1">{course.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    {course.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2 text-primary" />
                      <span>Max {course.students} students</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaGraduationCap className="mr-2 text-primary" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2 text-primary" />
                      <span>Starts {course.startDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-dark">{course.price}</span>
                    <Link 
                      href={course.slug} 
                      className="inline-flex items-center bg-secondary text-dark px-5 py-2 font-bold hover:bg-secondary-dark transition-colors"
                    >
                      View Course <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* All Courses */}
          <h2 className="text-3xl font-serif font-bold text-dark text-center mb-12">
            Explore All Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(2).map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-52">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-serif font-bold text-white">
                      {course.title}
                    </h3>
                    <p className="text-secondary text-sm">{course.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <FaClock className="mr-1 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 text-primary" />
                      <span>Starts {course.startDate}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-dark">{course.price}</span>
                    <Link 
                      href={course.slug} 
                      className="text-primary font-medium hover:underline flex items-center"
                    >
                      Details <FaArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-primary uppercase tracking-wider font-bold text-sm mb-2">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-700">
              Hear from our graduates about how our courses helped them achieve their goals in the film industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Michael K.</h4>
                  <p className="text-primary text-sm">Filmmaking Graduate</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The Professional Filmmaking course gave me the confidence and skills to pursue my dream of directing. 
                Within six months of completing the course, I was working as an assistant director on a feature film."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Sarah J.</h4>
                  <p className="text-primary text-sm">Screenwriting Student</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I came to the Screenwriting Masterclass with a vague idea for a story. The instructors helped me develop 
                it into a complete screenplay that was later optioned by a production company. Life-changing experience!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dark">David N.</h4>
                  <p className="text-primary text-sm">Cinematography Graduate</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The hands-on approach of the Cinematography course was exactly what I needed. The instructors are working 
                professionals who provided valuable insights into the industry and helped me build my portfolio."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Apply now for our upcoming courses and take the first step toward your career in film.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/courses/apply" 
              className="bg-white text-primary font-bold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 