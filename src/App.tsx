import { Calculation } from "./demo/Calculation";
import { CalculationWithTransition } from "./demo/CalculationWithTransition";
import { CalculationWithWebWorker } from "./demo/CalculationWithWebWorker";

function App() {
    return <>
        <div>
            <h1>Normal calculation</h1>
            <Calculation/>
        </div>
        <div>
            <h1>Calculation with React Transition</h1>
            <CalculationWithTransition/>
        </div>
        <div>
            <h1>Calculation with Web worker</h1>
            <CalculationWithWebWorker/>
        </div>
    </>
}

export default App
