import React, { useState } from 'react';
import pin from "../imgs/red_pin.png";
import tape from "../imgs/tape.png";
import HeaderWork from './HeaderWork.jsx';

const Header = ({work, profile}) => {

    const [toggleWork, setToggleWork] = useState(false);

  const handleToggleWork = () => {
    setToggleWork(!toggleWork);
  }

  return (
    <div className='md:flex md:h-screen '>
        <div className='relative h-1/2 md:h-full w-3/4 md:w-1/2'>
            <div className='absolute -top-6 md:top-12 z-10 left-0 right-0 m-auto w-fit'>
                <img src={pin} alt='pin' className='w-12 h-12 md:w-16 md:h-16 drop-shadow-3xl' />
            </div>
            <div className='relative paper drop-shadow-3xl flex flex-col items-center w-full h-fit md:h-fit md:mt-20 m-8 rotate-3'>
                <div className='mt-12 mb-5'>
                    <h1 className='text-4xl md:text-6xl'>Portfolio</h1>
                </div>
                <div className='my-5'>
                    <h1 className='text-3xl md:text-5xl'>{profile?.map((prof, index) => index === 0 ? prof.name : '')}</h1>
                </div>
                <div className='mt-5 pb-12'>
                    <h1 className='text-2xl md:text-3xl'>{profile?.map((prof, index) => index === 0 ? prof.profession : '')}</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-end items-center w-full md:w-1/2 h-1/2 md:h-full select-none relative overflow-x-hidden'>
            <div className='torn-paper relative flex justify-center items-center px-40 md:px-12 py-8 h-fit w-1/2 m-8 md:hover:scale-125 hover:cursor-pointer drop-shadow-2xl'>
                <a href='#about'>
                    <div className='absolute -top-10 md:-top-16 z-10 left-0 right-0 m-auto w-fit'>
                        <img src={tape} alt='pin' className='w-24 h-24 md:w-32 md:h-32' />
                    </div>
                    <div className=''>
                        <h1 className='text-2xl md:text-3xl'>About</h1>
                    </div>
                </a>
            </div>
            <div className='torn-paper relative flex justify-center items-center px-40 md:px-12 py-8 h-fit w-1/2 m-8 md:hover:scale-125 hover:cursor-pointer drop-shadow-2xl'>
                <div className='absolute -top-10 md:-top-16 z-10 left-0 right-0 m-auto w-fit'>
                    <img src={tape} alt='pin' className='w-24 h-24 md:w-32 md:h-32' />
                </div>
                <div className=''>
                    <h1 className='text-2xl md:text-3xl'>Contact</h1>
                </div>
            </div>
            <div className='torn-paper relative flex justify-center items-center px-40 md:px-12 py-8 h-fit w-1/2 m-8 md:hover:scale-125 hover:cursor-pointer drop-shadow-2xl' onClick={handleToggleWork}>
                <div className='absolute -top-10 md:-top-16 z-10 left-0 right-0 m-auto w-fit'>
                    <img src={tape} alt='pin' className='w-24 h-24 md:w-32 md:h-32' />
                </div>
                <div className=''>
                    <h1 className='text-2xl md:text-3xl'>Work</h1>
                </div>
            </div>
            
            <div className={toggleWork ? 'notebook absolute bottom-10 w-fit h-fit p-8 right-0 transform duration-500 -rotate-[25deg] drop-shadow-3xl' :'notebook absolute bottom-0 w-fit h-fit p-8 -right-full transform duration-500 drop-shadow-3xl'}>
                {work?.map((work, index) => <HeaderWork work={work} key={index} index={index} />)}
            </div>
        </div>
        
    </div>
  )
}

export default Header