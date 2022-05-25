import React from 'react';

const Table = ({order, index, deleteHandler}) => {
    const {name, product, email, _id } = order; 
    // const deleteHandler = (id) => {
    //     fetch(`http://localhost:5000/order/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log())
    // }
    
    return (
        
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{product}</td>
                <td>{email}</td>
                <td><button onClick={()=>deleteHandler(_id)}>Cancel</button></td>
                <td><button>Payment</button></td>
            </tr>
        

    );
};

export default Table;