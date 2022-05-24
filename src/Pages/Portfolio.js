import bg from '../Asseets/Images/my-bg.png'
import React from "react";
// Import Swiper React components


const Portfolio = () => {
    return (
        <div className='px-24'>
            <div className='flex justify-between items-center'>
                <div className='w-[550px]'>
                    <div className='px-16 w-full'>
                        <h1 className='text-3xl'>Hi I'm Fahim Madani</h1>
                        <h2 className='text-4xl text-primary font-bold'>I'm a Jr Web Developer</h2>
                        <p>I can develop react applications with firebase authentication. Want to develop any e-commerce site? I'm your guy!</p>
                    </div>
                </div>
                <div className='w-[450px]'>
                    <img className='w-full' src={bg} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;