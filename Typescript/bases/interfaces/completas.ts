(()=>{

    interface Client {
        name:string,
        age?:number,
        address?:Address,
        getFullAdrres (id:string): void,
    }

    interface Address{
        id:number;
        zip:string,
        city:string
    }

    const client:Client ={
        name:'juan',
        age:23,
        address:{
            city:'Toronto',
            id:123,
            zip:'ottcawa'
        },
        getFullAdrres(id:string){
            return this.address?.city;
        }
    }

})()