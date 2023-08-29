import React from 'react'
import { aboutVid, tagline } from "../../assets"

const Intro = () => {
  return (
    <section className='min-h-screen relative flex flex-col'>
        <div className="container relative flex-auto mx-auto flex justify-end items-center">
            <div className='absolute top-1/2 left-0 translate-y-[-55%] aspect-video h-[80vh] max-w-[1040px] overflow-hidden'>
                <video className='absolute right-0 w-full h-full scale-[1.1] origin-right object-cover' autoPlay={true} muted loop>
                    <source src={aboutVid} type="video/mp4"/>
                </video>

                <div className='absolute left-0 top-0 w-full h-full bg-[linear-gradient(269deg,#161819,rgba(0,0,0,0.2)100%)]'></div>
            </div>

            <div className='z-[1] lg:w-2/5 xl:pr-24'>
                <p className='mb-8 dark:text-white'>Back in  2016, when I first discovered my interest in frontend side of web. As a  student back then, I would usually focus on developing the look & feel (UI/UX) of every project first and always felt excited whenever I see my design visions coming to life. </p>
                <p className='mb-8 dark:text-white'>Fast forward to today,  and I’ve had the privilege of building digital experiences for  <a href="" className='hyperlink hyperlink--underline'>telecommunications company</a>,  <a href="" className='hyperlink hyperlink--underline'>food-chain </a> & <a href="" className='hyperlink hyperlink--underline'> campaign microsites </a>, <a href="" className='hyperlink hyperlink--underline'> health agency </a>, and others.</p>
                <p className='mb-8 dark:text-white'>My main focus these days is to keep up with the latest tech and frameworks there are to frontend. In my free time, I take some challenges from <a href="" className='hyperlink hyperlink--underline'> frontendmentor </a>, and code along with dev youtubers to get an insight about building real-life projects.</p>
            </div>
        </div>

        <img src={tagline} className='absolute top-[5%] right-0 opacity-[0.4]' alt="Crafting Digital Experiences, One Line of Code at a Time" />
    </section>
  )
}

export default Intro