(()=>{

    const fullNmae = (firstName:string, ...restArgs:string[]) =>{
        return `${firstName} ${restArgs.join(' ')}`
    }
    const superman = fullNmae('clark','joseph','kent');
    console.log({superman})
})()