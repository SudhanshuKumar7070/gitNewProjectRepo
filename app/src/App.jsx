import React from 'react'
import  Container from './components/Container.jsx'
import Navbar from './components/Navbar.jsx'
import Herosection from './herosection.jsx'
function App() {
  return (
    <div className='font-["Montserrat"] bg-gradient-to-r from-black via-orange-950 to-black   min-h-screen'>
      <Container>
        <Navbar/>
        <Herosection/>

      </Container>
    </div>
  )
}

export default App
