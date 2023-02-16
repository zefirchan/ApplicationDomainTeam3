import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { auth } from "./firebase";


 {/* Administrator screen for registering user*/}
export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');


    {/* event handler for registration form*/}
    const registerUser= (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential); //print user credentials in console when account is created
            })
            .catch((error) =>{
                console.log(error);
            });
    };

    //registration form
    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={registerUser}>
                <h2>Register new User</h2>
                <label htmlFor="firstname">first name</label>
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstname" id="firstname" placeholder="enter first name..."/>
                <label htmlFor="lastname">last name</label>
                <input value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" id="lastname" placeholder="enter last name..."/>
                <label htmlFor="role">role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} name="role" id="role" placeholder="user's role..."/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com..." id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="*******" id="password" name="password"/>
                <button type="submit">Register Account</button>
            </form>
        </div>
    );
}