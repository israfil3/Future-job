import Company from '../Company/Company';

const Loder = ({loderData}) => {
    return (
       <>
       <div className="text-center my-20">
            <h1 className='text-2xl'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
         <div className='grid grid-cols-2 m-20 px-32 mx-auto gap-8'>
            {
                loderData.map((work)=><Company key={work.id} work={work}></Company> )
            }
        </div>
       </>
    );
};

export default Loder;