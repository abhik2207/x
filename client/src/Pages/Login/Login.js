import React, {useState} from 'react';

const [setUsername, Username] = useState<string>("");
const [setPassword, Password] = useState<string>("");

const [errorMessage, setErrorMessage] = useState<string>("");

  const [Hidden, setHidden] = useState<boolean>(false);

  const TogglePasswordView = () => {
    setHidden(prevState => !prevState)
  }

function Login() {
  return (
    <div className='Login'>
      <main>
        <h2>Login</h2>
        <input className="username"
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}/>
          <div className="password-input">
            <input className="password"
              type={Hidden ? "text" : "password"}
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}/>
            <i className="passwordview" onClick={TogglePasswordView}>
              {Hidden ? <Eye size="2rem"/> : <EyeSlash size="2rem"/>}
            </i>
          </div>
          <a className="forgot-password" href="@">Forgot password?</a>
          <h1 style={{ color: "red" }}>{errorMessage}</h1>
          <button onClick={login}>Login</button>
      </main>
    </div>
  )
}

export default Login
