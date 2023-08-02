import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import load from '../assets/loadings.json'

const MainLayout = () => {
    const {loading} = useContext(AuthContext)
    return ( loading ? <div className="flex justify-center items-center"><Lottie style={{ height: '400px', width: '600px'}}  animationData={load} loop={true} /></div> : 
        <div>
            <Navbar/>
            <Outlet></Outlet>
            footer
        </div>
    );
};

export default MainLayout;