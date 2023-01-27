import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signinGoogle, signin} from "../../redux/actions/auth";

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate ()
    const dispatch = useDispatch()


    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        dispatch(signinGoogle(accessToken,navigate))
    }
    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

    function handleSubmit(e){
        e.preventDefault();
        if(email !== "" && password !== ""){
            dispatch(signin({email,password}, navigate))
        }

    }

    return (
        <div >
            <div >
                <h1>Welcome back</h1>

                <div>
                    <label>EMAIL</label>
                    <input onChange={e=> setEmail(e.target.value)} placeholder="enter your email" type="email"/>
                </div>

                <div >
                    <label>PASSWORD</label>
                    <input onChange={e=> setPassword(e.target.value)} placeholder="enter your password" type="password"/>
                </div>

                <div >
                    <div>
                        Remember Me <input type="checkbox" />
                    </div>
                    <div>
                        <Link to="/account/forgotpassowrd">Forgot password?</Link>
                    </div>
                </div>

                <button onClick={handleSubmit}>LOGIN</button>
                <span>or</span>
                 <button onClick={() => login()}>
                    <i class="fa-brands fa-google"></i>  Sign in with google</button>
                
                    
                    <span >Not registered yet?  <Link  to="/account/signup">Signup</Link></span>
                    
            </div>

        </div>
    )
}

export default Login;