import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import MoviesSection from '@/components/home/MoviesSection'
import MainLayout from '@/components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MoviesSection />
    </MainLayout>
  )
} 