import React, { useState } from 'react';
import './Login.css';
import qrCode from './LoginQRcode.png';
import loginLogo from './LoginLogo.png';

const Login = () => {
    const [credentials, setCredentials] = useState({ phoneNumber: '', password: '' });

    function onChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const x = await credentials;
        console.log(x);
        const response = await fetch('http://localhost:3005/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({phoneNumber:credentials.phoneNumber, password:credentials.password})
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if(jsonResponse.success){
            localStorage.setItem('convoverseUserLoginId', jsonResponse.responseData._id);
            localStorage.setItem('convoverseUserLoginName', jsonResponse.responseData.name);
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="phoneNumber">Phone Number</label> <br />
                        <input type="text" name="phoneNumber" id="phoneNumber" value={credentials.phoneNumber} onChange={onChange} placeholder='989162XXXX' /><br />
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} placeholder='password' />
                        <button type='submit' className='submitButtom'><img src={loginLogo} alt="Google logo" />Log in</button>
                    <a href='/' className='signupText'>Not a user? Sign up</a>
                    </form>
                </div>

                <div className="cardRight">
                    <img src={qrCode} alt="QR code" />
                </div>
            </div>
        </div>
    )
}

export default Login;
