import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepages from './components/Homepages'
import Standard from './components/Standard'
import Carsole from './components/Carsole'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Blushing from './components/Blushing'
import Contact from './components/Contact'
import Process from './components/Process'



const App = () => {

   

  return (
    <div >
      <Routes>
        <Route path='/' element={<Homepages/>}/>
        <Route path='/standard' element={<Standard/>}/>
        <Route path='/carosole' element={<Carsole/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/blushing' element={<Blushing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/process' element={<Process/>}/>
      </Routes>
      
    </div>
  )
}

export default App