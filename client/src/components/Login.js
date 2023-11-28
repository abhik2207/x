import React from 'react';
import './Login.css';
import qrCode from './LoginQRcode.png';
import loginLogo from './LoginLogo.png';
// import GoogleLogin from '@leecheuk/react-google-login';
// import { GoogleLogin } from '@leecheuk/react-google-login';

const Login = () => {
    return (
        <div className='loginPage'>
            <div className="loginTop">
                <h1>CONVOVERSE</h1>
                <h3>Chat with ease!</h3>
            </div>

            <div className="loginBottom">

            </div>

            <div className="loginCard">
                <div className="cardLeft">
                    <h1>LOG IN</h1>
                    <div className="line"></div>
                    <form action="">
                        <label htmlFor="phoneNumber">Phone Number</label> <br />
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='989162XXXX' /><br />
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" placeholder='password' />
                    </form>

                    <button><img src={loginLogo} alt="Google logo" />Log in</button>
                    <a href='/' className='signupText'>Not a user? Sign up</a>
                </div>

                <div className="cardRight">
                    <img src={qrCode} alt="QR code" />
                </div>
            </div>
        </div>
    )
}

export default Login;
