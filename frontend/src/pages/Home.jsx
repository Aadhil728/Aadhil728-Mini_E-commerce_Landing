import React, { useEffect, useState } from 'react'
// import { logout } from '../services/authService';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import Category from '../components/Category/Category';
import Category2 from '../components/Category/Category2';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import Banner from '../components/Banner/Banner';
import { fetchBannerData } from '../services/bannerService'
import ProductsSection from '../components/ProductsSection/ProductsSection';
import Blogs from '../components/BlogsSection/Blogs';
import Brands from '../components/BrandsSection/Brands';
import Footer from '../components/Footer/Footer';
import AOS from 'aos/'
import "aos/dist/aos.css";

const Home = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchBannerData();
                setBannerData(data);
                // console.log('Fetched banner data:', data);
            } catch (error) {
                console.error('Error setting the banner data:', error);
            }
        };

        getData();
    }, []);

    useEffect(() => {
        AOS.init(
            {
                duration: 800,
                easing: 'ease-in-sine',
                delay: 100,
                offset: 100,
            }
        );
        AOS.refresh();
    }, [])

    // Separate the first and second products
    const firstProduct = bannerData[0] || {};
    const secondProduct = bannerData[1] || {};

    return (
        <div className='bg-white text-black dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
            {/* <h2>Welcome to the home page</h2>
            {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogout}>Login</button>} */}
            <Navbar />
            <HeroSection />
            <Category />
            <Category2 />
            <ServicesSection />
            <Banner data={[firstProduct]} />
            <ProductsSection />
            <Banner data={[secondProduct]} />
            <Blogs />
            <Brands />
            <Footer />
        </div>

    )
}

export default Home