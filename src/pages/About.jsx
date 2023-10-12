import React from 'react'
import Intro from '../components/about/Intro'
import AboutMe from "../components/about/AboutMe"
import Experience from '../components/about/Experience'
import Tech from '../components/about/Tech'



const About = () => {
  return (
    <>
        <Intro />
        <Experience />
        <Tech />
        <AboutMe />
    </>
  )
}

export default About