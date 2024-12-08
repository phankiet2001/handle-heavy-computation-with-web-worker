import {ChangeEvent, useState} from 'react'
import {calculateCount} from "../utils/calculator.ts";

export const Calculation = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState<string | number>(0);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCount(calculateCount(parseInt(e.target.value)));
        setInput(e.target.value);
    }

    return (
        <>
            <button onClick={() => alert("demo alert")}>show alert</button>
            <input type="text" value={input} onChange={handleOnChange}/>
            <p>Count: {count}</p>
            <p>Count * 2: {count}</p>
        </>
    )
}

