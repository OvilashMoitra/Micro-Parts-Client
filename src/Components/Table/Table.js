import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ elem }) => {
    console.log(elem)
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={elem?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{elem?.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {elem?.quantity}
            </td>
            <td>{elem?.price * elem?.quantity}$</td>
            <td>
                {elem.paidStaus === 'unpaid' ? <><Link to={`/payment/${elem?._id}`}><button class="btn btn-warning btn-xs">Pay Now</button></Link>
                    <button class=" ml-2 btn btn-error btn-xs">Cancel</button>
                </> : <span class="indicator-item badge">Paid</span>}
            </td>
        </tr>
    );
};

export default Table;