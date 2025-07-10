// models/Document.ts

import mongoose, { Schema, model, models } from 'mongoose'

const DocumentSchema = new Schema(
  {
    title: { type: String, required: false },

    // Store TipTap content as structured JSON
    content: { type: Schema.Types.Mixed, required: true },

    color: { type: String, required: false },
    fontFamily: { type: String, required: false },
    highlight: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

const Document = models.Document || model('Document', DocumentSchema)

export default Document
