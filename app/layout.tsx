import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Toaster } from 'sonner'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Impulseia',
  description: 'Innovative Businesses Solutions with Impulseia',
  generator: 'Impulseia IT',
  icons: {
    icon: '/favicon.png', // Correct path from public/
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WLTVJGZ8');
          `}
        </Script>
        {/* Optional: additional <meta> tags or font links can go here */}
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLTVJGZ8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
