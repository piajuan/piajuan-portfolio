import React from 'react'
import ProjectCard from './ProjectCard'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "../components/ui/sheet"
import { ArrowLeftCircle } from 'lucide-react'
import { Button } from './ui/button'
import { LucideExternalLink } from 'lucide-react'


import { Pagination } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import Pill from './ui/pill'
  
const ProjectSheet = ({proj}) => {
    return (
        <Sheet>
            <SheetTrigger>
                <ProjectCard proj={proj}/>
            </SheetTrigger>
            <SheetContent className='flex flex-col p-0'>
                <div className='flex flex-col gap-5 p-6 flex-auto overflow-y-scroll'>
                    <SheetClose> <ArrowLeftCircle size={24} className='stroke-white' strokeWidth={1}/></SheetClose>
                    <h3 className='text-3xl font-secondary dark:text-white'><span className='font-primary'>{proj.title[0]}</span>{proj.title[1]}</h3>
                    
                    <Swiper 
                        className='relative w-full shrink-0 aspect-video rounded dark:text-white'
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        >
                            {
                                proj.carouselMedia.map((slide, i) => {
                                    return (
                                        <SwiperSlide>
                                            <img loading='lazy' src={slide} alt={`${proj.title[0]} ${proj.title[1]} project screenshot ${i + 1}`} className='absolute w-full h-full top-0 left-0' />
                                        </SwiperSlide>
                                    )
                                })
                            }
                    </Swiper>

                    { proj.carouselMedia.length > 1 &&  <span className='dark:text-white/50 text-right text-xs -mt-3'>Swipe to view more</span> }

                    <div>
                        <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>About</h3>
                        <p className='dark:text-white'>{proj.about}</p>
                        <ul className='list-disc pl-6'>
                            {proj.features.map(item => (
                                <li className='dark:text-white'>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>

                        <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>{proj.credits ? 'Project Credits' : 'Role'}</h3>
                        { proj.credits && proj.credits.map(info => {
                            return <ul>
                                <li className='dark:text-white'>{info.label}: {info.data}</li>
                            </ul>
                        })}

                        { proj.role && <span class="dark:text-white">{proj.role}</span>}
                    </div>
                    
                    <div>
                        <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>Technologies</h3>
                        <div className='flex flex-wrap gap-2'>
                            {proj.techText.map(item => <Pill>{item}</Pill>)}
                        </div>
                    </div>

                    { proj.externalLink.length > 1 && (
                        <div>
                            <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>Related Articles/Blogs</h3>
                            <ul className='list-disc pl-6'>
                                { proj.externalLink.map(item => (
                                        <li className='dark:text-white'>
                                            <a href={item} target='_blank' className='hyperlink hyperlink--underline truncate block relative max-w-[80%]'> {item} </a>
                                        </li> 
                                    )
                                )}
                            </ul>
                        </div>
                    ) }
                    
                </div>
               
               { proj.externalLink[0] != null &&  <Button asChild className='rounded-none text-[1rem]'>
                    <a href={proj.externalLink[0]} target="_blank">
                        {proj.ctaText} <LucideExternalLink size={16} className='ml-2' /> 
                    </a>
               </Button>}
               
            </SheetContent>
        </Sheet>
    )
}

export default ProjectSheet