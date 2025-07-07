import mongoose, { Schema, model, models } from 'mongoose'

const DocumentSchema = new Schema(
  {
    title: { type: String, required: false },

    // Main HTML content from TipTap
    content: { type: String, required: true },

    // Optional metadata (use only if needed)
    color: { type: String, required: false },       // e.g., last used text color
    fontFamily: { type: String, required: false },  // e.g., 'Pacifico'
    highlight: { type: Boolean, default: false },   // true if highlight used
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
)

const Document = models.Document || model('Document', DocumentSchema)

export default Document;

