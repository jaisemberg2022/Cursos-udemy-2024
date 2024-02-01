(()=>{
    class Apocalipssis{
        
        static instancia:Apocalipssis;

        private constructor(public name:string){

        }

        static llamarApocalipssis():Apocalipssis{
            if (!Apocalipssis.instancia) {
                Apocalipssis.instancia = new Apocalipssis('soy apocalipsis')
            }

            return Apocalipssis.instancia;
        }

        changeName(newName:string):void{
            this.name = newName;
        }
    }

    const apocalipssis1 =  Apocalipssis.llamarApocalipssis();
    const apocalipssis2 =  Apocalipssis.llamarApocalipssis();

    apocalipssis1.changeName('AAAA');
    
    console.log(apocalipssis1,apocalipssis2);

})()