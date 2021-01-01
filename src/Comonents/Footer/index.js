import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

import{SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,Socialisation,SocialIconLink,FooterContainer,FooterLinksWrapper,FooterLink,FooterWrap,FooterLinksContainer,FooterLinkItems,FooterLinkTitle} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to='/signup'>
                                        How it works
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Career
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Terms of service
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    About us
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Customers</FooterLinkTitle>
                                <FooterLink to='/signup'>
                                        How it works
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Career
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Terms of service
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    About us
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact US</FooterLinkTitle>
                                <FooterLink to='/signup'>
                                        How it works
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Career
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Terms of service
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    About us
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/signup'>
                                        How it works
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Career
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    Terms of service
                                </FooterLink>
                                <FooterLink to='/signup'>
                                    About us
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>$$$</SocialLogo>
                        <WebsiteRights>$$$ &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <Socialisation>
                            <SocialIconLink href="/" target ="_blank" arial-label="Fcaebook">
                              <FaFacebook/>  
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" arial-label="Fcaebook">
                              <FaYoutube/>  
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" arial-label="Fcaebook">
                              <FaLinkedin/>  
                            </SocialIconLink>
                            <SocialIconLink href="/" target ="_blank" arial-label="Fcaebook">
                              <FaTwitter/>  
                            </SocialIconLink>
                        </Socialisation>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
