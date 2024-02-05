function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if ((print = true)) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquaePrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("el id del pokemon debe estar entre 1 y 800");
      } else {
        return metodoOriginal(id);
      }
    };
  };
}

function readOnly(isWritabe: boolean): Function {
  return function (target: any, propertyKey: string) {
    const descriptor:PropertyDescriptor = {
        get() {
            console.log(this)
            return 'F'
        },
        set(this,val) {
            Object.defineProperty(this,propertyKey,{
                value:val,
                 writable:!isWritabe,
                 enumerable:false
            })
        },
    } 
    return descriptor;
  };
}
// @printToConsole
@bloquaePrototipo
@printToConsoleConditional(false)
export class pokemon {

  @readOnly(true)  
  public publicApi: string = "htpps//pokeapi.co";

  constructor(public name: string = "htpps//pokeapi.co") {}

  @CheckValidPokemonId()
  savePokemonToDb(id: number) {
    console.log("pokemon guardado en base de datos");
  }
}
