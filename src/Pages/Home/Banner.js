import React from 'react';
import banner1 from '../../Asseets/Images/banner-1.webp'
import banner2 from '../../Asseets/Images/banner-2.webp'
import banner3 from '../../Asseets/Images/banner-3.webp'

const Banner = () => {
    return (
        <div class="grid grid-cols-3 gap-5 px-16 mt-16">
            <div class="bg-base-100 shadow-xl" style={{ backgroundImage: `url(${banner1})` }}>
                <div class="card-body">
                    <div class="flex justify-end">
                        <div>
                            <p class="text-white text-xl text-right">Super Sale</p>
                            <p class="text-4xl font-bold text-white text-right">Wheels <br />Collection</p>
                        </div>

                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-error">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="bg-base-100 shadow-xl" style={{ backgroundImage: `url(${banner2})` }}>
                <div class="card-body">
                    <div class="w-full flex justify-end">
                        <div>
                            <p class="text-black text-xl text-right">New</p>
                            <p class="text-4xl font-bold text-black text-right">Wheels <br />Suspension</p>
                        </div>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-error">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="bg-base-100 shadow-xl" style={{ backgroundImage: `url(${banner3})` }}>
                <div class="card-body">
                    <div class="w-full flex justify-end">
                        <div>
                            <p class="text-white text-xl text-right">Super Sale</p>
                            <p class="text-4xl font-bold  text-white text-right">Safety <br />Collection</p>
                        </div>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-error">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;