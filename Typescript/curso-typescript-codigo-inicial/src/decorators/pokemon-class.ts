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

// @printToConsole
@printToConsoleConditional(  )
export class pokemon{
    constructor(
        public name:string = 'htpps//pokeapi.co'
    ){}
}