import React, { useEffect, useState } from 'react';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <p className='text-6xl font-bold text-red-700 mt-5 mb-5 text-center'>Services</p>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mb-6'>
                
                {
                   services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;