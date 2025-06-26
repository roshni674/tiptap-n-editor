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
  CheckSquare
} from 'lucide-react'

export const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) return null

  return (
    <div className="menu-bar">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        <Strikethrough size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <Quote size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        <Code size={16} />
      </button>
      <button onClick={() => editor.chain().focus().toggleTaskList().run()}>
        <CheckSquare size={16} />
      </button>
      <input
        type="color"
        onChange={(e) =>
          editor.chain().focus().setColor(e.target.value).run()
        }
      />
     <button
  onClick={() => {
    const isActive = editor.isActive('highlight', { color: '#fffb91' })

    editor
      .chain()
      .focus()
      .setHighlight(isActive ? undefined : { color: '#fffb91' })
      .run()
  }}
>
  <Paintbrush size={16} />
</button>


      <select
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
  onChange={(e) => {
    const font = e.target.value
    editor.chain().focus().setFontFamily(font).run()
  }}
>
  <option value="'Bebas Neue'">Bebas Neue (Display)</option>
  <option value="'Pacifico'">Pacifico (Handwriting)</option>
  <option value="'Fira Mono'">Fira Mono (Monospace)</option>
</select>


    </div>
  )
}
