import React from 'react'

export default function Imgcard(props) {
  return (
    <>
    <div className="img-card">
        <img src={props.pngimag} alt="" />
    </div>
    </>
  )
}
