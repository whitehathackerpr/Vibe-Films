import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Contact Us | Vibe Films',
  description: 'Get in touch with Vibe Films, a Kampala-based Ugandan production company. We would love to hear from you about your project or inquiry.',
}

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Get In Touch"
        backgroundImage="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2225&q=80"
      />

      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif font-bold text-dark mb-6">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you. Whether you have a question about our services, projects, or just want to say hello, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Plot 123, Kampala Road<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+256712345678" className="hover:text-primary transition-colors">+256 712 345 678</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@vibefilms.ug" className="hover:text-primary transition-colors">info@vibefilms.ug</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-dark mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Our Location
          </h2>
          
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63844.41354556488!2d32.539076287988154!3d0.31313222857154046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x4538903dd96dab39!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1650125456781!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border: 0}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vibe Films Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 