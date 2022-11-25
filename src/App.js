import Map from "./pages/Map";
import Nav from "./components/Nav";
/* import Information from "./pages/Information";
 */import Welcome from "./pages/Welcome";
import LoginPage from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      {/*       <Nav />
 */}      <LoginPage />
      <SignUpPage />
      {/*  <Welcome />
        <Map />
        <LoginPage /> */}
      {/*       <Information />
 */}      {/*  <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/" element={<Map />} />
        <Route path="*" component={<ErrorPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
