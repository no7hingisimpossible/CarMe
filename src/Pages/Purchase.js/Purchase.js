import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
    return (
        <div>
            this is purchase {id}
        </div>
    );
};

export default Purchase;