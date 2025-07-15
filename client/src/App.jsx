import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Edit from './components/Edit'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router,Route,Link,Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>  
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
