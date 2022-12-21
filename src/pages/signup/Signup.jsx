
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
        <>
            <div>
                <form className="signin-form">
                    <h3>Sign In</h3>

                    <label htmlFor="displayName">Name:</label>
                    <input
                        placeholder="Username"
                        type="text"
                        name="displayName"
                        onChange={(e) => {
                            setDisplayName(e.target.value);
                        }}
                    />
                    <label for="username">Email</label>
                    <input type="text" placeholder="Email" id="username" onChange={(e) => {
                        setDisplayName(e.target.value);
                    }} />

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    />

                    <button onClick={register}>Create account</button>
                    <button className=""><img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />   Continue with Google</button>
                    <a className="loginhere" href="/" class="go">Already a user? Log in</a>
                </form>
            </div>
        </>
    );
}

export default SignUpPage;
