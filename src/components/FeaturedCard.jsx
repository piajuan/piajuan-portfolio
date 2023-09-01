import React from 'react'

const FeaturedCard = ({thumb, projectName1, projectName2, role}) => {
  return (
    <div className='group w-full cursor-pointer even:mt-20 md:even:mt-24'>
        <div className='relative overflow-hidden w-full rounded mb-5 aspect-square'>
            <img className='absolute w-full h-full opacity-[0.8] transition duration-400 group-hover:scale-[1.01] group-hover:opacity-100' src={thumb}/>
        </div>
        <h3 className='font-primary leading-none text-1xl  md:text-2xl uppercase dark:text-white'>{projectName1}<span className='font-secondary text-[inherit]'>{projectName2}</span></h3>
        <span className='text-xs md:text-sm dark:text-white'>{role}</span>
    </div>
  )
}

export default FeaturedCard