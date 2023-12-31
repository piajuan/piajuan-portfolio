import React from 'react'
import Tag from './ui/tag'
import { Link } from 'react-router-dom'

const FeaturedCard = ({thumb, projectName1, projectName2, role, tag}) => {
  return (
    <Link to={"/works"} className='gs-proj-card group w-full cursor-pointer even:mt-20 md:even:mt-24'>
        <div className='relative overflow-hidden w-full rounded mb-5 aspect-square'>
            <img loading='lazy' className='absolute w-full h-full opacity-[0.8] transition duration-400 group-hover:scale-[1.01] group-hover:opacity-100' src={thumb}/>
            <Tag className="absolute z-10 bottom-2 right-2">{tag}</Tag>
        </div>
        <h3 className='font-primary leading-none text-1xl  md:text-2xl uppercase dark:text-white'>{projectName1}<span className='font-secondary text-[inherit]'>{projectName2}</span></h3>
        <span className='text-xs md:text-sm dark:text-white'>{role}</span>
    </Link>
  )
}

export default FeaturedCard