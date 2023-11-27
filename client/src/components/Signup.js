import React from 'react';
import './Signup.css';
import qrCode from './LoginQRcode.png';
import signupLogo from './SignupLogo.png';
// import GoogleLogin from '@leecheuk/react-google-login';
// import { GoogleLogin } from '@leecheuk/react-google-login';

const Signup = () => {
    return (
        <div className='signupPage'>
            <div className="signupTop">
                <h1>CONVOVERSE</h1>
                <h3>Chat with ease!</h3>
            </div>

            <div className="signupBottom">

            </div>

            <div className="signupCard">
                <div className="cardLeft">
                    <h1>SIGN UP</h1>
                    <div className="line"></div>
                    <form action="">
                        <label htmlFor="phoneNumber">Phone Number</label> <br />
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='989162XXXX' /><br />
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="name" placeholder='George Smith' /><br />
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" placeholder='password' />
                    </form>

                    <button><img src={signupLogo} alt="Google logo" />Sign up</button>
                    <a href='/' className='loginText'>Already a user? Log in</a>
                </div>

                <div className="cardRight">
                    <img src={qrCode} alt="QR code" />
                </div>
            </div>
        </div>
    )
}

export default Signup;
