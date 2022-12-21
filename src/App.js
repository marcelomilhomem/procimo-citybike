import Map from "./pages/Map";
import Nav from "./components/Nav";
/* import Information from "./pages/Information";
 */import Welcome from "./pages/Welcome";
import LoginPage from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup/Signup";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App() {

  const [loggedUser, setLoggedUser] = useState(false)
  const [currentUser, setCurrentUser] = useState({});
  const [test, setTest] = useState(true)

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log('user is logged in')
      setLoggedUser(true);
      setCurrentUser(user);
    } else {
      console.log('user is logged out')
      setLoggedUser(false);
      setCurrentUser(null);
    }
  });

  return (
    <div className="App">
      {loggedUser && (
        <>
          <Nav />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
          <Map />
        </>
      )}
      {!loggedUser && (
        <>
          <Routes>
            <Route path='/signin' element={<SignUpPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
