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
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-black rounded-box" style={{ height: '330px' }}>
                <div class="carousel-item">
                    <img src="https://img.game-news24.com/2021/10/ASRock-has-released-a-Z690-Taichi-A-Razer-Chroma-Makeover.jpeg" class="rounded-box" style={{ height: '292px', width: "292px" }} />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.wccftech.com/wp-content/uploads/2021/10/04-gskill-trident-z5-rgb-black-x4.jpg" class="rounded-box" style={{ height: '292px', width: "292px" }} />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A" class="rounded-box" />
                </div>
            </div>
        </motion.div>
    );
};

export default Carousel;