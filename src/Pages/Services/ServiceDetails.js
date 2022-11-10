import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../Review/AddReview';
import Review from '../Review/Review';

const ServiceDetails = () => {

    const { title, img, discription } = useLoaderData();


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="w-1/2 h-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h2 className="py-6 text-lg ">{discription}</h2>

                    </div>
                </div>

            </div>
            <p className='text-6xl font-bold text-red-700 mt-5 mb-5 text-center'>Reviews</p>
            <div className='text-center'>
                <AddReview></AddReview>
                <Review></Review>
            </div>
        </div>

    );
};

export default ServiceDetails;