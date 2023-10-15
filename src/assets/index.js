// landing featured projects
import geh from "./featured/geh.jpg"
import lusogisip from "./featured/lusogisip.jpg"

// works - featured
import todoThumb from "./featured/todo/thumb.png"
import todo1 from "./featured/todo/slide1.gif"
import todo2 from "./featured/todo/slide2.jpg"

import ntcVidwallThumb from "./featured/ntc-vidwall/thumb.jpg"
import ntcVidwall1 from "./featured/ntc-vidwall/slide1.gif"
import ntcVidwall2 from "./featured/ntc-vidwall/slide2.jpg"

import gehThumb from "./featured/geh/thumb.jpg"
import geh1 from "./featured/geh/slide1.gif"
import geh2 from "./featured/geh/slide2.gif"

import shkThumb from "./featured/shk/thumb.jpg"
import shk1 from "./featured/shk/slide1.gif"

import btsThumb from "./featured/smartxbts/thumb.gif"
import bts1 from "./featured/smartxbts/slide1.gif"
import bts2 from "./featured/smartxbts/slide2.gif"
import bts3 from "./featured/smartxbts/slide3.gif"
import bts4 from "./featured/smartxbts/slide4.gif"
import bts5 from "./featured/smartxbts/slide5.png"
import bts6 from "./featured/smartxbts/slide6.png"


import lusogThumb from "./featured/lusog-isip/thumb.gif"
import lusog1 from "./featured/lusog-isip/slide1.jpg"
import lusog2 from "./featured/lusog-isip/slide2.jpg"
import lusog3 from "./featured/lusog-isip/slide3.jpg"
import lusog4 from "./featured/lusog-isip/slide4.jpg"
import lusog5 from "./featured/lusog-isip/slide5.jpg"
import lusog6 from "./featured/lusog-isip/slide6.jpg"

// archives
import broombroom from "./archives/broombroom.png"
import favesRecording from "./archives/faves-recording.png"
import faves from "./archives/faves.png"
import heartstrings from "./archives/heartstrings.png"
import influenft from "./archives/influenft.png"
import ninecloud from "./archives/ninecloud.png"
import puregold from "./archives/puregold.png"
import shakeshack from "./archives/shakeshack.png"

// tech stack
import html from "./tech/html.svg"
import css from "./tech/css.svg"
import js from "./tech/js.svg"
import react from "./tech/react.svg"
import vite from "./tech/vitejs.svg"
import sass from "./tech/sass.svg"
import tailwind from "./tech/tailwindcss.svg"
import bootstrap from "./tech/bootstrap.svg"
import jquery from "./tech/jquery.svg"
import vscode from "./tech/vscode.svg"
import xd from "./tech/xd.svg"
import figma from "./tech/figma.svg"
import swiper from "./tech/swiper.svg"

import hiMemoji from "./hi-memoji.svg"

// about
import aboutVid from "./about/working.mp4"
import aboutPic from "./about/working.jpg"
import tagline from "./tagline.svg"

import reading from "./about/reading.jpg"
import cafe from "./about/cafe.jpg"
import hike from "./about/hike.jpg"
import crochet from "./about/crochet.jpg"
// import camp from "./about/camp.jpg"
import museum from "./about/museum.jpg"
import nature from "./about/nature.jpg"
import photography from "./about/photography.jpg"
import wallclimb from "./about/wallclimb.jpg"
import tent from "./about/tent.gif"

export {
    geh, 
    btsThumb,
    shkThumb,
    lusogThumb,
    hiMemoji,
    aboutVid,
    aboutPic,
    tagline,
}

export const techStackIcons = [html, css, js, react, vite, sass, tailwind, bootstrap, jquery, vscode, xd, figma]

export const featuredImages = {
    todo: {
        thumb: todoThumb,
        slides: [todo1, todo2]
    },
    ntcVidwall: {
        thumb: ntcVidwallThumb,
        slides: [ntcVidwall1, ntcVidwall2]
    },
    geh: {
        thumb: gehThumb,
        slides: [geh1, geh2]
    },
    shk: {
        thumb: shkThumb,
        slides: [shk1]
    },
    bts: {
        thumb: btsThumb,
        slides: [bts1,bts2,bts3,bts4,bts5,bts6,]
    },
    lusog: {
        thumb: lusogThumb,
        slides: [lusog1, lusog2, lusog3, lusog4, lusog5, lusog6]
    },
}

// export const techStackIcons = [
//     {
//         title: "HTML",
//         icon: html
//     },
//     {
//         title: "CSS",
//         icon: css
//     },
//     {
//         title: "JavaScript",
//         icon: js
//     },
//     {
//         title: "ReactJS",
//         icon: react
//     },
//     {
//         title: "Vite",
//         icon: vite
//     },
//     {
//         title: "SASS",
//         icon: sass
//     },
//     {
//         title: "TailwindCSS",
//         icon: tailwind
//     },
//     {
//         title: "Bootstrap",
//         icon: bootstrap
//     },
//     {
//         title: "JQuery",
//         icon: jquery
//     },
//     {
//         title: "VS Code",
//         icon: vscode
//     },
//     {
//         title: "Adobe XD",
//         icon: xd
//     },
//     {
//         title: "Figma",
//         icon: figma
//     },
// ]


export const aboutMePics = [
    reading, crochet, photography, cafe, nature, wallclimb, hike, museum, tent
]

export const archivesPics = [
    influenft, ninecloud, puregold, faves, heartstrings, broombroom, favesRecording, shakeshack
]