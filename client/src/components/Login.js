import React from 'react';
import './Login.css';
import qrCode from './LoginQRcode.png';
// import googleLogo from './LoginGoogle.png';
// import GoogleLogin from '@leecheuk/react-google-login';
import { GoogleLogin } from '@leecheuk/react-google-login';

const Login = () => {
    function handleGoogleLogin(responseData) {
        console.log(responseData);
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
                    <h1>To use Convoverse on your computer:</h1>
                    <ol>
                        <li>You need to sign in to your Google account first.</li>
                        <li>Then sign into Convoverse by using your Google account, clicking the button below.</li>
                        <li>You can logout anytime from the web.</li>
                    </ol>

                    {/* <button><img src={googleLogo} alt="Google logo" />Sign in with google</button> */}
                    <div className="googleButton">
                        <GoogleLogin
                            clientId="618693211364-oijj93q74uu307k82h9u8o455h4lc5j3.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={handleGoogleLogin}
                            onFailure={handleGoogleLogin}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>

                <div className="cardRight">
                    <img src={qrCode} alt="QR code" />
                </div>
            </div>
        </div>
    )
}

export default Login;
