import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
         <div id="mains">
          <div className="center">
              <div className="fp1">
                  <h1>Follow Us</h1>
                  <div className="logo">
                    <a href="/"><i class="ri-facebook-fill"></i></a>
                    <a href="/"><i class="ri-instagram-fill"></i></a>
                    <a href="/"><i class="ri-twitter-fill"></i></a>
                    <a href="/"><i class="ri-youtube-fill"></i></a>
                  </div>
                  <h3>email@gmail.com</h3>
              </div>
              <div className="fp2">
                <div className="circlef">
                  <h5>Lorem, ipsum dolor.</h5>
                </div>
              </div>
              <div className="fp3">
                  <h1>Newsletter</h1>
                  <h3>Follow our Latest stories</h3>
                  <div className="finput">
                    <input type="email" name="email" placeholder='E-mail' />
                    <a href="/"><i class="ri-mail-line"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer