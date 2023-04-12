import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const NewBtn = () => {

    const {idd} = useParams(); 
    const detailsdata = useLoaderData();
    console.log(detailsdata)
    // return (
    //     <div>
    //         <h1>hello{idd}</h1>
    //     </div>
    // );
    return (
        <div className='maxw mt-20 p-24'>
            {
              detailsdata.map((data)=>{
                console.log(data.company_name)
               const  {id,company_name,Job_time_2,logo_url,Job_time_1,Salary,job_post,location,phone,email,Address,description,Educational_Requirements,Experiences,Job_Responsibility}= data;
                // const {addToAppliedList,appliedlist} = useContext(GlobalContext)
            //    let storeApplied = data.find((exits)=>exits.id===idd);
            //    console.log(storeApplied);
            console.log(idd)
                if(data.id==idd){
                    return <><h1 className='text-center text-3xl m-14'>JobDetails</h1> 
                    <div className='grid grid-cols-2 gap-24' key={data.id}>
                        <div>
                            <p><span className='text-2xl'>JobDescription</span>:{description}</p><br></br>
                            <p><span className='text-2xl'>jobResponsibilities</span>: {Job_Responsibility}</p><br></br>
                            <p><span className='text-2xl'>EducationalRequirements</span>:{Educational_Requirements}</p>
                            <p><span className='text-2xl'>Experiences</span>:{Experiences}</p>
                        </div>
                        <div className='flex flex-col gap-3 bg-violet-50 p-10 rounded-lg'>
                            <h2 className='text-2xl'>Job details</h2>
                           <div className='flex'> 
                           <p>salary:<span>{data.Salary}per-month</span></p>
                           </div>
                           <div className='flex '> 
                           <p>jobTitle:<span>{job_post}</span></p>
                           </div>
                           <h1 className='text-2xl'> Contact information</h1>
                           <div className='flex'> 
                           <p>Phone:<span>{phone}</span></p>
                           </div>
                           <div className='flex '> 
                           <p>Email:<span>{email}</span></p>
                           </div>
                           <div className='flex'> 
                           <p>Address:</p><span>Address</span>
                           </div>
                           <button className='btn mt-10'> Apply Now</button>
                        </div>
                    </div>
                    </>
                }
                })
              }  
            
        </div>
    );

};

export default NewBtn;