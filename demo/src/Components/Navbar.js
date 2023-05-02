import React from 'react'
import { MdTravelExplore } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div className='bg-[#14213D] w-[100%] h-16'>
      <div className='flex gap-2 items-center relative top-3 left-3 w-[90%] '>
      <MdTravelExplore size={30} color='#FCA311'/>
      <h1 className='text-[#FCA311] text-2xl font-bold'>travelMate</h1>
      </div>
      <BsPersonCircle className='absolute top-4 right-5' size={30} color='#FCA311'/>
    </div>
  )
}

export default Navbar
