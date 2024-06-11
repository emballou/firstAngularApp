import { PageItem } from "../models/PageItem";

export const PAGE_ITEMS: PageItem[] = [
    {
        title: "ABOUT",
        link: "/about",
        underConstruction: true
    },
    {
        title: "WHAT'S NOW",
        link: "/now",
        underConstruction: true,
        hidden: false,
        disabled: true
    },
    {
        title: "PROJECTS",
        link: "/projects",
        underConstruction: true
    }
];