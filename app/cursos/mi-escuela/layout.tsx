import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakadogs - Mi Escuela',
  description: 'Panel de gestión de tus cursos de educación canina. Accede a tus cursos comprados y sigue tu progreso.',
}

export default function MiEscuelaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
