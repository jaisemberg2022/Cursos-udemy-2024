const apiKey = 'JiDu5FQO0WKmg87XDGxXqVrdk0P60ECZ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp=>{return resp.json()})
.then( ({data}) => {
    const url  = data.images.original.url;
    console.log(url);
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn)