import React from 'react';

const Table = ({order, index}) => {
    const {name, product, email } = order; 
    return (
        
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{product}</td>
                <td>{email}</td>
                <td><button>Cancel</button></td>
                <td><button>Payment</button></td>
            </tr>
        

    );
};

export default Table;