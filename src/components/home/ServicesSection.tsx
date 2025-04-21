"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaVideo, FaFilm, FaLaptopCode, FaUserFriends } from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'Live-Action Production',
    description: 'Professional film and video production services with state-of-the-art equipment and experienced crew.',
    icon: FaVideo,
    link: '/services/live-action',
  },
  {
    id: 2,
    title: 'Post-Production',
    description: 'Expert editing, color grading, sound design, and visual effects to bring your story to life.',
    icon: FaFilm,
    link: '/services/post-production',
  },
  {
    id: 3,
    title: 'Motion Graphics',
    description: 'Creative animation and graphics solutions for intros, titles, ads, and explainer videos.',
    icon: FaLaptopCode,
    link: '/services/motion-graphics',
  },
  {
    id: 4,
    title: 'Actor Training',
    description: 'Comprehensive acting workshops and training programs for aspiring and professional actors.',
    icon: FaUserFriends,
    link: '/services/actor-training',
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="section bg-gray-50" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg text-primary mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive filmmaking and production services to bring your vision to reality
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-secondary font-medium hover:text-primary transition-colors mt-auto"
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 