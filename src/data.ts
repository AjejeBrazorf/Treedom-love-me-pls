import hammock from "./assets/imgs/hammock-min.png";
import sad from "./assets/imgs/sad.jpg";
import happy from "./assets/imgs/happy.jpg";
import profile from "./assets/imgs/profile-pic-1.jpeg";
import angular from "./assets/icons/angular-icon-1.svg";
import typescript from "./assets/icons/typescript.svg";
import css from "./assets/icons/css-3.svg";
import git from "./assets/icons/git-icon.svg";
import javascript from "./assets/icons/logo-javascript.svg";
import rxjs from "./assets/icons/rxjs-1.svg";
import react from "./assets/icons/react-2.svg";
import mysql from "./assets/icons/mysql-6.svg";
import json from "./assets/icons/json-5.svg";


const data = {
    cv:  "https://firebasestorage.googleapis.com/v0/b/treedom-would-you-marry-me.appspot.com/o/resume.pdf?alt=media&token=25161e36-5696-4821-b826-4f0272644262",
    slides: [
        happy,
        sad,
    ],
    profilePic: profile,
    coverImage: hammock,
    name: "Giuseppe Ministeri",
    email: "peppemini@gmail.com",
    motivational:
        "That guy in the hammock is thinking about how he could make himself useful in this world.\n" +
        "🌳 It's  not a coincidence that the hammock is supported by those two trees. 🌳 \n" +
        "\n" +
        "Hi! I am the hammock guy! \n My name is Giuseppe and I am a Front End developer with 3.5 years of working experience.\n" +
        "\nI have been based in Utrecht for 2 years and I am looking forward to relocating back to Italy!\n" +
        "\nOur climate needs fast, sustainable and effective actions.\nI want to be contributing to those actions with curiosity and my best efforts.\n" +
        "\nTherefore I would like to apply for the position of Front End developer at Treedom.\n",
    story:
        "Since High school times, Front End has been a funny hobby together with anything that had to do with visuals (drawings, 3D, photography ecc..).\n" +
        "\n" +
        "After getting a master degree at Politecnico di Torino, Front End development finally became a profession.\n" +
        "\n" +
        "I started working for a small creative agency, having the chance to develop their website's Front End but also take care of UI e-commerce projects.\n" +
        "\n" +
        "During the same period I've been collaborating with a consultancy company which gave me the opportunity to work around Italy for a banking project.\n" +
        "Here I used for the first time Angular as a framework in a professional environment.\n" +
        "\n" +
        "After one year and a half I moved to the Netherlands, joining a team of highly skilled and passionate developers who gave me the power to love Linux, open source and a problem solving oriented mentality.\n" +
        "\n" +
        "During the last two years I intensified the knowledge over Angular but also touched other parts of the development process as e.g. joining the UI/UX design sessions.",
    background: {
        Origin: "Italy",
        age: 29,
        education: {
            title: "Bachelor & Master degree in Cinema and media engineering",
            link: "https://didattica.polito.it/laurea/ingegneria_cinema/it/presentazione"
        }
    },
    expertise:[
    {
        title:"Angular",
        icon: angular,
        score:8
    },
    {
        title:"Typescript",
        icon: typescript,
        score:7
    },
    {
        title:"CSS",
        icon: css,
        score:9
    },
    {
        title:"Git",
        icon: git,
        score:7
    },
    {
        title:"JS",
        icon: javascript,
        score:8
    },
    {
        title:"RxJs",
        icon: rxjs,
        score:7
    },
    {
        title:"React",
        icon: react,
        score:5
    },
    {
        title:"MySQL",
        icon: mysql,
        score:6
    },
    {
        title:"REST ",
        icon: json,
        score:6
    },
    ],
};

export default data;