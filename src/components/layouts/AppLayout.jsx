import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import WipDisclaimer from '../WipDisclaimer'
import Toaster from '../ui/toaster'

const AppLayout = () => {
  return (
    <div className="dark:bg-dark-400 min-h-screen">
        <ScrollToTop />
        <Header/>
        <main className='pt-[56px]'> <Outlet /> </main>
        <Footer/>

        <WipDisclaimer />
        <Toaster />
    </div>
  )
}

export default AppLayout