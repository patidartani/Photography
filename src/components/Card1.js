import React from 'react'

export default function Card1(props) {
  return (
    <>
      <div className="card1">
        <div className="im-ag">
            <img src={props.image} alt="" />
            <div className="botm">
            <span>photographer</span>
            <h3>{props.name}</h3>
            <div className="smd">
                <a href="#">fb-</a>
                <a href="#">in-</a>
                <a href="#">tw</a>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}
