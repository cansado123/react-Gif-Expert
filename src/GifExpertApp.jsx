
import { useState } from "react";
import {AddCategory,GifGrid} from './Components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
   
   
   //Creamos una categoria que lo sacamos por el console.log
   //En la constante hemos puesto como parametro onNewCategory
    const onAddCategory = (NewCategory) =>{

         //Vamos a evaluar si se incluye en el newCategory y lo devuelve el valor. Validacion
      if(categories.includes(NewCategory)) return;

        //Otra forma de trabajar con setCategoria
        setCategories([NewCategory, ...categories]);

        //Lo primero que ponemos es un console.log
       // console.log('Valorant');
       //Con el setCategories es para ponerla en otra categoria no es la misma que teniamos anteriormente
      // setCategories(['Hola Buenos dias']);
       //Tarea creada por Fernando Herrera
       //Agregar otra categoria a nuestras setCategories
      // setCategories(['Valorant', ...categories]);
    }

    //Si queremos clonar el addCategory solo tenemos que repetirlo tanto como  deseemos.
    //En la parte addCategory con setCategories entre corchete lo que hacemos es la referencia a la funcion.
    //Falta en addcategory setCAtegoria.
    return(

    <>
       
        <h1>GifExpertApp</h1>
       
      
        <AddCategory
          //Hemos creado onNewCategory(Propiedad) dentro de addCategory llamando a la constante con un evento, lo que va a realizar es
          //lanzar un evento o tambien puede poner un valor con el value.Cada vez que tenemos una nueva categoria vuelve a 
          //crear ese componente con el categories.Minetras que lo anteriores se queda igual y no disparan.
          onNewCategory={(value)=>onAddCategory(value)}

        
        />
        
          {

              categories.map( (category) => (<GifGrid key={category} category={category}/>)

                )

          }
          
    </>

     )

}  


       

    


