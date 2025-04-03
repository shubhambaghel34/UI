import { useState, useCallback } from "react";

// Child Component
const Button = ({ handleClick }) => {
  console.log("Child Rendered");
  return <button onClick={handleClick}>Click Me</button>;
};

// Parent Component
function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // ✅ Memoizing the function so it doesn't get re-created unnecessarily
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []); // 🔥 No dependencies → function stays the same across renders

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;
