import { useEffect, useState } from "react"
import proyectos from "../../database/proyectos"
import ItemListProyectos from "./ItemListProyectos"


function getProyectosData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(proyectos)
        })
    })
}


function Proyectos() {

    let [isLoading , setIsLoading]= useState(true);
    let [proyectos , setProyectos] = useState([]);

    useEffect(()=>{
        getProyectosData()
        .then((respuesta=>
            setProyectos(respuesta)
        ))
        .finally(()=>
        setIsLoading(false))
    })

  return (<ItemListProyectos isLoading={isLoading} proyectos={proyectos}/>)
}

export default Proyectos