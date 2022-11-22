import React, {useState} from "react";
    function Register ()  {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setname] = useState('');

    const handleSubmit = (e) => {
          e.preventDefault();
        console.log(email);
    }
      
return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email or Username" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button>Login</button>
      </form>
      <button>Don't have an account? Register</button>
    </>
)
}
export default Register;