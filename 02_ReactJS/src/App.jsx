import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 id="counter-title">Counter App</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment(+)</button>
      <button onClick={() => setCount(count - 1)}>Decrement(-)</button>
    </div>
  )
}
export default App;