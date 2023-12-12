import proyectos from "../../database/proyectos"
import ItemProyectos from "./ItemProyectos"
import "./Proyectos.css"

function ItemListProyectos() {
    /* if (isLoading) return <Loader/> */


    if(proyectos.length === 0){
        return(
            <h2 style={{color:'white'}}>No se encontraron los espacios</h2>
        )
    }
    else return (
                <div className="SectionP" id="Projects">
                    <h2 className="Titles">Projects</h2>
                    <div className="Projects" >
                    {proyectos.map((itemInArray)=>(
                        <ItemProyectos key={itemInArray.id}{...itemInArray}/>
                    ))}
                    </div>
                </div>
  )
}

export default ItemListProyectos