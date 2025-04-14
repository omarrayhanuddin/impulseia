import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar' // Import your Navbar component
import { Toaster } from 'sonner';


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}