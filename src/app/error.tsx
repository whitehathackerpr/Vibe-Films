'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Something went wrong</h1>
        <p className="text-gray-600 text-center max-w-md mb-8">
          We apologize for the inconvenience. An error has occurred.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="bg-secondary text-dark font-bold px-6 py-3 hover:bg-secondary-dark transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/" 
            className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 hover:bg-secondary hover:text-dark transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </MainLayout>
  )
} 