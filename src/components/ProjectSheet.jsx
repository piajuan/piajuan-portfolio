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
                    <div className='w-full shrink-0 aspect-video bg-gray-400 rounded dark:text-white'>
                        carousel here
                    </div>

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
                        <ul className='list-disc pl-6'>
                            {proj.techText.map(item => (
                                <li className='dark:text-white'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>Technologies</h3>
                        <ul className='list-disc pl-6'>
                            {proj.techText.map(item => (
                                <li className='dark:text-white'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-2 text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>Technologies</h3>
                        <ul className='list-disc pl-6'>
                            {proj.techText.map(item => (
                                <li className='dark:text-white'>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
               
               <Button className='rounded-none text-[1rem]'>View the project <LucideExternalLink size={16} className='ml-2' /> </Button>
            </SheetContent>
        </Sheet>
    )
}

export default ProjectSheet