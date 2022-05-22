import React from 'react';
import './Expertise.css'
const Expertise = () => {
    return (
        <div className='expertises'>
            <div className="md:flex md:p-14">
                <section className="why-wrap p-10">
                    <img className='why-bg' src={"https://thumbs.dreamstime.com/b/two-different-thin-line-models-ssd-flat-stroke-style-trend-modern-logotype-graphic-art-design-isolated-white-background-198019122.jpg"} alt="" />
                    <div className='why-content'>
                        <h4 className='text-2xl text-amber-400 font-semibold border-b-2'>Welcome to</h4>
                        <h2 className=' mt-2 text-blue-500 font-bold'>Micro Parts</h2>
                        <p>A place where you can find the best computer parts ever.It lights up your computer using time experience.No matter how advanced your computer system is, it's still going to need the right hardware. A computer system will not run properly and efficiently if it is not running on the right hardware. Hardware is the physical part of a computer system. It consists of different devices, parts and features. Some examples of computer hardware are the motherboard, graphics card, CPU (Central Processing Unit), ventilation fans, webcam, power supply, and so on.</p>
                        <p>We partner with over 320 amazing ut projects worldwide, and have given over $150 million in cash and product grants to other groups.</p>
                    </div>
                </section>
                <section className=" p-14 about-wrap">
                    <img className='about-bg' src={"https://img.myloview.com/posters/ai-server-rack-icon-outline-ai-server-rack-vector-icon-for-web-design-isolated-on-white-background-400-173190499.jpg"} alt="" />
                    <div className='grid md:grid-cols-2 gap-10 about-content'>
                        <div>
                            <div>
                                <img src={"https://cdn-icons-png.flaticon.com/512/1245/1245594.png?w=740"} alt="" />
                            </div>
                            <div>
                                <h3>Fast Delivery</h3>
                                <p>We know it's hectic to wait after buying a product.So we deliver your product ASAP</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={"https://cdn-icons-png.flaticon.com/512/1250/1250903.png?w=740"} alt="" />
                            </div>
                            <div>
                                <h3>Smart Technology</h3>
                                <p>To cope up with the new generation we are creating the best parts for you.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={"https://cdn-icons-png.flaticon.com/512/1243/1243560.png?w=740"} alt="" />
                            </div>
                            <div>
                                <h3>Professionalism</h3>
                                <p>We are very professional with our couster & try to give 100% to satisfy our coustomers</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={"https://cdn-icons-png.flaticon.com/512/686/686356.png?w=740"} alt="" />
                            </div>
                            <div>
                                <h3>Customer Review</h3>
                                <p>Apart from that we imporve our service according to our customer review</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Expertise;