import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import load from '../assets/loadings.json'
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    return (loading ? <div className="flex justify-center items-center"><Lottie style={{ height: '400px', width: '600px' }} animationData={load} loop={true} /></div> :
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;