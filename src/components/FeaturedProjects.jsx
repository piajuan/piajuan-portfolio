import React, { useEffect, useRef } from 'react'
import { useId } from 'react'
import { landingFeaturedProjects } from "../constants"
import FeaturedCard from "./FeaturedCard"
import { Button } from "../components/ui/button"
import { gsap } from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeaturedProjects = () => {
  const featuredProjRef = useRef()

  useEffect(() => {
    let animationContext = gsap.context(() => {
      gsap.fromTo(".gs-title", {
        x: 150,
      }, {
        duration: 2,
        x: -125,
        scrollTrigger: {
          trigger: ".gs-title",
          scrub: true,
        },
      })

      ScrollTrigger.batch(".gs-proj-card", {
        // onEnter: batch => gsap.from(batch, {autoAlpha: 0, y: 400, scale: 0.9, transformOrigin: "bottom", stagger: 0.1}),
        // batchMax: 2,
        onEnter: batch => gsap.to(batch, {duration: 2, autoAlpha: 1, y: 0, stagger: 0.2, overwrite: true}),
        onLeave: batch => gsap.set(batch, {autoAlpha: 0, y: 250, overwrite: true}),
        onEnterBack: batch => gsap.to(batch, {duration: 2, autoAlpha: 1, y: 0, stagger: 0.2, overwrite: true}),
        onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, y: 250, overwrite: true})
      })

      gsap.from(".gs-proj-cta", {
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: ".gs-proj-cta",
          scrub: true,
        }
      })

    }, featuredProjRef)

    return () => animationContext.revert()
  }, [])

  return (
    <section ref={featuredProjRef} className="py-4 pb-24 overflow-hidden">
        <div className="my-24">
            <h1 className='gs-title text-[8vw] leading-none font-primary whitespace-nowrap dark:text-white'> <i> featured projects </i> i've worked on</h1>
        </div>

        <div className="container mx-auto px-4 md:px-20">
            <div className='grid grid-cols-2 justify-center gap-4 md:gap-20'>
                {landingFeaturedProjects.map(proj => <FeaturedCard key={useId()} {...proj}/>)}
            </div>
        </div>

        <Button className='gs-proj-cta mx-auto mt-[10vh] md:mt-[20vh] flex'> see all projects </Button>
    </section>
  )
}

export default FeaturedProjects