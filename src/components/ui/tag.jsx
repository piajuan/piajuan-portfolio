import React from 'react'

const Tag = ({className, children}) => {
  return (
    <span className={`bg-black/80 px-2 py-1 rounded-full text-xs text-white leading-none ${className}`}> { children}  </span>
  )
}

export default Tag