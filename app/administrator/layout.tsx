import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakadogs - Panel de Administración',
  description: 'Panel de administración de cursos, estudiantes y ventas.',
}

export default function AdministratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
