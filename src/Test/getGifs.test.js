
import { getGifs } from '../Components/Helpers/getGifs';

describe ('Prueba en getGifs()' , () => {

    //como la funcion es asincrona puedo utilizar el await.
    //Lo que estamos evaluando que sea un arreglo nada mas.
    test('Debe de retornar un arreglo de Gif' , async () => {

       const gifs = await getGifs('One Punch');
       //Con este metodo es mayor a 0
       expect (gifs.length).toBeGreaterThan( 0 );
       expect ()
       

       
    });

});