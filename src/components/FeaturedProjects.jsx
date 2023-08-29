import React from 'react'
import { useId } from 'react'
import { landingFeaturedProjects } from "../constants"
import FeaturedCard from "./FeaturedCard"
import { Button } from "../components/ui/button"

const FeaturedProjects = () => {
  return (
    <section className="py-4 pb-24 overflow-hidden">
        <div className="my-24">
            <h1 className='text-[8vw] leading-none font-primary whitespace-nowrap dark:text-white'>featured projects i've worked on</h1>
        </div>

        <div className="container mx-auto px-20">
            <div className='grid grid-cols-2 justify-center gap-20'>
                {landingFeaturedProjects.map(proj => <FeaturedCard key={useId()} {...proj}/>)}
            </div>
        </div>

        <Button className='mx-auto mt-[20vh] flex'> see all projects </Button>
    </section>
  )
}

export default FeaturedProjects