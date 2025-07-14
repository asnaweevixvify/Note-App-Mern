import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="form-container">
        <h1 className='title'>สร้างบัญชี</h1>
        <form>
            <h3>username</h3>
            <input type='text'></input>
            <h3>password</h3>
            <input type='text'></input>
            <h3>confirm password</h3>
            <input type='text'></input>
            <button>สร้างบัญชี</button>
        </form>
        <p>มีบัญชีอยู่แล้ว? <Link to='/login'>เข้าสู่ระบบ</Link></p>
    </div>
  )
}

export default Register