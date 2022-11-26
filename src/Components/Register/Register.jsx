import React, {useState} from "react";
import './Forms.css';
    function Register (props)  {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
          e.preventDefault();
        console.log(email);
    }
      
return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
      
      <h1>Creat Account</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" type="text" placeholder="Enter full name"/>

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email or Username" id="email" name="email" />

        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button id="registerBtn">Create Account</button>
      </form>
      <button className="linkBtn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
    </div>
)
}
export default Register;