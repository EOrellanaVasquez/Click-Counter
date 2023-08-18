import { useState } from 'react'
import './App.css'
import logoClick from './img/logo-click.png'
import Boton from './components/Boton'
import Conunter from './components/Conunter'

function App() {

  const [clicksNumber, setClicksNumber] = useState(0);


  const beenClicked = () => {
    setClicksNumber(clicksNumber + 1);
  };

  const restartClick = () => {
    setClicksNumber(0)
  };

  return (
    <>
      <div className='app'>
        <div className='logo-click-container'>
          <img className='logo-click' src={logoClick} alt='logo click' />
        </div>

        <div className='principal-container'>
          <div className='counter-container'>
            <Conunter clicksNumber={clicksNumber} />
          </div>
          <div className='button-container'>
            <Boton text={'Click me to count'} itsClickButton={true} beenClicked={beenClicked} />
            <Boton text={'Restart counting'} itsClickButton={false} beenClicked={restartClick} />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
