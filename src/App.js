import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h2>Hello ,this is counter increase</h2>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={IncreaseCount}>Increase</button>
    </div>
  )
}

export default App;
