import React from 'react';
import ManageProductTable from '../../Components/Table/ManageProductTable';
import useProducts from '../../Hooks/useProducts';

const ManageProduct = () => {
    const { data, isLoading, refetch } = useProducts();
    if (isLoading) {
        return
    }
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Instock</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(elem => <ManageProductTable
                            key={elem._id}
                            elem={elem}
                            refetch={refetch}
                        ></ManageProductTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;