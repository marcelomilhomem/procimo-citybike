
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/config";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password)

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
            <form>
                <label htmlFor="displayName">Name:</label>
                <input
                    placeholder="Matilde"
                    type="text"
                    name="displayName"
                    onChange={(e) => {
                        setDisplayName(e.target.value);
                    }}
                />

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

                <button onClick={register}>Register</button>
            </form>
        </div>
    );
}

export default SignUpPage;
