(()=>{

    const addNumber = (a:number,b:number) =>  a + b;
    const saludar = (nombre:string) =>  `Hola ${nombre}`;
    const saveTheWord = () => 'el mundo esta salvado!';

    let myFunction:() => string;

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumber;
    // console.log(myFunction(1,2) )

    // myFunction = saludar
    // console.log(myFunction('fernando') )

    myFunction = saveTheWord
    console.log(myFunction());



})()