import { Open_Sans, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import { Metadata } from 'next'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: 'Vibe Films | Quality Ugandan & African Storytelling',
  description: 'Vibe Films is a Kampala-based Ugandan production company delivering high-quality African storytelling with striking visuals and innovative design.',
  keywords: 'Vibe Films, Uganda, Kampala, African, Storytelling, Film, Production, Movies, Series',
  openGraph: {
    title: 'Vibe Films | Quality Ugandan & African Storytelling',
    description: 'Vibe Films is a Kampala-based Ugandan production company delivering high-quality African storytelling with striking visuals and innovative design.',
    url: 'https://vibefilms.ug',
    siteName: 'Vibe Films',
    locale: 'en_UG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
} 