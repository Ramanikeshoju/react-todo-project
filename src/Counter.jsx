import React, { useState } from "react";


function Counter() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="box">
      <h2>Counter App</h2>

      <h1>{count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;