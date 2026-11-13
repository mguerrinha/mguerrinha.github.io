import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Projects from "./components/Projects.jsx";
import Beyond from "./components/Beyond.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
