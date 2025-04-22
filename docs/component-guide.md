# Component Guide

This document provides an overview of key components used in the Vibe Films website and guidelines for creating new components.

## Layout Components

### Header (`src/components/layout/Header.tsx`)

The site header includes:
- Text logo ("VIBE FILMS")
- Main navigation with dropdown menus
- Secondary navigation for utilities
- Mobile menu toggle
- Search functionality

When creating or modifying the header:
- Ensure it remains fixed at the top
- Verify all dropdown menus are accessible
- Test responsive behavior on all screen sizes

### Footer (`src/components/layout/Footer.tsx`)

The site footer includes:
- Text logo ("Vibe Films")
- Quick navigation links
- Contact information
- Newsletter signup
- Social media links
- Copyright information

## Section Components

Section components are found in `src/components/home/` and other feature-specific directories.

### MoviesSection (`src/components/home/MoviesSection.tsx`)

Featured section that shows:
- Highlighted film with poster and details
- Video player for trailers
- List of trending movies
- Coming soon listings

Key features:
- State management for active movie
- Video player integration
- Responsive grid layout

### PortfolioSection (`src/components/home/PortfolioSection.tsx`)

Portfolio display section with:
- Category filtering
- Project cards with hover effects
- Responsive grid layout

### AboutSection (`src/components/home/AboutSection.tsx`)

Company information section with:
- Text content about the company
- Stats and highlights
- Image with animation

## Form Components

### NewsletterForm (`src/components/forms/NewsletterForm.tsx`)

Simple form for newsletter signups:
- Email input
- Submit button
- Form validation
- Success/error state handling

## Creating New Components

Follow these guidelines when creating new components:

1. **File Structure**: Place components in appropriate directories:
   - Layout components: `src/components/layout/`
   - Section components: `src/components/home/`, `src/components/about/`, etc.
   - Form components: `src/components/forms/`

2. **Naming Conventions**:
   - Use PascalCase for component names (e.g., `MoviesSection.tsx`)
   - Be descriptive and specific
   - Suffix with component type if applicable (e.g., `NewsletterForm`)

3. **Component Architecture**:
   - Begin with "use client" for client components
   - Import all necessary dependencies
   - Define types/interfaces at the top
   - Define local constants and helper functions
   - Export the component as default

4. **TypeScript**:
   - Define proper types for all props
   - Use interfaces for complex prop structures
   - Leverage TypeScript's type system for safety

5. **Styling**:
   - Use Tailwind utility classes
   - Follow the style guide for spacing, colors, etc.
   - Use the `cn()` utility for conditional class names

6. **State Management**:
   - Use React hooks for local state
   - Keep state as close to where it's used as possible
   - Consider performance implications

7. **Responsiveness**:
   - Design mobile-first
   - Use Tailwind's responsive prefixes
   - Test on multiple device sizes

## Example Component Structure

```tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/utils/cn'

// Define types
interface ExampleProps {
  title: string;
  description?: string;
  isActive?: boolean;
}

// Helper functions (if needed)
const formatTitle = (title: string): string => {
  return title.toUpperCase();
}

export default function ExampleComponent({ 
  title, 
  description = "Default description", 
  isActive = false 
}: ExampleProps) {
  // State
  const [isOpen, setIsOpen] = useState(false)
  
  // Hooks
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Event handlers
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="py-12 bg-light" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-bold text-dark mb-4">
            {formatTitle(title)}
          </h2>
          
          <p className={cn(
            "text-gray-600 max-w-2xl", 
            isActive && "text-primary"
          )}>
            {description}
          </p>
          
          <button 
            onClick={handleClick}
            className="mt-4 px-6 py-2 bg-secondary text-white"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
``` 