
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/config";
import "./Signin.css"

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        navigate("/login")
        /*  const docRef = await addDoc(collection(db, "request"), {
         data: {
             email,
             password,
             displayName
         },
            status: "pending",
            creationDate: new Date(),
           });
 
         const unsub = onSnapshot(doc(db, "request", docRef.id), (document) => {
             const data = document.data();
             if (data.status === 'success'){
                 alert('Welcome to the db!')
                 //navigate("/")
             } else if (data.status === 'failure') {
                 alert('You failure!')
             }
             console.log("Current data: ", document.data());
         }); */
    };
    

    return (
            <div>
                <div className="signindiv">
                    <form className="signin-form">
                        <h1>Sign In</h1>
                        <label htmlFor="displayName">Name:</label>
                        <input
                            className="input-name-email-password"
                            placeholder="Username"
                            type="text"
                            name="displayName"
                            onChange={(e) => {
                                setDisplayName(e.target.value);
                            }}
                        />
                        <label for="username">Email</label>
                        <input className="input-name-email-password" type="text" placeholder="Email" id="username" onChange={(e) => {
                            setDisplayName(e.target.value);
                        }} />

                        <label for="password">Password</label>
                        <input className="input-name-email-password" type="password" placeholder="Password" id="password" onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        />

                        <button className="createaccountbutton" onClick={register}>Create account</button>
                        <button className="continuewithgoogle"><i class="fa-brands fa-google"></i> Continue with Google</button>
                        <a href="/" className="loginhere">Already a user? Login here</a>
                    </form>
                </div>
            </div>
    );
}

export default SignUpPage;
