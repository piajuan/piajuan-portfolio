import React from 'react'
import { techStack } from '../../constants'

const Tech = () => {  
  return (
    <section>
           <div className="container mx-auto mt-16 lg:mb-[24vh] p-4">
            <div className="flex flex-col gap-6 md:gap-4 lg:flex-row justify-between">
                <div className='w-full lg:w-3/5'>
                    <h2 className='text-6xl mb-6 md:text-8xl xl:text-9xl font-primary leading-none dark:text-white'>about tech</h2>
                </div>
                <div className="w-full lg:w-2/5">
                    <h3 className='text-rg font-tertiary opacity-[0.4] uppercase dark:text-white'>Knowledgeable in</h3>
                    <ul className='mt-2'>
                        {techStack.map((item,) => {
                            return <li key={item} className='dark:text-white'>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Tech