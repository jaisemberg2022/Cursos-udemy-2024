const persona = {
    nombre:'tony',
    appelido:'stark',
    edad:45,
    direccion:{
        ciudad:'new york',
        zip:12223,
        lat:14.555,
        lgn:34.9233,

    }
}

const persona2 = {...persona};

persona.nombre ='peter'

console.log({persona,persona2})