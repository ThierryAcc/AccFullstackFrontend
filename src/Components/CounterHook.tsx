import React, { useState } from 'react';

const CounterHook = (props:any) => {
    const [count, setCount] = useState(0);

      return <>
        <h1>Hello, {props.name}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
        <p>{count}</p>
      </>
  }

  export default CounterHook;