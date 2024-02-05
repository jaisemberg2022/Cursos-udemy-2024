function printToConsole(constructor:Function){
    console.log(constructor)
}

const printToConsoleConditional = ( print:boolean = false ):Function => {
    if (print = true) {
        return printToConsole;
    }
    else{
        return ()=>{}
    }
}


const bloquaePrototipo = function(constructor:Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

// @printToConsole
@bloquaePrototipo
@printToConsoleConditional()
export class pokemon{
    constructor(
        public name:string = 'htpps//pokeapi.co'
    ){}
}