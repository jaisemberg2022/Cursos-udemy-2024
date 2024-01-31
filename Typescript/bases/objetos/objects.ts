(()=>{

    let flash:{name:string,age?:number,powers:string[],getName?:() => string} = {
        name:'barry allen',
        age:24,
        powers:['super velocidad','viajar en el tiempo']
    }


    let superman:{name:string,age?:number,powers:string[],getName?:() => string} = {
        name:'clarck kent',
        age:60,
        powers:['super fuerza']
    }

   
    console.log(flash.getName)

})()