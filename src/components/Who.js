import React from 'react'
import img2 from '../images/about-us-img-1.jpg'
import img3 from '../images/about-us-img-2.jpg'
import img4 from '../images/about-us-img-3.jpg'
import Card1 from './Card1'

export default function Who() {
  return (
    <>
    <div className="aboutcontainer">
        <div className="aboutheading">
            <div className="abouttext">
            <h2>who we are</h2>
            <span>Alienum phaedrum torquatos</span>
            </div>
        </div>
        <div className="aboutcards">
        <Card1 image={img2} shooting='photo shooting' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh'/>
        <Card1 image={img3} shooting= 'photo editing' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh'/>
        <Card1 image= {img4} shooting='photo exibition' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh'/>
        </div>
    </div>
    </>
  )
}
