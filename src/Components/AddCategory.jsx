import { useState } from 'react';
// lo que vamos hacer es poner otra categoria a la lista para ello destruturacion de setcategories
//dentro de addCategory.Ahora le vamos a poner onNewCategory para una nueva categoria.
export const AddCategory = ({onNewCategory}) => {

    //este es el valor inicial que va a tener est tipo de input.
    //Habia en la caja del input perro y gato lo hemos dejado vacio para insertar caracteres.
    const [inputValue,setInputValue] = useState('');

    //Funcion para cambiar el valor que tenemos anteriormente en el imput
    const onInputChangep = ({target}) => {
        //Asi podemos cambiar el valor que esta en el imput, con el setInputValue.
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
       //Evento por defecto
       event.preventDefault();
    
       //vamos hacer una validacion para que no nos de errores a la hora de insertar caracteres en el input.
       //si el valor que le metemos en el input sin espacion es la longuitud menor igual a 1 entonces hace un return.
       if(inputValue.trim().length <= 1) return;
       //En la opcion de setCategoria hemos insertado todas las categoria,el inputValue escribe el valor que pone en la cajita.
       //y vamos añadiendo categoria a la lista.
      // setCategories(categories => [inputValue, ...categories]);
      
       //Vaciamos la caja del input una vez que hemos metido los datos en  la lista
       setInputValue('');
       //Vamos a llamar a otro metodo onNewCategory y le meto entre parentesis lo que esta dentro el inputValue
      onNewCategory(inputValue.trim());

      
    }

     //conocidas como properties
    //Le cambio la referencia no hace falta poner el event como teniamos anteriormente.Inoutvalue es la caja
    //Asi el submit quedaria mas simple que es lo mismo que teniamos con el event.
    return (
       <form onSubmit={onSubmit}>
        
          <input  type="text"   placeholder="Buscar Gifs" value={inputValue} onChange={onInputChangep} 
              
            />
        </form>

    )


}