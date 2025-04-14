import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar' // Import your Navbar component
import { Toaster } from 'sonner';


export const metadata: Metadata = {
  title: 'Impulseia ',
  description: 'Innovative Businesses Solutions with Impulseia',
  generator: 'Impulseia IT',
  icons: {
    icon: "../public/favicon.png", // online favicon
  },
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