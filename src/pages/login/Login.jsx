import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";
import "./Login.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user);
            navigate('/welcome')
            alert(`welcome ${user._tokenResponse.email}`);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <div className="logindiv">
                <form className="login-form">
                    <h1>Login</h1>
                    <label for="username">Username</label>
                    <input className="input-email-password" type="text" placeholder="Email" id="username" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                    <label for="password">Password</label>
                    <input className="input-email-password" type="password" placeholder="Password" id="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                    <button className="loginbutton" onClick={logIn}>Sign In</button>
                    <button className="continuewithgoogle"><i class="fa-brands fa-google"></i> Continue with Google</button>
                    <a href="/signin" className="loginhere">No account? Create one</a>

                </form>
            </div>
        </div>
    );
}

