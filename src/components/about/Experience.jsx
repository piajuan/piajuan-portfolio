import React from 'react'
import { LucideArrowUpRight, LucideArrowRight } from 'lucide-react'
import { experience } from '../../constants'


const Experience = () => {  
  return (
    <section>
           <div className="container mx-auto mt-16 lg:mb-[24vh] p-4">
            <div className="flex flex-col gap-6 md:gap-4 lg:flex-row justify-between">
                <div className='w-full lg:w-3/5'>
                    <h2 className='text-6xl mb-6 md:text-8xl xl:text-9xl font-primary leading-none dark:text-white'>professional experience</h2>
                    <a href="./src/assets/Sophia_Juan_CV_2023.pdf" target="_blank" className='lg:mt-8 inline-flex items-center dark:text-white hyperlink hyperlink--underline'>see full resume <LucideArrowRight size={16} className='ml-2'/> </a>
                </div>
                <div className="w-full lg:w-2/5">
                    <ul className='flex flex-col'>
                        {experience.map(item => (
                            <li key={item.company} className='experience__item lg:max-w-[500px] dark:text-white'>
                                <a className={`group flex gap-x-6 [&_*]:transition-all ${!item.companyLink && 'pointer-events-none'}`} href={item.companyLink ? item.companyLink : ''} target='_blank'>
                                    <div className='flex flex-col gap-2 pt-1 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <circle cx="6" cy="6" r="6" fill="url(#paint0_linear_703_174)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_703_174" x1="1.5" y1="3" x2="10.5" y2="8.5" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#DAC9A2"/>
                                                <stop offset="1" stop-color="#476FC0"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className='line grow w-[1px] h-[80%] rounded bg-[#505B61]'></div>
                                    </div>
                                    <div className='pb-8'>
                                        <h3 className='flex items-center gap-1 text-base font-tertiary leading-none dark:text-white '> <span className='inline-block group-hover:text-gradient'>{item.role} </span> {item.companyLink && <LucideArrowUpRight size={19} className='group-hover:translate-x-[4px] group-hover:translate-y-[-2px] group-hover:text-secondary'/> } </h3>
                                        <span className='text-sm font-tertiary dark:text-white opacity-40'>{item.company}</span>
                                        <p className='mt-1 text-base leading-[1.3] opacity-80 dark:text-white'>{item.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                   
                </div>
            </div>
        </div>

    </section>
  )
}

export default Experience