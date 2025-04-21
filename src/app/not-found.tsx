import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 text-center max-w-md mb-8">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link 
          href="/" 
          className="bg-secondary text-dark font-bold px-6 py-3 hover:bg-secondary-dark transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </MainLayout>
  )
} 