import React, { useState } from 'react';
import ProductDeletedModal from '../ProductDeletedModal/ProductDeletedModal';

const ManageProductTable = ({ elem, refetch }) => {
    const [openModal, setOpenModal] = useState(false)
    const [id, setId] = useState('')
    const handleDelete = () => {
        setOpenModal(true)
        setId(elem?._id)
    }
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
                {elem?.stock}
            </td>
            <td>{elem?.price}$</td>
            <td>
                <label onClick={handleDelete} htmlFor="productdeletedmodal" className="btn modal-button btn-error">Cancel Product</label>
            </td>
            {
                openModal ? <ProductDeletedModal setOpenModal={setOpenModal} id={id} refetch={refetch}></ProductDeletedModal> : null
            }
        </tr>
    );
};

export default ManageProductTable;