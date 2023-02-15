import React, {useState} from "react";

 {/* Administrator screen for creating new role*/}
export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');


    {/* event handler for form entry*/}
    const handleSubmit= (e) => {
        e.preventDefault();
       
    }
    return(
        <div className="auth-form-container">
            <h2>Register new User</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htlmfor="firstname">first name</label>
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstname" id="firstname" placeholder="enter first name..."/>
                <label htlmfor="lastname">last name</label>
                <input value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" id="lastname" placeholder="enter last name..."/>
                <label htlmfor="role">role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} name="role" id="role" placeholder="user's role..."/>
                <label htmlfor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com..." id="email" name="email"/>
                <label htmlfor="pass">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="pass" placeholder="*******" id="pass" name="pass"/>
                <button type="submit">Register Account</button>
            </form>
        </div>
    );
}