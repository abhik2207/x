import React, { useState } from 'react';
import './Signup.css';
import qrCode from './LoginQRcode.png';
import signupLogo from './SignupLogo.png';
// import GoogleLogin from '@leecheuk/react-google-login';
// import { GoogleLogin } from '@leecheuk/react-google-login';

const Signup = () => {
    const [credentials, setCredentials] = useState({ phoneNumber: '', name: '', password: '' });

    function onChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const x = await credentials;
        console.log(x);
        const response = await fetch('http://localhost:3005/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber: credentials.phoneNumber, name: credentials.name, password: credentials.password })
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }

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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="phoneNumber">Phone Number</label> <br />
                        <input type="text" name="phoneNumber" id="phoneNumber" value={credentials.phoneNumber} onChange={onChange} placeholder='989162XXXX' /><br />
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="name" value={credentials.name} onChange={onChange} placeholder='George Smith' /><br />
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} placeholder='password' />
                        <button type='submit' className='submitButtom'><img src={signupLogo} alt="Google logo" />Sign up</button>
                        <a href='/' className='loginText'>Already a user? Log in</a>
                    </form>

                </div>

                <div className="cardRight">
                    <img src={qrCode} alt="QR code" />
                </div>
            </div>
        </div>
    )
}

export default Signup;
