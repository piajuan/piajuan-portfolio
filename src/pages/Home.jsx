import React from 'react'
import Hero from "../components/Hero"
import FeaturedProjects from "../components/FeaturedProjects"
import TechStack from "../components/TechStack"
import FeaturedArchives from '../components/FeaturedArchives'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedProjects />
        <TechStack />
        <FeaturedArchives />
    </>
  )
}

export default Home