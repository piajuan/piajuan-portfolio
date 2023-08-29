import React from 'react'
import Archives from "../components/Archives"
import { featuredProjects } from '../constants'
import { Archive } from 'lucide-react'

const Works = () => {
  return (
    <>
        <h2 className='text-8xl font-primary text-center my-6 px-4 dark:text-white'>stuff i've worked on</h2>
        <section>
          <div className="container mx-auto">
            <h3 className='font-tertiary uppercase text-center dark:text-white'>Featured Projects</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:w-4/5 mx-auto my-8 gap-4'>
              {
                featuredProjects.map((proj,i) => (
                  <div key={i} className='group w-full relative aspect-square overflow-hidden rounded cursor-pointer'>
                    <img src={proj.thumb} alt={proj.title[1]} className='transition-all duration-300 ease-slow-in-out group-hover:scale-105' />

                    {/* info  when hovered */}
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4'>
                      <div className='absolute top-0 left-0 w-full h-full bg-darkOverlay transition-all duration-300 opacity-0  group-hover:opacity-100'></div>
                      <ul className='flex justify-end items-center gap-2'>
                        {proj.techSvg.map((icon,i) => {
                          return (
                            <li key={i} className='opacity-0 transition-all duration-300 delay-150 group-hover:opacity-100'>
                                <img src={icon} className='w-[32px] h-[32px] aspect-square object-contain grayscale brightness-100'/>
                            </li>
                          )
                        })}
                      </ul>
                      <div className='z-[1]'>
                        <h1 className='text-3xl font-secondary opacity-0 translate-y-5 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:transform-none dark:text-white'><span className='font-primary'>{proj.title[0]}</span>{proj.title[1]}</h1>
                        <p className='opacity-0 translate-y-5 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:transform-none dark:text-white'>{proj.desc}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <Archives />
    </>
  )
}

export default Works