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
  //setcount is a function

  //option 1
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  //option 2(shortcut version)
  const increaseCount = () => setCount(count + 1)
  //decrease
  const decreaseCount = () => setCount(count - 1)
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
