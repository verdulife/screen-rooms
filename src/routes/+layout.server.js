import { error } from '@sveltejs/kit';
import { db, defaultRooms } from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  await db.read()
  db.data = db.data || { rooms: defaultRooms }
  await db.write()
  const { rooms } = db.data;

  if (rooms) {
    return { rooms }
  }

  throw error(404, 'Not found');
}