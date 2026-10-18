
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="site-shell">
        <Navbar />
        <Home />
      </div>

      <About />
      <Education />
      <Skills />
      <Project />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
