import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarRoute,SideBtnWrap} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer onClick={toggle} style={isOpen ? {transform:'translateY(100%)'}:{transform:'translateY(-100%)'}}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to = "Services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to = "signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                    <SidebarLink to = "about" onClick={toggle}>
                        About
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to ="/signin">Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
