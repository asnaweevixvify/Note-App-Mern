import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getToken,getId } from '../../services/authorize'
import { useLocation } from 'react-router-dom'

function Form() {
    const [data,setData] = useState({title:'',content:'',userId:getId()})
    const navigate = useNavigate()
    const location = useLocation()
    const token = getToken()

    const inputValue = (topic)=>{
        return (e)=>setData({...data,[topic]:e.target.value})
    }

    const submitData = (e)=>{
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_APP_API}/api/create`,data,
        {headers:{authorization:`Bearer ${token}`}})
        .then(()=>{
            Swal.fire({
                title: "บันทึกข้อมูลสำเร็จ",
                icon: "success",
                draggable: true
              });
        })
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        if(location.pathname === '/form' && !getToken()){
            navigate('/login')
        }
    },[location])

  return (
    <div className="form-container">
        <h1 className='title'>บันทึกรายการ</h1>
        <form onSubmit={submitData}>
            <h3>ชื่อรายการ</h3>
            <input type='text' onInput={inputValue('title')}></input>
            <h3>รายละเอียด</h3>
            <textarea onInput={inputValue('content')}></textarea>
            <button type='submit'>บันทึกรายการ</button>
        </form>
    </div>
  )
}

export default Form