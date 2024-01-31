(()=>{

    const fullName = (firstName:string,lastName:string):string =>{
        return `${firstName} , ${lastName}`
    }

    const name = fullName('tony','stark');
    console.log({name})

})()