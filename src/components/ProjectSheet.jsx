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
                                            <img src={slide} alt={`${proj.title[0]} ${proj.title[1]} project screenshot ${i + 1}`} className='absolute w-full h-full top-0 left-0' />
                                        </SwiperSlide>
                                    )
                                })
                            }
                    </Swiper>

                    <span className='dark:text-white/50 text-right text-xs -mt-3'>Swipe to view other screenshots</span>

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
                        <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>Technologies</h3>
                        <div className='flex flex-wrap gap-2'>
                            {proj.techText.map(item => <Pill>{item}</Pill>)}
                        </div>
                    </div>
                </div>
               
               { proj.externalLink &&  <Button asChild className='rounded-none text-[1rem]'>
                    <a href={proj.externalLink} target="_blank">
                        View the project <LucideExternalLink size={16} className='ml-2' /> 
                    </a>
               </Button>}
               
            </SheetContent>
        </Sheet>
    )
}

export default ProjectSheet