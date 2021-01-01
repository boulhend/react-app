import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button=styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${({primary})=>(primary ? '#01bf71':'#010606')};
    padding:${({big})=>(big ? '14px 48px':'12px 30px')};
    font-size:${({fontBig})=>(fontBig ? '20px':'16px')};
    outline:none;
    color:#fff;
    border-radius:50px;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in;
    &:hover{
        background-color:${({primary})=>(primary ? '#fff':'#01bf71')};
        color:#333;
    }

`
export const Submit=styled.input`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#333;
    padding:12px 24px;
    font-size:1.5rem;
    outline:none;
    color:#fff;
    border-radius:50px;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in;
    width:50%;
    margin:0 auto;
    &:hover{
        background-color:#fff;
        color:#333;
    }

`