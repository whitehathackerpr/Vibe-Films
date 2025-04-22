"use client"

import { cn } from '@/utils/cn'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  overlay?: boolean
  centered?: boolean
  className?: string
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  centered = true,
  className
}: PageHeaderProps) {
  return (
    <header className={cn(
      "relative pt-40 pb-20 md:pt-48 md:pb-28",
      className
    )}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/60 z-10"></div>
          )}
        </>
      )}
      
      {/* Content */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "max-w-3xl",
            centered && "mx-auto text-center",
            backgroundImage ? "text-white" : "text-dark"
          )}
        >
          {subtitle && (
            <span className={cn(
              "inline-block uppercase tracking-wider font-bold text-sm mb-3",
              backgroundImage ? "text-secondary" : "text-primary"
            )}>
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            {title}
          </h1>
        </motion.div>
      </div>
    </header>
  )
} 