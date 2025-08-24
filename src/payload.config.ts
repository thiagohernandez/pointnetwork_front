import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import sharp from 'sharp'

import { Posts, Categories, Authors, Media, Users } from './collections'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Categories, Authors, Media, Users],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-key-that-is-32-characters-long',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/pointnetwork-blog',
  }),
  sharp,
})