import React from 'react'
import LeftContent from './components/leftContent'
import RightContent from './components/rightContent'
function Herosection() {
  return (
    <div className='md:mb-0 mb-[100px] flex flex-col mb-10 md:flex-row items-center justify-between py-16 bg-cover bg-center bg-opacity-50 bg-blend-overlay rounded-xl mb-8 h-[70vh] px-8 '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Herosection
