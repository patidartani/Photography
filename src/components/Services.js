import React from 'react'
import "./Services.css"
import Navbar from './Navbar'
import Footer from './Footer'
import Follow from './Follow'

const Services = () => {
    return (
        <>
        <div>
            <Navbar/>
            <div className='mainge' id='service'>
                <img className='mainimage' src="https://cdn.shopify.com/s/files/1/3026/6974/files/Woman_with_Camera_Learning_Photography.jpg?v=1563570878" alt="" />
                <h1 className='serve'>OUR SERVICES</h1>
            </div>


            <div className='boxing'>
                <div className='boxses'>
                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-1.png" alt="" />
                        <h3 className='text-secondary'>SHOOTING</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-2.png" alt="" />
                        <h3 className='text-secondary'>EDITING</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-3.png" alt="" />
                        <h3 className='text-secondary'>WEDDINGS</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-4.png" alt="" />
                        <h3 className='text-secondary'>EDITORIALS</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-5.png" alt="" />
                        <h3 className='text-secondary'>LIGHTENING</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-6.png" alt="" />
                        <h3 className='text-secondary'>MODELING</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-7.png" alt="" />
                        <h3 className='text-secondary'>MAKE UP ARTST</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>

                    <div className='box'>
                        <img src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/our-services-icon-8.png" alt="" />
                        <h3 className='text-secondary'>PRINTING</h3>
                        <h4>Wedding</h4>
                        <p className='text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                    </div>
                </div>
            </div>

            <div className='princing'>
                <div className='text-center content'>
                    <h2 className='text-secondary' style={{ letterSpacing: "1vmax", fontFamily: "serif" }}>PRICING PLANS</h2>
                    <h6 className='text-secondary fs-5' style={{ fontFamily: "serif" }}>Alienum phaedrum torquatos</h6>
                </div>

                <div className='premium'>
                    <div className='premiumbox'>
                        <div className='premiumboxes'>
                            <div className='premium1'>
                                <h5>PREMIUM</h5>
                                <h4 className='fs-1' style={{ fontFamily: "serif" }}>$  491</h4>
                                <h6 className='fs-5' style={{ fontFamily: "serif" }}>Month</h6>
                                <h6>Relaxing masage</h6>
                                <h6>Face Treatment</h6>
                                <h6>Body Polish</h6>
                                <h6>Manicure & Pedicure</h6>
                                <a href="#service"><button className='text-light '>SEND</button></a>

                            </div>
                        </div>

                        <div className='premiumboxes'>
                            <div className='premium1'>
                                <h5>PREMIUM</h5>
                                <h4 className='fs-1' style={{ fontFamily: "serif" }}>$ 391</h4>
                                <h6 className='fs-5' style={{ fontFamily: "serif" }}>Month</h6>
                                <h6>Relaxing masage</h6>
                                <h6>Face Treatment</h6>
                                <h6>Body Polish</h6>
                                <h6>Manicure & Pedicure</h6>
                                <a className='btn2' href="#service"> <button className=' bg-white text-secondary fw-bold' style={{ border: "1px solid gray" }}>SEND</button></a>

                            </div>
                        </div>

                        <div className='premiumboxes'>
                            <div className='premium1'>
                                <h5>STANDARD</h5>
                                <h4 className='fs-1' style={{ fontFamily: "serif" }}>$ 291</h4>
                                <h6 className='fs-5' style={{ fontFamily: "serif" }}>Month</h6>
                                <h6>Relaxing masage</h6>
                                <h6>Face Treatment</h6>
                                <h6>Body Polish</h6>
                                <h6>Manicure & Pedicure</h6>
                                <a href="#service"><button className='text-light'>SEND</button></a>

                            </div>
                        </div>
                    </div>
                </div>


              
               

            </div>
        
        </div>
        
        <Follow/>
       <div className='footerservice'>
       <Footer/>
       </div>
       </>
        
        
    )
}

export default Services