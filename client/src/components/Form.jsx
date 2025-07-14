import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Form() {
    const [data,setData] = useState({title:'',content:''})
    const {title,content} = data

    const inputValue = (topic)=>{
        return (e)=>setData({...data,[topic]:e.target.value})
    }

    const submitData = (e)=>{
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_APP_API}/api/create`,data)
        .then((res)=>console.log(res.data.msg))
        .catch((err)=>console.log(err))
    }

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