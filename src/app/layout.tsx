import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'], display: 'swap', })

export const metadata: Metadata = {
  title: 'Mariem Hachani Portfolio',
  description: 'Find the matching skills for your needs',
  icons: '../../svg/cam.svg',
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
          {children}
        </div>
      </body>
    </html>
  )
}
