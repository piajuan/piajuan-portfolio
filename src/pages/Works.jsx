import React from 'react'
import Archives from "../components/Archives"
import { featuredProjects } from '../constants'
import ProjectSheet from '../components/ProjectSheet'


const Works = () => {
  return (
    <>
        <h2 className='text-8xl font-primary text-center my-6 px-4 dark:text-white'>stuff i've worked on</h2>
        <section>
          <div className="container mx-auto">
            <h3 className='font-tertiary uppercase text-center dark:text-white'>Featured Projects</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:w-[90%] mx-auto my-8 gap-4 lg:gap-10'>
              {featuredProjects.map((proj) => <ProjectSheet proj={proj}/>)}
            </div>
          </div>
        </section>

        <Archives />
    </>
  )
}

export default Works