import React, {useState} from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Auth } from './auth'


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        email.preventDefault();
        console.log(email);
    }

    return (<div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form"
                onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"></input>
                <label htmlFor="email">email</label>
                <input value={email}
                    type="email"
                    placeholder="youremail@email.com"
                    id="email"
                    name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass}
                    type="password"
                    placeholder="**********"
                    id="password"
                    name="password"/>
                 <button>Register</button>
            </form>
            <button className="link-btn"
                onClick={
                    () => props.onFormSwitch('login')
            }>Already have an account? Login here</button>
            <GoogleOAuthProvider clientId="37545007784-tbhsnfcj97shd6se0vemq6bg6f17u8h2.apps.googleusercontent.com">
                    <Auth />
                </GoogleOAuthProvider>
    </div>
    )
        }
