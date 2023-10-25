import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from './Register';
// import { Auth } from './auth';
// import { Success } from './Success';



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  //setting functionality for alternmate buttons
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">

      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      {/* {
        Auth.authenticated = 'true' ? <Success /> : <Auth />
      } */}
     
      
    </div>
  );
}

export default App;
