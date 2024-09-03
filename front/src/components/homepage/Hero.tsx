import React from 'react'
import herobg from '../../assets/hero-bg.jpeg'

export default function Hero() {
  return (
    <div className='hero flex justify-between bottom-12 align-middle' >
      <div className='flex flex-col justify-center '>
        <h1 className='relative top-0 text-4xl'>Debol Notes</h1>
        <p className='tracking-widest'>THE ONLY NOTEBOOK YOU NEED!</p>
      </div>

      <div className='flex flex-col justify-center '>
        <p>WRITE YOUR <h1 className='text-4xl'>DREAMS</h1> </p>
        <p>GET MORE ROOMS FOR NEW IDEAS!</p>
      </div>

    </div>
  )
}
