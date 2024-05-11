
import logo2 from "../../../assets/Images/logo2.png"
import { CiSearch } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
// @ts-ignore
import Navbar from "./component/navbar/Navbar";
import Placeorder from "./component/placeorder/placeorder";

function Trackorder() {
    return (
        <div className="">
            <Navbar />
            <Placeorder />
        </div>
    )
}
export default Trackorder;
