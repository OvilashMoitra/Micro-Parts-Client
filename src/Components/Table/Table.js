import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeletedModal from '../DeletedModal/DeletedModal';

const Table = ({ elem, refetch }) => {
    const [id, setId] = useState('')
    const [openModal, setOpenModal] = useState(false)
    // Delete Product
    const handleDelete = () => {
        setOpenModal(true)
        setId(elem?._id)
    }
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
                    <label onClick={handleDelete} for="deletedmodal" class="btn btn-sm ml-5 modal-button btn-error">Cancel</label>
                </> : <><span className="indicator-item bg-green-800 badge">Paid</span> <span >{elem?.shippingStatus === 'pending' ? <span className="indicator-item bg-yellow-400 badge">Pending</span> : <span className="indicator-item bg-green-800 badge">Shipped</span>}</span>
                </>}
                {
                    openModal ? <DeletedModal setOpenModal={setOpenModal} id={id} refetch={refetch}></DeletedModal> : null
                }
            </td>
        </tr>
    );
};

export default Table;