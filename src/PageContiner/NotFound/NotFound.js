import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-screen w-screen'>
                <div>
                    <img src={"https://media4.giphy.com/media/JsE9qckiYyVClQ5bY2/giphy.gif?cid=ecf05e47p0ivihlcjr8qmex2umj1js1q9gn9z93zw63iup2t&rid=giphy.gif&ct=g"} className='w-96 rounded-lg' alt="" />
                </div>
                <div>
                    <p className='font-bold text-red-700 text-2xl'>Page not Found</p>
                    <Link className='navigate block mx-auto' to={'/'}>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;