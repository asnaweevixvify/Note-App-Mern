import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {
    const [data,setData] = useState([])

    const getData = ()=>{
        axios.get(`${import.meta.env.VITE_APP_API}/api/getData`)
        .then((res)=>setData(res.data.data))
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
                            <i className="fa-solid fa-pen fa-1x"></i>
                            <i className="fa-solid fa-trash fa-1x"></i>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home