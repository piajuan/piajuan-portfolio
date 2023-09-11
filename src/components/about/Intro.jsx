import React from 'react'
import { aboutVid, tagline } from "../../assets"

const Intro = () => {
  return (
    <section className='h-[calc(100vh-56px)] container mx-auto p-4'>
        <div className='relative h-full p-4 md:pl-10 md:pb-32 lg:pb-28 xl:p-0 overflow-hidden rounded-lg flex flex-col lg:items-end justify-end xl:justify-center'>
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                <video className='absolute left-0 top-0 w-full lg:w-[70%] h-full object-cover object-[40%_12%] scale-[1.1] lg:scale-1 translate-y-[-8%] lg:translate-y-0 lg:translate-x-[-10%] pointer-events-none' autoPlay={true} controls={false} muted loop>
                    <source src={aboutVid} type="video/mp4"/>
                </video>

                <div className='absolute left-0 top-0 w-full h-full bg-[linear-gradient(359deg,_#161819_33.92%,_rgba(22,24,25,0.76)_97.51%)] lg:bg-[linear-gradient(270deg,#161819_39%,rgba(0,0,0,0.42)95.24%)]'></div>
            </div>

            <div className='z-[1] md:w-3/5 lg:w-1/2 xl:w-2/5 xl:pr-20 xl:mt-10'>
                <p className='mb-8 dark:text-white'>Back in  2016, when I first discovered my interest in frontend side of web. As a  student back then, I would usually focus on developing the look & feel (UI/UX) of every project first and always felt excited whenever I see my design visions coming to life. </p>
                <p className='mb-8 dark:text-white'>Fast forward to today,  and I’ve had the privilege of building digital experiences for  <a href="https://www.globe.com.ph/about-us/newsroom/consumer/globe-easyhub-best-in-class-retail-innovation.html" target='_blank' className='hyperlink hyperlink--underline'>telecommunications company</a>,  <a href="https://www.facebook.com/reel/5762810997180476" target="_blank" className='hyperlink hyperlink--underline'>food-chain </a> & <a href="https://www.bandwagon.asia/articles/bts-smart-commercial-filipino-army-fans-watch-passion-purpose-dynamite-life-goes-onhybe-corporation-big-hit-music-philippines-2021" target="_blank" className='hyperlink hyperlink--underline'> campaign microsites </a>, <a href="https://lusog-isip.doh.gov.ph/" target="_blank" className='hyperlink hyperlink--underline'> health agency </a>, and others.</p>
                <p className='mb-8 dark:text-white'>My main focus these days is to keep up with the latest tech and frameworks there are to frontend. In my free time, I take some challenges from <a href="https://frontendmentor.io/" target="_blank" className='hyperlink hyperlink--underline'> frontendmentor </a>, and code along with dev youtubers to get an insight about building real-life projects.</p>
            </div>
        </div>

        <img src={tagline} className='absolute top-[15%] right-0 w-[75vw] max-w-[416px] opacity-[0.7]' alt="Crafting Digital Experiences, One Line of Code at a Time" />
    </section>

   
  )
}

export default Intro