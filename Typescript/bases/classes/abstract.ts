(()=>{
    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string
        ){

        }
    }

    class Xmen extends Mutante{

        salvarMundo():string{
            return 'mundo asalvo';
        }
    };
    class Vilian extends Mutante {
        conquistar():string{
            return 'conquistado';
        }
    };

    let magneto:Xmen = new Xmen('magneto','magnus');
    let wolverin:Vilian = new Vilian('wolverine','logan');

    // console.log(wolverin.salvarMundo());
    // console.log(magneto.conquistar());

    const printName = (personaje:Mutante)=>{
        console.log(personaje.realName)
    }

    printName(wolverin);
})()