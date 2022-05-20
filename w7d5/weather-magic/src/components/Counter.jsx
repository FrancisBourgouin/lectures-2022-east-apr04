import useCounter from "../hooks/useCounter";

export default function Counter(props) {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(10)}>+10</button>
      <button onClick={() => decrement(1)}>-1</button>
      <button onClick={() => decrement(10)}>-10</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
