import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function Home() {
    const [data,setData] = useState([])

    const getData = ()=>{
        axios.get(`${import.meta.env.VITE_APP_API}/api/getData`)
        .then((res)=>setData(res.data.data))
        .catch((err)=>console.log(err))
    }

    const confirmDelete = (id)=>{
        Swal.fire({
            title: "ต้องการลบข้อมูลหรือไม่?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ลบข้อมูล",
            cancelButtonText:'ยกเลิก'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteNote(id)
            }
          });
    }

    const deleteNote = (id)=>{
        axios.delete(`${import.meta.env.VITE_APP_API}/api/deleteItem/${id}`)
       .then(()=>{
            Swal.fire({
                title: "ลบข้อมูลสำเร็จ",
                icon: "success"
            });
        getData()
       })
       .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className="home-container">
        <h1 className='title'>Note-App-Mernstack</h1>
        <div className="note-container">
            {data.map((e,index)=>{
                return(
                    <div className="note-box" key={index}>
                        <h2>{e.title}</h2>
                        {e.content}
                        <div className="icon">
                            <Link to={`/edit/${e._id}`}><i className="fa-solid fa-pen fa-1x"></i></Link>
                            <i className="fa-solid fa-trash fa-1x" 
                                onClick={()=>confirmDelete(e._id)}>
                            </i>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home