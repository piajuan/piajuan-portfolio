import { space } from 'postcss/lib/list'
import React from 'react'

const Pill = ({children}) => {
  return (
    <span className='inline-flex justify-center items-center p-3 py-2 rounded-[4px] border-[0.5px] border-solid dark:border-white/[0.37] dark:bg-dark-500 dark:text-white'>
        {children}
    </span>
  )
}

export default Pill