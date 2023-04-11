import React from 'react';
import './Header.css'
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className='flex justify-between px-60 py-10 items-center bg-violet-50'>
            <h1 className='text-4xl tk'>Future Job</h1>
            <div className="flex nav-tag">
                <a href="Home">Home</a>  
                <a href="Statistics">Statistics</a>
                <a href="Applied Jobs">Applied Jobs</a>
                <a href="Blog">Blog</a>
            </div>
            <button className='bt bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded text-white'>Star Applying</button>
        </div>
        </>
    );
};

export default Header;