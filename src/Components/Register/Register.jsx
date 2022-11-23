import React, {useState} from "react";
    function Register (props)  {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setname] = useState('');

    const handleSubmit = (e) => {
          e.preventDefault();
        console.log(email);
    }
      
return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
      <label>Full name</label>
      <input value={name} name="name" id="name" type="text" placeholder="Enter full name"/>

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email or Username" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button>Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
    </div>
)
}
export default Register;