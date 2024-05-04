import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const increment = () => {
    setCount(count + incrementValue);
  };
  const decrement = () => {
    setCount(count - incrementValue);
  };
  const incrementValueAdd = () => {
    setIncrementValue(incrementValue + 1);
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>增加</button>
      <button onClick={decrement}>減少</button>
      <h1>每次增加多少數值 : {incrementValue}</h1>
      <button onClick={incrementValueAdd}>增加數值</button>
    </div>
  );
}
