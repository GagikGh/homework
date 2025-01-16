import React from "react"
import Button from "./Button"
import { useCounter } from "./CounterProvider";

function Counter() {
    const { count, setCount } = useCounter()
    const addCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <Button handleClick={addCount} name="Counter" />
            <p style={{ color: "red" }}>{count}</p>
        </div>
    )
}

export default Counter