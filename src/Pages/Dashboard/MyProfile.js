import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form'
import { auth } from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name?.value
        const email = e.target.email?.value
        const edu = e.target.edu.value
        const dist = e.target.dist.value
        const phone = e.target.phone.value
        console.log(name, email,edu, dist, phone);
        const profile = {
            name: name,
            email: email,
            edu: edu,
            dist: dist, 
            phone: phone
        }
        const url = `http://localhost:5000/profile`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            
    }
    
    return (
        <div>
            <div class="hero bg-base-200">
                <div class="border w-full">
                    
                    <div class="  w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div class="card-body">
                                <div class="form-control">
                                    
                                    <input type="text" name='name' value={user?.displayName} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    
                                    <input type="text" name='email' value={user?.email} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    
                                    <input type="text" name='phone' placeholder='phone...' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    
                                    <input type="text" name='edu' placeholder='education...' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    
                                    <input type="text" name='dist'placeholder='district...' class="input input-bordered" />
                                </div>

                                <div class="form-control mt-6">
                                    <input type='submit' value='submit' class="btn btn-primary mb-1"/>
                                    
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;