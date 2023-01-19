import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultRooms = [
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

export const Rooms = writable(
  (browser && JSON.parse(localStorage.getItem('Rooms'))) || defaultRooms
);


Rooms.subscribe((val) => browser && (localStorage.Rooms = JSON.stringify(val)));