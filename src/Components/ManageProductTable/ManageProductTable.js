import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const ManageProductTable = ({ elem, refetch }) => {
    const handleShipped = (id) => {
        const updatedProduct = { 'shippingStatus': 'Shipped' }
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Shipping Status Updated')
                refetch()
            })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={elem?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{elem?.name}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>{elem?.email}</div>
                <div>{elem?._id}</div>
            </td>
            <td>
                <div>{elem?.price}</div>
                <div>{elem?.quantity}</div>
            </td>
            <td>
                {
                    elem?.paidStaus === 'unpaid' ? <span class="indicator-item badge bg-warning">Unpaid</span> : <span class="indicator-item badge bg-success">Paid</span>
                }
                {
                    elem?.paidStaus === 'paid' ? <span class="indicator-item badge bg-success ml-4">{elem?.shippingStatus}</span> : null
                }
            </td>
            <td>
                {
                    elem?.paidStaus === 'unpaid' ? <button className="btn btn-sm btn-warning">Cancel Order</button> : null
                }
                {
                    elem?.shippingStatus === 'pending' ? <button className="btn btn-sm btn-info" onClick={() => handleShipped(elem?._id)}>Shipped</button> : null
                }
            </td>
        </tr>
    );
};

export default ManageProductTable;