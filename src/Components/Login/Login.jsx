import React, { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        
      <h1>Login</h1>

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email or Username" id="email" name="email" />

        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button id="loginBtn">Login</button>
      </form>
      <button className="linkBtn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
    </div>
  )
}


export default Login;
