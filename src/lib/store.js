import { writable } from "svelte/store";


export const categories = writable([
    {
        title: 'Lost and Found',
        id: 'lost-and-found',
    },
    {
        title: 'For Sale',
        id: 'for-sale',
    },
    {
        title: 'Events',
        id: 'events',
    },
    {
        title: 'Official Informaiton',
        id: 'official-information',
    },
    {
        title: 'Others',
        id: 'others',
    }
])