import React, {useState} from "react";
import {Link,useNavigate} from "react-router-dom"

import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signup, signupGoogle} from "../../redux/actions/auth";


const InitState = {
    firstName: "",
    lastName: "",
    email: '',
    password: '',
    confirmPassword: ''
}


function Signup() {
    const nagivate = useNavigate();
    const dispatch = useDispatch();
    const [sForm,
        setsForm] = useState(InitState)

    const handleChange = (e) => setsForm({
        ...sForm,
        [e.target.name]: e.target.value
    });

    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        dispatch(signupGoogle(accessToken,nagivate))
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if (sForm.firstName !== "" && sForm.lastName !== "" && sForm.password !== "" && sForm.confirmPassword !== "" && sForm.email !== "" && sForm.password === sForm.confirmPassword && sForm.password.length >= 4) {
            dispatch(signup(sForm,nagivate))
        }
    }

    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
    return (
        <div >
            <div >
                <h1>Create your account</h1>

                <div>
                    <label>FRIST NAME</label>
                    <input onChange={handleChange} name="firstName" placeholder="enter your first name" type="text"/>
                </div>
                <div>
                    <label>LAST NAME</label>
                    <input name="lastName" onChange={handleChange} placeholder="enter your last name" type="text"/>
                </div>
                <div >
                    <label>EMAIL</label>
                    <input name="email" onChange={handleChange} placeholder="enter your email" type="email"/>
                </div>

                <div >
                    <label>PASSWORD</label>
                    <input name="password" onChange={handleChange} placeholder="enter your password" type="password"/>
                </div>

                <div >
                    <label>CONFIRM PASSWORD</label>
                    <input name="confirmPassword" onChange={handleChange} placeholder="retype your password" type="password"/>
                </div>

                <div >
                        <div>
                            Already Signed Up? <Link to="/account/login">Login</Link>
                        </div>
                        <div>
                            <Link to="/account/forgotpassword">Forgot Password?</Link>
                        </div>
                    </div>

                <button onClick={handleOnSubmit} >REGISTER</button>
                 <span >or</span>
                 <button  onClick={() => login()}  >
                    <i class="fa-brands fa-google"></i>  Sign up with google</button>

                 
            </div>

        </div>
    )
}

export default Signup;