import React, {useState} from "react";
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
    <div className="App">
{
  currentForm === "login" ? <Login/> : <Register/>
}
</div>
    
  );
}


export default App;
