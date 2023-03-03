
import { useEffect,useState } from 'react';
import { getGifs } from '../Components/Helpers/getGifs';
import {GifItem} from '../Components/GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

//properties tenemos la category
 export const GifGrid = ({category}) => {
  
  /*
  //Hemos creado unaconstaste con imagen y setImagen y el useState lo hemos reiniciado a vacio
  const[images,setImages] = useState([]);
 
  const getImages = async () => {

    //Cuando tenga la respuesta actualiza las imagenes
    const newImages = await getGifs(category);
    setImages(newImages);

  }
  //Lo que hace es hacer llamar a las imagenes.
   useEffect(  () => {

      getImages();
    
   }, [])
*/

// Nueva implantacion de codigo para hacer nuevas funcionalidades
//Veremos las imagenes tal y como lo hemos hecho.
const {images,isLoading} = useFetchGifs(category);



  return (
      <>
          <h3>{category}</h3>
          {  // Esto es un and logico es como si fuera un if se es verdad sigue sino no continua con la ejecucion.
           // isLoading && (<h2>Cargando...</h2>)
          }
          
        <div className="card-grid">

          {
                  //HAsta que no cargue las imagenes no carga
                   images.map((image)=> (
                    <GifItem key={image.id}
                             {...image}
                   
                    />
                   ))
          }
            
        </div>
  </>

  )
}