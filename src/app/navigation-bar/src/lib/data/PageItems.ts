import { PageItem } from "../models/PageItem";


export const PAGE_ITEMS: PageItem[] = [
    {
        title: "Dashboard",
        link: "/dashboard",
        underConstruction: true
    },
    {
        title: "About",
        link: "/about",
        underConstruction: true
    },
    {
        title: "What's now",
        link: "/now",
        underConstruction: true,
        hidden: false,
        disabled: true
    },
    {
        title: "Projects",
        link: "/projects",
        underConstruction: true
    },
    {
        title: "Playground",
        link: "/playground",
        underConstruction: true
    }
];