import React, { useEffect, useState } from 'react';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://consaltent-review-server.vercel.app/services')
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
                   services.slice(0,3).map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
            <button className="btn btn-wide btn-error btn-outline"><Link to='/services'>See All</Link></button>
            </div>
        </div>

    );
};

export default Services;