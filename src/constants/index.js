import { 
    geh, 
    btsThumb, 
    shkThumb, 
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
        role: "Frontend Development",
        ctaText: "View the Project"
    },
    {
        thumb: btsThumb,
        projectName1: "Smart",
        projectName2: "xBTS",
        role: "Frontend Development",
        ctaText: "View the Project"
    },
    {
        thumb: shkThumb,
        projectName1: "ISpyAt",
        projectName2: "TheShack",
        role: "Frontend Development",
        ctaText: "View the Project"
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
        techSvg: [react, vite, tailwind],
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
        techText: ["ReactJS", "Vite", "TailwindCSS"],
        externalLink: "https://react-todo-app-piajuan.vercel.app/",
        role: "Frontend Development",
        ctaText: "View the Project"
    },
    {
        thumb: featuredImages.ntcVidwall.thumb,
        title: ["NTC", "InfoPanel"],
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
        role: "Frontend Development",
        ctaText: "View the Project"
    },
    {
        thumb: featuredImages.geh.thumb,
        title: ["Globe", "EasyHub"],
        desc: "An interactive one-stop shop for all essential needs —shop, pay, explore, and access info about customer service support.",
        techSvg: [html, sass, bootstrap, jquery, swiper],
        carouselMedia: featuredImages.geh.slides,
        about: "EasyHub is an interactive one-stop shop for Globe customers. Within Shop and Care Zone, users can:",
        features: [
            "browse through Globe products and services",
            "scan QR code scan, and be redirected to online shops, where you can process payments and delivery requests",
            "discover the latest promos",
            "find detailed guides that walk you through the process of booking repairs and addressing customer service issues"
        ],
        techText: ["HTML", "SASS", "Bootstrap", "JQuery", "SwiperJS", "ScrollReveal"],
        externalLink: ["https://www.globe.com.ph/about-us/newsroom/consumer/globe-easyhub-best-in-class-retail-innovation.html"],
        role: "Frontend Development",
        ctaText: "Read article"
    },
    {
        thumb: featuredImages.shk.thumb,
        title: ["ISpyAt", "TheShack"],
        desc: "A web-based app dedicated for the opening of new Shake Shack branch in SM North Edsa.",
        techSvg: [html, sass, bootstrap, js],
        carouselMedia: featuredImages.shk.slides,
        about: "I Spy At The Shack is a web app that allows Shake Shack customers to find and collect items using clues provided weekly on the Shake Shack Facebook Page. Users simply need to snap a photo of the required item at the Shake Shack North Edsa branch mural, and there's no need to install anything.",
        features: [],
        techText: ["HTML", "SASS", "Bootstrap", "JavaScript", "HTML2Canvas"],
        externalLink: ["https://www.facebook.com/reel/5762810997180476"],
        role: "Frontend Development",
        ctaText: "View Shake Shack PH's FB Reel"
    },
    {
        thumb: featuredImages.bts.thumb,
        title: ["Smart", "xBTS"],
        desc: "",
        techSvg: [html, sass, bootstrap, js, swiper],
        carouselMedia: featuredImages.bts.slides,
        about: "",
        features: [],
        techText: ["HTML", "SASS", "Bootstrap", "JavaScript", "Swiper", "lightGallery", "ScrollReveal", "RellaxJS"],
        externalLink: ["http://www.anagonzales.com/2021/04/smart-bts-exclusive-website-for-smart.html", "https://www.spot.ph/entertainment/movies-music-tv/85944/smart-x-bts-live-your-passion-with-purpose-launch-a588-20210422-lfrm", "https://www.bandwagon.asia/articles/bts-smart-commercial-filipino-army-fans-watch-passion-purpose-dynamite-life-goes-onhybe-corporation-big-hit-music-philippines-2021"],
        role: "Frontend Development",
        ctaText: "Read related blog"
    },
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