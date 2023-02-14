import React, {useState} from "react";

export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
       
    }
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htlmfor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="enter full name..."/>
                <label htmlfor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com..." id="email" name="email"/>
                <label value={pass} onChange={(e) => setPass(e.target.value)}for="password">password</label>
                <input type="password" placeholder="enter password..." id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    );
}