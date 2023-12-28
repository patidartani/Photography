import React from "react";
import "./Follow.css";

const Follow = () => {
    const handleScroll = () => {
        console.log('Scrolling...');
      };
      
      // Add the scroll event listener directly in the component
      window.addEventListener('scroll', handleScroll);
      
  return (
    <div className="follow">
      <div className="text-center ">
        <h2
        //   className="text-secondary"
          style={{ letterSpacing: "0.8vmax", fontFamily: "serif" }}
        >
          FOLLOW ME ON INSTAGRAM
        </h2>
        <h6 className="text-secondary fs-5" style={{ fontFamily: "serif" }}>
          @ My_wedding_day
        </h6>
      </div>

      <div className="imagesmain">
        <div className="images">
          <div className="overlay">
            <img
              className="img1"
              src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/195663400_424423132423667_8771559323471765145_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Sfy2N_pGCFEAX_fQa5f&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBYpJ64fZPlOnHEt8RCNk1X0s6aBsjwk0WtNuGvgBpzcQ&oe=64D567B4"
              alt=""
            />
          </div>
          <div className="overlay" style={{ marginTop: "-7vmax" }}>
            <img
              className="img1"
              src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/195833806_914208909138893_7927675805378937144_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=AMy4P0e6HSkAX-o7TTJ&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC5NeoivTd6GZ90_aehzbx-1YSwCK7DG3abCKxXOT6FQw&oe=64D5846E"
              alt=""
            />
          </div>
          <div className="overlay">
            <img
              className="img1"
              src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/123134686_372059340700020_4404525409356853774_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uRRz_ViDZvoAX-TcDbh&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBOC7A72-9vVqo1fa69KJdqB012Bt1-FvwYeOndJkc8GA&oe=64D5EF7E"
              alt=""
            />
          </div>
          <div className="overlay" style={{ marginTop: "-7vmax" }}>
            <img
              className="img1"
              src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/123288051_3380409715359391_3006139455467396831_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=1C8Nj79QyB4AX_qJ4r0&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAquXkjAGc7GSqJx7PmEXfm7pwgy_9RYapLjLvrFGDThA&oe=64D5B3B5"
              alt=""
            />
          </div>
          <div className="overlay">
            <img
              className="img1"
              src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/123592246_3485041341614119_3091980917171181489_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=58e9fdPCF0wAX-1Urq3&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfABVsA3d0Jr9rqgzORJnp-Dx3rm-4aj6-baL2P0950jGg&oe=64D5A188"
              alt=""
            />
          </div>
          <div className="overlay" style={{ marginTop: "-7vmax" }}>
            <img
              className="img1"
              src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/123278186_119770123067280_3503388356522484163_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uGfUo3yipogAX-bzm5L&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfANBstUuqppOTj742Ch8PDWZ7xBSn1SiOIJx3G332NKgw&oe=64D4CB8D"
              alt=""
            />
          </div>
        </div>
        <div className="line">
          {" "}
          <hr />{" "}
        </div>

        <div className="last">
          <h5>Solene@Qodeinteractive.Com</h5>
          <h6>FB-IN-TW</h6>
          <p>© 2020 Qode Interactive, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Follow;
