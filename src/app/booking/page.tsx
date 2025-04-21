import ContactForm from '@/components/forms/ContactForm'
import MainLayout from '@/components/layout/MainLayout'

export const metadata = {
  title: 'Booking | Vibe Films',
  description: 'Book our services for your next film or video production project. Contact Vibe Films for quality Ugandan and African storytelling.',
}

export default function BookingPage() {
  return (
    <MainLayout>
      <div className="pt-24 md:pt-28">
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-primary mb-4 text-center">Book Our Services</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 text-center mb-12">
              Fill out the form below to inquire about our services or to book your next project with us.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 