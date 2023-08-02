import { Link } from 'react-router-dom';
import job from '../../assets/job2.webp'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className=''> 
            <div className="navbar bg-red-400 md:px-12">
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
                        <Link to="/login"><button className='btn btn-warning'>Login</button></Link>                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;