import React from 'react';

const ExploreCategory = ({ category }) => {
    const { name, image, performance } = category;
    return (
        <div class="w-60 bg-white rounded-lg border border-gray-200 shadow-md text-center mx-auto">

            <img class="rounded-t-lg mx-auto py-3" src={image} alt="" />

            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tigh">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>
        </div>
    );
};

export default ExploreCategory;