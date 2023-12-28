import React,{useState} from 'react'
import "./Blushing.css"
import Navbar from './Navbar'
import Follow from './Follow'
import Footer from './Footer'
import { images } from './BlushingData'


const Blushing = () => {
 



const [image, setImage] = useState(images);
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


  return (
    <div>
      <Navbar bg={"black"}/>
      <div className=''>
        <div className='image'>
          <div className='left'>
            <h3>BLUSHING BRIDE</h3>
          </div>
          <div className='right'>
            <h6>Home /</h6>
            <h6>Interior /</h6>
            <h6>Blushing Bride</h6>
          </div>
        </div>

        <div className='multiimage'>
         {show && (
          <div className='left'>
         
            {image?.map((imaged,index) => (
               <div className='layer' key={index} onClick={()=>handleClick(index)}>
               <img  src={imaged} alt="" />
             </div>
            ))}
            </div>
            )}
         
          {!show && (
              <div className="imagedata">
                <div className="imagedata1">
                <i onClick={()=>slideImage(-1, image.length)} className="ri-arrow-drop-left-line fs-1 "></i>
                <img data-aos="zoom-in" src={image[imageIndex]} alt="" className="bdahoja" />
                <i onClick={()=>slideImage(1, image.length)} className="ri-arrow-drop-right-line fs-1 "></i>
                </div>
                 <i class="ri-close-circle-line fs-2" onClick={()=>setShow(true)} ></i>
              </div>
            )}
           
          <div className='right'>
            <h4>IN BELGRADE</h4>
            <h5>Michelle & Marce, July 8, 2018</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis lorem quis pretium posuere. Nam gravida orci in massa convallis vestibulum. Sed venenatis hendrerit gravida. In nec lectus diam. Sed tellus justo, aliquam id eros sit amet, condimentum ullamcorper justo. In lacinia, purus ut congue pharetra, elit sapien aliquam turpis, non viverra dui ante id orci.</p>
            <h6>CATEGORY: <span>Interior</span> </h6>
            <h6>DATE: <span>November 25, 2019</span></h6>
            <h6>TAGS: <span>Photo</span></h6>
          </div>
        </div>
        <div className='line'><hr /></div>
      </div>
      <Follow/>
      <Footer/>
    </div>
  )
}

export default Blushing