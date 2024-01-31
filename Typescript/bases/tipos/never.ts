(()=>{

    const error = (message:string):(never|number) => {
        if (false) {
            throw Error(message);
        }
        return 1;
    }
    error('auxilio');

})()