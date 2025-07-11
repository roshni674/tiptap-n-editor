import { useState } from 'react'
import { Editor } from '@tiptap/react'
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Code,
  Quote,
  Paintbrush,
  CheckSquare,
} from 'lucide-react'

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const [selectedFont, setSelectedFont] = useState('') // Add font state

  if (!editor) return null

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const font = e.target.value
    setSelectedFont(font)
    editor.chain().focus().setFontFamily(font).run()
  }

  return (
    <div className="menu-bar">
      <button
  className={`bold-button ${editor.isActive('bold') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleBold().run()}
>
  <Bold size={16} />
</button>

      <button
  className={`format-button ${editor.isActive('italic') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleItalic().run()}
>
  <Italic size={16} />
</button>
      <button
  className={`format-button ${editor.isActive('strike') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleStrike().run()}
>
  <Strikethrough size={16} />
</button>
      <button
  className={`format-button ${editor.isActive('bulletList') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleBulletList().run()}
>
  <List size={16} />
</button>

<button
  className={`format-button ${editor.isActive('orderedList') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleOrderedList().run()}
>
  <ListOrdered size={16} />
</button>
      <button
  className={`format-button ${editor.isActive('blockquote') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleBlockquote().run()}
>
  <Quote size={16} />
</button>

<button
  className={`format-button ${editor.isActive('codeBlock') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleCodeBlock().run()}
>
  <Code size={16} />
</button>

<button
  className={`format-button ${editor.isActive('taskList') ? 'active' : ''}`}
  onClick={() => editor.chain().focus().toggleTaskList().run()}
>
  <CheckSquare size={16} />
</button>

      <input
        type="color"
        onChange={(e) =>
          editor.chain().focus().setColor(e.target.value).run()
        }
      />

      <button
  className={`format-button ${
    editor.isActive('highlight') ? 'active' : ''
  }`}
  onClick={() => {
    const isYellowActive = editor.isActive('highlight', { color: '#fffb91' })

    editor
      .chain()
      .focus()
      .setHighlight(isYellowActive ? undefined : { color: '#fffb91' })
      .run()
  }}
>
  <Paintbrush size={16} />
</button>

      <select
  className="select-dropdown"
  defaultValue="paragraph"
  onChange={(e) => {
    const val = e.target.value
    if (val === 'paragraph') {
      editor.chain().focus().setParagraph().run()
    } else {
      const level = parseInt(val, 10)
      if ([1, 2, 3].includes(level)) {
        editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 }).run()
      }
    }
  }}
>
        <option value="paragraph">Text Size</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
      </select>

      <select
  className="select-dropdown"
  value={selectedFont}
  onChange={handleFontChange}
  style={{ fontFamily: selectedFont || 'inherit' }}
>
        <option value="" disabled>
          Select Font
        </option>
        <option value="Inter" style={{ fontFamily: 'Inter' }}>
          Inter
        </option>
        <option
          value='"Comic Sans MS", "Comic Sans"'
          style={{ fontFamily: '"Comic Sans MS", "Comic Sans"' }}
        >
          Comic Sans
        </option>
        <option value="serif" style={{ fontFamily: 'serif' }}>
          Serif
        </option>
        <option value="monospace" style={{ fontFamily: 'monospace' }}>
          Monospace
        </option>
        <option value="cursive" style={{ fontFamily: 'cursive' }}>
          Cursive
        </option>
        <option
          value="var(--title-font-family)"
          style={{ fontFamily: 'var(--title-font-family)' }}
        >
          CSS Variable Font
        </option>
        <option value="Exo 2" style={{ fontFamily: 'Exo 2' }}>
          Exo 2
        </option>
      </select>
    </div>
  )
}
