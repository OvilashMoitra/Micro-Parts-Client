import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessSummary from '../../Components/BusinessSummary/BusinessSummary';
import Carousel from '../../Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';
import BG from '../../Assests/network-mesh-wire-digital-technology-background_1017-27428.jpg'
import Expertise from './Expertise';
import Footer from '../../Components/Footer/Footer';
import useProducts from '../../Hooks/useProducts';
import Products from '../../Components/Products/Products';
import './Home.css'
import useRole from '../../Hooks/useRole';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Home = () => {
    const { data, isLoading } = useProducts();
    const [user] = useAuthState(auth)
    console.log(localStorage.getItem('token'))
    const [role] = useRole(user)
    if (isLoading) {
        return
    }
    return (
        <div style={{ background: `url(${BG})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", height: "90vh", backgroundAttachment: "fixed" }}>
            <Navbar></Navbar>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Expertise></Expertise>
            <div className="products-container">
                {
                    data.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;