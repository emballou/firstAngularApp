import { ProjectItem } from "../models/ProjectItem";

export const PROJECT_ITEMS: ProjectItem[] = [
    {
        name: "Sample Project 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus magna.
            In nisl nisi scelerisque eu ultrices. Est sit amet facilisis magna. Duis at consectetur lorem donec.
            Sit amet porttitor eget dolor morbi non arcu risus quis. Venenatis cras sed felis eget velit
            aliquet sagittis id. Ac tortor dignissim convallis aenean et tortor at risus viverra. Aliquet porttitor
            lacus luctus accumsan tortor. Venenatis urna cursus eget nunc scelerisque viverra.`,
        skills: ['Angular', 'TypeScript'],
        link: "github.com",
        images: [
            'https://picsum.photos/195',
            'https://picsum.photos/200'
        ]
    },
    {
        name: "Sample Project 2",
        link: "youtube.com",
        images: [
            'https://picsum.photos/200',
            'https://picsum.photos/205'
        ]
    },
    {
        name: "Sample Project 3",
        link: "google.com",
        images: [
            'https://picsum.photos/210',
        ]
    },
    {
        name: "Sample Project 4",
        link: "google.com",
        images: [
            'https://picsum.photos/215',
        ]
    }

];