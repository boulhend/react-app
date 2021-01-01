import React, { useState } from 'react'
import Navbar from '../Comonents/Navbar';
import Sidebar from '../Comonents/Sidebar'
import Hero from '../Comonents/Hero'
import InfoSection from '../Comonents/InfoSection'
import { HhomeObj1, HhomeObj2, HhomeObj3 } from '../Comonents/InfoSection/Data';
import Services from '../Comonents/Services';
import Footer from '../Comonents/Footer';
const Home = () => {
    const [isOpen,setIsopen] = useState(false);
    const toggle = ()=>{
        setIsopen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>  
            <InfoSection {...HhomeObj1}/>
            <InfoSection {...HhomeObj2}/>
            <InfoSection {...HhomeObj3}/>
            <Services/>
            <Footer/>
        </>
    )
}

export default Home
