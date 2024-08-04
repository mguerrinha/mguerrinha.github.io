import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
