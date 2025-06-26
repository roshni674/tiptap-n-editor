'use client'

import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../components/Editor'), { ssr: false })

export default function HomePage() {
  return (
    <div className="container">
      <h2>Tiptap Text Editor </h2>
      <Editor />
    </div>
  )
}
