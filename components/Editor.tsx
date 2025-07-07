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


export default function Editor() {
  
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
  
  return (
    <div className="editor-wrapper">
  {editor && <MenuBar editor={editor} />}
  <div className="editor-placeholder-wrapper">
    <EditorContent editor={editor} className="editor-content" />
    {editor?.isEmpty && editor?.isFocused === false && (
      <div className="placeholder">Write something…</div>
    )}
  </div>
</div>
  )
}