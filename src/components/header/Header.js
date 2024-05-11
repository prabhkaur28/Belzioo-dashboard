import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
// import { FaUserCircle } from "react-icons/fa";
// import profile from "../../assets/Images/profile.png";
import { Link } from "react-router-dom";
import { useState } from "react";
// import LoginBtn from "./component/loginbtn/LoginBtn";
import User from "./component/user/User";
import Login from "../../pages/screen/auth/components/login/Login";

const Header = () => {
    const [isLoggined, setIsLoggined] = useState(false);
    const handleLogginChange = () => {
        setIsLoggined(isLoggined);
    }
    return (
        <header className="py-4 d-flex gap-4 align-items-center">
            <div className="menu d-flex gap-4 bg-light">
                <div className="dropdown">
                    <button className="btn btn-light m-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                        All Categories
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><Link className="dropdown-item" to="/">Action</Link></li>
                        <li><Link className="dropdown-item" to="/">Action</Link></li>
                        <li><Link className="dropdown-item" to="/">Action</Link></li>
                    </ul>
                </div>
                <input className="from-control bg-light border-0" type="search" placeholder="Search" />
                <id className=" fs-5 me-3 pt-2 "><CiSearch /></id>
            </div>
            <div className="d-flex gap-4 align-items-center">
                <Link to={"/"}><IoNotificationsOutline className="fs-4  text-dark" /></Link>
                <Link to={"/"}><FaRegHeart className="fs-4  ms-2 text-dark" /></Link>
                <div className=" d-flex">
                    <div className=" d-flex flex-column align-items-center">
                        <Link to={"/"}><BiShoppingBag className="fs-4  ms-2 text-dark text-decoration-none" /></Link>
                        <span className="dot  rounded-circle  bg-danger"></span>
                    </div>
                    <span className="pt-1">1</span>
                </div>
                <div className="profile" onClick={handleLogginChange}>
                    <Link to={"/auth/Login"} className="btn bg-primary m-2 border text-light " type="button" >
                        Log in
                    </Link>
                    {
                    isLoggined ?
                        <Login />
                        :
                        <User />
                }
                </div>
               
            </div>
        </header>
    )
}
export default Header;