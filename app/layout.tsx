import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Sepekaa | %s',
    default: 'Sepekaa'
  },
  description: 'Welcome to Sepekaa official website. Here we can introduce who we are and tell you what technologies we have studied for 3 years at Vocational High School 2 Bangkalan, majoring in software engineering.',
  creator: 'cnsl-lg',
  keywords: ['Sepekaa', 'Web Development', 'Front-end Developer', 'Back-end Developer']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-t from-slate-200 from-5% to-slate-100 to-95%`}>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
