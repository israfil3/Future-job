import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';

const Loder = () => {
    const [job,setJob] = useState([]);
    useEffect(()=>{
        fetch(`data.json`)
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <h1>hello bd</h1>
            {
                job.map((work)=>console.log(work))
            }
        </div>
    );
};

export default Loder;
{/* <Company key={work.id} work={work}></Company> */}