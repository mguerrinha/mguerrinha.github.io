import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Portfolio />
        <Contact />        
      </div>
    </div>
  );
}

export default App;
