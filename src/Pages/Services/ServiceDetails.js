import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
                
    const {title} =useLoaderData();
    
   
    return (
        <div>
            <h1 className='text-3xl'>{title}</h1>
        </div>
    );
};

export default ServiceDetails;