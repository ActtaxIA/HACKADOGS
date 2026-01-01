import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ProcessSection from '@/components/services/ProcessSection'
import PricingSection from '@/components/services/PricingSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Servicios de Educación Canina - Hakadogs Archena Murcia',
  description: 'Educación básica, modificación de conducta, cachorros y clases grupales. Métodos positivos y personalizados.',
}

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
