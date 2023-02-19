import React, {useState} from "react";


import './App.css';
import './NavbarStyles.css'
import { Login } from './Login';
import {Forgotpass} from './Forgotpass';
import { Register } from './Register';

import {Navbar} from './Navbar';



function App() {
  {/*start app on login screen */}
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  
  {/*toggle between login and forgot password forms */}
  return (
    <div className="App">
      <Navbar/>
      
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Forgotpass onFormSwitch={toggleForm}/>
      }   
      < Register/>

      
    </div>
  );
}

export default App;
