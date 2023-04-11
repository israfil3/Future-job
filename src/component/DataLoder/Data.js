import React, { useEffect, useState } from 'react';

const Data = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            {

            }
        </div>
    );
};

export default Data;