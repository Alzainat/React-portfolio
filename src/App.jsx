import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
