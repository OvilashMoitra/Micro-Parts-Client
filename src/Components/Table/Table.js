import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ elem }) => {
    console.log(elem)
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={elem?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{elem?.name}</div>
                        {
                            elem?.transitionID ? <div className="font-bold text-lime-500">transitionID: {elem?.transitionID}</div> : null
                        }
                    </div>
                </div>
            </td>
            <td>
                {elem?.quantity}
            </td>
            <td>{elem?.price * elem?.quantity}$</td>
            <td>
                {elem.paidStaus === 'unpaid' ? <><Link to={`/payment/${elem?._id}`}><button className="btn btn-warning btn-xs">Pay Now</button></Link>
                    <button className=" ml-2 btn btn-error btn-xs">Cancel</button>
                </> : <span className="indicator-item badge">Paid</span>}
            </td>
        </tr>
    );
};

export default Table;