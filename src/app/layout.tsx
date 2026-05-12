import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nrto3 — Digital Designer',
  description: '從品牌官網到網頁應用，習慣從使用者角度出發，把客戶的想法做成真正好用的產品。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
