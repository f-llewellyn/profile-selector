import { writable } from "svelte/store";

export const ProfileStore = writable([
    {
        id: "1",
        firstName: "John",
        lastName: "Smith",
        imgURL: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: "2",
        firstName: "Joe",
        lastName: "Bloggs",
        imgURL: "https://randomuser.me/api/portraits/women/2.jpg"
    },
])