import React from 'react'
import backToTopSvg from "../assets/back-to-top.svg"
import arrowUp from "../assets/arrow-up.svg"

const BackToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <button onClick={handleScrollToTop} className='group absolute bottom-[15%] md:top-[20%] md:bottom-[unset] left-[5%] w-[160px] aspect-square flex items-center justify-center z-40'>
        <img loading='lazy' className='absolute top-0 left-0 w-full h-full object-contain transition-all animate-[spin_5s_infinite_linear] group-hover:pause group-hover:opacity-50' src={backToTopSvg} alt="back to top" />
        <img loading='lazy' className='transition-all ease-in-out duration-400 group-hover:translate-y-[-8px]' src={arrowUp} alt="arrow up icon" />
    </button>
  )
}


export default BackToTop