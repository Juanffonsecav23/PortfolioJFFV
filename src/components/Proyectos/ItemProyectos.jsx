
function ItemProyectos({title,img,description,link}) {
  return (
        <a href={link} target="_blank" rel="noreferrer" style={{textDecoration:"none"}} className="ProjectsItem">
            <img src={img} alt="" className="ImgProyects" />
            <div className="bodyPI">
                <h5 className="TitleItem">{title}</h5>
                <p style={{marginLeft:"2%"}}>{description}</p>
                <a href={link} target="_blank" rel="noreferrer" className="links" >{link}</a>
            </div>
        </a>
  )
}

export default ItemProyectos