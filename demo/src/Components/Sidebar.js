import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#14213D] w-1/6 h-[80vh] absolute left-5 top-[100px] flex flex-col sm:block'>
      <div className='bg-[#14213D] text-center m-3 p-3 text-white hover:bg-[#26385e] hover:text-[#ffaf10] hover:duration-[1s] cursor-pointer'>Homepage</div>
      <div className='bg-[#14213D] text-center m-3 p-3 text-white hover:bg-[#26385e] hover:text-[#ffaf10] hover:duration-[1s] cursor-pointer'>Find route</div>
      <div className='bg-[#14213D] text-center m-3 p-3 text-white hover:bg-[#26385e] hover:text-[#ffaf10] hover:duration-[1s] cursor-pointer'>Best</div>
      <div className='bg-[#14213D] text-center m-3 p-3 text-white hover:bg-[#26385e] hover:text-[#ffaf10] hover:duration-[1s] cursor-pointer'>Events</div>
      <div className='bg-[#14213D] text-center m-3 p-3 text-white hover:bg-[#26385e] hover:text-[#ffaf10] hover:duration-[1s] cursor-pointer'>About</div>
    </div>
  )
}

export default Sidebar
