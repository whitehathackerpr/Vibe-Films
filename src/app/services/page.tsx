import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Services | Vibe Films',
  description: 'Explore the range of film and video production services offered by Vibe Films, including live action production, post-production, motion graphics, and actor training.',
}

// Service data
const services = [
  {
    id: 1,
    title: 'Live-Action Production',
    description: 'From concept to delivery, we handle all aspects of live-action production, including pre-production planning, location scouting, casting, and filming with state-of-the-art equipment.',
    image: 'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/live-action',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Post-Production',
    description: 'Our post-production services include video editing, color grading, sound design, and mixing to ensure your project achieves the highest professional standards.',
    image: 'https://images.unsplash.com/photo-1610286804497-6288b6a82622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/post-production',
    color: 'secondary',
  },
  {
    id: 3,
    title: 'Motion Graphics',
    description: 'Enhance your story with captivating motion graphics, animations, and visual effects that bring your ideas to life and engage your audience.',
    image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    link: '/services/motion-graphics',
    color: 'primary',
  },
  {
    id: 4,
    title: 'Actor Training',
    description: 'Develop your acting skills with our tailored training programs, workshops, and one-on-one coaching led by industry professionals.',
    image: 'https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/actor-training',
    color: 'secondary',
  },
]

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a thorough consultation to understand your vision, goals, and requirements for the project.',
  },
  {
    number: '02',
    title: 'Proposal & Planning',
    description: 'We develop a comprehensive proposal including timeline, budget, and creative approach tailored to your needs.',
  },
  {
    number: '03',
    title: 'Pre-Production',
    description: 'Our team handles all pre-production elements including storyboarding, location scouting, casting, and scheduling.',
  },
  {
    number: '04',
    title: 'Production',
    description: 'Using state-of-the-art equipment and techniques, we bring your vision to life with our experienced crew.',
  },
  {
    number: '05',
    title: 'Post-Production',
    description: 'We transform raw footage into polished content through editing, sound design, color grading, and effects.',
  },
  {
    number: '06',
    title: 'Delivery & Support',
    description: 'We deliver your project in required formats and provide ongoing support for distribution or future needs.',
  },
]

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Services"
        subtitle="What We Offer"
        backgroundImage="https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              Quality Production Services
            </h2>
            <p className="text-xl text-gray-700">
              At Vibe Films, we offer a comprehensive range of film and video production services. 
              From conceptualization to final delivery, our team of experienced professionals 
              is committed to bringing your vision to life with creativity, technical expertise, and attention to detail.
            </p>
          </div>
          
          {/* Services List */}
          <div className="space-y-12 md:space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link}
                    className={`inline-flex items-center font-medium text-${service.color} hover:underline`}
                  >
                    Learn More <FaArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-dark text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-secondary uppercase tracking-wider font-bold text-sm mb-2">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Process
            </h2>
            <p className="text-gray-300 text-lg">
              We follow a structured approach to ensure every project is delivered with excellence, 
              on time, and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-gray-900 p-8 rounded-lg relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-8xl font-bold text-gray-800 opacity-30 group-hover:text-primary group-hover:opacity-20 transition-all">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">
                  <span className="text-secondary mr-2">{step.number}.</span> {step.title}
                </h3>
                <p className="text-gray-400 relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary uppercase tracking-wider font-bold text-sm mb-2">
                Professional Equipment
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
                State-of-the-Art Technology
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                We invest in the latest equipment and technology to ensure your project benefits from the highest quality production values. Our arsenal includes:
              </p>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Professional cinema cameras (RED, ARRI, Sony)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Premium lenses and filters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Advanced lighting setups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Professional audio recording equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Stabilization systems (gimbals, dollies, cranes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Aerial cinematography drones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Post-production suite with industry-standard software</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1616469829526-7057a1427659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Film Production Equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project needs and discover how we can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-primary font-bold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/booking" 
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 