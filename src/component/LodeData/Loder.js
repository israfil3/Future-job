import { Link } from 'react-router-dom';
import Company from '../Company/Company';
import { useState } from 'react';

const Loder = ({loderData}) => {
    let[seeMore, setSeeMore] = useState(false);
    let SeeMoreData= () =>{
      setSeeMore(true);
    }
    return (
       <>
       <div className="text-center my-20">
            <h1 className='text-2xl'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
         <div className='grid grid-cols-2 m-20 px-32 mx-auto gap-8'>
            {
                loderData.slice(0,seeMore?6:4).map((work)=><Company key={work.id} work={work}></Company> )
            }
          {
            !seeMore && (
                <Link onClick={SeeMoreData} className='bg-green-200 p-3 rounded w-1/2'>So Details</Link>
            )
          }
        </div>
       </>
    );
};

export default Loder;