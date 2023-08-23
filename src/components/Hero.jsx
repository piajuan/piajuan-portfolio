import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen pt-[60px] p-4'>
        <div className='relative h-full overflow-hidden rounded-lg bg-hero'>
            {/* start: blobs */}
            <div className='hero__blob absolute w-[150vh] aspect-square rounded-full dark:bg-[#E7C173] left-[20vw]'></div>
            <div className='hero__blob absolute w-[150vh] aspect-square rounded-full dark:bg-[#F9600A] left-[50vw]'></div>
            <div className='hero__blob absolute w-[150vh] aspect-square rounded-full dark:bg-[#3676F3] left-[30vw] bottom-0'></div>
            {/* end: blobs */}
            <div className='absolute w-full h-full flex-auto flex flex-col justify-center items-center bg-white/[0.2] backdrop-blur-[180px] border-2 border-solid border-white/[0.18] box-shadow-hero'>
                {/* noise effect */}
                <div className='content-[""] absolute w-full h-full mix-blend-overlay z-0 bg-[url(./src/assets/noise.png)] opacity-80'></div>
                {/* content */}
                <h1 className='text-[7vw] lg:max-w-[70vw] mx-auto font-primary text-center leading-none'>I’m Pia —frontend developer & designer</h1>
                <p className='max-w-[500px] mt-5 mx-auto text-center'>currently based in Metro Manila, Philippines with two years of experience -- passionate about delivering user-oriented interface designs</p>
            </div>
        </div>
    </div>
  )
}

export default Hero