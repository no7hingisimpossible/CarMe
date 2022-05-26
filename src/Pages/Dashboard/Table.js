import React from 'react';

const Table = ({order, index, deleteHandler}) => {
    const {name, product, email, _id } = order; 
    // const deleteHandler = (id) => {
    //     fetch(`https://quiet-tor-30085.herokuapp.com/order/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log())
    // }
    
    return (
        
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{product}</td>
                <td>{email}</td>
                <td><button class="btn btn-sm bg-red-500 border-0 text-white" onClick={()=>deleteHandler(_id)}>Cancel</button></td>
                <td><button class="btn btn-sm bg-green-600 border-0 text-white">Payment</button></td>
            </tr>
        

    );
};

export default Table;