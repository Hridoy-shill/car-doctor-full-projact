import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 lg:flex lg:items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Service</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <Link to={'/'}>
                    <img className='w-20 h-20' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:space-x-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <button>a</button>
                <button>b</button>
                <button className='btn btn-outline btn-primary'>Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;