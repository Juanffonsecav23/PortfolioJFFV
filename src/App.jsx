import './App.css'
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Proyectos from './components/Proyectos/Proyectos';
import Redes from './components/Redes/Redes';
import Resume from './components/Resume/Resume';

function App() {

  return (
    <>
    <Navbar/>
    <Redes/>
    <AboutMe/>
    <Proyectos/>
    <Resume/>
    <Contact/>
    </>
  )
}

export default App
