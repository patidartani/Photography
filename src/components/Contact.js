import React from 'react'
import "./Contact.css"
import Navbar from './Navbar'
import Follow from './Follow'


const Contact = () => {
  return (
    <div>
      <Navbar/>
    
        <div className='contactmain'>
           
            <img src="map.png" alt="" />
        </div>

        <div className='contactcontent'>
            <div className='left'>
              <h3>PHOTO EDITING</h3>
              <h6>Lorem ipsum dolor sit amet, eu alia admodum volup. Lorem ipsum dolor sit amet, eu alia admodum volup</h6>
              <p>Lorem ipsum dolor sit amet, eu alia admodum volup tua cu hend, rerit tinci dunt nec cu, per an vidit corpora. Nec home delectus ne. Vim viven dum manda mus te, an qui sagam accommo dare.</p>
              <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/contact-img-2.jpg" alt="" />
            </div>

            <div className='right'>
               <input type="text" placeholder='NAME' />
               <input type="text" placeholder='E-MAIL' />
               <input type="text" placeholder='WEDDING DATE' />
               <input type="text" placeholder='WEDDING ADDRESS' />
               <p>TELL US MORE</p>
               <hr />
               <button>SEND</button>
               <h5>EMAIL</h5>
               <h6>Solene@qodeinteractive.com</h6>
               <h5>ADDRESS</h5>
               <h6>Miami, Florida</h6>
               <h5>CALL ME</h5>
               <h6>+(123) 456 - 7890 - 456 - 78</h6>
               <h5>FOLLOW</h5>
               <h6>@ My_wedding_day</h6>
            </div>
        </div>
        <div className='mt-5'>
           <Follow/>
           </div>

    </div>
  )
}

export default Contact