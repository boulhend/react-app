import styled from 'styled-components';
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'
export const HeroContainer =styled.div`
    position:relative;
    display:flex;
    position:relative;
    width:100%;
    height:800px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    &::before{
        content:'';
        position:absolute;
        top:0;
        left: 0;
        bottom:0;
        right:0;
        z-index:1;
        background:rgba(0,0,0,0.2)
    }
`
export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;

`
export const VideoBg=styled.video`
    width:100%;
    height:100%;
    object-fit:cover;
    -o-object-fit:cover;

`
export const HeroContent=styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const HeroH1=styled.h1`
    color:#fff;
    font-weight:bold;
    font-size:48px;
    text-align:center;
    animation-delay:1s;
    animation: type 5s steps(40) infinite;
    width:40ch;
    overflow:hidden;
    white-space:nowrap;
    border-right:4px solid #377dff;
    @media screen and (max-width:768px){
        font-size:40px
    }
    @media screen and (max-width:768px){
        font-size:32px
    }
`
export const HeroP=styled.p`
    color:#fff;
    font-size:24px;
    text-align:center;
    margin-top:24px;
    max-width:600px;
    @media screen and (max-width:768px){
        font-size:18px
    }
`
export const HeroButtonWrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:32px;
`
export const ArrowForward=styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;
`

export const ArrowRight=styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;
`