(()=>{
    interface Xmen{
        name:string,
        realName:string,
        mutantPower(id:number): string;
    }

    class Mutant implements Xmen{
        // public name!: string;
        // public realName!: string;
        constructor(
            public name:string,
            public realName:string
        ){}
        public mutantPower(id: number): string {
            return this.name;    
        }
    }

    const wolverine = new Mutant('wolverine','Logan');
    console.log("------------------"+ wolverine.name    )
})()