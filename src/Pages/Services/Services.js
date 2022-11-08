import React, { useEffect, useState } from 'react';

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
            <div>
                <h1>services:{services.length}</h1>
                {
                    
                }
            </div>
        </div>

    );
};

export default Services;