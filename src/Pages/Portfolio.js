import bg from '../Asseets/Images/my-bg.png'
import React from "react";
import Aesthetic from '../Asseets/Images/Aesthetic.png'
import Warehouse from '../Asseets/Images/Warehouse.png'
import King from '../Asseets/Images/KingOfChittagong.png'
import Abt from '../Asseets/Images/Aboutme.jpg'
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

                        <p class="mb-4"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >I can develop react applications with firebase authentication. Want to develop any e-commerce site? I'm your guy!</p>

                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="1600"
                            data-aos-duration="1200"
                            data-aos="fade-right"
                        >HTML</span>
                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="1800"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >CSS</span>
                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="2000"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >BOOTSTRAP</span>
                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="2200"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >TAILWIND</span>
                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="2400"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >REACT</span>
                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="2600"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >NODE JS</span>
                        <span class="mr-2 font-bold text-xl" style={{ color: "#31a8ee" }}
                            data-aos-delay="2800"
                            data-aos-duration="1000"
                            data-aos="fade-right"
                        >EXPRESS JS</span>



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
            <div class="text-center mt-10 mb-10 text-3xl text-secondary">Here are the websites that I've developed in this course</div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-56'>
                <div class="card mx-auto lg:w-40 bg-base-100 shadow-xl">
                    <h1 class="text-center text-2xl"><a href="https://aesthetic-b24f5.web.app/">Aesthetic</a></h1>
                    <figure><img src={Aesthetic} alt="" /></figure>

                </div>
                <div class="card mx-auto lg:w-40 w-40 bg-base-100 shadow-xl">
                    <h1 class="text-center text-2xl"><a href="https://warehouse-5d852.web.app/">WareHouse</a></h1>
                    <figure><img src={Warehouse} alt="" /></figure>

                </div>
                <div class="card mx-auto lg:w-40 w-40 bg-base-100 shadow-xl">
                    <h1 class="text-center text-2xl"><a href="https://quizzical-austin-285b33.netlify.app/">Wedding </a></h1>
                    <figure><img src={King} alt="" /></figure>

                </div>
            </div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={Abt} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        <div class="py-6">
                            <p>I can manage website development projects from initial design through completion optimizing all cross-browser and multi-platform compatibility.</p>
                            <p>Developed websites from front to backend using Node Js, Express, React, Javascript.</p>

                        </div>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;