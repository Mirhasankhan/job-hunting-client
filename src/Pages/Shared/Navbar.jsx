import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaUserAlt, FaBookmark, FaFilePdf, FaQuestionCircle, FaSlidersH, FaBars, FaTimes } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [detail, setDetail] = useState(false)
    const [smDevice, setSmDevice] = useState(false)
    const handleLogout = () => {
        logOut()
            .then(() => {
                setDetail(false)
                toast.error("Logout Successfully", {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
            .catch(() => { })
    }
    return (
        <div className='relative'>
            <div>
                <div className="navbar md:px-12">
                    <div className="flex-1">
                        <Link to="/"><h1 className='font-semibold text-3xl'>Job<span className='text-sky-400'>Hunting</span></h1></Link>
                    </div>
                    <div className="md:flex hidden">
                        <ul className="menu menu-horizontal px-1 items-center font-semibold gap-5 text-xl text-sky-500">
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/jobs">View Jobs</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/employers">Employers</NavLink>

                            {
                                user?.email ? <FaUserAlt onClick={() => setDetail(!detail)} className='text-black cursor-pointer' /> : <NavLink to="/login"><button className='main-button'>Login</button></NavLink>
                            }
                        </ul>
                    </div>
                    <div className='md:hidden relative'>
                        {
                            smDevice ? <FaTimes className='text-xl' onClick={() => setSmDevice(!smDevice)} /> : <FaBars className='text-xl' onClick={() => setSmDevice(!smDevice)} />
                        }
                        {
                            smDevice && <div className="flex-none">
                                <ul className="menu absolute top-5 right-0   font-semibold py-2 px-4 text-sky-500 bg-purple-200 rounded-md">
                                    <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/myTask">MyTask </NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/addTask">AddTask </NavLink>

                                    {
                                        user?.email ? <FaUserAlt onClick={() => setDetail(!detail)} className='text-black cursor-pointer' /> : <NavLink to="/login"><button className='main-button'>Login</button></NavLink>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                {
                    detail && <div className='absolute right-5 shadow-lg p-4 z-20 bg-sky-400'>
                        <h1 className='text-xl font-bold pb-3'>{user?.email}</h1>
                        <div className="cursor-pointer my-3">
                            <NavLink to="/profile" className="flex items-center gap-3"><FaFilePdf /><h1 className='font-thin' >Profile</h1></NavLink>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaBookmark /><h1 className='font-thin' >My Jobs</h1>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer py-4">
                            <FaSlidersH /><h1 className='font-thin' >Settings</h1>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaQuestionCircle /><h1 className='font-thin' >Help Center</h1>
                        </div>
                        <div className="divider"></div>
                        <button onClick={handleLogout} className='bg-sky-500 text-white px-4 py-2 font-semibold rounded-lg'>Sign Out</button>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;