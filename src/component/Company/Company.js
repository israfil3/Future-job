import React from 'react';

const Company = ({work}) => {
    const  {id,company_name,description,founded_year,headquarters,logo_url} = work;
    return (
        <div>
            
            <h1>length{work.length}</h1>
        </div>
    );
};

export default Company;