import { 
    geh, 
    smartxbts, 
    ispyattheshack, 
    lusogisip,
    featuredImages
} from "../assets"

import html from "../assets/tech/html.svg"
import css from "../assets/tech/css.svg"
import js from "../assets/tech/js.svg"
import react from "../assets/tech/react.svg"
import vite from "../assets/tech/vitejs.svg"
import sass from "../assets/tech/sass.svg"
import tailwind from "../assets/tech/tailwindcss.svg"
import bootstrap from "../assets/tech/bootstrap.svg"
import jquery from "../assets/tech/jquery.svg"
import vscode from "../assets/tech/vscode.svg"
import xd from "../assets/tech/xd.svg"
import figma from "../assets/tech/figma.svg"
import swiper from "../assets/tech/swiper.svg"


export const landingFeaturedProjects = [
    {
        thumb: geh,
        projectName1: "Globe",
        projectName2: "Easyhub",
        role: "Frontend Development"
    },
    {
        thumb: smartxbts,
        projectName1: "Smart",
        projectName2: "xBTS",
        role: "Frontend Development"
    },
    {
        thumb: ispyattheshack,
        projectName1: "ISpyAt",
        projectName2: "TheShack",
        role: "Frontend Development"
    },
    {
        thumb: lusogisip,
        projectName1: "DOH",
        projectName2: "Lusog-Isip",
        role: "Frontend Development, UI/UX Design"
    },
]

export const aLittleAboutMe = [
    {
        title: "Currently Listening To",
        value: ["Honey Calm Down by Cheats", "lofi.co jazz 🎷"]
    },
    {
        title: "Currently Learning",
        value: ["ReactJS", "TypeScript"]
    },
    {
        title: "Currently Reading",
        value: ["Make Time (by Jake Knapp and John Zeratsky)"]
    },
    {
        title: "Current Obsessions",
        value: ["iced matcha oat latte 🍵", "binge-watching Better Call Saul"]
    }
]

export const featuredProjects = [
    {
        thumb: featuredImages.todo.thumb,
        title: ["FrontendMentor", "Todo App"],
        desc: "A Todo app that has dark/light theme toggle and drag & drop reordering feature.",
        techSvg: [react, vite],
        carouselMedia: featuredImages.todo.slides,
        about: "A classic todo app with a few added features as part of the frontendmentor challenge. The user can:",
        features: [
            "View the optimal layout for the app depending on their device's screen size",
            "Add new todos to the list",
            "Mark todos as complete",
            "Delete todos from the list",
            "Filter by all/active/complete todos",
            "Clear all completed todos",
            "Toggle light and dark mode",
            "Drag and drop to reorder items on the list"
        ],
        techText: ["ReactJS", "Vite"],
        externalLink: "https://react-todo-app-piajuan.vercel.app/"
    },
    {
        thumb: featuredImages.ntcVidwall.thumb,
        title: ["NTC", "InfoPanel Kiosk"],
        desc: "A kiosk designed to provide info about OPS-DPS and User Manual/Walk through for applicants.",
        techSvg: [html, sass, bootstrap, jquery, swiper],
        carouselMedia: featuredImages.ntcVidwall.slides,
        about: "The OPS-DPS Information Kiosk is a versatile HTML project designed to provide comprehensive information about OPS-DPS (Office of Public Service - Digital Public Service) and its various components. This kiosk is optimized for both landscape and portrait orientations to ensure accessibility and ease of use for all visitors. Key Sections are",
        features: [
            "Introduction to OPS-DPS",
            "How-To Videos in navigating the OPS-DPS website",
            "Viewing of Citizen's Charter",
            "Credits"
        ],
        techText: ["HTML", "SASS", "Bootstrap", "JQuery", "SwiperJS"],
        externalLink: null,
    }
   
]

export const archives = [
    {
      year: "2021",
      project: "9NineCloud",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, CSS, Bootstrap, SwiperJS, ScrollRevealJS",
      link: undefined,
    },
    {
      year: "2021",
      project: "9NineCloud",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, CSS, Bootstrap, SwiperJS, ScrollRevealJS",
      link: "google.com"
    },
    {
      year: "2021",
      project: "9NineCloud",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, CSS, Bootstrap, SwiperJS, ScrollRevealJS",
      link: undefined,
    },
    
  ]