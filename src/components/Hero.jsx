import React, { useRef, useEffect } from 'react'
import ScrollDown from './ScrollDown'
import { gsap } from 'gsap'


const Hero = () => {
  const hero = useRef();

  useEffect(() => {
    let animationContext = gsap.context(() => {
      gsap.from(".gs-hero__content", {opacity: 0, y: 5, duration: 2, stagger: 0.4});
    }, hero)

    return () => animationContext.revert()
  })

  return (
    <div ref={hero} className='h-[calc(100vh-56px)] p-4 [&>*]:select-none'>
        <div className='relative h-full overflow-hidden rounded-lg bg-hero'>
            {/* start: blobs */}
            <div className='hero__blob blur-[180px] absolute w-[150vh] aspect-square rounded-full dark:bg-[#E7C173] left-[20vw]'></div>
            <div className='hero__blob blur-[180px] absolute w-[150vh] aspect-square rounded-full dark:bg-[#F9600A] left-[50vw]'></div>
            <div className='hero__blob blur-[180px] absolute w-[150vh] aspect-square rounded-full dark:bg-[#3676F3] left-[30vw] bottom-0'></div>
            {/* end: blobs */}
            <div className='absolute w-full h-full p-4 flex-auto flex flex-col justify-end md:justify-center items-center bg-white/[0.2] backdrop-blur-[180px] border-2 border-solid border-white/[0.18] box-shadow-hero'>
                {/* noise effect */}
                <div className='content-[""] absolute left-0 top-0 block w-full h-full mix-blend-overlay z-0 bg-[url(/noise.png)] opacity-80 pointer-events-none'></div>
                {/* content */}
                <h1 className='gs-hero__content text-7xl text-left md:text-[7vw] lg:max-w-[70vw] mx-auto font-primary md:text-center leading-none'>I’m Pia  —frontend developer & designer</h1>
                {/* <p className='gs-hero__content  max-w-[500px] mt-5 mx-auto mb-14 md:mb-0 text-left md:text-center'>currently based in Metro Manila, Philippines with two years of experience -- passionate about delivering user-oriented interface designs</p> */}
                <p className='gs-hero__content  max-w-[400px] mt-5 mx-auto mb-14 md:mb-0 text-left md:text-center'>with four years of experience and a passion for delivering user-centric interface designs.</p>

                <ScrollDown styles="top-[40%] right-[13%] w-[180px]"/>
            </div>
        </div>
    </div>
  )
}
export default Hero