import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import bg1 from '../../images/bg-registration-form-2.jpg';


export const Wrapper=styled.div`
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    background-image: url(${bg1});
    position: relative;
` 
     
export const Inner=styled.div`
    min-width: 850px;
    margin: auto;
    padding-top: 68px;
    padding-bottom: 48px;
    h3{
      text-transform: uppercase;
      font-size: 22px;
      text-align: center;
      margin-bottom: 32px;
      color: #333;
      letter-spacing: 2px;
    }
      @media (max-width: 991px) {
      min-width: 768px; } 
    @media (max-width: 767px) {
      min-width: auto;
      background: none;
      padding-top: 0;
      padding-bottom: 0;
    }
`
export const Form=styled.form`
    width: 80%;
    padding-left: 45px;
    margin:0 auto;
    @media (max-width: 767px) {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px; 
    }
`
export const Formgroup=styled.div`
    display: flex;
    width: 80%;
    
`
export const FormWrapper = styled.div`
    width: 50%;
    margin-bottom: 17px;
    margin-right:80px;
    label{
        margin-bottom: 9px;
        display: block;
        white-space:nowrap;
    }
`
export const FormControl=styled.input`
    border: 1px solid #ccc;
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    background: none;
    outline-style:none;
    &:focus{
        border: 1px solid var(--green);
    }
    
`
  
export const CloseIcon = styled(FaTimes)`
    color: var(--green);
    font-size:2.5rem;
    position: absolute;
    top:0;
    right:0;
    margin:1rem 2rem;
    cursor: pointer;
    &:hover{
        color:red;
    }
`
  
export const Button=styled.button`
    border: none;
    width: 152px;
    height: 40px;
    margin: auto;
    margin-top: 29px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: var(--green);
    font-size: 13px;
    color: #fff;
    text-transform: uppercase;
    border-radius: 20px;
    outline-style:none;
    overflow: hidden;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s; 
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #333;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out; }
    &:hover:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66); }
` 
export const Checkbox=styled.div`
    position: relative; 
    label {
      padding-left: 22px;
      cursor: pointer; }
    input {
      position: absolute;
      left: 0;
      top:25%;
      cursor: pointer; }
    
`
      
  