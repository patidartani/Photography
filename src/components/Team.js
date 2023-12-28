import React from 'react'
import Card1 from './Card1'
import timg1 from '../images/team-img-1.jpg'
import timg2 from '../images/team-img-2.jpg'
import timg3 from '../images/team-img-3.jpg'
import timg4 from '../images/team-img-4.jpg'

export default function Team() {
  return (
    <>
      <div className="container2">
           <div className="heading2">
            <div className="texxt">
                <h2>OUR PHOTOGRAPHY TEAM</h2>
                <span>Alienum phaedrum torquatos neceu</span>
            </div>
           </div>

           <div className="cards1">
               <Card1 image={timg1} name='MARIA SMITH'/>
               <Card1 image={timg2} name='viola jensen' />
               <Card1 image={timg3} name='FELICIA DAVIS'/>
               <Card1 image={timg4} name='JEFF ALVAREZ'/>
           </div>
      </div>
    </>
  )
}
