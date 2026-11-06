import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import React from 'react'
import './styles.css'

const head = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-head' })
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Christian Jake Paraoan – Portfolio',
  description: 'AR backend developer and multimedia creative based in Manila.',
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
