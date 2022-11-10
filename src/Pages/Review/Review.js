import React from 'react';
import { useState,useEffect } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [AllReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div>
            {
                   AllReviews.map(review=> <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
        </div>
    );
};

export default Review;