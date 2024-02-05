//desestructuracion 
const persona = {
    nombre:'tony',
    edad:45,
    clave:'Ironman',
    rango:'soldado',
    lating:{
        lat:14.555,
        lgn:-3445.444,
    }
}

// const {nombre,edad,clave} = persona;

const usecontext = ({clave,nombre,edad,rango = "capitan"}) =>{
    // console.log(nombre,edad,rango);
    return {
        nombreClave:clave,
        anios:edad,
        lating:{
            lat:14.555,
            lgn:-3445.444,
        }
    }
}

const {nombreClave,lating:{lat,lgn}} = usecontext(persona); 

console.log(nombreClave);
console.log(lat,lgn);
