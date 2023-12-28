import React from 'react'
import bimg from '../images/h1-img-4.jpg'
import Imgcard from './Imgcard'
import png1 from '../images/client1.png'
import png2 from '../images/client-2.png'
import png3 from '../images/client-3.png'
import png4 from '../images/client-4.png'
import png5 from '../images/client-5.png'
import png6 from '../images/client-6.png'
import png7 from '../images/client-7.png'
import png8 from '../images/client-8.png'
import png9 from '../images/client-9.png'
import png10 from '../images/client-10.png'


export default function Img() {
    return (
        <>
            <div className="container3">
                <div className="top">
                    <div className="left1">
                        <div className="content1">
                            <div className="sp1">
                                <a href="#"><span>01</span> <br /> fashion</a>
                            </div>
                            <div className="sp1">
                                <a href="#"><span>02</span> <br /> spring</a>
                            </div>
                            <div className="sp1">
                                <a href="#"><span>03</span> <br /> wedding</a>
                            </div>
                            <div className="sp1">
                                <a href="#"><span>04</span> <br /> event</a>
                            </div>

                        </div>
                    </div>
                    <div className="right1">
                        <img src={bimg} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="img-cards">
                        <div className="top2">
                            <Imgcard pngimag={png1}/>
                            <Imgcard pngimag={png2}/>
                            <Imgcard pngimag={png3}/>
                            <Imgcard pngimag={png4}/>
                            <Imgcard pngimag={png5}/>
                            
                        </div>
                        <div className="btm">
                        <Imgcard pngimag={png6}/>
                        <Imgcard pngimag={png7}/>
                        <Imgcard pngimag={png8}/>
                        <Imgcard pngimag={png9}/>
                        <Imgcard pngimag={png10}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
