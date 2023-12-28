import React, { useEffect, useState } from "react";
import "./Firstpage.css";
import Slider1 from "./Slider1";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(
    "https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-5.jpg"
  );
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="scroll">
      <Slider1 />
      <div id="bgcolor" className="leftright d-flex flex wrap ">
        <div className="leftone">
          <h2>AUTHENTIC PHOTOS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            alias?
          </p>
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-port-feauture-img-1.jpg"
            alt=""
            className=""
          />
          <h6 className="mt-3 ms-5">INTERIOR</h6>
          <h5 className="ms-5" onClick={() => navigate("/blushing")}>
            BRIDAL BOUNQUET
          </h5>
        </div>
        <div className="rightone">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-port-feauture-img-2.jpg"
            alt=""
          />
          <h6 className="mt-3 ">INTERIOR</h6>
          <h5 onClick={() => navigate("/blushing")}>CAPTURE EMOTION</h5>
        </div>
      </div>

      <div className="leftright d-flex justify-content-between ">
        <div className="lefttwo">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-port-feauture-img-3.jpg"
            alt=""
          />
          <h6 className="mt-3 ms-5">INTERIOR</h6>
          <h5 className="ms-5" onClick={() => navigate("/blushing")}>
            BRIDAL BOUNQUET
          </h5>
        </div>
        <div className="righttwo">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-port-feauture-img-4.jpg"
            alt=""
          />
          <h6 className="mt-3 ">INTERIOR</h6>
          <h5 onClick={() => navigate("/blushing")}>LOVE SHADES</h5>
        </div>
      </div>

      <div className="graydiv" height={500}>
        <div className="w-100 d-flex justify-content-center ">
          <h3 className="text-center  w-50 mt-5 mb-5">
            LIVE YOUR MAGIC AND SAVE YOUR PRECIOUS LOVE MEMORIES! OUR TEAM OF
            PROFESSIONAL PHOTOGRAPHERS IS HERE TO HELP YOU.
          </h3>
        </div>
        <iframe
          className="youtube w-100"
          height={700}
          src="https://www.youtube.com/embed/JtYaDKNssbI"
          title="OUR WEDDING DAY | 09.07.19"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="coffee d-flex justify-content-evenly mt-5 ">
        <div>
          <h6>CUP OF COFFE</h6>
          <h6 className="override">123</h6>
        </div>
        <div>
          <h6>NEW COUPLES</h6>
          <h6 className="override">456</h6>
        </div>
        <div>
          <h6>BEST BOUQUETS</h6>
          <h6 className="override">789</h6>
        </div>
        <div>
          <h6>TASTY CAKES</h6>
          <h6 className="override">654</h6>
        </div>
        <div>
          <h6>CEREMONIES</h6>
          <h6 className="override">987</h6>
        </div>
      </div>

      <div className="team d-flex flex-column justify-content-center align-items-center">
        <h3>OUR PHOTOGRAPHY TEAM</h3>
        <h4>Alienum phaedrum torquatos neceu</h4>
        <div className="greentext d-flex justify-content-evenly align-items-center mt-4">
          <div className="w-100 lg-w-25   text-center">
            <div className="onhover ">
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/team-img-1.jpg"
                alt=""
                className=" w-75 "
              />
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/team-hover-img-1.png"
                alt=""
                className="imagehover"
              />
            </div>
            <p>Photographer</p>
            <h4>MARIA SMITH</h4>
            <h6>FB - IN - TW</h6>
          </div>

          <div className="w-100 lg-w-25 text-center">
            <div className="onhover">
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/team-img-2.jpg"
                alt=""
                className=" w-75 mt-5"
              />
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/team-hover-img-2.png"
                alt=""
                className="imagehover"
              />
            </div>
            <p>Photographer</p>
            <h4>VIOLA JENSEN</h4>
            <h6>FB - IN - TW</h6>
          </div>

          <div className="w-100 lg-w-25 text-center">
            <div className="onhover">
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/team-img-3.jpg"
                alt=""
                className=" w-75"
              />
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/team-hover-img-3.png"
                alt=""
                className="imagehover"
              />
            </div>
            <p>Photographer</p>
            <h4>FELICIA DAVIS</h4>
            <h6>FB - IN - TW</h6>
          </div>

          <div className="w-100 lg-w-25 text-center">
            <div className="onhover">
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/team-img-4.jpg"
                alt=""
                className=" w-75 mt-5"
              />
              <img
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/team-hover-img-4.png"
                alt=""
                className="imagehover"
              />
            </div>
            <p>Photographer</p>
            <h4>JEFF ALVAREZ</h4>
            <h6>FB - IN - TW</h6>
          </div>
        </div>
      </div>
      <div className="greentext d-flex justify-content-evenly  align-items-center mt-5">
        <div className="lefttext w-100 lg-w-25 text-center">
          <p>01</p>
          <h4
            onClick={() =>
              setImage(
                "https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-4.jpg"
              )
            }
          >
            FASHION
          </h4>
          <p>02</p>
          <h4
            onClick={() =>
              setImage(
                "https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-5.jpg"
              )
            }
          >
            STRING
          </h4>
          <p>03</p>
          <h4
            onClick={() =>
              setImage(
                "https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-6.jpg"
              )
            }
          >
            WEDDING
          </h4>
          <p>04</p>
          <h4
            onClick={() =>
              setImage(
                "https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-img-7.jpg"
              )
            }
          >
            EVENT
          </h4>
        </div>
        <div className="rightimage w-100 lg-w-75">
          <img src={image} alt="" className="w-100" />
        </div>
      </div>
      <div className="  d-flex flex-wrap lg-justify-content-evenly justify-content-center py-5 bg-opacity-75 ">
        <div className="companytag mt-5 mb-5">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-1-new-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-2-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-3-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-4-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-10-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-6-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-5-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-7.hover_.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-8-hover.png"
            alt=""
          />
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-client-9-hover.png"
            alt=""
          />
        </div>
      </div>
      <div className="textheading text-center mt-5">READ OUR BLOG</div>
      <div className="ali text-center fs-5">
        Alienum phaedrum torquatos neceu, vis detraxit
      </div>
      <div className="greentext d-flex justify-content-evenly w-100 mt-5">
        <div className="onblur w-100 lg-w-25 text-center">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/blog-post-img-2.1.jpg"
            alt=""
            className="blur w-75"
          />
          <h6 className="on mt-3">Photography - Anna Smith</h6>
          <h3>BEST INVITATION</h3>

          <p className="ut w-75 ms-5">
            Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est.
            Maecenas sit amet scelerisque{" "}
          </p>

          <h5>READ MORE</h5>
        </div>
        <div className="onblur w-100 lg-w-25 text-center">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/blog-post-img-3.1.jpg"
            alt=""
            className="blur w-75"
          />
          <h6 className="on mt-3">Photography - Anna Smith</h6>
          <h3>INTO THE WOODS</h3>
          <p className="ut w-75 ms-5">
            Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est.
            Maecenas sit amet scelerisque{" "}
          </p>
          <h5>READ MORE</h5>
        </div>
        <div className="onblur w-100 lg-w-25 text-center">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/blog-post-img-4.1.jpg"
            alt=""
            className="blur w-75"
          />
          <h6 className="on mt-3">Photography - Anna Smith</h6>
          <h3 className="callup">TENDER LOVE</h3>
          <p className="ut w-75 ms-5 ">
            Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est.
            Maecenas sit amet scelerisque{" "}
          </p>
          <h5>READ MORE</h5>
        </div>
      </div>

      <div className="mainimaged">
        <h1 className="mainimaged-made">YOU JUST ENJOY YOUR DAY!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>READ MORE</button>
      </div>
      <div className="greentextt d-flex  justify-content-evenly align-items-center w-100    ">
        <div className="part w-100 lg-w-25  text-center mb-5">
          <i className="ri-calendar-line  mt-5 text-light"></i>
          <h4>LOREM IPSUM</h4>
          <h6>Wedding</h6>
          <p className="w-75 ms-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </p>
        </div>
        <div className="w-100 lg-w-25 text-center mb-5">
          <i className="ri-camera-line  mt-5 text-light"></i>
          <h4>LOREM IPSUM</h4>
          <h6>Wedding</h6>
          <p className="w-75 ms-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </p>
        </div>
        <div className="w-100 lg-w-25 text-center mb-5">
          <i className="ri-camera-lens-line  mt-5 text-light"></i>
          <h4>LOREM IPSUM</h4>
          <h6>Wedding</h6>
          <p className="w-75 ms-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </p>
        </div>
        <div className="w-100 lg-w-25 text-center mb-5">
          <i className="ri-dv-fill text-light "></i>
          <h4>LOREM IPSUM</h4>
          <h6>Wedding</h6>
          <p className="w-75 ms-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </p>
        </div>
      </div>
      <div className="testi text-center mt-5">
        <h1>TESTIMONIALS</h1>
        <h6 className="">Alienum phaedrum torquatos</h6>
      </div>
      <div className="containers  mt-5 ">
        <div className="mt-5">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-testimonials-img-1-768x522.jpg"
            alt=""
          />
        </div>
        <div className="graybg d-flex flex-column justify-content-center text-center   p-5 ">
          <h6>December 19, 2024</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            reprehenderit inventore magnam quidem harum vero ex, obcaecati, aut
            eius quod temporibus adipisci! Iure quo amet tempora perspiciatis
            quidem libero est.
          </p>
        </div>
      </div>


      <div className="princing">
        <div className="text-center princycontent">
          <h2
            className="text-secondary"
            style={{ letterSpacing: "1vmax", fontFamily: "serif" }}
          >
            PRICING PLANS
          </h2>
          <h6 className="text-secondary fs-5" style={{ fontFamily: "serif" }}>
            Alienum phaedrum torquatos
          </h6>
        </div>

        <div className="premium">
          <div className="premiumbox">
            <div className="premiumboxes">
              <div className="premium1">
                <h5>PREMIUM</h5>
                <h4 className="fs-1" style={{ fontFamily: "serif" }}>
                  $ 491
                </h4>
                <h6 className="fs-5" style={{ fontFamily: "serif" }}>
                  Month
                </h6>
                <h6>Relaxing masage</h6>
                <h6>Face Treatment</h6>
                <h6>Body Polish</h6>
                <h6>Manicure & Pedicure</h6>
                <a href="#service">
                  <button className="text-light ">SEND</button>
                </a>
              </div>
            </div>

            <div className="premiumboxes">
              <div className="premium1">
                <h5>PREMIUM</h5>
                <h4 className="fs-1" style={{ fontFamily: "serif" }}>
                  $ 391
                </h4>
                <h6 className="fs-5" style={{ fontFamily: "serif" }}>
                  Month
                </h6>
                <h6>Relaxing masage</h6>
                <h6>Face Treatment</h6>
                <h6>Body Polish</h6>
                <h6>Manicure & Pedicure</h6>
                <a className="btn2" href="#service">
                  {" "}
                  <button
                    className=" bg-white text-secondary fw-bold"
                    style={{ border: "1px solid gray" }}
                  >
                    SEND
                  </button>
                </a>
              </div>
            </div>

            <div className="premiumboxes">
              <div className="premium1">
                <h5>STANDARD</h5>
                <h4 className="fs-1" style={{ fontFamily: "serif" }}>
                  $ 291
                </h4>
                <h6 className="fs-5" style={{ fontFamily: "serif" }}>
                  Month
                </h6>
                <h6>Relaxing masage</h6>
                <h6>Face Treatment</h6>
                <h6>Body Polish</h6>
                <h6>Manicure & Pedicure</h6>
                <a href="#service">
                  <button className="text-light">SEND</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marry row row-cols-2 row-cols-lg-4 ">
        <div className="downhoverimage col">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h1-port-feauture-img-5.jpg"
            alt=""
            className="rsimg w-100 "
          />
          <div className="hovername  text-center ">
            <h4>MEMORY</h4>
            <h2>CAPTURE MOMENT</h2>
          </div>
        </div>

        <div className="downhoverimage col">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h1-port-feauture-img-6.jpg"
            alt=""
            className="rsimg w-100"
          />
          <div className="hovername  text-center ">
            <h4>MEMORY</h4>
            <h2>NOW & FOREVER </h2>
          </div>
        </div>
        <div className="downhoverimage col">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h1-port-feauture-img-7.jpg"
            alt=""
            className="w-100 "
          />
          <div className="hovername text-center">
            <h4>MEMORY</h4>
            <h2>LET'S CELEBRATE</h2>
          </div>
        </div>

        <div className="downhoverimage col">
          <img
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h1-port-feauture-img-8.jpg"
            alt=""
            className="w-100 "
          />
          <div className="hovername  text-center ">
            <h4>MEMORY</h4>
            <h2>VELVET CAKE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
