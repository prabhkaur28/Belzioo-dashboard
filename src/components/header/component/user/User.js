import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className="dropdown">
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                    <Link to={""} className="dropdown-item">
                        EditProfile
                    </Link>
                </li>
                <li>
                    <Link to={""} className="dropdown-item">
                        Setting
                    </Link>
                </li>
                <li>
                    <Link to={""} className="dropdown-item" >
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default User;
