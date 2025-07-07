import '../styles/editor.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TIPTAP Notion Editor',
  description: 'A Notion-style editor built with Tiptap and Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
