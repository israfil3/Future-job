import React from 'react';
import './Header.css'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className='flex justify-between px-60 py-10 items-center bg-violet-50'>
            <h1 className='text-4xl tk'>Future Job</h1>
            <div className="flex nav-tag">
                <Link to="/">Home</Link>  
                <Link to="/Applied Jobs">Applied Jobs</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Statistics">Statistics</Link>
            </div>
            <button className='bt bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded text-white'>Star Applying</button>
        </div>
        </>
    );
};

export default Header;