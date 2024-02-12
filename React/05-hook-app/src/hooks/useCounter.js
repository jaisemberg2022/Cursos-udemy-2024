import { useState } from "react"
export const useCounter = (initialValue = 10) =>{
    const [counter, setCounter] = useState(initialValue);
    const increment = (valueIncrement = 1) => setCounter(counter + valueIncrement);
    const decrement = (valueDecrement = 1) => {
        if (counter === 0 || valueDecrement <=0) return;
        setCounter(counter - valueDecrement);
    };
    const restore = () => setCounter(initialValue);
    return{
        counter,
        increment,
        decrement,
        restore
    }
} 