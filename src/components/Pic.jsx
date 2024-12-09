import React from 'react'
import { urlFor } from "../client.js";
import pin from "../imgs/red_pin.png"

const Pic = ( {url, w} ) => {
    const r = Math.floor(Math.random() * (25));
    const minus = Math.floor(Math.random() * (2));
    
  return (
    <div className={'relative bg-white drop-shadow-3xl w-fit h-fit px-5 pt-5 pb-10 m-2 '} style={minus === 1 ? {transform: `rotate(${r}deg)`}: {transform: `rotate(-${r}deg)`}}>
        <div className='absolute -top-6 md:-top-8 z-10 left-0 right-0 m-auto w-fit'>
            <img src={pin} alt='pin' className='w-12 h-12 md:w-16 md:h-16 drop-shadow-3xl' />
        </div>
        <img src={urlFor(url)} alt={'about picture'} 
        className='w-64' />
    </div>
  )
}

export default Pic