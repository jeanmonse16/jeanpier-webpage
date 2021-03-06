import React from 'react'

import './components/styles/header.css'

const BACKGROUND_HEADER = 'https://steamuserimages-a.akamaihd.net/ugc/996892020308483531/67D7FE7EFB9B47F88F1BBDE47FBDF11489EA0E49/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'

export const App = () => (
  <div className='Header'>
    <div className='Header__Background'>
      <img className='Header__Background--Img' src={BACKGROUND_HEADER} />
    </div>
    <h1>Hola mundo</h1>
  </div>
)
