(()=>{
    class avenger {
        name;
        power;

        constructor(name = 'no name',power = 0){
            this.name = name;
            this.power = power;
        } 
    }

    class flyAvenger extends avenger{
        fliying;
        constructor(name,power) {
            super(name,power);
            this.fliying = true;
        }
    }

    const hulk = new avenger('hulk',9001);
    const falcon = new flyAvenger('falcon',50);
    
    console.log(hulk);
    console.log(falcon);
})()