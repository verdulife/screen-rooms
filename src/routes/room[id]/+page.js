import { get } from "svelte/store";
import { Rooms } from "$lib/stores";

export function load({ params }) {
  const { id } = params;
  const rooms = get(Rooms);
  const room = rooms.find(r => r.id == id)

  return { room };
}