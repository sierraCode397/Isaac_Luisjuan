import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Luisjuan',
  description: 'Portafolio personal de precentacion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: "black" }}>{children}</body>
    </html>
  )
}
