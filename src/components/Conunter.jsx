import React from 'react'
import './Counter.css'
function Conunter({ clicksNumber}){
  return (
    <div className='counter'>
      {clicksNumber}
    </div>
  )
}

export default Conunter
