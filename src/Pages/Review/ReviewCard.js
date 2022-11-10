import React from 'react';
import {FaUser} from 'react-icons/fa'

const ReviewCard = ({review}) => {
    const{reviews}=review

    return (
        <div>
            <div className="alert alert-error shadow-lg mb-4">
                <div>
                <FaUser className='h-10 w-10'></FaUser><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <span>{reviews}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;