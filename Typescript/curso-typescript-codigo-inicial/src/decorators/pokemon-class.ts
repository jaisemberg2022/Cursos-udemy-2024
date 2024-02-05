function printToConsole(constructor:Function){
    console.log(constructor)
}

@printToConsole
export class pokemon{
    constructor(
        public name:string = 'htpps//pokeapi.co'
    ){}
}