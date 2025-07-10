// pages/api/document/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/db/mongodb'
import Document from '@/models/Document'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect()

  switch (req.method) {
    case 'POST': {
      const { title, content, color, fontFamily, highlight } = req.body

      // ✅ Validate that content is an object (JSON)
      if (!content || typeof content !== 'object') {
        return res.status(400).json({ error: 'Content (JSON) is required' })
      }

      try {
        const doc = await Document.create({ title, content, color, fontFamily, highlight })
        return res.status(201).json(doc)
      } catch (err) {
        return res.status(500).json({ error: 'Failed to create document' })
      }
    }

    case 'GET': {
      try {
        const docs = await Document.find().sort({ createdAt: -1 })
        return res.status(200).json(docs)
      } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch documents' })
      }
    }

    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}
