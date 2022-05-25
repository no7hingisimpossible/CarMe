import bg from '../Asseets/Images/my-bg.png'
import React from "react";
import Aesthetic from '../Asseets/Images/Aesthetic.png'
import Warehouse from '../Asseets/Images/Warehouse.png'
import King from '../Asseets/Images/KingOfChittagong.png'
// Import Swiper React components


const Portfolio = () => {
    return (
        <div className='px-24 py-12'>
            <div className='flex lg:justify-between lg:flex-row flex-col-reverse items-center'>
                <div className='w-[550px]'>
                    <div className='px-16 w-full'>
                        <h1
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                            className='text-3xl'>Hi I'm Fahim Madani</h1>
                        <h2
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                            className='text-4xl text-primary font-bold'>I'm a Jr Web Developer</h2>
                        <p
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >I can develop react applications with firebase authentication. Want to develop any e-commerce site? I'm your guy!</p>
                    </div>
                </div>
                <div className='w-[450px]'>
                    <img
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos="fade-down-left"
                        className='w-full' src={bg} alt="" />
                </div>
            </div>
            <div class="text-center mt-10 mb-10 text-2xl text-secondary">Here are the websites I've developed</div>
            <div className='grid grid-cols-3 px-56 '>
                <div class="card w-40 bg-base-100 shadow-xl">
                    <figure><img src={Aesthetic} alt="Shoes" /></figure>
                    
                </div>
                <div class="card w-40 bg-base-100 shadow-xl">
                    <figure><img src={Warehouse} alt="Shoes" /></figure>
                    
                </div>
                <div class="card w-40 bg-base-100 shadow-xl">
                    <figure><img src={King} alt="Shoes" /></figure>
                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;