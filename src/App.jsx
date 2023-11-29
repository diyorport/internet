import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Shop from './shop/shop'
import Printer from './shop/accia-shop/printer'
import Rottor from './shop/accia-shop/rottor'
import Proector from './shop/accia-shop/proector'
function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Routes>
        <Route index element={<Shop/>}/>
        <Route path='printer' element={<Printer/>}/>
        <Route path='rottor' element={<Rottor/>}/>
        <Route path='proector' element={<Proector/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
