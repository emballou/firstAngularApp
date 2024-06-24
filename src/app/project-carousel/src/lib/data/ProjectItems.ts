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
        links: [
            { name: "GitHub", url: "github.com", icon: "bi-github"}
        ],
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
        links: [
            { name: "YouTube", url: "https://www.youtube.com/watch?v=vbj5t95vuic", icon: "bi-youtube"}
        ],
        skills: ['CS576', 'C#', 'Unity'],
        images: [
            'https://i.ibb.co/rGFzcxb/polytrucker-ui-start.png',
            'https://i.ibb.co/tZGf84s/polytrucker-ui-game.png',
            'https://i.ibb.co/whftTqx/polytrucker-scene.png'
        ]
    },
    {
        name: "Productivity Hub",
        links: [
            { name: "YouTube", url: "https://www.youtube.com/watch?v=zvhawDTPxRU", icon: "bi-youtube"}
        ],
        description: `Productivity Hub is a scheduling website used to organize the various logistical 
            needs of a user's day-to-day life. This site was built as a group project for CS326. My role 
            in the project was the school webpage, and also worked closely with another member to help 
            with user authentication to allow for individual accounts.`,
        skills: ['CS326', 'HTML', 'CSS', 'JavaScript', 'SQL'],
        images: [
            'https://i.ibb.co/Xt0wr8c/prodhub-class-page.png',
        ]
    },
    {
        name: "Personal Website V1",
        links: [
            { name: "Link", url: "https://emballou.github.io/", icon: "bi-code-slash"},
            { name: "GitHub", url: "https://github.com/emballou/emballou.github.io", icon: "bi-github"}
        ],
        description: `My personal website is my first website outside of coursework, as well as my first 
            real personal project. It's main purpose is to familiarize myself with Bootstrap, provide some 
            information about myself, and to further practice skills such as HTML, CSS, and JavaScript. 
            It is hosted under GitHub pages.`,
        skills: ['Personal', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        images: [
            "https://i.ibb.co/8gMXBxD/personal-website-first.png",
        ]
    },
    {
        name: "Personal Website V2",
        links: [
            { name: "Link", url: "/profile", icon: "bi-code-slash"},
            { name: "GitHub", url: "https://github.com/emballou/personal-portfolio-angular", icon: "bi-github"}
        ],
        description: `This site. Made with Angular.`,
        skills: ['Personal', 'Angular', 'HTML', 'CSS', 'TypeScript'],
        images: [
            "https://i.ibb.co/0KjHbv2/personal-website-second.png",
        ],
        underConstruction: false
    }
];