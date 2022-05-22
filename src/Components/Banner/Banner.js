import React from 'react';
import { motion } from "framer-motion"
import Carousel from '../Carousel/Carousel';
const Banner = () => {
    return (
        <div >
            <motion.div
                transition={{ ease: "easeOut", duration: 2 }}
                initial={{ translateX: -80 }}
                whileInView={{ translateX: 50 }}
                viewport={{ once: true }}
                style={{ width: "60%", height: "80vh", background: "url(https://www.techadvisor.com/cmsdata/features/3512328/check_computer_specification_thumb1200_4-3.jpg)" }}
                className='bg-white md:w-7/12 md:px-8 rounded-xl relative'
            >
                <div className=' md:mt-10 ml-10 rounded-xl flex flex-col justify-center items-center' style={{ height: '100%' }}>
                    <h3 className='text-8xl font-bold font-serif text-white'>Micro Parts</h3>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        initial={{ translateY: -80 }}
                        whileInView={{ translateY: 50 }}
                        viewport={{ once: true }}
                        className='bg-white px-8 rounded-xl'

                    >
                        <p className='font-bold text-black'>A place where you can find parts of</p>
                        <p className='font-bold text-black'>Computer</p>
                    </motion.div>
                </div>
            </motion.div>
            <Carousel></Carousel>
        </div>
    );
};

export default Banner;