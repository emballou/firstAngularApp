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
        name: "PolyTrucker",
        description: `PolyTrucker is an arcade low-poly truck driving game. The game features missions 
            in which you must pick up cargo using a truck, and then deliver them, making sure to avoid any 
            terrain and animals as you make your way to the drop off point. You are scored based on how fast 
            you delivered the cargo, minus points for hitting animals. This game was built as a group 
            project in CS576. I was responsible for the UI of the game, including but not limited to the 
            main menu, pause menu and the in-game HUD. I also developed the animal-based AI for the game, 
            which acts as an enemy that wanders around and runs away from the truck's horn.`,
        link: "",
        skills: ['CS576', 'C#', 'Unity'],
        images: [
            'https://picsum.photos/200'
        ]
    },
    {
        name: "Productivity Hub",
        link: "google.com",
        description: `Productivity Hub is a scheduling website used to organize the various logistical 
            needs of a user's day-to-day life. This site was built as a group project for CS326. My role 
            in the project was the school webpage, and also worked closely with another member to help 
            with user authentication to allow for individual accounts.`,
        skills: ['CS326', 'HTML', 'CSS', 'JavaScript', 'SQL'],
        images: [
            'https://picsum.photos/210',
        ]
    },
    {
        name: "Personal Website",
        link: "google.com",
        description: `My personal website is my first website outside of coursework, as well as my first 
            real personal project. It's main purpose is to familiarize myself with Bootstrap, provide some 
            information about myself, and to further practice skills such as HTML, CSS, and JavaScript. 
            It is hosted under GitHub pages.`,
        skills: ['Personal', 'HTML', 'CSS', 'JavaScript'],
        images: [
            'https://picsum.photos/215',
        ]
    }
];