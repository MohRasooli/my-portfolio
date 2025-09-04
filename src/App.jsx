import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
