/*
1º Tenemos que hacer la prueba con el snapshot
2º Hacemos el testing y sale OK
3º Lo renderizamos con el GifItem y hemos metido de argumentos title y la url 
4º Añadiendo el container se nos añade nuestro snapshot.
*/
import {render } from '@testing-library/react';
import{ GifItem } from '../../src/Components/GifItem';

describe('Pruebas en nombre <GifItem/>', () => {

    const title = 'Saitama';
    const url = 'http://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot' , () => {
        
        //Todavia no estamos evaluando nada. renderizamos con el container
       const {container} =  render (<GifItem title={ title } url={ url } />);
       //Expecificamos el expect y con el container , llamamos al metodo toMatchSnapshot().
       expect (container).toMatchSnapshot();


    });

     test('Debe de mostrar la imagen con el url indicado y el alt indicado ', () => {

          render( <GifItem title ={ title } url= { url } />);
          const{src,alt} = screen.getByRole('img');
          //con el expect vamos haciendo la prueba distintos elementos.
          expect (src).toBe(url);
          expect (alt).toBe(alt);

          
    });

    test('Debe de mostrar el titulo en el componente ' , () => {
        //Lo renderizamos 
        render( <GifItem title ={ title } url= { url } />);
        //En el expect vamos a buscar el titulo que exista.
        expect (screen.getByText( title )).toBeTruthy();

    })
});