import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const [MyReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch('https://consaltent-review-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    useTitle('MyReview')
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