import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl px-16'>Our Testimonials</h1>
            <p className='mb-8 px-16'>See what our customers say</p>
            <div className='grid grid-cols-3 mb-16'>
            {
                reviews.map(review => 
                <Review key={review.id} review={review}>

                </Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;