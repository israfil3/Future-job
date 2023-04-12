import React, { useState } from 'react';
import logo from '../../P3OLGJ1 copy 1.png'
import './hero.css'
import Job from '../JobNow/Job';
import { useLoaderData } from 'react-router-dom';
const Hero = () => {
    const loderData = useLoaderData();
    return (
        <>
        <div className="">
            <div className='flex justify-center items-center bg-violet-50 gap-10'>
                <div className="hero-area">
                    <h1 className='text-3xl'>One Step</h1>
                    <h2 className='text-3xl my-3'>Closer To Your</h2>
                    <h3 className='text-3xl'> Dream Job</h3>
                    <p className='mt-5'>Explore thousands of job opportunities with all the information you need.<br></br> Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded text-white mt-5'>Get Started</button>
                </div>
            <img className='w-1/4' src={logo} alt="" /> 
            </div>
        </div>
            <div className="">
                <Job loderData={loderData}></Job>
            </div>
        </>
    );
};

export default Hero;