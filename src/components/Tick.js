import React, { useState } from 'react'

const Tick =() => {
  const [icon, setIcon] = useState(false);
  return (
    <>
      <i onClick={()=>setIcon(!icon)}>{icon ? <i className='ri-check-line'></i> :<i className='ri-close-line'></i>}</i>
    </>
  )
}

export default Tick