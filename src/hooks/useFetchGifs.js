
import { useEffect,useState } from 'react';
import { getGifs } from '../Components/Helpers/getGifs';

//UN hook es nada mas que una funcion, que regresa algo por ejemplo un objeto.
export const useFetchGifs = (category) => {

    const[images,setImages] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
 
  const getImages = async () => {

    //Cuando tenga la respuesta actualiza las imagenes
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);

  }
  //Lo que hace es hacer llamar a las imagenes.
 useEffect(  () => {

    getImages();
  
 }, []);


  return {

      images,
      isLoading
}
}
