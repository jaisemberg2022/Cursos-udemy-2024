// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Automovil {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Automovil): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar = () => {
    return "acelerar ya";
  };
};

const batimovil: Automovil = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Joker {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Joker = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Joker): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface CidadanoGotica {
  (ciudadano:string[]):number,
}

const ciudadGotica:CidadanoGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Ciudadano {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements Ciudadano {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string,
    public imprimirBio: () => void
  ) {
    this.imprimirBio = () => {
      return 'app'
    };
  }
}
