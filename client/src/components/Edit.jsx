import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../services/authorize'

function Edit() {
    const [data,setData] = useState({title:'',content:''})
    const {title,content} = data
    const {id} = useParams()
    const navigate = useNavigate()
    const token = getToken()

    const getOldData = ()=>{
        axios.get(`${import.meta.env.VITE_APP_API}/api/getOldData/${id}`,
        {headers:{authorization:`Bearer ${token}`}})
        .then((res)=>setData(res.data.data))
        .catch((err)=>console.log(err))
    }

    const inputValue = (topic)=>{
        return (e)=>setData({...data,[topic]:e.target.value})
    }

    const submitData = (e)=>{
        e.preventDefault()
        axios.put(`${import.meta.env.VITE_APP_API}/api/editItem/${id}`,data,
        {headers:{authorization:`Bearer ${token}`}})
        .then(()=>{
            Swal.fire({
                title: "อัพเดทข้อมูลสำเร็จ",
                icon: "success",
                draggable: true
              });
        })
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getOldData()
    },[])

  return (
    <div className="form-container">
        <h1 className='title'>แก้ไขรายการ</h1>
        <form onSubmit={submitData}>
            <h3>ชื่อรายการ</h3>
            <input type='text' onInput={inputValue('title')} value={title}></input>
            <h3>รายละเอียด</h3>
            <textarea onInput={inputValue('content')} value={content}></textarea>
            <button type='submit'>อัพเดทรายการ</button>
        </form>
    </div>
  )
}

export default Edit