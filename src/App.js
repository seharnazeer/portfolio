import React, {Suspense,lazy } from "react";
import Preloader from "../src/components/Pre";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar=lazy(()=> import("./components/Navbar"));
const Home=lazy(()=>import("./components/Home/Home"));
const About=lazy(()=>import("./components/About/About"));
const Projects=lazy(()=>import("./components/Projects/Projects"));
const Footer=lazy(()=>import("./components/Footer"));
const Resume=lazy(()=>import("./components/Resume/ResumeNew"));


function App() {


  return (
    <Router>
      <Suspense fallback={ <Preloader load={true}/>}>
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      {/* </div> */}
      </Suspense>
    </Router>
  );
}

export default App;
