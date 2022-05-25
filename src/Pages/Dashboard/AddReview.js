import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const reviewHandler = (e) => {
       e.preventDefault()
        const name = e.target.name.value; 
        const comment = e.target.comment.value; 
        console.log(name, comment);  
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
            <form onSubmit={reviewHandler}>
                <h1 class="text-3xl">Add Reviews</h1>
                <input name='name' value={user.displayName} class="input input-bordered w-full max-w-xs" />
                <input name='comment' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Comment" class="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;