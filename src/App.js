import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from './pages/route/mainroute/MainRoute';
import Trackorder from './pages/screen/trackorder/Trackorder';
import Mainpage from './pages/screen/mainpage/Mainpage';
import AuthRoute from './pages/route/authroute/AuthRoute';
// import EditProfile from './pages/screen/auth/components/Editprofile/EditProfile';
import Login from './pages/screen/auth/components/login/Login';
import Register from './pages/screen/auth/components/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/track-order" element={<Trackorder />} />
        </Route>   
        <Route path="/auth" element={<AuthRoute />}>
          {/* <Route path="/auth/edit-profile" element={<EditProfile />} /> */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}
export default App;

