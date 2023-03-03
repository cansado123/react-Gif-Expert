export const getGifs = async (category) => {

    
     //Vamos usar la url 
     const url =  'https://api.giphy.com/v1/gifs/search?api_key=SCJI11EJHog96fvxAu9M6VSw2PPsf5c6&q=${ category }&limit=10';
     //creamos la respuesta a la url
     const resp = await fetch ( url );
     const {data} = await resp.json();

     const gifs = data.map(img =>({
      
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
        
     }));

    
     return gifs;
    
    }
