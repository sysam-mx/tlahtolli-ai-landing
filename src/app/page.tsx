import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Languages } from '@/components/Languages'
import { Mobile } from '@/components/Mobile'
import { Personalization } from '@/components/Personalization'
import { Pricing } from '@/components/Pricing'
import { Problem } from '@/components/Problem'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Solution } from '@/components/Solution'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <SecondaryFeatures />
        <Personalization />
        <Pricing />
        <Languages />
        <Testimonials />
        <Faqs />
        <CallToAction />
        <Mobile />
      </main>
      <Footer />
    </>
  )
}
