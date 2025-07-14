import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-container">
        <ul>
            <Link to='/'><li>หน้าหลัก</li></Link>
            <Link to='/form'><li>เพิ่มรายการ</li></Link>
            <Link to='/login'><li>เข้าสู่ระบบ</li></Link>
        </ul>
    </div>
  )
}

export default Nav