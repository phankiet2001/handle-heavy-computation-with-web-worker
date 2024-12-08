import {useEffect, useState} from "react";

export const useWebWorker = (value: number) => {
    const [output, setOutput] = useState<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);

    useEffect(() => {
        const worker = new Worker(new URL('./workers/calculation.ts', import.meta.url));
        setIsPending(true);
        worker.postMessage(value);


        worker.onmessage = (e) => {
            setOutput(e.data);
            setIsPending(false);
        };

        return () => {
            worker.terminate();
            setIsPending(false);
        };
    }, [value]);
    console.log({ output });
    return { output, isPending  };
}