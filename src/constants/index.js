import { 
    geh, 
    btsThumb, 
    shkThumb, 
    lusogThumb,
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
        thumb: lusogThumb,
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
        externalLink: ["https://react-todo-app-piajuan.vercel.app/"],
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
        externalLink: [null],
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
        thumb: featuredImages.lusog.thumb,
        title: ["DOH", "LusogIsip"],
        desc: "The first mobile app for mental health and self-care culturally-adapted for the Philippines. ",
        techSvg: [html, sass, jquery,],
        carouselMedia: featuredImages.lusog.slides,
        about: "Lusog-Isip is the first mobile app for mental health and self-care culturally-adapted for the Philippines. It uses evidence-based screening tools and interventions to help you on your journey towards better overall well-being and healthier coping strategies.",
        features: [],
        techText: ["HTML", "SASS", "JQuery", "ScrollReveal"],
        externalLink: ["https://lusog-isip.doh.gov.ph/"],
        role: "Mobile UI/UX Design, Email Templates, Frontend Development",
        ctaText: "Visit the website"
    },
    {
        thumb: featuredImages.bts.thumb,
        title: ["Smart", "xBTS"],
        desc: "An exclusive website for SMART Subscribers as part the online launch of Smart X BTS Campaign.",
        techSvg: [html, sass, bootstrap, js, swiper],
        carouselMedia: featuredImages.bts.slides,
        about: "As part of the BTS’s 'Live Your Passion with Purpose' campaign, SMART launched a mobile-first microsite where SMART subscribers can gain access to exclusive BTS content and be able to use their devices a digital lightstick. The site can only be accessed by SMART data via mobile devices, and consists of: ",
        features: ["Coming Soon", "Countdown that started a few days before the TVC Launch", "Digital Mobile Lightstick Video", "Exclusive videos such as Interviews and Behind the Scenes for PH fans", "Hi-Res Photo Gallery (Images above were blurred for demo purposes only", "Photocards", "Error page for non-SMART subscribers"],
        techText: ["HTML", "SASS", "CSS Animations", "Bootstrap", "JavaScript", "Swiper", "lightGallery", "ScrollReveal", "RellaxJS"],
        externalLink: ["http://www.anagonzales.com/2021/04/smart-bts-exclusive-website-for-smart.html", "https://www.spot.ph/entertainment/movies-music-tv/85944/smart-x-bts-live-your-passion-with-purpose-launch-a588-20210422-lfrm", "https://www.bandwagon.asia/articles/bts-smart-commercial-filipino-army-fans-watch-passion-purpose-dynamite-life-goes-onhybe-corporation-big-hit-music-philippines-2021"],
        role: "Frontend Development",
        ctaText: "Read related blog"
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
]

export const archives = [
    {
      year: "2023",
      project: "Hoobank Landing Page",
      company: "-",
      role: "Frontend",
      tech: "React, Vite, TailwindCSS",
      link: "https://hoobank-piajuan.vercel.app/",
    },
    {
      year: "2023",
      project: "Manage Landing Page",
      company: "-",
      role: "Frontend",
      tech: "HTML, TailwindCSS, Webpack, SwiperJS",
      link: "https://piajuan.github.io/fm-manage-landing/",
    },
    {
      year: "2023",
      project: "EasyBank Landing Page",
      company: "-",
      role: "Frontend",
      tech: "HTML, TailwindCSS, Webpack, ScrollRevealJS",
      link: "https://piajuan.github.io/fm-easybank/",
    },
    {
      year: "2023",
      project: "Globe Vendo Machine CMS",
      company: "HTech Corporation",
      role: "UI Design & Frontend",
      tech: "Figma, HTML, CSS, Bootstrap, JQuery",
      link: undefined,
    },
    {
      year: "2022",
      project: "SSI Life E-Raffle Microsite",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, SASS, Bootstrap",
      link: undefined,
    },
    {
      year: "2022",
      project: "Globe x Puregold",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, SASS, Bootstrap, JQuery",
      link: undefined,
    },
    // {
    //   year: "2021",
    //   project: "influeNFT/NFTBistro",
    //   company: "HTech Corporation",
    //   role: "Frontend",
    //   tech: "HTML, SASS, Bootstrap",
    //   link: "https://gamecast.studio/",
    // },
    {
      year: "2021",
      project: "Gamecast Studio",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, SASS, Bootstrap",
      link: "https://gamecast.studio/",
    },
    {
      year: "2021",
      project: "PCG Assessment Form",
      company: "HTech Corporation",
      role: "UI Design",
      tech: "Figma",
      link: undefined,
    },
    {
      year: "2021",
      project: "Broom-Broom",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, SASS, Bootstrap, JQuery, SwiperJS, ScrollRevealJS",
      link: "https://broom-broom.com/client/home",
    },
    {
      year: "2021",
      project: "9Nine Cloud",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, SASS, Bootstrap, JQuery, ScrollRevealJS",
      link: "https://9nine.cloud/",
    },
    {
      year: "2021",
      project: "Shake-Shack E-Raffle",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, SASS, Bootstrap, JavaScript",
      link: undefined,
    },
    {
      year: "2021",
      project: "Audra Publishing",
      company: "HTech Corporation",
      role: "Frontend",
      tech: "HTML, CSS, SASS, Bootstrap, JavaScript",
      link: undefined,
    },
    {
      year: "2021",
      project: "Faves.Social CMS",
      company: "HTech Corporation",
      role: "UI/UX Design & Frontend",
      tech: "Figma, HTML, CSS, Bootstrap, JQuery",
      link: undefined
    },
    {
      year: "2021",
      project: "Brgy. Moonwalk Registry of Barangay Inhabitants",
      company: "HTech Corporation",
      role: "Email Template",
      tech: "Figma, HTML, CSS",
      link: undefined,
    },
    {
        year: "2020",
        project: "Virtual Door",
        company: "HTech Corporation",
        role: "UI Design & Frontend",
        tech: "Figma, HTML, SASS, Bootstrap, JQuery, SwiperJS, ScrollRevealJS, Dropify",
        link: undefined,
    },
    {
        year: "2020",
        project: "HTech Timesheet",
        company: "HTech Corporation",
        role: "Frontend (Enhancements & Fixes)",
        tech: "HTML, SASS",
        link: "https://timesheet.htechcorp.net/",
    },
    {
        year: "2020",
        project: "Strol Door2Door",
        company: "HTech Corporation",
        role: "Frontend",
        tech: "HTML, SASS, Bootstrap, JQuery",
        link: undefined,
    },
    {
        year: "2020",
        project: "ScanMo.Co",
        company: "HTech Corporation",
        role: "UI Design, PDF Design, & Frontend",
        tech: "Figma, HTML, SASS",
        link: "https://www.scanmo.co/",
    },
    {
        year: "2020",
        project: "Heartstrings",
        company: "HTech Corporation",
        role: "UI Design & Frontend",
        tech: "Figma, HTML, CSS, SASS, JQuery, Bootstrap, SwiperJS",
        link: "https://heartstringsbags.com/",
    },
    {
        year: "2020",
        project: "Top Medical Magazine",
        company: "MCVO Talent Outsourcing",
        role: "UI Design & Frontend",
        tech: "Adobe XD, WordPress",
        link: "https://xd.adobe.com/view/961606bb-cdd6-41d4-a3fe-ad3c8cdfd592-c345/?fullscreen&hints=off",
    },
    {
        year: "2020",
        project: "B.Jowers Painting",
        company: "MCVO Talent Outsourcing",
        role: "Landing Page Design Proposal",
        tech: "Adobe XD",
        link: "https://xd.adobe.com/view/70ee2a29-42e8-47f3-b571-7bdddb622e36-25bd/?fullscreen&hints=off",
    },
    {
        year: "2020",
        project: "Heartland Fulfillment Center",
        company: "MCVO Talent Outsourcing",
        role: "UI Design & Frontend",
        tech: "Adobe XD, WordPress",
        link: "https://xd.adobe.com/view/78c77670-f06e-454a-8ebd-4543abb4d802-2d94/?fullscreen&hints=off",
    },
    {
        year: "2019",
        project: "Rabine (Exterior Facilities Company)",
        company: "MCVO Talent Outsourcing",
        role: "Landing Page Design Proposal",
        tech: "Adobe XD",
        link: "https://xd.adobe.com/view/f5104710-8c4f-499c-8e3d-2cf4fc706a8c-a043/?fullscreen&hints=off",
    },
    {
        year: "2019",
        project: "Wilson Sarkis Photography & Cinematography ",
        company: "MCVO Talent Outsourcing",
        role: "UI Design Proposal",
        tech: "Adobe XD",
        link: "https://xd.adobe.com/view/a59bbb65-226c-46ce-58dd-01773278a14f-d3aa/?fullscreen&hints=off",
    },
    {
        year: "2019",
        project: "Triad Embryonics (Consulting)",
        company: "MCVO Talent Outsourcing",
        role: "Landing Page Design Proposal",
        tech: "Adobe XD",
        link: "https://xd.adobe.com/view/88f586fd-39dc-4abd-99cf-b025e037b708-dda6/?fullscreen&hints=off",
    },
  ]