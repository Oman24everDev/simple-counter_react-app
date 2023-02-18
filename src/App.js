import { useState, useEffect } from 'react';
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <button class="btn btn-danger px-3" onClick={ () => setCounter((prevCount) => prevCount -1) } > - </button>
      <h1>{counter}</h1>
      <button class="btn btn-primary px-3" onClick={ () => setCounter((addCount) => addCount +1) }> + </button>
    </div>
  );
}

export default App;
