import React , { useRef, useEffect }from 'react'
import Archives from "../components/Archives"
import { featuredProjects } from '../constants'
import ProjectSheet from '../components/ProjectSheet'

import { gsap } from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Works = () => {
  const worksRef = useRef()

  useEffect(() => {
    let animationContext = gsap.context(() => {

      ScrollTrigger.batch(".gs-works__card", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          ease: "power3",
        }),
      onLeave: (batch) =>
        gsap.set(batch, {
          opacity: 0,
          y: -30,
          overwrite: true,
          ease: "power3",
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          ease: "power3",
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 30, overwrite: true, ease: "power3" }),
      // you can also define things like start, end, etc.
      })
    }, worksRef)

    return () => animationContext.revert()
  }, [])

  return (
    <div ref={worksRef}>
        <h2 className='text-6xl md:text-8xl font-primary text-center my-6 px-4 dark:text-white'>stuff i've worked on</h2>
        <section>
          <div className="container mx-auto">
            <h3 className='font-tertiary uppercase text-center dark:text-white'>Featured Projects</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:w-[90%] mx-auto my-8 gap-4 lg:gap-10'>
              {featuredProjects.map((proj) => <ProjectSheet proj={proj}/>)}
            </div>
          </div>
        </section>

        <Archives />
    </div>
  )
}

export default Works