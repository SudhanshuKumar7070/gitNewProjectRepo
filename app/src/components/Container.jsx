import React from 'react'

function Container({children}) {
  return (
    <div className=' max-w-6xl mx-auto px-5 my-8 '> 
      {children}
    </div>
  )
}

export default Container
