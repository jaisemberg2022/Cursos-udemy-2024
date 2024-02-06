// const getImagenPromesa = () => new Promise( (resolve)=>resolve('http://apppedede.com'));
// getImagePromesa().then(console.log)

const getImagen = async () => {
    try {
      const apiKey = "JiDu5FQO0WKmg87XDGxXqVrdk0P60ECZ";
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const { data } = await resp.json();
      const url = data.images.original.url;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    } catch (error) {
      //manejo del error
      console.error(error)
    }
  };
  
  getImagen();
  
  