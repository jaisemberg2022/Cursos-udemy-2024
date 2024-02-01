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

    console.log(wolverine),
    wolverine.getFullNameDesdeXmen();
})()