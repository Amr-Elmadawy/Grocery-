import React from 'react'

const Banner = ({title ,BgImg}) => {
  return (
    <div className='h-[50vh]  flex justify-center items-center bg-center bg-cover relative' 
    style={{backgroundImage:`url(${BgImg})`}}
    >
        <h2 className='md:text-5xl text-4xl text-zinc-800 bg-white font-bold p-5 rounded-xl z-10'>{title}</h2>
        <div className='absolute w-full h-full bg-black/50 top-0'></div>
    </div>
  )
}

export default Banner
