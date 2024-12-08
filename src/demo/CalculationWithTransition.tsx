import {ChangeEvent, useState, useTransition} from 'react'
import {calculateCount} from "../utils/calculator.ts";

export const CalculationWithTransition = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState<string | number>(0);

    const [isPending, startTransition] = useTransition()

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        startTransition(
            () => {
                setCount(calculateCount(parseInt(e.target.value)));
            }
        );
    }

    return (
        <>
            <button onClick={() => alert("demo alert")}>show alert</button>
            <input type="text" value={input} onChange={handleOnChange}/>
            <p>Count: {isPending ? 'calculating' : count}</p>
            <p>Count * 2: {isPending ? 'calculating' : count}</p>
        </>
    )
}

