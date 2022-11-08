import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

    const menuItems = <>
        <Link className='text-black decoration-none text-xl font-semibold px-5' to='/'>Home</Link>
        <Link className='text-black decoration-none text-xl font-semibold px-5' to='/'>Services</Link>
        <Link className='text-black decoration-none text-xl font-semibold px-5' to='/'>Blog</Link>
    </>

    const { user } = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <h1 className='text-xl mr-4'>{user?.displayName}</h1>
                <p className="">{user?.photoURL?
                 
                                     <img className='rounded-full h-14 w-14' src={user?.photoURL} alt="" />  :
                                     <FaUser></FaUser>                    
                                }
                
                </p>

            </div>

        </div>
    );
};

export default Header;