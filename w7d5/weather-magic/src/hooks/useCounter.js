import { useState } from "react";

export default function useCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0);

  const increment = (value) => setCount(count + value);

  const decrement = (value) => setCount(count - value);

  const reset = () => setCount(defaultValue || 0);

  return { count, increment, decrement, reset };
}
