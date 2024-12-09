import React from 'react'

const HeaderWork = ({work, index}) => {
  return (
    <div className='m-5 hover:cursor-pointer md:hover:scale-125'>
        <h1 className='text-2xl'>{work.title}</h1>
        <h1 className='text-lg'>{work.shortdesc}</h1>
    </div>
  )
}

export default HeaderWork