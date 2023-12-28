import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './AboutUs.css'
import Top from './Top'
import Who from './Who'
import Design from './Design'
import Team from './Team'
import Img from './Img'
import Test from './Test'
import Navbar from './Navbar'
import Footer from './Footer'
import Follow from './Follow'




function AboutUs() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div>
        <Top/>
        <Who/>
        <Design/>
        <Team/>
        <Img/>
        <Test/>
      </div>
      <div className='followabout'>
      <Follow/>
      </div>
     
    </>
  )
}

export default AboutUs
