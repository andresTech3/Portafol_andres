import React from 'react'
// import Menu from './components/Menu'
import Profile from './components/Profile'
import About from './components/About'
import Info from './components/Info'
import { Qualities } from './components/Qualities'
import Cv from './components/Cv'
import Skill from './components/Skill'
import Proyect from './components/Proyect'


function App() {

  return (
    <div className="App" >
      {/* <Menu /> */}
          <Profile />
          <About/>
          <Skill />
      <div className='w-full p-5'>
        <div className='flex p-3'>
          <Info />
          <Qualities />
        </div>
        <Cv />
      </div>
      <Proyect />
    </div>
  )
}

export default App
