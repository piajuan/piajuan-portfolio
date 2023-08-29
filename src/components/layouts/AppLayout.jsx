import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="dark:bg-dark-300 min-h-screen">
        <Header/>
            <main className='pt-[60px]'> <Outlet /> </main>
        <Footer/>
    </div>
  )
}

export default AppLayout