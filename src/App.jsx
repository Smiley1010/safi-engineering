import NavbarHero from "./components/NavbarHero";
import MissionVision from "./components/MissionVision";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import ContactModal from "./components/ContactModal";

function App() {
  return (
    <>
      <NavbarHero />

      <MissionVision />

      <About />

      <Services />

       <Projects />

        <Experience />

        <Clients />

         <Contact />

         <Footer />

         <ContactModal />

      {/* More sections will come here */}
    </>
  );
}

export default App;