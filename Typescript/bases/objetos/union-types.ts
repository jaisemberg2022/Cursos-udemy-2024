(()=>{

    type Hero = {
        name:string,
        age:number,
        powers:string[],
        geName?:() => string
    }
    let myCustomVariable: string | number | Hero = 'Fernando';
    console.log(typeof myCustomVariable)

    let myCustomVariable2: string | number | Hero = 22;
    console.log(typeof myCustomVariable2)

    
    let myCustomVariable3: string | number | Hero = {
        age:32,
        name:'spiderman',
        powers:['lanzar telraña'],
    };
    console.log(typeof myCustomVariable3)

})()