import React from 'react';
import { motion } from "framer-motion"
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BusinessSummary.css'
const BusinessSummary = () => {
    return (
        <div>
            <div className='count my-10'>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='ms-md-5 counter '><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg> <p>Customer Recommendation </p><div><CountUp end={90} />%</div></motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='ms-md-5 counter'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg><p>Happy Customers</p> <div><CountUp end={2000} />+</div></motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='ms-md-5 counter '><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg><p> Experience</p> <div><CountUp end={5} />+</div></motion.div>
            </div>
        </div>
    );
};

export default BusinessSummary;