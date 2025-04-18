import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/Skills';
import Projects from './components/Services';
import Contact from './components/Projects';
import Services from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
