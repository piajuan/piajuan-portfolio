import React from 'react'
import { useToast } from './ui/use-toast'
import { workingMemoji } from '../assets'

const WipDisclaimer = () => {
  const { toast } = useToast()
  return (
    <div className='fixed bottom-2 right-2'>
        <buttton className='bg-primary rounded-[23px] w-[54px] h-[54px] aspect-square flex items-center justify-center transition cursor-pointer hover:scale-105'
        onClick={() => {
          toast({
            description: "Hi there! 👋🏼 please note that my portfolio is still a work in progress. You may experience performance issues, but rest assured I am actively working on improving this for a smoother user experience! ⚡️ - pia ᵕ̈",
            variant: "disclaimer",
            open: true,
          })
        }}
      >
        <img src={workingMemoji} alt="pia's working memoji" className='w-[40px]'/>
      </buttton>
    </div>
  )
}

export default WipDisclaimer