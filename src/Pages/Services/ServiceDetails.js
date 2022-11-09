import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const { title, img, discription } = useLoaderData();


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="w-1/2 h-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <h2 className="py-6 text-lg ">{discription}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;