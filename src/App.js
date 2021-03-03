import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar1 from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
   <Navbar1 />
   <Header />
   <About />
   <Skills />
   <Projects />
   <Contact />
   <Footer />
   </>
  );
}

export default App;
