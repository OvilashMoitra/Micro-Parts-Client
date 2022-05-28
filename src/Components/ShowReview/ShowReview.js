import React from 'react';

const ShowReview = ({ elem }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl carousel-item">
                <figure class="px-10 pt-10">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={elem?.img} alt='' />
                        </div>
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{elem?.name}</h2>
                    <p className='font-bold'>{elem?.email}</p>
                    <p className='font-bold text-yellow-600'>{elem?.review.length > 106 ? elem?.review.slice(0, 106) + '...' : elem?.review}</p>
                    <p className='font-bold'>Ratings {elem?.star}/5</p>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;