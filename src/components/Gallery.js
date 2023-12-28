import React,{useState} from 'react';
// import '../index.css';
import '../index.css'
import Tick from "./Tick.js";
import { arrayValue } from './HomepageData';


const Gallery = () => {
  const [item, setItem] = useState(arrayValue)
  const [show, setShow] = useState(true);
const [imageIndex, setImageIndex] = useState("");
// console.log(imageIndex)
const handleClick = (index) => {
    setImageIndex(index);
    // console.log(index)
    setShow(false);
};
console.log(handleClick)
// console.log(index)
const slideImage = (step, len) => {
  console.log("len", len);
  const next_index = (imageIndex+step+len)%len;
  console.log(next_index);
  setImageIndex(next_index);
}
  const filterItem = ()=>{
    const updateditem = arrayValue.filter((_, idx) => idx < 6)
    setItem(updateditem)
  }
  const filterItems = ()=>{
    const updateditem = arrayValue.filter((_, idx) => idx > 6)
    setItem(updateditem)
  }
  const AllItems = ()=>{
    const updateditem = arrayValue.filter((_, idx) => idx >= 0 )
    setItem(updateditem)
  }

  return (
    <>
    
      <div class="page1 w-100" style={{paddingTop:"12vmax"}}>

  <div class="navspace"></div>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h3 class="proofing fs-1">PROOFING GALLERY</h3>
            <div class="all d-flex justify-content-evenly mt-2 mb-5">
                <h4 class="me-4">Client: Jack Smith</h4>
                <h4 class="me-4">Subject: Photos</h4>
                <h4>Date: 2019-11-29</h4>
            </div>
        </div>
        <div class=" d-flex justify-content-center mb-5">
        <div id='all' class="all w-75  d-flex justify-content-evenly mt-5">
            <div class="icon d-flex">
                <h6 class="ms-2" onClick={()=>AllItems()}>ALL</h6>
                <h6 class="ms-5" onClick={()=>filterItem()}>APPROVED</h6>
                <h6 class="ms-5" onClick={()=>filterItems()}>REJECTED</h6>
            </div>
            <button id="download" class="download border p-2">DOWNLOAD</button>
        </div>
      </div> 

        <div class="alls d-flex justify-content-center align-items-center ">
        {show && (
          <div class="allone">
            {item?.map((item ,index) => (
              <div className="" key={index} onClick={()=>handleClick(index)}>
                <img src={`${item.src}`} alt="" class="imagesizes" />
                <div className="d-flex justify-content-between">
                  <h5>{item.number}</h5>
                  <div>
                    <a className="text-decoration-none text-dark" href={`${item.src}`}>
                      {" "}
                      <i className="ri-zoom-in-line"></i>
                    </a>
                    <a className="text-decoration-none text-dark" href={`${item.src}`} download={`${item.src}`}>
                      {" "}
                      <i className="ri-download-2-fill ms-1 me-1"></i>
                    </a>
                    <Tick />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
        {!show && (
              <div className="imagedata">
                <div className="imagedata">
                <i onClick={()=>slideImage(-1, item.length)} className="ri-arrow-drop-left-line fs-1 "></i>
                <img data-aos="zoom-in" src={item[imageIndex].src} alt="" className="bdahoja" />
                <i onClick={()=>slideImage(1, item.length)} className="ri-arrow-drop-right-line fs-1 "></i>
                </div>
                 <i class="ri-close-circle-line fs-2" onClick={()=>setShow(true)} ></i>
              </div>
            )}
      </div>
    </>
  );
}

export default Gallery;



           