import { Icon } from '@iconify/react'
import "./Redes.css"

function Redes() {
  return (
        <div className='RedesBox'>
            <ul className='RedesList'>
                <li><a href='https://github.com/Juanffonsecav23' target='_blank' rel="noreferrer"><Icon icon="mdi:github"  className='IconRedes'/></a></li>
                <li><a href='https://www.linkedin.com/in/juan-felipe-fonseca-vargas-726412261/' target='_blank' rel="noreferrer"><Icon icon="mdi:linkedin"  className='IconRedes'></Icon></a></li>
                <li><a href='mailto:juanffonsecav.contact@gmail.com' target='_blank' rel="noreferrer"><Icon icon="mdi:gmail" className='IconRedes' ></Icon></a></li>
                <li><a href='https://instagram.com/juanffonseca.v?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer"><Icon icon="mdi:instagram"  className='IconRedes' ></Icon></a></li>
            </ul>
        </div>

  )
}

export default Redes