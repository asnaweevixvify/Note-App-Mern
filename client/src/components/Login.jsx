import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authenticate } from '../../services/authorize'
import { useLocation } from 'react-router-dom'
import { getToken} from '../../services/authorize'

function Login({changeStatus}) {
  const [userData,setUserData] = useState({})
  const {username,password} = userData
  const navigate = useNavigate()
  const location = useLocation()

  const inputvalue = (topic)=>{
    return (e)=> setUserData({...userData,[topic]:e.target.value})
  }

  const sendUserData = (e)=>{
    e.preventDefault()
    axios.get(`${import.meta.env.VITE_APP_API}/api/login`,{
      params:{username,password}
    })
    .then((res)=>{
        Swal.fire({
          title: res.data.msg,
          icon: "success"
      });
        navigate('/')
        authenticate(res)
        changeStatus(true)
    })
    .catch((err)=>{
      Swal.fire({
        icon: "error",
        title: err.response.data.msg,
      });
    })
}
  useEffect(()=>{
    if(location.pathname === '/login' && getToken()){
      navigate('/')
    }
  },[location])

  return (
    <div className="form-container">
        <h1 className='title'>เข้าสู่ระบบ</h1>
        <form onSubmit={sendUserData}>
            <h3>username</h3>
            <input type='text' onInput={inputvalue('username')}></input>
            <h3>password</h3>
            <input type='text' onInput={inputvalue('password')}></input>
            <button>เข้าสู่ระบบ</button>
        </form>
        <p>ยังไม่มีบัญชี? <Link to='/register'>สร้างบัญชี</Link></p>
    </div>
  )
}

export default Login