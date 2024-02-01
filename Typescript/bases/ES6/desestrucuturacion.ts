(()=>{

    type Agengers = {
        nick: string;
        ironman: string;
        vision: string;
        activos: boolean;
        poder: number;
    }

    const avengers :Agengers = {
        nick:'Samueel L Jackson',
        ironman:'Robert Downy Jr',
        vision:'Paul Bettany',
        activos:true,
        poder:1500
    }
    //metodo n°1
    // const {poder,vision} = avengers;
    // console.log(poder.toFixed(2),vision.toUpperCase());

    //metodo n°2
    const printAvenger = ({ironman, ...restArg}:Agengers) =>{
        console.log(ironman,restArg);
    }
    printAvenger(avengers)

    //desesctructuracion de arreglos
    const avengersArr:[string,boolean,number] = ['Cap. america',true,123];

    const [capitan, ironman,hulk] = avengersArr;
    console.log({ironman,capitan,hulk})

})()