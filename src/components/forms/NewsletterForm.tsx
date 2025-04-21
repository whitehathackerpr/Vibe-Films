"use client"

import { useState } from 'react'
import { cn } from '@/utils/cn'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setMessage({ text: 'Please enter a valid email address', isError: true })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      // Here you would integrate with your actual newsletter service
      // For example Mailchimp, ConvertKit, etc.
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setEmail('')
      setMessage({ 
        text: 'Thank you for subscribing to our newsletter!', 
        isError: false 
      })
    } catch (error) {
      setMessage({ 
        text: 'Something went wrong. Please try again.', 
        isError: true 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white"
          required
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          className={cn(
            "mt-3 w-full bg-secondary text-dark font-medium px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      
      {message && (
        <p className={cn(
          "text-sm mt-2",
          message.isError ? "text-red-400" : "text-green-400"
        )}>
          {message.text}
        </p>
      )}
    </form>
  )
} 