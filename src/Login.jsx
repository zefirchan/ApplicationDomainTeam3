import React, {useState} from "react";



export const Login = (props) =>{
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    {/* event handler for form entry*/}
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(username);
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username"/>
                <label htmlfor="password">password</label>
                <input value={pass} onChange={(e) =>setPass(e.target.value) } type="password" placeholder="******" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            {/* switch to password form*/}
            <button className="link-btn" onClick={() =>props.onFormSwitch('forgotpass')}>Forgot password</button>
            
        </div>
    );
}