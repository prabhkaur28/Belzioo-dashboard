import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";

const MainRoute = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="d-flex flex-column main">
                <Header />
                <Outlet/>
            </div>
        </div>
    )
}
export default MainRoute;
