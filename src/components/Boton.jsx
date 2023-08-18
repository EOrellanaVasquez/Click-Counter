import React from 'react'
import './Boton.css'

function Boton({ text, itsClickButton, beenClicked }) {

  return (
    <div>
      <button className={ itsClickButton ? 'clickButton' : 'restartButton' }
      onClick={beenClicked}>
        {text}
      </button>
    </div>
  )
}

export default Boton
