import { db } from "$lib/db";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const room = await request.json();
  const { rooms } = db.data;

  if (room) {
    rooms.push(room);
    await db.write();
  }

  return new Response(JSON.stringify({
    room
  }));
}