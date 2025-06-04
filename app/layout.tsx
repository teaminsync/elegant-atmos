import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wireframe - Elegant Atmos',
  description: 'Wireframe',
  generator: 'InSync Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
