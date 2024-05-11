import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
  return (
    <div className="profile">
    <Link to= {"/auth/Login"} className="btn bg-primary m-2 border text-light " type="button" >
        Log in
    </Link>
</div>
  )
}

export default LoginBtn
