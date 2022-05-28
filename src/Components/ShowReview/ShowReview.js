import React from 'react';

const ShowReview = ({ elem }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl carousel-item">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={elem?.img} alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{elem?.name}</h2>
                    <p className='font-bold'>{elem?.email}</p>
                    <p className='font-bold text-yellow-600'>{elem?.review.length > 106 ? elem?.review.slice(0, 106) + '...' : elem?.review}</p>
                    <p className='font-bold'>Ratings {elem?.star}/5</p>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;