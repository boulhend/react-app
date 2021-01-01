import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    height:100%;
    width:100%;
    background:#000;
    display: flex;
    flex-direction:column;
    justify-content:center;
    top:-100%;
    left:0;
    transition:all 2s ease;

`
export const SidebarMenu = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    list-style:none;   
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    font-size:2rem;
    cursor:pointer;
`

export const SidebarWrapper = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    height:100%;
`

 export const SidebarLink = styled(LinkS)`
    color:#fff;
    text-decoration:none;
    font-size:1.5rem;
    padding:1rem;
    cursor:pointer;
    &:hover{
        color:#01bf71;
    }
 `
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content:center;
`
export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    font-size:1.5rem;
    white-space:nowrap;
    padding : 20px 64px;
    color:#010606;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.1s ease-in;
    text-decoration:none;
    &:hover {
        background:#fff;
        color:#010606;
    }

`