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
        <>
            <div>
                <form className="login-form ">
                    <h3>Login Here</h3>

                    <label for="username">Username</label>
                    <input type="text" placeholder="Email" id="username" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />


                    <button onClick={logIn}>Sign In</button>
                    <button className=""><img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" /> Continue with Google</button>
                    <a className="create-account" href="/signin" class="go">No account? Create one</a>

                </form>
            </div>
        </>
    );
}

