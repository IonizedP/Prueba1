import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/navbar/Navbar';
import Products from '../components/Products/Products';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection />
            <Products />
            <Footer />
        </>
    );
};

export default Home;