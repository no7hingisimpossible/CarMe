import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const reviewHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        
        const review = {
            name: name,
            comment: comment
        }
        
        const url = "http://localhost:5000/review"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div class="grid grid-cols-1 gap-3">
            
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold">Your Reviews Matter To Us</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <form onSubmit={reviewHandler}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Reviews</span>
                                        </label>
                                        <input type="text" name='comment' placeholder="review" class="input input-bordered" />
                                        
                                    </div>
                                    
                                    <div class="form-control mt-6">
                                        <input type="submit" value="Comment" class="btn btn-primary"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default AddReview;