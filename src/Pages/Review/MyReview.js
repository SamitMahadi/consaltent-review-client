import React, { useEffect, useState } from 'react';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const [MyReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    return (
        <div>
            {
                   MyReviews.map(review=> <MyReviewCard
                    key={review._id}
                    review={review}
                    ></MyReviewCard>)
                }
        </div>
    );
};

export default MyReview;