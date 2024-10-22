import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import {
  Caveat,
  Delius,
  Gloria_Hallelujah,
  Kalam,
  Patrick_Hand,
  Permanent_Marker,
  Schoolbell,
} from 'next/font/google'
import localFont from 'next/font/local'
import './color.css'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const pm = Permanent_Marker({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-en-permanent-marker',
})

const delius = Delius({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-delius',
})

const patrickHand = Patrick_Hand({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-patrick-hand',
})

const kgPrimaryDots = localFont({
  src: './fonts/KGPrimaryDots.ttf',
  variable: '--font-en-zt-kg-primary-dots',
})

const schoolBell = Schoolbell({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-schoolbell',
})

const caveat = Caveat({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-caveat',
})

const kalam = Kalam({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-kalam',
})

const gloriaHallelujah = Gloria_Hallelujah({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-gloria-hallelujah',
})

export const metadata: Metadata = {
  title: '英文字帖',
  description: '制作和打印英文字帖',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kgPrimaryDots.variable} ${delius.variable} ${patrickHand.variable} ${pm.className} ${schoolBell.variable} ${caveat.variable} ${kalam.className} ${gloriaHallelujah.variable}  antialiased`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
