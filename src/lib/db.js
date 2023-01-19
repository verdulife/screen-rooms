import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
export const db = new Low(adapter)

export const defaultRooms = [
  {
    id: 1,
    created: new Date(),
    name: "Example text room",
    type: "text",
    content: "Lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    created: new Date(),
    name: "Example image room",
    type: "image",
    content: "/example-room.jpg"
  }
]