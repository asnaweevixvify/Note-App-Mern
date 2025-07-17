import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userData,setUserData] = useState({username:'',password:''})
  const [correct,setCorrect] = useState('blank')
  const [status,setStatus] = useState(true)
  const navigate = useNavigate()

  const {username,password} = userData

  const inputValue = (topic)=>{
    return (e)=>setUserData({...userData,[topic]:e.target.value})
  }

  const confirmPassword = (e)=>{
    if(e.target.value === password){
      setCorrect(true)
    }
    else if(!e.target.value){
      setCorrect('blank')
    }
    else{
      setCorrect(false)
    }
  }

  const sendUserData = (e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_APP_API}/api/createUser`,userData)
        .then((res)=>{
            Swal.fire({
                title: res.data.msg,
                icon: "success",
                draggable: true
              });
        })
        .then(()=>navigate('/login'))
        .catch((err)=>{
          Swal.fire({
            icon: "error",
            title: err.response.data.error,
          });
        })
  }

  useEffect(()=>{
    if(username && password && correct===true && correct!=='blank'){
      setStatus(false)
    }
    return
  },[username,password,correct])

  return (
    <div className="form-container">
        <h1 className='title'>สร้างบัญชี</h1>
        <form onSubmit={sendUserData}>
            <h3>username</h3>
            <input type='text' onInput={inputValue('username')}></input>
            <h3>password</h3>
            <input type='text' onInput={inputValue('password')}></input>
            <h3>confirm password</h3>
            <input type='text' onInput={confirmPassword}></input>
            {!correct && <p className='confirmPass'>รหัสผ่านไม่ตรงกัน</p>}
            <button type='submit' disabled={status}>สร้างบัญชี</button>
        </form>
        <p>มีบัญชีอยู่แล้ว? <Link to='/login'>เข้าสู่ระบบ</Link></p>
    </div>
  )
}

export default Register