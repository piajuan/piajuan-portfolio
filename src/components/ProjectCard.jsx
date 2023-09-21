import React from 'react'
import Tag from './ui/tag'

const ProjectCard = ({proj}) => {
  return (
    <div key={proj.title[1]} className='gs-works__card group w-full relative aspect-square overflow-hidden rounded cursor-pointer'>
      <img src={proj.thumb} alt={proj.title[1]} className='transition-all duration-300 ease-slow-in-out group-hover:scale-105' />
      <Tag className="absolute bottom-2 right-2 hidden lg:block"> {proj.tag} </Tag>
      {/* info  when hovered */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2 md:p-4'>
        <div className='absolute top-0 left-0 w-full h-full bg-darkOverlay transition-all duration-300 lg:opacity-0  group-hover:opacity-100'></div>
        <ul className='flex justify-end items-center gap-2'>
          {proj.techSvg.map((icon,i) => {
            return (
              <li key={i} className='lg:opacity-0 transition-all duration-300 delay-150 group-hover:opacity-100'>
                  <img src={icon} className='w-[18px] h-[18px] lg:w-[32px] lg:h-[32px] aspect-square object-contain grayscale brightness-[0.4] invert'/>
              </li>
            )
          })}
        </ul>
        <div className='z-[1]'>
          <h3 className='text-sm lg:text-3xl font-secondary text-left lg:opacity-0 lg:translate-y-5 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:transform-none dark:text-white'><span className='font-primary'>{proj.title[0]}</span>{proj.title[1]}</h3>
          <p className='text-[0.5rem] lg:text-[1rem] text-left lg:opacity-0 lg:translate-y-5 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:transform-none dark:text-white'>{proj.desc}</p>
          <Tag className="block w-fit my-1 text-[0.4rem] px-1 py-1 lg:hidden"> {proj.tag} </Tag>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard