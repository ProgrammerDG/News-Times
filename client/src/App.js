import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Entertainment from "./components/Entertainment";
import Science from "./components/Science";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/science" element={<Science/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
