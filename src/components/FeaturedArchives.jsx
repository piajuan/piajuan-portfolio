import React, { useRef, useEffect } from 'react'
import { archivesPics } from '../assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeaturedArchives = () => {
  const featArchivesRef = useRef()

  useEffect(() => {
    let animationContext = gsap.context(() => {
      gsap.from(".gs-archives__heading", {
        duration: 2,
        x: -150,
        scrollTrigger: {
          trigger: ".gs-archives__heading",
          scrub: true,
        },
      })

      ScrollTrigger.batch(".gs-archives__img", {
        onEnter: batch => gsap.from(batch, {duration: 1, y: -20, autoAlpha: 0, stagger: 0.15, overwrite: true}),
      })

      gsap.from(".gs-archives__grid", {
        y: 100,
        scrollTrigger: {
          trigger: ".gs-archives__grid",
          scrub: 3,
        }
      })
    }, featArchivesRef)

    return () => animationContext.revert()
  }, [])

  return (
    <section ref={featArchivesRef} className='overflow-hidden'>
        <div className='my-8 lg:my-24 '>
          <h1 className='gs-archives__heading text-[8vw] leading-none font-primary whitespace-nowrap dark:text-white'>archives <i className='px-4'>archives</i> archives <i className='px-4'>archives</i> archives </h1>
        </div>
        <div className="gs-archives__grid grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {archivesPics.map((pic,i) => {
                return <div key={i}> <img src={pic} className='gs-archives__img block'/> </div>
            })}
        </div>
    </section>
  )
}

export default FeaturedArchives