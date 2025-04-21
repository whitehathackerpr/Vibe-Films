"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="section bg-light" ref={ref}>
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
        >
          {/* Image */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1570355661852-0f473d5d9f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80"
              alt="Vibe Films Team"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <motion.div variants={variants} transition={{ duration: 0.5 }}>
              <h2 className="heading-lg text-primary mb-2">About Vibe Films</h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-700"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              Vibe Films is a premier Kampala-based production company committed to showcasing the rich cultural tapestry of Uganda and Africa through compelling storytelling and innovative filmmaking.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-700"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              Our team of passionate filmmakers, writers, and creative professionals bring together decades of industry experience to deliver high-quality content that captivates audiences worldwide while staying true to authentic African narratives.
            </motion.p>

            <motion.div 
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <Link href="/about" className="btn-primary mt-6">
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 