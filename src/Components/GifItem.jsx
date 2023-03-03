

export const GifItem = ({title,url}) => {

    
    //En el src se muestra la imagen, y en el alt se muestra el texto alternativo a mostrar.
    return (
    <div className ='card'>
        
       <img src= {url} alt= {title}  />
       <p>{title}</p>
    </div>
  )
}
