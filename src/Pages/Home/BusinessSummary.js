import React from 'react';

const BusinessSummary = () => {
    return (
        <div class="px-16">
            <p className='text-center text-2xl mt-12 mb-4'>We have <span class="text-secondary">attracted</span> more than </p>
            <div class="stats stats-vertical lg:stats-horizontal shadow mb-16 w-full">

                <div class="stat text-center">
                    <div class="stat-title">Items Bought</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;