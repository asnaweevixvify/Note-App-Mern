import './App.css'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Edit from './components/Edit'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router,Route,Link,Routes, BrowserRouter } from 'react-router-dom'
import { getUser } from '../services/authorize'

function App() {
  const [status,setStatus] = useState(!!getUser())

  const changeStatus = (curr)=>{
    setStatus(curr)
  }
  
  return (
    <>  
    <Nav status={status} changeStatus={changeStatus}/>
      <Routes>
        <Route path='/' element={<Home status={status}/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/login' element={<Login changeStatus={changeStatus}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
