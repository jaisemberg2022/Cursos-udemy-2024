(()=>{

    //a diferencia de los types las interfaces si se pueden extender
    
    interface Hero  {
        name:string,
        age:number,
        powers:string[],
        geName?:() => string
    }

    let flash: Hero = {
        name:'barry allen',
        age:24,
        powers:['super velocidad','viajar en el tiempo']
    }
    console.log(flash)

})()