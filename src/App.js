import Map from "./pages/Map";
import Nav from "./components/Nav";
import Information from "./pages/Information";
import Footer from "./components/Footer";
/* import { Routes, Route } from "react-router-dom"; */

function App() {
  return (
    <div className="App">
      <Nav />
      <Map />
      <Information />
      <Footer />
      {/*  <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/" element={<Map />} />
        <Route path="*" component={<ErrorPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
