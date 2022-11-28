import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/config";

function LoginPage() {
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
            navigate('/')
            alert(`welcome ${user._tokenResponse.email}`);
        } catch (error) {
            alert(error.message);
        }
    };



    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    placeholder="a@b.com"
                    type="text"
                    name="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}

                />
                <label htmlFor="password">Password:</label>
                <input
                    placeholder="password"
                    type="password"
                    name="FullName"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button onClick={logIn}>Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;
