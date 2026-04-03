import { DM_Sans, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata = {
  title: "What They Don't Tell You About Pregnancy | A Nigerian Woman's Guide",
  description:
    "The honest, culturally grounded pregnancy guide every Nigerian woman deserves — from first trimester to delivery day.",
  openGraph: {
    title: "What They Don't Tell You About Pregnancy",
    description: "The Nigerian woman's complete pregnancy guide. All 3 trimesters, local foods, hospital navigation & more.",
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
