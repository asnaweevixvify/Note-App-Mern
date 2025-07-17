import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../services/authorize'
import Swal from 'sweetalert2'
import alert from '../../services/confirmLogout'

function Nav({changeStatus,status}) {
  const removeToken = ()=>{
    Swal.fire(alert).then((result) => {
      if (result.isConfirmed) {
        logout()
      }
      Swal.fire({
        title: "ออกจากระบบสำเร็จ",
        icon: "success"
      });
      changeStatus(false)
    });
  }

  return (
    <div className="nav-container">
        <ul>
            <Link to='/'><li>หน้าหลัก</li></Link>
            <Link to='/form'><li>เพิ่มรายการ</li></Link>
            {!status && <Link to='/login'><li>เข้าสู่ระบบ</li></Link>}
            {status && <li onClick={removeToken}>ออกจากระบบ</li>}
        </ul>
    </div>
  )
}

export default Nav