import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DeletedModal = ({ setOpenModal, id, refetch }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setOpenModal(false)
        if (e.target[0].value === 'Delete') {
            fetch(`http://localhost:5000/cartedItem/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success('Product Deleted')
                })
        }
    }

    return (
        <div>
            <input type="checkbox" id="deletedmodal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="deletedmodal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-error">You really want to delete the Product?</h3>
                    <p class="py-4">Write <span className='text-red-900'>Delete</span> to Delete</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='input input-bordered' name="confirmation" id="" placeholder='Write Delete here otherwise cancel' required /><br />
                        <button type="submit" className=' btn btn-sm mt-4 bg-red-900'>Delete</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeletedModal;