import React  from "react";
import "./carsole.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Follow from "./Follow";
// import "remixicon/fonts/remixicon.css";
// function Carsole() {
  const Carsole = () => {
  

  return (
    <>
    <Navbar/>
      <div className=" d-flex flex-column align-items-center">
        <div className="w-100 head1">
          <div className="head2">
            <h3>FOUR COLUMNS</h3>
          </div>
          <div className="head3">
            <a href="#">Home/</a>
            <a href="#">Portfolio/</a>
            <a href="#">four Column</a>
          </div>
        </div>
        {/* second */}
        <div className="w-100 i-1">
          <div className="i-2">
            <div className="ite">
              <div data-name="all" className="active  iteam">
                SHOW ALL
              </div>
              <div className=" iteam" data-name="phones">
                ANNOUNCEMENT
              </div>
            </div>
            {/*  */}
            <div className="ite1">
              <div className="iteam" data-name="clothes">
                BIG-DAY
              </div>
              <div className="iteam" data-name="shoes">
                OUR STORIES
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="container row ki-1">
          <div className="col-lg-3 col-md-6 ki-2 ">
            <div className="ki-3 card1" data-name="phones">
              <img
                className="caroselimage"
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-1-650x979.jpg"
              />
              <div className="ki-4">
                <a>
                  <i class="ri-add-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ki-2">
            <div className="ki-3  card1" data-name="phones">
              <img
                className="caroselimage"
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-2-650x979.jpg"
                alt="phone"
              />
              <div className="ki-4">
                <a>
                  <i class="ri-add-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ki-2">
            <div className="ki-3 card1" data-name="clothes">
              <img
                className="caroselimage"
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-5-650x979.jpg"
                alt="phone"
              />
              <div className="ki-4">
                <a>
                  <i class="ri-add-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ki-2">
            <div className="ki-3 card1" data-name="clothes">
              <img
                className="caroselimage"
                src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-3-650x979.jpg"
                alt="cloth"
              />
              <div className="ki-4">
                <a>
                  <i class="ri-add-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* four */}
        {/* <div className=" kit"> */}
          <div className="container row ki-1 mt-4">
            <div className="col-lg-3 col-md- ki-2 ">
              <div className="ki-3 card1" data-name="clothes">
                <img
                  className="caroselimage"
                  src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-4-650x979.jpg"
                  alt="cloth"
                />
                <div className="ki-4">
                  <a>
                    <i class="ri-add-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ki-2">
              <div className="ki-3 card1" data-name="shoes">
                <img
                  className="caroselimage"
                  src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-6-650x979.jpg"
                  alt="shoes"
                  data-name=""
                />
                <div className="ki-4">
                  <a>
                    <i class="ri-add-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ki-2">
              <div className="ki-3 card1" data-name="shoes">
                <img
                  className="caroselimage"
                  src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-7-650x979.jpg"
                  alt="shoes"
                  data-name=""
                />
                <div className="ki-4">
                  <a>
                    <i class="ri-add-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ki-2">
              <div className="ki-3 card1">
                <img
                  className="caroselimage"
                  src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/port-filter-img-9-650x979.jpg"
                  alt="phone"
                  data-name=""
                />
                <div className="ki-4">
                  <a>
                    <i class="ri-add-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      <Follow/>
      <Footer/>
    </>
  );
}
export default Carsole;
