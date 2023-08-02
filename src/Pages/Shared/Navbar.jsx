import { Link } from 'react-router-dom';
import job from '../../assets/job2.webp'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserAlt, FaBookmark, FaFilePdf, FaQuestionCircle, FaSlidersH } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [detail, setDetail] = useState(false)
    const handleLogout = ()=>{
        logOut()
        .then(() =>{
            setDetail(false)
            toast.error("Logout Successfully", {
                position: 'top-right',
                style: { backgroundColor: 'black', color: 'white' }
            })
        })
        .catch(()=>{})
    }
    return (
        <div className='relative'>
            <div className="navbar border-b md:px-12">
                <div className="flex-1">
                    <img className='h-12 md:h-16' src={job} alt="" />
                    <h1 className='font-semibold text-2xl'>Job<span className='text-sky-400'>Hunt</span></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center font-semibold gap-3 text-xl text-sky-500">
                        <Link to="/">Home</Link>
                        <Link to="/jobs">View Jobs</Link>
                        <Link to="/about">About</Link>
                        <Link to="/employers">Employers</Link>
                        {
                            user?.email ? <FaUserAlt onClick={() => setDetail(!detail)} className='text-black cursor-pointer' /> : <Link to="/login"><button className='btn btn-warning'>Login</button></Link>
                        }
                    </ul>
                </div>
            </div>
            {
                detail && <div className='absolute right-0 shadow-lg p-4 z-20'>
                    <h1 className='text-xl font-bold pb-3'>{user?.email}</h1>
                    <div className="cursor-pointer my-3">
                        <Link to="/profile" className="flex items-center gap-3"><FaFilePdf /><h1 className='font-thin' >Profile</h1></Link>
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
                </div>
            }
        </div>
    );
};

export default Navbar;