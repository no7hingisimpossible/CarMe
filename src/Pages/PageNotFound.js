import React from 'react';


const PageNotFound = () => {
    return (
        <div className=''>
            <div className=' text-center mx-auto w-25'>
                <h1 className='error-msg mx-auto text-5xl font-bold'>404</h1>
                <h3>Not Found</h3>
                <p>The resource requested could not be found on the server</p>
            </div>
        </div>
    );
};

export default PageNotFound;