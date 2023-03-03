/*
1º Añadimos los prop type con la secuencia yarn add prop-types
2º Cogemos y hacemos la importacion adecuada al Prop-types
3º Añadimos el GifItem.propTypes y añadimos el title y la url. Son obligatorios
// ponemos el PropTypes ambos son string y ambos son isrequired.
*/
import PropTypes from 'prop-types'

export const GifItem = ({ title, url, id}) => {

    //En el src se muestra la imagen, y en el alt se muestra el texto alternativo a mostrar.
    return (
    <div className ='card'>
        
       <img src= { url } alt= { title }  />
       <p>{ title }</p>
    </div>
  )
}


GifItem.propTypes = {

    title : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

