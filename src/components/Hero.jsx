import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen pt-[60px] p-3 dark:bg-dark-300'>
        <div className='relative h-full overflow-hidden rounded'>
            {/* start: blobs */}
            <div className='absolute w-[65vh] aspect-square rounded-full dark:bg-[#FFDD29] left-[20vw]'></div>
            <div className='absolute w-[65vh] aspect-square rounded-full dark:bg-[#F9600A] left-[50vw]'></div>
            <div className='absolute w-[65vh] aspect-square rounded-full dark:bg-[#3676F3] left-[30vw] bottom-0'></div>
            {/* end: blobs */}
            <div className='absolute w-full h-full flex-auto flex flex-col justify-center items-center bg-hero backdrop-blur-[200px]'>
                <h1 className='text-[7vw] max-w-[900px] mx-auto font-primary text-center leading-none'>I’m Pia --frontend developer & designer</h1>
                <p className='max-w-[500px] mt-5 mx-auto text-center'>currently based in Metro Manila, Philippines with two years of experience -- passionate about delivering user-oriented interface designs</p>
            </div>
        </div>
    </div>
  )
}

export default Hero