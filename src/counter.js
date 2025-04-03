import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
  }; // Prevent going below 0
  const reset = () => setCounter(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
