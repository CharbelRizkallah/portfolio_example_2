import React from 'react'
import Pic from './Pic'
import pin from "../imgs/red_pin.png"

const About = ({ profile }) => {
  return (
    <div id='about' className='md:flex justify-between md:mt-20'>
        <div className='relative flex justify-center w-full md:w-1/2 md:m-5 pt-10'>
            {profile?.map((prof, index) => index === 0 ? <Pic key={index} url={prof.picture} w={200} /> : '')}
        </div>
        <div className='notebook2 relative m-10 px-10 pb-5 pt-28 md:pt-20 flex flex-col items-center text-center drop-shadow-3xl w-auto md:w-1/2'>


            <div className='crumbledpaper absolute drop-shadow-lg py-5 px-28 md:px-32 mb-2 -top-5'>
                
                <div className='absolute top-2 md:top-0 z-10 left-6 md:left-2 w-fit'>
                    <img src={pin} alt='pin' className='w-12 h-12 md:w-16 md:h-16 drop-shadow-lg' />
                </div>
                <div className='absolute top-2 md:top-0 z-10 right-6 md:right-2 w-fit'>
                    <img src={pin} alt='pin' className='w-12 h-12 md:w-16 md:h-16 drop-shadow-lg' />
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-4xl md:text-4xl'>About {profile?.map((prof, index) => index === 0 ? prof.name : '')} </h1>
                </div>
            </div>
            <p className='text-md md:text-xl leading-8'> {profile?.map((prof, index) => index === 0 ? prof.about : '')} </p>
        </div>
    </div>
  )
}

export default About