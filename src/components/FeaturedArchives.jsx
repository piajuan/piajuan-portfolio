import React from 'react'
import { archivesPics } from '../assets'

const FeaturedArchives = () => {
  return (
    <section>
        <div className="container mx-auto">
            <h1 className='my-8 md:my-24 text-[8vw] leading-none font-primary whitespace-nowrap dark:text-white'>archives</h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 bg-[linear-gradient(113deg,_rgba(244,_248,_255,_0.52)_3.66%,_#ABC1E7_96.74%)]">
            {archivesPics.map((pic,i) => {
                return <div key={i}> <img src={pic} /> </div>
            })}
        </div>
    </section>
  )
}

export default FeaturedArchives