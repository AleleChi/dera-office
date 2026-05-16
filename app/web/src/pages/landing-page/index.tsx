import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Roles from './components/Roles'
import CTA from './components/CTA'
import Footer from './components/Footer'

import AnimatedBackground from './components/AnimatedBackground'
import FloatingParticles from './components/FloatingParticles'





export default function Landing() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      const completed = localStorage.getItem('onboarding_completed')
      if (completed === 'true') {
        navigate('/dashboard')
      } else {
        navigate('/onboarding')
      }
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      <AnimatedBackground />
      <FloatingParticles />

      <Navigation />

      <main>
        <Hero />
        <Features />
        {/* <WhyChooseUs /> */}
        <HowItWorks />
        <Roles />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}