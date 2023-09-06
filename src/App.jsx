import { useState } from 'react'
import * as Icon from 'react-feather';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let plusOne = () => {
    setCount(() => count + 1);
  };
  let plusTen = () => {
    setCount(() => count + 10);
  };
  let reset = () => {
    setCount((count) => (count = 0));
  };
  let random = () => {
    setCount(() => {
      let randomNumber = Math.floor(Math.random() * 100 + 1);
      return randomNumber;
    });
  };
  let minusTen = () => {
    setCount(() => count - 10);
  };
  let minusOne = () => {
    setCount(() => count - 1);
  };

  return (
    <>
    <section>
       <p>Current Value</p>
      <h1>{count}</h1>
      <div>
      <button onClick={plusOne}><Icon.ArrowUp/></button>
      <button onClick={plusTen}><Icon.ArrowUp/> <Icon.ArrowUp/></button>
      <button onClick={reset}><Icon.RotateCcw/></button>
      <button className = "random" onClick={random}>#</button>
      <button onClick= {minusTen}><Icon.ArrowDown/> <Icon.ArrowDown/></button>
      <button onClick = {minusOne}><Icon.ArrowDown/></button>
      </div>
    </section>  
    </>
  )
}

export default App
