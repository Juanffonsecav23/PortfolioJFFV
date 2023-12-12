import { useRef } from 'react';
import "./Navbar.css";

function Navbar() {

  const seccion1Ref = useRef(null);
  const seccion2Ref = useRef(null);
  const seccion3Ref = useRef(null);
  const seccion4Ref = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
        <img src="/PorfolioLogo.svg" alt="" className='Logo'/>
        <ul className='Menu'>
            <li><a href="#AboutMe" className='links' onClick={() => scrollToSection(seccion1Ref)}>About</a></li>
            <li><a href="#Projects" className='links'onClick={() => scrollToSection(seccion2Ref)}>Projects</a></li>
            <li><a href="#Resume" className='links'onClick={() => scrollToSection(seccion3Ref)}>Resume</a></li>
            <li><a href="#Contact" className='links'onClick={() => scrollToSection(seccion4Ref)}>Contact</a></li> 
        </ul>
    </nav>
  )
}

export default Navbar