import React from 'react'
import { techStackIcons } from '../assets'

const TechStack = () => {
    const marqueeContent = techStackIcons.map((icon, i) => (
        <img loading='lazy' key={i} src={icon} className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] object-contain grayscale opacity-50 transition-all duration-200 hover:filter-none hover:opacity-100 hover:scale-105'/>
    ))
  return (
    <div className="container mx-auto py-[10vw]">
        <div className='marquee'>
            <div className='marquee__content'>{marqueeContent}</div>
            <div className='marquee__content' aria-hidden='true'>{marqueeContent}</div>

            {/* fog effect */}
            <div className="absolute top-0 left-[-1px] h-full w-[47px] bg-gradient-to-r from-dark-400 to-[hsla(0,0%,100%,0)]"></div>
            <div className="absolute top-0 right-[-1px] h-full w-[47px] bg-gradient-to-r from-[hsla(0,0%,100%,0)] to-dark-400"></div>
        </div>
    </div>
  )
}

export default TechStack