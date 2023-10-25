import React, { useState } from "react"; //to get the passwords used
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Auth } from './auth'


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = () => {
        email.preventDefault();
        console.log(email);
    }

        return (
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label for="email">email</label>
                    <input value={email} type="email" placeholder="youremail@email.com" id="email" name="email" />
                    <label for="password">password</label>
                    <input value={pass} type="password" placeholder="**********" id="password" name="password" />
                    <button>Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
                <GoogleOAuthProvider clientId="37545007784-tbhsnfcj97shd6se0vemq6bg6f17u8h2.apps.googleusercontent.com">
                    <Auth />
                </GoogleOAuthProvider>
                
            </div>
        )
    }

