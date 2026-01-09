import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakadogs - Cursos de Educación Canina',
  description: 'Cursos online de educación canina. Curso gratuito en PDF y curso premium completo con más de 10 horas de contenido.',
}

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
