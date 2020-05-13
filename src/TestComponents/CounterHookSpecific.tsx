import React, { useState } from 'react';

interface CounterHookSpecificProps {
  name: string,
  age: number
}

const CounterHookSpecific: React.FC<CounterHookSpecificProps> = ({name, age}) => {
    const [count, setCount] = useState(0);

      return <>
        <h1>Hello, {name}, {age}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <p>{count}</p>
      </>
  }

  export default CounterHookSpecific;