import { Icon } from "@iconify/react";
import "./Contact.css";


function Contact() {
  return (
    <div id="Contact" className="BackgroundContact">
        <h2 className="Titles">Contacto</h2>
        <div className="SectionContact">
            <div style={{width:"20rem"}}>
                <a href="https://maps.app.goo.gl/a5NeNikvd5Ngzkyn7" className="CCenter">
                    <Icon icon="mdi:location" hFlip={true} className="IconContact"/>Bogotá , Colombia
                </a>
            </div>
            <div className="ContactMedia">
                <div>
                    <a href="https://github.com/Juanffonsecav23" className="CCenter">
                        <Icon icon="mdi:github" className='IconContact'/>Github
                    </a>
                    
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/juan-felipe-fonseca-vargas-726412261/" className="CCenter">
                        <Icon icon="mdi:linkedin" className='IconContact'/>Linkedin
                    </a>
                    
                </div>
                <div>
                    <a href="mailto:juanffonsecav.contact@gmail.com" className="CCenter">
                        <Icon icon="mdi:gmail" className='IconContact'/>Gmail
                    </a>
                    
                </div>
                <div>
                    <a href="https://instagram.com/juanffonseca.v?igshid=OGQ5ZDc2ODk2ZA==" className="CCenter">
                        <Icon icon="mdi:instagram" className='IconContact'/>Instagram
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact