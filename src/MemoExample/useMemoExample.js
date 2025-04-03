import { useMemo, useState } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(2);

  const doubleNumber = useMemo(() => {
    console.log("Calculating double...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>
        Double of {num}: {doubleNumber}
      </h2>
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
    </div>
  );
};

export default MemoExample;
