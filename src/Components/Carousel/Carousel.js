import React from 'react';
import { motion } from "framer-motion"
import './Carousel.css'
const Carousel = () => {
    return (
        <motion.div
            transition={{ ease: "easeOut", duration: 2 }}
            initial={{ translateY: -80 }}
            whileInView={{ translateY: 50 }}
            viewport={{ once: true }}
            className='absolute banner-carousel top-80 right-40'>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-black rounded-box" style={{ height: '330px' }}>
                <div className="carousel-item">
                    <img src="https://img.game-news24.com/2021/10/ASRock-has-released-a-Z690-Taichi-A-Razer-Chroma-Makeover.jpeg" className="rounded-box" style={{ height: '292px', width: "292px" }} alt='' />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" className="rounded-box" style={{ height: '292px', width: "292px" }} alt='' />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.wccftech.com/wp-content/uploads/2021/10/04-gskill-trident-z5-rgb-black-x4.jpg" className="rounded-box" style={{ height: '292px', width: "292px" }} alt='' />
                </div>
                <div className="carousel-item">
                    <img src="https://media.ldlc.com/r1600/ld/products/00/05/70/62/LD0005706289_1.jpg" className="rounded-box" style={{ height: '292px', width: "292px" }} alt='' />
                </div>
                <div className="carousel-item">
                    <img src="https://www.bhphotovideo.com/images/images2000x2000/asus_rog_strix_gtx1650s_a4g_gaming_rog_strix_geforce_gtx_1532763.jpg" className="rounded-box" style={{ height: '292px', width: "292px" }} alt='' />
                </div>
                <div className="carousel-item">
                    <img src="https://cf.shopee.sg/file/299950e9595b5445b4015d12738e7bab" style={{ height: '292px', width: "292px" }} className="rounded-box" alt='' />
                </div>
                <div className="carousel-item">
                    <img src="https://www.asus.com/us/site/rog-build/assets/images/hero/hero@mobile.jpg" style={{ height: '292px', width: "292px" }} className="rounded-box" alt='' />
                </div>
            </div>
        </motion.div>
    );
};

export default Carousel;