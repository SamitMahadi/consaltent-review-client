import React from 'react';
import { useState,useEffect } from 'react';
import useTitle from '../../Hooks/useTitle';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [AllReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://consaltent-review-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    useTitle('Review')
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