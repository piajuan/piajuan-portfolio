import React from 'react'
import { hiMemoji } from '../assets'
import BackToTop from './BackToTop'
import { ArrowDownRight, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
   <footer className='relative overflow-hidden min-h-[600px] md:min-h-[550px] flex flex-col'>
      <BackToTop />

      <div className='container relative mx-auto py-10 flex-auto flex justify-end items-center'>
        <div className='group relative'>
          <h3 className='text-8xl md:text-[6vw] font-primary leading-none mb-1 text-right md:text-left dark:text-white'>it's your turn</h3>
          <p className='leading-none w-3/5 ml-auto mr-0 text-right md:w-full md:text-left md:ml-8 dark:text-white'> Get in touch for opportunities or just to say hi 👋🏼 </p>

          <img src={hiMemoji} alt="say hi!" className='absolute top-[-70%] right-[-20%] md:top-[-110%] md:right-[-24%] rotate-[8deg] scale-[0.4] transition-all ease-in-out duration-500 md:group-hover:scale-75 group-hover:opacity-100 group-hover:rotate-[18deg]' />
        </div>

      </div>
      <div className='grow-0 py-3 border-white border-t'>
        <div className="container mx-auto flex justify-between items-center">
          <ul className='flex items-center gap-4'>
            <li><a href="" className='uppercase dark:text-white'>Resume</a></li>
            <li><a href="https://www.linkedin.com/in/sophiajuan/" target='_blank' className='uppercase dark:text-white'>LinkedIn</a></li>
          </ul>
          <a href="mailto:piajuan.dev@gmail.com" target="_top" className='group hyperlink flex items-center gap-1 text-sm [&>*]:transition-all [&>*]:ease-in-out [&>*]:duration-200 dark:text-white'> <ArrowRight className='transition-all ease-in-out duration-300 -ml-4 opacity-0 group-hover:ml-0 group-hover:opacity-100' size={15} />  piajuan.dev@gmail.com</a>
          <p className='text-xs md:text-sm dark:text-white'>Designed & Developed by <a href="" className='text-gradient'>Pia Juan</a> </p>
        </div>
      </div>
   </footer>
  )
}

export default Footer