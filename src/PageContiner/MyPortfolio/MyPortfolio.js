import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center '>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5">
                    <div className='text-left'>
                        <p className='font-bold'>Name: Ovilash Moitra</p>
                        <p className='font-bold'> Email: ovilashmoitraofficial@gmail.com </p>
                        <p className='font-bold'>I am a student of first year Currently Reading CSE in BRAC University.</p>
                        <p className='font-bold'>Technology I use for Web Developing.</p>
                    </div>
                    <ul className='font-bold text-left'>
                        <li>React JS</li>
                        <li>Google Firebase</li>
                        <li>MongoDB</li>
                        <li>Javascript</li>
                        <li>Express JS</li>
                        <li>React Router</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
            </div>
            <h3 className='text-center text-4xl my-5 font-bold'>Best 3 projects</h3>
            <div className="products-container">
                <div className=' products'>
                    <a href="https://gadget-world-7095d.firebaseapp.com/">
                        <img id='portfolio' className='relative' src={"https://i.ibb.co/qsGfM5d/image.png"} alt="" />
                        <img id='portfolio1' className=' websiteShowcase absolute top-0' src={"https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554__340.png"} alt="" />
                    </a>
                </div>
                <div className='products'>
                    <a href="https://photographer-ovilash.web.app/">
                        <img id='portfolio2' className='relative portfolio' src={"https://i.ibb.co/R29jksy/image.png"} alt="" />
                        <img id='portfolio3' className=' portfolio websiteShowcase absolute top-0' src={"https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554__340.png"} alt="" />
                    </a>
                </div>
                <div className='products'>
                    <a href="https://musical-begonia-d6fac5.netlify.app/">
                        <img id='portfolio4' className='relative portfolio' src={"https://i.ibb.co/XtRJbj1/image.png"} alt="" />
                        <img id='portfolio5' className='portfolio websiteShowcase absolute top-0' src={"https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554__340.png"} alt="" />
                    </a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;