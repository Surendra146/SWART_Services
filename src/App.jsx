import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";




function App() {

  return (
    <>
      <Navbar />
     

      <Routes>
  
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
