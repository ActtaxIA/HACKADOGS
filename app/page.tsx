import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import SessionsShowcase from '@/components/SessionsShowcase'
import AppsSection from '@/components/AppsSection'
import AboutSection from '@/components/AboutSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Educación Canina
            <span className="block text-forest">Profesional</span>
          </>
        }
        description="Transforma la relación con tu perro a través de métodos positivos y respetuosos. Experiencia comprobada en Archena y toda la Región de Murcia."
        primaryCTA={{
          text: 'Consulta Gratuita',
          href: '/contacto'
        }}
        secondaryCTA={{
          text: 'Ver Servicios',
          href: '/servicios'
        }}
      />
      <ServicesSection />
      <SessionsShowcase />
      <AppsSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
