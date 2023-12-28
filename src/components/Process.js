import React from 'react';
import "./Process.css"
import Footer from './Footer';
import Navbar from './Navbar';
import Follow from './Follow';

const Process = () => {
  return (
       <>
       <Navbar/>
    <div className='main'>

         <div className="process">
           <div className="content">
                    <h1>OUR PROCESS</h1>
           </div>
          </div> 

          <div className="boxes">
                    <div className="one">
                              <div className="left">
                              <div className="line">
                              <img style={{zIndex:"111", width:"250%", height:"23vmax", position:"relative", top:"15%", left:"25%"}} src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/our-process-img-1a.jpg" alt="" />
                              </div>
                              </div>
                              <div className="right">
                                        <h6>01</h6>
                                        <h1>OUR STUDIO</h1>
                                        <p>Ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> fringilla libero massa, eu blandit nulla ultrices ut. Curabitur in <br /> quam interdum, ullamcorper nunc vitae, varius ex. <br /> Donec vel semper.</p>
                              </div>
                    </div>
                    <div className="two">
                       <div className="left">
                       <h6>02</h6>
                              <h1>SHOOTING</h1>
                              <p>Dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> fringilla libero massa, eu blandit nulla ultrices ut. Curabitur in <br /> quam interdum, ullamcorper nunc vitae, varius ex. Donec vel <br /> semper turpis</p>
                       </div>
                       <div className="right">
                       <div className="line">
                              <img style={{zIndex:"111", width:"250%", height:"23vmax", position:"relative", top:"15%", right:"175%"}}  src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/our-process-img-2a.jpg" alt="" />
                              </div>
                       </div>
                    </div> 
                    <div className="three">
                    <div className="left">
                              <div className="line">
                              <img style={{zIndex:"111", width:"250%", height:"23vmax", position:"relative", top:"15%", left:"25%"}} src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/our-process-img-3a.jpg" alt="" />
                              </div>
                              </div>
                              <div className="right">
                                        <h6>03</h6>
                                        <h1>EDITING</h1>
                                        <p>Dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> fringilla libero massa, eu blandit nulla ultrices ut. Curabitur in <br /> quam interdum, ullamcorper nunc vitae, varius ex. Donec vel <br /> semper turpis</p>
                              </div>
                    </div>
                    <div className="four">
                    <div className="left">
                       <h6>04</h6>
                              <h1>PRINTING</h1>
                              <p>Sit amet, consectetur adipiscing elit. Suspendisse fringilla <br /> libero massa, eu blandit nulla ultrices ut. Curabitur in quam <br /> interdum, ullamcorper nunc vitae, varius ex. Donec vel semper <br /> turpis quam.</p>
                       </div>
                       <div className="right">
                       <div className="line">
                              <img style={{zIndex:"111", width:"250%", height:"23vmax", position:"relative", top:"15%", right:"175%"}}  src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/our-process-img-4a.jpg" alt="" />
                              </div>
                       </div>
                    </div>
          </div>

    </div>
    <Follow/>
    <Footer/>
    </>
  )
}

export default Process