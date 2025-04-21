"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDate: string;
  budget: string;
  message: string;
  terms: boolean;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Here you would integrate with your actual form submission API
      // Including the file upload logic
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log({ ...data, file: selectedFile })
      
      // Reset form after successful submission
      reset()
      setSelectedFile(null)
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your full name"
            {...register('name', { required: 'Name is required' })}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="input"
            placeholder="Enter your phone number"
            {...register('phone')}
            disabled={isSubmitting}
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
            Service Type <span className="text-primary">*</span>
          </label>
          <select
            id="serviceType"
            className={`input ${errors.serviceType ? 'border-red-500' : ''}`}
            {...register('serviceType', { required: 'Please select a service' })}
            disabled={isSubmitting}
          >
            <option value="">Select a service</option>
            <option value="live-action">Live-Action Production</option>
            <option value="post-production">Post-Production</option>
            <option value="motion-graphics">Motion Graphics</option>
            <option value="actor-training">Actor Training</option>
            <option value="other">Other</option>
          </select>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Project Date */}
        <div>
          <label htmlFor="projectDate" className="block text-gray-700 font-medium mb-2">
            Preferred Project Date
          </label>
          <input
            id="projectDate"
            type="date"
            className="input"
            {...register('projectDate')}
            disabled={isSubmitting}
          />
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            className="input"
            {...register('budget')}
            disabled={isSubmitting}
          >
            <option value="">Select budget range</option>
            <option value="below-500">Below $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-plus">$10,000+</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Project Details <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`input ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Please provide details about your project"
          {...register('message', { required: 'Project details are required' })}
          disabled={isSubmitting}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
          Attach a File (Optional)
        </label>
        <div className="flex items-center">
          <label
            htmlFor="file"
            className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors py-3 px-4 rounded-md border border-gray-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              ></path>
            </svg>
            Choose File
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            disabled={isSubmitting}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          {selectedFile && (
            <span className="ml-3 text-gray-700">{selectedFile.name}</span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Accepted file types: PDF, DOC, DOCX, JPG, JPEG, PNG (max 5MB)
        </p>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
            {...register('terms', { required: 'You must agree to the terms' })}
            disabled={isSubmitting}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="text-gray-600">
            I agree to the <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a> <span className="text-primary">*</span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className={`btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Form Status */}
      {submitStatus && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  )
} 