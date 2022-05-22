import React from 'react';

const BusinessSummary = () => {
    return (
        <div class="px-16">
            <div class="stats stats-vertical lg:stats-horizontal shadow mt-16 mb-24 w-full">

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