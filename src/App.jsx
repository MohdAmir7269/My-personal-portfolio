
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from "./Pages/About";
import Project from "./Pages/Project";
import Footer from "./Component/Footer";
import Skill from "./Pages/Skill";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Project2 from "./Pages/Project2";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: "68px" }}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/project"  element={<Project />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/skill"    element={<Skill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/login"    element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;