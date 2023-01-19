import { db } from "$lib/db";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const rooms = await request.json();

  if (rooms) {
    db.data = { rooms }
    await db.write();
  }

  return new Response(JSON.stringify({
    done: true
  }));
}