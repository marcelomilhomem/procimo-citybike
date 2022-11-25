import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    placeholder="a@b.com"
                    type="text"
                    name="email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    placeholder="password"
                    type="password"
                    name="FullName"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default LoginPage;
