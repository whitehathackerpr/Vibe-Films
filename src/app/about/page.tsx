import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'About Us | Vibe Films',
  description: 'Learn about Vibe Films, a Kampala-based Ugandan production company delivering high-quality African storytelling with striking visuals and innovative design.',
}

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        subtitle="Our Story & Mission"
        backgroundImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Founded in 2015, Vibe Films has grown from a small team of passionate filmmakers into one of Uganda's premier production companies. Our journey began with a simple mission: to tell authentic African stories that resonate with audiences worldwide.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Today, we continue to push boundaries in film, television, and digital content. We believe in the power of visual storytelling to change perspectives, challenge assumptions, and celebrate the rich tapestry of African culture and experiences.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Our team combines technical excellence with creative vision to produce content that is both artistically compelling and commercially successful. From feature films to documentaries, TV series to music videos, we approach each project with the same commitment to quality and authenticity.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Vibe Films Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dark text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Authenticity</h3>
              <p className="text-gray-300">
                We believe in telling real stories that reflect the diverse experiences of African people. Our narratives are grounded in truth, research, and cultural understanding.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Innovation</h3>
              <p className="text-gray-300">
                We embrace new technologies, storytelling techniques, and distribution models to keep our content fresh, relevant, and accessible to global audiences.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in all aspects of production, from concept development to post-production, ensuring world-class quality in everything we create.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Collaboration</h3>
              <p className="text-gray-300">
                We believe great films come from great teams. We foster an environment of creative collaboration, bringing together diverse talents and perspectives.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Social Impact</h3>
              <p className="text-gray-300">
                We recognize the power of film to drive social change. We actively seek projects that address important issues and contribute positively to our communities.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Nurturing Talent</h3>
              <p className="text-gray-300">
                We are committed to discovering and developing the next generation of African filmmakers, providing opportunities, training, and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark">John Doe</h3>
              <p className="text-primary font-medium mb-2">Founder & Creative Director</p>
              <p className="text-gray-600">
                With over 15 years of experience in filmmaking, John leads our creative vision and strategic direction.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Jane Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark">Jane Smith</h3>
              <p className="text-primary font-medium mb-2">Head of Production</p>
              <p className="text-gray-600">
                Jane oversees all production processes, ensuring projects are delivered on time and to the highest standards.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Michael Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark">Michael Johnson</h3>
              <p className="text-primary font-medium mb-2">Director of Photography</p>
              <p className="text-gray-600">
                Michael's distinctive visual style has earned him recognition at multiple international film festivals.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about/team" 
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-lg transition-colors"
            >
              Meet Our Full Team
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Work With Us
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it. Our team is ready to bring your vision to life.
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