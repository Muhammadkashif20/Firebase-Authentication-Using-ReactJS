import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './Components/Header'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
