import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="form-container">
        <h1 className='title'>เข้าสู่ระบบ</h1>
        <form>
            <h3>username</h3>
            <input type='text'></input>
            <h3>password</h3>
            <input type='text'></input>
            <button>เข้าสู่ระบบ</button>
        </form>
        <p>ยังไม่มีบัญชี? <Link to='/register'>สร้างบัญชี</Link></p>
    </div>
  )
}

export default Login