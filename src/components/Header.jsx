import React from 'react'

const Header = () => {
  return (
    <div className='p-4 fixed top-0 left-0 w-full'>
        <div className="container mx-auto">
            <nav className="flex justify-between items-center">
                <a href="" className='font-tertiary uppercase dark:text-white'>Pia Juan</a>
                <div className='dark:text-white text-sm'>hello ☻ </div>
                <ul className='flex items-center gap-6'>
                    <li><a href="" className='dark:text-white'>works</a></li>
                    <li><a href="" className='dark:text-white'>about</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header