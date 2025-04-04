import React from 'react'
import skull_img from './skull image.png'
function RightContent() {
  return (
    <div className='md:w-1/2 flex justify-center '>
      <img src={skull_img} alt="img"  className='w-3/4 max-w-xs md:w-[80%] md:max-w-md w-[250px] rounded-lg'/>
    </div>
  )
}

export default RightContent
