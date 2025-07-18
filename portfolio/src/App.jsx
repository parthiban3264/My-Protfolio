import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>

  );
}
