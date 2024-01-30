(()=>{

    let avenger:any = 123;
    let exist;
    let power;

    avenger = 'Dr strange'
    // console.log(avenger.charAt(0));
    console.log((avenger as string ).charAt(0));

    avenger = 122.23456223;
    // console.log(avenger.toFixed(2));
    console.log(<number>avenger.toFixed(2));


    console.log(exist,power);


})()