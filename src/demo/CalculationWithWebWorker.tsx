import {ChangeEvent, useState} from 'react'
import {useWebWorker} from "../useWebWorker.ts";

export const CalculationWithWebWorker = () => {
    const [input, setInput] = useState<string | number>(0);
    const { isPending, output } = useWebWorker(+input);


    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }



    return (
        <>
            <button onClick={() => alert("demo alert")}>show alert</button>
            <input type="text" value={input} onChange={handleOnChange}/>
            <p>Count: {isPending ? 'calculating' : output}</p>
            <p>Count * 2: {isPending ? 'calculating' : +output * 2}</p>
        </>
    )
}

