import React from 'react'
import scrollDownSvg from "../assets/scroll-down.svg"

const ScrollDown = ({styles}) => {
  return (
    <img className={`absolute w-[180px] z-[-1] cursor-pointer animate-[spin_5s_infinite_linear] ${styles} `} src={scrollDownSvg} alt="Scroll Down" />
  )
}

export default ScrollDown