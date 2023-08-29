import React from 'react'
import { hiMemoji } from '../assets'

const Footer = () => {
  return (
   <footer className='group overflow-hidden min-h-[400px] flex flex-col'>
      <div className='container relative mx-auto py-10 flex-auto flex justify-end items-center'>
        <div>
          <h3 className='text-[6vw] font-primary leading-none mb-1 dark:text-white'>it's your turn</h3>
          <p className='leading-none ml-8 dark:text-white'> Get in touch for opportunities or just to say hi 👋🏼 </p>
        </div>

        <img src={hiMemoji} alt="say hi!" className='absolute top-[-10%] right-[0] rotate-[8deg] scale-[0.4] transition-all ease-in-out duration-500 group-hover:scale-75 group-hover:opacity-100 group-hover:rotate-[18deg]' />
      </div>
      <div className='grow-0 py-3 border-t border-white'>
        <div className="container mx-auto flex justify-between items-center">
          <ul className='flex items-center gap-4'>
            <li><a href="" className='uppercase dark:text-white'>Resume</a></li>
            <li><a href="" className='uppercase dark:text-white'>LinkedIn</a></li>
          </ul>
          <p className='dark:text-white'>Designed & Developed by <a href="" className='text-gradient'>Pia Juan</a> </p>
        </div>
      </div>
   </footer>
  )
}

export default Footer