

export const getImagen = async() => {

    try {

        const apiKey = 'JiDu5FQO0WKmg87XDGxXqVrdk0P60ECZ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'no se encontro la imagen';
    }
    
    
    
}

 getImagen();



