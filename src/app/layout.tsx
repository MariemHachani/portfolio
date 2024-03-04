import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'


const inter = Inter({ subsets: ['latin'], display: 'swap', })

export const metadata: Metadata = {
  title: 'Mariem Hachani Portfolio',
  description: 'Find the matching skills for your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body className={inter.className} >
        <div className="w-full min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
