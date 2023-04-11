import React from 'react';
import img1 from '../../accounts 1.png';
import img2 from '../../business 1.png'
import img3 from '../../chip 1.png'
import img4 from '../../social-media 1.png'
import Loder from '../LodeData/Loder';

const Job = () => {
    return (
        <>
        <div className='mt-10'>
            <div className="text-center">
                <h1 className='text-2xl'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex justify-center mt-10 gap-20">
                <div className="bg-violet-50 p-6 rounded">
                    <img src={img1} alt="" />
                    <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-violet-50 p-6 rounded">
                    <img src={img2} alt="" />
                    <h1>Marketing & Sales</h1>
                    <p>200 Jobs Available</p>
                </div>
                <div className="bg-violet-50 p-6 rounded">
                    <img src={img3} alt="" />
                    <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-violet-50 p-6 rounded">
                    <img src={img4} alt="" />
                    <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
        <Loder></Loder>
        </>
    );
};

export default Job;