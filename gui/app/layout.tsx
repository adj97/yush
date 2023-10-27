import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yush',
  description: 'Recipe organising app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </>
  )
}
