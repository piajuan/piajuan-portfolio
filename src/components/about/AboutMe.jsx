import React from 'react'
import { aLittleAboutMe } from '../../constants'
import { aboutMePics } from '../../assets'

const AboutMe = () => {
  return (
    <section>
        <div className='container mx-auto mt-24 mb-12 lg:my-[24vh] p-4'>
            <h2 className='text-6xl md:text-8xl xl:text-9xl font-primary dark:text-white'>a little about me</h2>
            <div className='grid gap-4 grid-cols-1 my-6 md:my-14 md:grid-cols-2 lg:grid-cols-4'>
                {
                    aLittleAboutMe.map((info, i) => (
                        <div key={i}>
                            <h3 className='text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>{info.title}</h3>
                            <ul className='mt-2'>
                                {info.value.map((list,i) => {
                                    return <li key={i} className='leading-[1.3] dark:text-white'>{list}</li>
                                })}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="container mx-auto mb-12 lg:mb-[24vh] p-4">
            <div className="flex flex-col gap-6 md:gap-4 lg:flex-row justify-between items-center">
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-6xl mb-6 md:text-8xl xl:text-9xl font-primary dark:text-white'>during my free time, I..</h2>
                </div>
                <div className="w-full lg:w-1/2">
                    <ul className='columns-2'>
                        <li className='mb-3 dark:text-white'>love to explore coffee shops nearby</li>
                        <li className='mb-3 dark:text-white'>annoy my doggo 🐶</li>
                        <li className='mb-3 dark:text-white'>take <a className='text-gradient' href="https://www.instagram.com/piaya.film/" target='_blank'> 35mm film photography </a></li>
                        <li className='mb-3 mt-6 dark:text-white'>crochet 🧶</li>
                        <li className='mb-3 dark:text-white'>camping / nature trips</li>
                        <li className='mb-3 dark:text-white'>experiment with iced coffee recipes at home</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container mx-auto lg:max-w-[70vw]">
            <div className='md:gap-10 columns-4 md:columns-3'>
                {aboutMePics.map((pic,i) => (
                    <img key={i} src={pic} className='w-full mb-2 md:mb-10 rounded-[8px] md:[&:nth-child(4)]:pt-[6rem] brightness-[0.8]'/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default AboutMe