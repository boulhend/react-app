import React, { useState } from 'react';
import {Form,FormWrapper,Inner,Formgroup,FormControl,Wrapper,Checkbox,Button,CloseIcon} from './signupElements';

import{Redirect} from 'react-router';
const SignUpPage = () => {
    const [email,setEmail]=useState('')
    const [password1,setPassword1]=useState('');
    const [password2,setPassword2]=useState('');
    const [check,setCheck]=useState(false);
    const [success,setSuccess]=useState(false)
    const Submited = (e)=>{
        e.preventDefault();
        if(email===''){
            alert('E-mail requested')
        }
        else if(password1==='' || password1!==password2){
            alert('Passwords do not maths')
        }
        else if(!check){
            alert('Please aprouve terms & conditions')
        }
        else{
            alert('Register success');
            setSuccess(true);
        }
    }
    if(success){
        return <Redirect to='/'/>
    }
    else
    return (
        <Wrapper>
            <CloseIcon onClick={()=>setSuccess(true)}/>
			<Inner>
				<Form onSubmit={Submited}>
					<h3>Sign Up</h3>
					<Formgroup>
						<FormWrapper>
							<label for="">First Name</label>
							<FormControl type="text"/>
						</FormWrapper>
						<FormWrapper>
							<label for="">Last Name</label>
							<FormControl type="text"/>
						</FormWrapper>
					</Formgroup>
					<FormWrapper>
						<label for="">Email</label>
						<FormControl type="text" onChange={(e)=>setEmail(e.target.value)}/>
					</FormWrapper>
					<FormWrapper>
						<label for="">Password</label>
						<FormControl type="password" onChange={(e)=>setPassword1(e.target.value)}/>
					</FormWrapper>
					<FormWrapper>
						<label for="">Confirm Password</label>
						<FormControl type="password" onChange={(e)=>setPassword2(e.target.value)}/>
					</FormWrapper>
					<Checkbox>
						<label>
							<input type="checkbox" onClick={(e)=>setCheck(e.target.checked)}/> I accept the Terms of Use & Privacy Policy.
						</label>
					</Checkbox>
					<Button type="submit">Register Now</Button>
				</Form>
			</Inner>
		</Wrapper>
    )
}

export default SignUpPage
