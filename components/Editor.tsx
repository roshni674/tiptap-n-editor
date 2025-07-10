import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { MenuBar } from './MenuBar'
import Heading from '@tiptap/extension-heading'
import FontFamily from '@tiptap/extension-font-family'
import { useState } from 'react'

export default function Editor() {
  const [title, setTitle] = useState('')
  const [saving, setSaving] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Heading.configure({ levels: [1, 2, 3] }),
      TextStyle,
      FontFamily.configure({
        types: ['textStyle'],
      }),
      Color,
      Highlight,
      TaskList.configure({ HTMLAttributes: { class: 'task-list' } }),
      TaskItem.configure({ HTMLAttributes: { class: 'task-item' } }),
    ],
  })

  const handleSave = async () => {
    if (!editor) return

    const contentJSON = editor.getJSON()

    // Optional: prevent saving empty document
    if (editor.isEmpty) {
      alert('Cannot save empty document')
      return
    }

    const payload = {
      title,
      content: contentJSON,
    }

    setSaving(true)
    try {
      const res = await fetch('/api/document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to save')
      alert('Document saved!')
    } catch (err) {
      alert('Error saving document')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="editor-wrapper">
      <input
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />

      {editor && <MenuBar editor={editor} />}

      <div className="editor-placeholder-wrapper">
        <EditorContent editor={editor} className="editor-content" />
        {editor?.isEmpty && editor?.isFocused === false && (
          <div className="placeholder">Write something…</div>
        )}
      </div>

      <button
        onClick={handleSave}
        disabled={!editor || saving}
        className="save-button"
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}
