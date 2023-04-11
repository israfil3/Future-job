import React from 'react';
import './Company.css'

const Company = ({work}) => {
    const  {id,company_name,description,Job_time_2,logo_url,Job_time_1,Salary,job_post,location}=work;
    return (
        <div className='content text-center border'>
            <img  src={logo_url} alt="" />
            <h1>{job_post}</h1>
            <p>{company_name}</p>
            <div className="">
              <button className=' p-2 rounded mt-5 border'>{Job_time_1}</button>
              <button className=' p-2 rounded mt-5 border'>{Job_time_2}</button>
            </div>
            <div className="">
                <span>{location}</span> <span>{Salary}</span>
            </div>
            <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded text-white mt-5'>View Details</button>
        </div>
    );
};

export default Company;