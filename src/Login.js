function login() {
    return (
      <div>
         <><h1>Login</h1> 
      <input className="loginField" type="text" placeholder="Username or E-mail"/>

      <input className="passwordField" type="password" autofocus placeholder="Password"></input></>

      <input className="loginBtn" type="submit" onClick={potentiallError} />
    </div> 
    )
  }

  function potentiallError() {

  }

export default login;