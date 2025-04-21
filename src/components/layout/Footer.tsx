import Link from 'next/link'
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import NewsletterForm from '@/components/forms/NewsletterForm'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="font-serif font-bold">
                <span className="text-2xl">Vibe</span>
                <span className="text-2xl text-secondary">Films</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              A Kampala-based Ugandan production company delivering high-quality African storytelling with striking visuals and innovative design.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-secondary mr-3" />
                <span>Plot 123, Kampala Road, Kampala, Uganda</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-secondary mr-3" />
                <a href="tel:+256712345678" className="hover:text-secondary transition-colors">+256 712 345 678</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-secondary mr-3" />
                <a href="mailto:info@vibefilms.ug" className="hover:text-secondary transition-colors">info@vibefilms.ug</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-secondary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-300 hover:text-secondary transition-colors">Movies & Series</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/live-action" className="text-gray-300 hover:text-secondary transition-colors">Live-Action Production</Link>
              </li>
              <li>
                <Link href="/services/post-production" className="text-gray-300 hover:text-secondary transition-colors">Post-Production</Link>
              </li>
              <li>
                <Link href="/services/motion-graphics" className="text-gray-300 hover:text-secondary transition-colors">Motion Graphics</Link>
              </li>
              <li>
                <Link href="/services/actor-training" className="text-gray-300 hover:text-secondary transition-colors">Actor Training</Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-secondary transition-colors">Booking</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates, releases, and industry news.
            </p>
            <NewsletterForm />
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com/vibefilms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/vibefilms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/vibefilms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Vibe Films. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 