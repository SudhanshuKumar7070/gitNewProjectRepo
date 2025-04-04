import React from 'react'
import logo from "./logo.png"
function Navbar() {
  return (
    <div className='py-4 px-8 bg-black bg-opacity-80 sticky  flex items-center justify-between top-0 z-50  bg-orange-900/10 bg-blurred backdrop-blur-md  rounded-lg tansition-all duration-300'>

            <div id='logo' className='w-[100px]'>
                <img src={logo} alt="a;t" />
            </div>
            <div  className='w-1/3 ' >

                <ul className='flex justify-around items-center text-white'>
                    <li>Home</li>
                    <li>Event</li>
                    <li>SignUp</li>
                    <li className=' rounded-lg border border-orange-900/10 p-3'>Login</li>
                </ul>
            </div>
        
    </div>
  )
}

export default Navbar
