import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

const tc = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-tc',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'NONO.DEV',
  description: 'iOS · macOS · Web 應用開發。從 0 到 1，從原型到上架。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.variable} ${mono.variable} ${tc.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
