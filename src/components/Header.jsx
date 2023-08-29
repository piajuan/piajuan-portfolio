import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-4 fixed top-0 left-0 w-full'>
        <div className="container mx-auto">
            <nav className="flex justify-between items-center">
                <Link to={"/"} className='font-tertiary uppercase dark:text-white'>Pia Juan</Link>
                <div className='dark:text-white text-sm'>hello ☻ </div>
                <ul className='flex items-center gap-6'>
                    <li><Link to={"/works"} className='hyperlink dark:text-white'>works</Link></li>
                    <li><Link to={"/about"} className='hyperlink dark:text-white'>about</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header