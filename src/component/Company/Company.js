import React from 'react';
import './Company.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocation,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Company = ({work}) => {
    const  {id,company_name,description,Job_time_2,logo_url,Job_time_1,Salary,job_post,location}=work;
    return (
        <div className='content text-center border rounded'>
            <img  src={logo_url} alt="" />
            <h1 className='text-2xl'>{job_post}</h1>
            <p className='my-2'>{company_name}</p>
            <div className="">
              <button className=' p-2 rounded mt-5 border m-5'>{Job_time_1}</button>
              <button className=' p-2 rounded mt-5 border'>{Job_time_2}</button>
            </div>
            <div className="grid grid-cols-2 px-20">
                <p><span className="m-4"><FontAwesomeIcon icon={faLocation } /></span>{location}</p>
                <p><span className="m-4"><FontAwesomeIcon icon={faMoneyBill} /></span>{Salary}</p>
            </div>
            <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded text-white mt-5'><Link>View Details</Link></button>
        </div>
    );
};

export default Company;