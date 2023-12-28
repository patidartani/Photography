import React from 'react'
import Navbar from './Navbar'
import Firstpage from './Firstpage'
import Footer from './Footer'
import Follow from './Follow'

const Homepages = () => {

  return (
    <div>
        <Navbar/>
        
        <Firstpage/>
  
       <div  style={{marginTop:"8vmax"}}>
        <Follow/>
        </div>
        {/* <div className='homepagefooter'> */}
        <Footer/>
        {/* </div> */}
          </div>
  )
}

export default Homepages