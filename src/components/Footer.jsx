import React from 'react'
import { hiMemoji } from '../assets'

const Footer = () => {
  return (
   <footer className='group overflow-hidden min-h-[600px] md:min-h-[400px] flex flex-col'>
      <div className='container relative mx-auto py-10 flex-auto flex justify-end items-center'>
        <div>
          <h3 className='text-8xl md:text-[6vw] font-primary leading-none mb-1 text-right md:text-left dark:text-white'>it's your turn</h3>
          <p className='leading-none w-3/5 ml-auto mr-0 text-right md:w-full md:text-left md:ml-8 dark:text-white'> Get in touch for opportunities or just to say hi 👋🏼 </p>
        </div>

        <img src={hiMemoji} alt="say hi!" className='absolute top-[0] right-[-20%] md:top-[-10%] md:right-[0] rotate-[8deg] scale-[0.4] transition-all ease-in-out duration-500 md:group-hover:scale-75 group-hover:opacity-100 group-hover:rotate-[18deg]' />
      </div>
      <div className='grow-0 py-3 border-white border-t'>
        <div className="container mx-auto flex justify-between items-center">
          <ul className='flex items-center gap-4'>
            <li><a href="" className='uppercase dark:text-white'>Resume</a></li>
            <li><a href="" className='uppercase dark:text-white'>LinkedIn</a></li>
          </ul>
          <p className='text-xs md:text-sm dark:text-white'>Designed & Developed by <a href="" className='text-gradient'>Pia Juan</a> </p>
        </div>
      </div>
   </footer>
  )
}

export default Footer