import React, { useEffect, useState } from 'react';

import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const AllServices = () => {
    const [AllServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        

        <div>
             <p className='text-6xl font-bold text-red-700 mt-5 mb-5 text-center'>Services</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mb-6'>
                
                {
                   AllServices.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;