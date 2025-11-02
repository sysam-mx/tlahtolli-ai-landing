import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LanguagesShowcase } from '@/components/LanguagesShowcase'
import { Pricing } from '@/components/Pricing'
import { PricingCallToAction } from '@/components/PricingCallToAction'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <LanguagesShowcase />
        <Testimonials />
        <PricingCallToAction />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
