import React from 'react';

const ManageRow = ({ product, deleteHandler }) => {
    const {name, _id} = product
    return (
        <tr>
            <th>{}</th>
            {/* <td>{name}</td> */}
            <td>{name}</td>

            <td><button class="btn btn-sm bg-red-500 border-0 text-white" onClick={() => deleteHandler(_id)}>Cancel</button></td>

        </tr>
    );
};

export default ManageRow;