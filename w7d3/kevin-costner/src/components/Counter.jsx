import { useState } from "react";

export default function Counter(props) {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((pendingState) => {
      console.log(pendingState);

      return pendingState + 1;
    });
  };

  const incrementByTen = () => {
    for (let i = 0; i < 10; i++) {
      increment();
    }
  };

  return (
    <div>
      {number}
      <button onClick={increment}>Increment by 1</button>
      <button onClick={incrementByTen}>Increment by 10</button>
    </div>
  );
}
