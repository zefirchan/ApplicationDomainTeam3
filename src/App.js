import React, {useState} from "react";


import './App.css';
import { Login } from './Login';
import {Forgotpass} from './Forgotpass';
import { Register } from './Register';


function App() {
  {/*start app on login screen */}
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  
  {/*toggle between login and forgot password forms */}
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }   
    </div>
  );
}

export default App;
