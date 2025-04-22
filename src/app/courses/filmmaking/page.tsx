import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaUsers, FaCalendarAlt, FaClock, FaGraduationCap, FaCheckCircle, FaRegStar } from 'react-icons/fa'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Professional Filmmaking Course | Vibe Films',
  description: 'Master the art and craft of filmmaking with our comprehensive 12-week course. Learn from industry professionals and create your own short film.',
}

export default function FilmmakingCoursePage() {
  return (
    <MainLayout>
      <PageHeader
        title="Professional Filmmaking"
        subtitle="Comprehensive Film Production Course"
        backgroundImage="https://images.unsplash.com/photo-1585813724284-2aee047c3dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Course Overview */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Course Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-dark mb-6">
                Course Overview
              </h2>
              
              <p className="text-gray-700 text-lg mb-6">
                Our Professional Filmmaking course is designed to give you a comprehensive understanding of the entire filmmaking 
                process, from concept development to final delivery. This hands-on program combines theoretical knowledge with 
                practical experience, allowing you to develop your skills under the guidance of industry professionals.
              </p>
              
              <p className="text-gray-700 text-lg mb-6">
                Throughout the 12-week course, you'll work collaboratively with other students to plan, shoot, and edit 
                your own short film. You'll gain experience with professional equipment and software while developing a 
                strong foundation in storytelling, cinematography, directing, and editing.
              </p>
              
              <p className="text-gray-700 text-lg mb-10">
                Whether you're a complete beginner or have some experience in filmmaking, this course will elevate your 
                skills and prepare you for opportunities in the film industry. By the end of the program, you'll have a 
                completed short film for your portfolio and the confidence to pursue your filmmaking career.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">
                What You'll Learn
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Script development and storyboarding techniques</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Professional camera operation and cinematography</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Lighting setup and design for various scenarios</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Sound recording and audio post-production</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Directing actors and managing film crews</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Editing techniques and post-production workflow</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Production planning and budgeting</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Film distribution and festival submission strategies</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">
                Course Structure
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-2">Weeks 1-4: Pre-Production</h4>
                  <p className="text-gray-700">
                    Learn the foundations of storytelling, script development, storyboarding, casting, 
                    location scouting, and production planning. By the end of this module, you'll have 
                    developed a script and production plan for your short film.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-2">Weeks 5-8: Production</h4>
                  <p className="text-gray-700">
                    Master the technical aspects of filmmaking including camera operation, 
                    lighting, and sound recording. During this module, you'll shoot your short film 
                    under the guidance of our experienced instructors.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-2">Weeks 9-12: Post-Production</h4>
                  <p className="text-gray-700">
                    Develop skills in editing, color grading, sound design, and visual effects using 
                    industry-standard software. You'll complete your short film and prepare it for 
                    screening and distribution.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">
                Meet Your Instructors
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative mr-4 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">James Roberts</h4>
                    <p className="text-primary text-sm mb-2">Lead Instructor, Director</p>
                    <p className="text-gray-700 text-sm">
                      James has directed three award-winning feature films and numerous commercials. 
                      He brings 15 years of industry experience to the classroom.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative mr-4 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt="Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Elena Kamau</h4>
                    <p className="text-primary text-sm mb-2">Cinematographer</p>
                    <p className="text-gray-700 text-sm">
                      Elena is an accomplished cinematographer whose work has been featured at international 
                      film festivals. She specializes in visual storytelling and lighting techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold text-dark mb-6 pb-4 border-b border-gray-200">
                  Course Details
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaClock className="text-primary mr-3 w-5 h-5" />
                    <div>
                      <p className="font-bold text-dark">Duration</p>
                      <p className="text-gray-600">12 weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-primary mr-3 w-5 h-5" />
                    <div>
                      <p className="font-bold text-dark">Start Date</p>
                      <p className="text-gray-600">January 15, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaUsers className="text-primary mr-3 w-5 h-5" />
                    <div>
                      <p className="font-bold text-dark">Class Size</p>
                      <p className="text-gray-600">Maximum 24 students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaGraduationCap className="text-primary mr-3 w-5 h-5" />
                    <div>
                      <p className="font-bold text-dark">Experience Level</p>
                      <p className="text-gray-600">Beginner to Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Course Fee</span>
                    <span className="text-2xl font-bold text-dark">$850</span>
                  </div>
                  
                  <Link
                    href="/courses/apply"
                    className="block w-full bg-secondary text-dark text-center font-bold py-3 rounded-sm hover:bg-secondary-dark transition-colors mb-4"
                  >
                    Apply Now
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="block w-full bg-primary text-white text-center font-bold py-3 rounded-sm hover:bg-primary-dark transition-colors"
                  >
                    Request Information
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark mb-6">
                  Student Reviews
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-secondary">
                        <FaRegStar className="fill-current" />
                        <FaRegStar className="fill-current" />
                        <FaRegStar className="fill-current" />
                        <FaRegStar className="fill-current" />
                        <FaRegStar className="fill-current" />
                      </div>
                      <span className="ml-2 text-lg font-bold">4.8/5</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Based on 45 student reviews</p>
                    
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-gray-200">
                        <p className="text-gray-700 mb-2">
                          "This course truly transformed my approach to filmmaking. The hands-on experience and mentor feedback were invaluable."
                        </p>
                        <p className="text-sm text-gray-600">— Ahmed K., Filmmaker</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 mb-2">
                          "Worth every penny. I came in with basic knowledge and left with professional-level skills and a short film I'm proud of."
                        </p>
                        <p className="text-sm text-gray-600">— Maria L., Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipment & Facilities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-dark mb-6">
              Equipment & Facilities
            </h2>
            <p className="text-lg text-gray-700">
              Students will have access to professional-grade equipment and state-of-the-art facilities to bring their visions to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Camera Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• RED Digital Cinema Cameras</li>
                <li>• Sony FS7 & A7S III Cameras</li>
                <li>• Canon C300 Mark II</li>
                <li>• Professional lens kits</li>
                <li>• Tripods, stabilizers, and gimbals</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Lighting & Grip</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ARRI LED lighting kits</li>
                <li>• Kino Flo fluorescent fixtures</li>
                <li>• Traditional tungsten lighting</li>
                <li>• Grip equipment (flags, stands, clamps)</li>
                <li>• Modifiers and diffusion materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Sound Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Zoom F6 & H6 recorders</li>
                <li>• Sennheiser & RØDE microphones</li>
                <li>• Boom poles and shock mounts</li>
                <li>• Lavalier microphone systems</li>
                <li>• Headphones and monitoring equipment</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Post-Production Suite</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• iMac Pro workstations</li>
                <li>• Adobe Creative Cloud</li>
                <li>• DaVinci Resolve Studio</li>
                <li>• Pro Tools</li>
                <li>• Color grading monitors</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Studio Facilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 1,500 sq ft sound stage</li>
                <li>• Green screen cyclorama</li>
                <li>• Production control room</li>
                <li>• Sound recording booth</li>
                <li>• Production office spaces</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Film library and references</li>
                <li>• Script and storyboard templates</li>
                <li>• Production document templates</li>
                <li>• Industry standard software</li>
                <li>• Online learning resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">Do I need any prior filmmaking experience?</h3>
                <p className="text-gray-700">
                  No prior experience is required for this course. We welcome students from all backgrounds, whether you're a complete 
                  beginner or have some experience with filmmaking. Our curriculum is designed to accommodate different skill levels.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">Will I need to bring my own equipment?</h3>
                <p className="text-gray-700">
                  All professional equipment needed for the course will be provided. However, we recommend bringing a notebook, 
                  personal laptop if you have one, and any ideas or concepts you'd like to develop during the course.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">What will I have created by the end of the course?</h3>
                <p className="text-gray-700">
                  By the end of the 12 weeks, you will have produced a complete short film (typically 5-10 minutes in length) 
                  that you can include in your portfolio. You'll also have developed skills in all aspects of the filmmaking process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">What are the payment options?</h3>
                <p className="text-gray-700">
                  We offer several payment options, including full payment, a two-installment plan, and in some cases, 
                  scholarships for talented individuals with financial need. Details will be provided during the application process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">Is there a certificate upon completion?</h3>
                <p className="text-gray-700">
                  Yes, all students who successfully complete the course will receive a certificate of completion. 
                  However, in the film industry, your portfolio and practical skills are typically more valuable than certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Begin Your Filmmaking Journey
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Spaces are limited to ensure each student receives personalized attention. Apply now to secure your spot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/courses/apply" 
              className="bg-secondary text-dark font-bold px-8 py-3 rounded-sm hover:bg-secondary-dark transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              href="/courses" 
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              Explore Other Courses
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 