import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from '../../useHooks';

const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, UpdatingError] = useUpdateProfile(auth);

    const [token] = useToken(user || guser)
    

    const navigate = useNavigate()

    if (token) {
        
        navigate('/');

    }
    if (loading || gloading || updating) {
        return <Loading />
    }
    let signInError
    if (error || gerror || UpdatingError) {
        signInError = <p className='text-red-500'>{error?.message || gerror?.message} || {UpdatingError?.message}</p>
    }

    const onSubmit = async data => {
        console.log(data.email, data.password)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log("update done");
    }
    
    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className=" card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>

                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required"

                                        }
                                    })}
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === "required" && <span className="label-text-alt text-red-500"> {errors.name?.message}</span>}



                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>

                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"

                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                    type="email"
                                    placeholder="Your email"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === "required" && <span className="label-text-alt text-red-500"> {errors.email.message}</span>}
                                    {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500"> {errors.email.message}</span>}


                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>

                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required"

                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password?.type === "required" && <span className="label-text-alt text-red-500"> {errors.password.message}</span>}
                                    {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500"> {errors.password.message}</span>}


                                </label>
                            </div>
                            {signInError}
                            <input className='btn w-full btn-primary' type="submit" />
                        </form>
                        <p className='text-center'><small>Already have an account? <Link className='text-primary' to='/login'>Please Login</Link></small></p>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>
                            <div className="grid h-20 place-items-center">
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn w-full btn-accent">Google Signin</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Signup;