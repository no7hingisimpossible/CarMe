import React from 'react';
import people1 from '../../Asseets/Images/people1.png'

const Review = ({ review }) => {
    const { name, reviews } = review;
    return (
        <div className="card w-96 shadow text-primary-content mx-auto ">
            <div className="card-body">
                <p className='mb-5'>{reviews}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={people1} alt=""/>
                        </div>
                    </div>
                    <div className='ml-3'>
                        <h2 className="card-title">{name}</h2>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;