import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className="sidebar">
        <a className="active" href="#home">Midjourney</a>
        <a href="#news">Community Showcase</a>
        <a href="#contact">Help & FAQ</a>
        <a href="#about">About & Careers</a>
      </div>

      <div className="content">
        {children}
      </div>
        
      </body>
    </html>
  )
}
