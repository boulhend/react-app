import React, { useEffect, useState } from 'react'
import{Nav,NavContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink}
 from './Navelements';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false);
    const changeNav= ()=>{
        if(window.scrollY>=720){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    })

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to="/" onClick={toggleHome} >$$$</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} spy={true} offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' smooth={true} spy={true} offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} spy={true} offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'smooth={true} spy={true} offset={-80}>Services</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signup'>
                            Sign Up
                        </NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
