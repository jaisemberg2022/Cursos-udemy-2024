(()=>{
    class Avenger {
        constructor(
            public name:string,
            public realName:string,
            ) {
            
            console.log('avenger llamado')
        }
        protected getFullName(){
            return `${this.name}  ${this.realName}`
        }

        get fullName():string  {
            return `${this.name} - ${this.realName }`
        };

        set fullname(name:string){
            this.name = name;
        } 
    }

    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean,
        ) {
            super(name,realName);
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }
    }

    const wolverine = new Xmen('wolverine','Logan',true);

    //parametrizar el setter de la clase avengers
    wolverine.fullname = 'fernando'
    console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen();


})()