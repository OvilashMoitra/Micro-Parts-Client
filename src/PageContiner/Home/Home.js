import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessSummary from '../../Components/BusinessSummary/BusinessSummary';
import Carousel from '../../Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';
import BG from '../../Assests/network-mesh-wire-digital-technology-background_1017-27428.jpg'
import Expertise from './Expertise';
import Footer from '../../Components/Footer/Footer';
import useProducts from '../../Hooks/useProducts';
const Home = () => {
    const { data } = useProducts();
    console.log(data)
    return (
        <div style={{ background: `url(${BG})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", height: "90vh", backgroundAttachment: "fixed" }}>
            <Navbar></Navbar>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Expertise></Expertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;