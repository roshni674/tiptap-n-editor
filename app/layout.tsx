import '../styles/editor.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TIPTAP Notion Editor',
  description: 'A Notion-style editor built with Tiptap and Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
