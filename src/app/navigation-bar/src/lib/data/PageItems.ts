import { PageItem } from "../models/PageItem";


export const PAGE_ITEMS: PageItem[] = [
    {
        title: "Profile",
        link: "/profile",
        underConstruction: true
    },
    {
        title: "Projects",
        link: "/projects",
        underConstruction: true
    },
    {
        title: "What's now",
        link: "/now",
        underConstruction: true,
        hidden: false,
    },
    {
        title: "...",
        link: "/colophon",
        underConstruction: true,
        hidden: true
    },
    {
        title: "Playground",
        link: "/playground",
        underConstruction: true,
        hidden: true
    }
];